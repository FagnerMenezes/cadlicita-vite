import react from "@vitejs/plugin-react";
import * as path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
