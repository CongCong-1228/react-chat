import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      include: ["src/**/*.js", "src/**/*.jsx", "src/*.js", "src/*.jsx"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@/*": resolve(__dirname, "src/*"),
      public: resolve(__dirname, "public"),
      "@components": resolve(__dirname, "src/components"),
      "@styles": resolve(__dirname, "src/styles"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${resolve(__dirname, "src/assets/styles/variables.less")}";`,
        javascriptEnabled: true,
      },
    },
  },
});
