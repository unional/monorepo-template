import { expect, it } from 'vitest'
import { greet } from '#node-library'

it('greets by name', () => {
	expect(greet('world')).toBe('Hello, world!')
})
