import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// import { URL, fileURLToPath } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/vue-website-template/",
  build: {
    target: "esnext",
  },
  plugins: [vue({
    script: {
      defineModel: true,
    },
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
