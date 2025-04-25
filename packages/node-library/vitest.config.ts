import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		include: [
			'{src,source,code,tests}/**/*.{spec,test,unit,accept,integrate,system,perf,stress,study}.{js,cjs,mjs,ts,cts,mts}',
			'{src,source,code,tests}/**/*.{spec,test,unit,accept,integrate,system,perf,stress,study}.node*.{js,cjs,mjs,ts,cts,mts}',
		],
	},
})
