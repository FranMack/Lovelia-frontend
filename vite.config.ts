import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa';


export default defineConfig({
  plugins: [react(),  VitePWA({
    registerType: 'autoUpdate',
    workbox: {
      clientsClaim: true,
      skipWaiting: true
    },
    // Enable in development for testing
    //devOptions: {
    //  enabled: true,
    //},
    manifest: {
      name: 'Lovelia',
      short_name: 'Lovelia',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#6200ee',
      description: 'Nuestro propósito es colaborar con tu propósito.',
      icons: [
        {
          src: '/isologo-lovelia-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/isologo-lovelia-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/apple-touch-icon.png', // iOS-specific icon
          sizes: '180x180',
          type: 'image/png',
          purpose: 'any maskable', // Ensure compatibility for adaptive icons
        },
      ],
    },
  })],
  build: {
    outDir: "dist",
  },
  server: {
    port: 5173,
  },
  publicDir: 'public',
});
