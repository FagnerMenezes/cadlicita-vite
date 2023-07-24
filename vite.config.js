import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@page": path.resolve(__dirname, "src/page/"),
      "@services": path.resolve(__dirname, "src/services/"),
    },
  },
});
