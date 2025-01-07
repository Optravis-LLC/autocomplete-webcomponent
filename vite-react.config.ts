import dns from "dns";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  build: {
    outDir: "../build",
  },
  server: {
    host: "localhost",
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  preview: {
    host: "localhost",
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
});
