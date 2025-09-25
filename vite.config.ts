// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { resolve } from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
base: "/plosone/", // ← 部署相對路徑，避免靜態資源找不到
  server: { host: "::", port: 8080 },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    rollupOptions: {
      // 明確指定 index.html 為入口（大多數專案不需要，但能防呆）
      input: resolve(__dirname, "index.html"),
    },
  },
}));
