import { defineConfig, globalIgnores } from 'eslint/config'
import sharedConfig from '@repo/eslint-config'
import nextVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
  ...sharedConfig,
  ...nextVitals,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])
