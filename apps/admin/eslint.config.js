import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import sharedConfig from '@repo/eslint-config'

export default defineConfig([
  ...sharedConfig,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  globalIgnores(['dist']),
])
