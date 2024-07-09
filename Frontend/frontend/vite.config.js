import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginRequire from 'vite-plugin-require'; // Import the plugin

export default defineConfig({
  plugins: [
    react(),
    vitePluginRequire.default(),
  ],
});
