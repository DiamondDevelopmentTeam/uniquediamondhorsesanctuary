import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHubPages = Boolean(process.env.GITHUB_ACTIONS)

const base = isGitHubPages
  ? '/uniquediamondhorsesanctuary/'
  : '/'

function fixPublicImagePaths(): Plugin {
  return {
    name: 'fix-public-image-paths',
    enforce: 'pre',

    transform(code, id) {
      const cleanId = id.split('?')[0]

      if (
        !/\.(ts|tsx|css)$/.test(cleanId) ||
        !code.includes('/images/')
      ) {
        return null
      }

      return {
        code: code.replace(/\/images\//g, `${base}images/`),
        map: null,
      }
    },

    transformIndexHtml(html) {
      return html.replace(/\/images\//g, `${base}images/`)
    },
  }
}

export default defineConfig({
  base,

  plugins: [
    fixPublicImagePaths(),
    react(),
  ],

  build: {
    sourcemap: true,
  },
})