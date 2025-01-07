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
    outDir: "../static",
    lib: {
      entry: "webcomponent.tsx",
      name: "autocomplete",
      fileName: "autocomplete",
    },
    cssCodeSplit: true,
  },
  server: {
    host: "localhost",
    port: 3000,
    open: true,
  },
  preview: {
    host: "localhost",
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
