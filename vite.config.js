// vite.config.js
export default {
    resolve: {
      alias: {
        // Add any necessary aliases here
      }
    },
    build: {
      rollupOptions: {
        external: [
          // Add any necessary external dependencies here
        ]
      }
    },
    server: {
      fs: {
        // Allow serving files from the following directories
        allow: [
          // Include the root and node_modules directory
          '/',
          '/node_modules'
        ]
      }
    },
    optimizeDeps: {
      exclude: [
        // Exclude dependencies that should not be bundled
      ],
      include: [
        // Include dependencies that should be bundled
      ]
    },
    plugins: [
      // Include any necessary plugins here
    ]
  }
  