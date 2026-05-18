import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      // JPEG optimization
      jpg: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      // PNG optimization
      png: {
        quality: 80,
      },
      // WebP generation (if source images are already WebP)
      webp: {
        quality: 80,
      },
    }),
  ],
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Increase chunk size warning limit for image-heavy sites
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'animation': ['framer-motion'],
        },
      },
    },
  },
})
