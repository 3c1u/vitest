import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: [
      './setup.ts',
    ],
    server: {
      deps: {
        external: [
          /packages\/web-worker/,
        ],
      },
    },
    onConsoleLog(log) {
      if (log.includes('Failed to load'))
        return false
    },
  },
})
