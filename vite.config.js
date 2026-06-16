import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        { src: 'careers.html', dest: '.' },
        { src: 'contacts.html', dest: '.' },
        { src: 'ncssstories.html', dest: '.' },
        { src: 'css/style.min.css', dest: '.' },
        { src: 'css/tvcss-theme.css', dest: '.' },
        { src: 'js/*', dest: '.' },
        { src: 'img/**', dest: '.' },
        { src: 'favicons/**', dest: '.' },
      ],
    }),
  ],
})
