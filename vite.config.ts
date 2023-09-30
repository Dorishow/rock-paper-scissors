import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000 },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/presentation/styles/global.less";`,
      },
    },
  },
  resolve: {
    alias: [
      { find: "@domain", replacement: path.resolve(__dirname, "src/domain") },
      { find: "@data", replacement: path.resolve(__dirname, "src/data") },
      { find: "@infra", replacement: path.resolve(__dirname, "src/infra") },
      { find: "@main", replacement: path.resolve(__dirname, "src/main") },
      {
        find: "@presentation",
        replacement: path.resolve(__dirname, "src/presentation"),
      },
      {
        find: "@components",
        replacement: path.resolve(
          __dirname,
          "src/presentation/components/index.ts"
        ),
      },
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ],
  },
});
