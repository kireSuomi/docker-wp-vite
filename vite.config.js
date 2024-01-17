import liveReload from "vite-plugin-live-reload";

// vite.config.js
export default {
  plugins: [liveReload("/wp-content/themes/**/*.php")],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    rollupOptions: {
      // overwrite default .html entry
      input: {
        app: "./assets/js/app.js",
      },
    },
    minify: false, // Optional: Disable minification for better readability during development
  },
  server: {
    host: "0.0.0.0",
    cors: true,
    strictPort: true,
    port: 3000,
  },
};
