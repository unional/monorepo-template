import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		coverage: {
			include: ['src/**/*.{ts,tsx}'],
		},
		projects: ['vitest.config.node.ts', 'vitest.config.storybook.ts'],
	},
})
