import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// avoid Node built-in 'path' types requirement by using Vite root-relative alias

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 3000,
    strictPort: false,
    host: '127.0.0.1',
  },
});