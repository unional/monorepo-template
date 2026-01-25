import { defineConfig } from 'tsdown'

export default defineConfig({
	entry: ['./src/index.ts'],
	format: ['esm', 'cjs'],
	tsconfig: './tsconfig.json',
	clean: true,
	sourcemap: true,
	unbundle: true,
})
