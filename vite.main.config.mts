import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // ADD THIS IMPORT
import path from "path";

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: ["better-sqlite3"],
      output: {
        sourcemap: true,
      },
    },
  },
  plugins: [
    react(), // ADD THIS PLUGIN
    {
      name: "restart",
      closeBundle() {
        process.stdin.emit("data", "rs");
      },
    },
  ],
});
