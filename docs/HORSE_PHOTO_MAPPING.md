# Supplied Horse Photo Mapping

All 37 supplied JPEG photographs were visually inspected, auto-oriented, stripped of unnecessary metadata, and converted without upscaling. Each normalized stem has 480, 768, 1200, and 1600 pixel-wide WebP and AVIF variants in `public/images/horses`.

After visual verification, the oversized originals were moved out of `public` to the local, git-ignored `source-images/newHorses` archive. They remain recoverable in the working copy but cannot be copied into the production site.

| Original filename | Normalized web stem |
| --- | --- |
| `Candy&Drama.JPG` | `candy-and-drama-01` |
| `Candy.JPG` | `candy-01` |
| `Drama+Sandy.JPG` | `drama-and-sandy-01` |
| `Drama+Sandy2.JPG` | `drama-and-sandy-02` |
| `Drama.JPG` | `drama-01` |
| `Drama2.JPG` | `drama-02` |
| `Drama3.JPG` | `drama-03` |
| `Drama4.JPG` | `drama-04` |
| `Drama5.JPG` | `drama-05` |
| `Drama6.JPG` | `drama-06` |
| `Dutchess.JPG` | `dutchess-01` |
| `DutchessandMagicday1.JPG` | `dutchess-and-magic-01` |
| `DutchessandMagicday1part2.JPG` | `dutchess-and-magic-02` |
| `DutchessandMagicday1part3.JPG` | `dutchess-and-magic-03` |
| `Fancy.JPG` | `fancy-01` |
| `Fancy2.JPG` | `fancy-02` |
| `Jellybean.JPG` | `jellybean-01` |
| `Leo.JPG` | `leonardo-01` |
| `leonardo.JPG` | `leonardo-02` |
| `leonardo2.JPG` | `leonardo-03` |
| `leonardo3.JPG` | `leonardo-04` |
| `misty.JPG` | `misty-01` |
| `Munny.JPG` | `munny-01` |
| `Munny (2).JPG` | `munny-02` |
| `Munny3.JPG` | `munny-03` |
| `pony.JPG` | `unidentified-pony-01` |
| `Sandy.JPG` | `sandy-01` |
| `Sandy2.JPG` | `sandy-02` |
| `Sandy3.JPG` | `sandy-03` |
| `Sandy4.JPG` | `sandy-04` |
| `shiner.JPG` | `shiner-01` |
| `Star&Dutchess.JPG` | `star-and-dutchess-01` |
| `Star&Dutchess2.JPG` | `star-and-dutchess-02` |
| `Star&Dutchess3.JPG` | `star-and-dutchess-03` |
| `Star&Dutchess+Magic.JPG` | `star-dutchess-and-magic-01` |
| `Star.JPG` | `star-01` |
| `Star2.JPG` | `star-02` |

The ambiguous source `pony.JPG` was deliberately normalized as `unidentified-pony-01`; it is not identified as Fancy and is not used in a named horse profile.

The original `shiner.JPG` filename and normalized `shiner-01` asset stem are retained in this technical mapping, while the horse’s visible name is **Shinner** and the stable profile URL remains `/horses/shiner`.

## Size results

- Source JPEG total: 238,192,999 bytes (227.16 MiB)
- Responsive WebP and AVIF total: 20,878,717 bytes (19.91 MiB)
- Aggregate reduction: 91.2%
- No generated image exceeds its source dimensions.
