import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({

  base: '/Pwa/',

  plugins: [

    react(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'PokePWA React',
        short_name: 'PokePWA',
        description: 'PWA de Pokémon con React',
        theme_color: '#ff0000',
        background_color: '#ffffff',
        display: 'standalone',

        icons: [
          {
            src: 'web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }

    })

  ]

})
