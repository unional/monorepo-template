module.exports = {
	env: {
		node: true
	},
	parserOptions: {
		sourceType: 'module'
	},
	extends: ['plugin:harmony/latest', 'plugin:yml/standard'],
	rules: {
		'yml/quotes': ['error', { prefer: 'single' }]
	},
	root: true
}
