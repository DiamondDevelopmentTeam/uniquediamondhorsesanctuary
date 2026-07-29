import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const sourceDirectory = path.resolve('source-images/newHorses')
const outputDirectory = path.resolve('public/images/horses')
const widths = [480, 768, 1200, 1600]

const photoMap = [
  ['Candy&Drama.JPG', 'candy-and-drama-01'],
  ['Candy.JPG', 'candy-01'],
  ['Drama+Sandy.JPG', 'drama-and-sandy-01'],
  ['Drama+Sandy2.JPG', 'drama-and-sandy-02'],
  ['Drama.JPG', 'drama-01'],
  ['Drama2.JPG', 'drama-02'],
  ['Drama3.JPG', 'drama-03'],
  ['Drama4.JPG', 'drama-04'],
  ['Drama5.JPG', 'drama-05'],
  ['Drama6.JPG', 'drama-06'],
  ['Dutchess.JPG', 'dutchess-01'],
  ['DutchessandMagicday1.JPG', 'dutchess-and-magic-01'],
  ['DutchessandMagicday1part2.JPG', 'dutchess-and-magic-02'],
  ['DutchessandMagicday1part3.JPG', 'dutchess-and-magic-03'],
  ['Fancy.JPG', 'fancy-01'],
  ['Fancy2.JPG', 'fancy-02'],
  ['Jellybean.JPG', 'jellybean-01'],
  ['Leo.JPG', 'leonardo-01'],
  ['leonardo.JPG', 'leonardo-02'],
  ['leonardo2.JPG', 'leonardo-03'],
  ['leonardo3.JPG', 'leonardo-04'],
  ['misty.JPG', 'misty-01'],
  ['Munny.JPG', 'munny-01'],
  ['Munny (2).JPG', 'munny-02'],
  ['Munny3.JPG', 'munny-03'],
  ['pony.JPG', 'unidentified-pony-01'],
  ['Sandy.JPG', 'sandy-01'],
  ['Sandy2.JPG', 'sandy-02'],
  ['Sandy3.JPG', 'sandy-03'],
  ['Sandy4.JPG', 'sandy-04'],
  ['shiner.JPG', 'shiner-01'],
  ['Star&Dutchess.JPG', 'star-and-dutchess-01'],
  ['Star&Dutchess2.JPG', 'star-and-dutchess-02'],
  ['Star&Dutchess3.JPG', 'star-and-dutchess-03'],
  ['Star&Dutchess+Magic.JPG', 'star-dutchess-and-magic-01'],
  ['Star.JPG', 'star-01'],
  ['Star2.JPG', 'star-02'],
]

await fs.mkdir(outputDirectory, { recursive: true })

const sourceFiles = (await fs.readdir(sourceDirectory))
  .filter((file) => /\.(jpe?g|png)$/i.test(file))
  .sort()
const mappedFiles = photoMap.map(([source]) => source).sort()

if (JSON.stringify(sourceFiles) !== JSON.stringify(mappedFiles)) {
  const missing = sourceFiles.filter((file) => !mappedFiles.includes(file))
  const stale = mappedFiles.filter((file) => !sourceFiles.includes(file))
  throw new Error(`Photo mapping mismatch. Unmapped: ${missing.join(', ') || 'none'}. Missing: ${stale.join(', ') || 'none'}.`)
}

let sourceBytes = 0
let outputBytes = 0
const results = []

for (const [sourceName, stem] of photoMap) {
  const sourcePath = path.join(sourceDirectory, sourceName)
  const sourceStats = await fs.stat(sourcePath)
  const metadata = await sharp(sourcePath).rotate().metadata()
  sourceBytes += sourceStats.size

  const generated = []
  for (const width of widths.filter((candidate) => candidate <= metadata.width)) {
    const webpName = `${stem}-${width}.webp`
    const avifName = `${stem}-${width}.avif`
    const pipeline = sharp(sourcePath)
      .rotate()
      .resize({ width, withoutEnlargement: true })

    await pipeline
      .clone()
      .webp({ quality: 82, effort: 5, smartSubsample: true })
      .toFile(path.join(outputDirectory, webpName))

    await pipeline
      .clone()
      .avif({ quality: 56, effort: 4, chromaSubsampling: '4:4:4' })
      .toFile(path.join(outputDirectory, avifName))

    const webpBytes = (await fs.stat(path.join(outputDirectory, webpName))).size
    const avifBytes = (await fs.stat(path.join(outputDirectory, avifName))).size
    outputBytes += webpBytes + avifBytes
    generated.push({ width, webpName, webpBytes, avifName, avifBytes })
  }

  results.push({
    sourceName,
    stem,
    sourceBytes: sourceStats.size,
    sourceWidth: metadata.width,
    sourceHeight: metadata.height,
    generated,
  })

  console.log(`Optimized ${sourceName} -> ${stem}`)
}

await fs.writeFile(
  path.resolve('image-optimization-report.json'),
  JSON.stringify({
    createdAt: new Date().toISOString(),
    sourceBytes,
    outputBytes,
    reductionPercent: Number((100 - (outputBytes / sourceBytes) * 100).toFixed(1)),
    results,
  }, null, 2),
)

console.log(`Source total: ${(sourceBytes / 1024 / 1024).toFixed(2)} MB`)
console.log(`Responsive AVIF + WebP total: ${(outputBytes / 1024 / 1024).toFixed(2)} MB`)
