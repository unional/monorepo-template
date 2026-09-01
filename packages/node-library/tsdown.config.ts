import { defineConfig } from 'tsdown'

export default defineConfig({
	entry: ['./src/index.ts'],
	// ESM only, deliberately. The package is `"type": "module"` and its `exports` map
	// names one entry (`./dist/index.mjs`), so a CJS build was emitted, packed and
	// shipped while being unreachable through `exports` — dead weight in the tarball.
	//
	// Consumers on CommonJS are not cut off: the package requires node >= 22, where
	// `require()` of an ES module is supported, and the `.` condition is `default`
	// rather than `import` so `require('node-library')` resolves. Adding `'cjs'` back
	// means adding a `require` condition to `exports` as well — and taking on the
	// dual-package hazard that comes with two copies of the same module graph.
	format: ['esm'],
	tsconfig: './tsconfig.json',
	clean: true,
	sourcemap: true,
	unbundle: true,
})
