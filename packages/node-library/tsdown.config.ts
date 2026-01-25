import { defineConfig } from 'tsdown'

export default defineConfig({
	entry: ['./src/index.ts'],
	format: ['esm', 'cjs'],
	tsconfig: './tsconfig.json',
	bundle: false,
	clean: true,
	// minify: true,
	sourcemap: true,
})
