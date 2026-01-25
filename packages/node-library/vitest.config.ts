import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		coverage: {
			include: ['src/**/*.{ts,tsx}'],
		},
		projects: ['vitest.node.config.ts', 'vitest.storybook.config.ts'],
	},
})
