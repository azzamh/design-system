import type { UserConfig } from 'vite'
import type { UserConfig as VitestConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

const config: UserConfig & Pick<VitestConfig, 'test'> = {
  plugins: [Vue()],
  build  : { sourcemap: true },
  define : { 'import.meta.vitest': false },
  test   : {
    globals    : true,
    environment: 'happy-dom',
    coverage   : {
      reporter: [
        'text',
        'json',
        'html',
        'lcov',
      ],
      exclude: [
        '**/*.spec.ts',
        '**/__mocks__/*',
        'packages/persona-icon/**',
        'vitest.setup.ts',
      ],
      100: true,
    },
    setupFiles: ['./vitest.setup.ts'],
  },
}

export default config
