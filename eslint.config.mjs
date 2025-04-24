import { includeIgnoreFile } from '@eslint/compat'
import formatjs from 'eslint-plugin-formatjs'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tsEslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

/** @type {import('eslint').Linter.Config[]} */
export default [
	includeIgnoreFile(gitignorePath),
	{ languageOptions: { globals: globals.browser } },
	tsEslint.configs.base,
	tsEslint.configs.eslintRecommended,
	{
		plugins: {
			formatjs,
		},
		rules: {
			'formatjs/enforce-description': ['error', 'literal'],
			'formatjs/enforce-default-message': ['error', 'literal'],
			'formatjs/enforce-id': [
				'error',
				{
					idInterpolationPattern: '[sha512:contenthash:base64:6]',
				},
			],
			'formatjs/no-multiple-whitespaces': 'error',
			'formatjs/no-multiple-plurals': 'error',
		},
	},
]
