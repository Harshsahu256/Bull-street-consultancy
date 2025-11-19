<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})


=======
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // ✅ प्लगइन को इम्पोर्ट करें

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr() // ✅ प्लगइन को यहाँ जोड़ें
  ],
})
>>>>>>> 26bb72dccd297270a65cfd99b7708cb95f5a8ed4
