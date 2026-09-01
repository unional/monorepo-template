import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactElement } from 'react'
import { expect } from 'storybook/test'
import { greet } from './greeting.ts'

// A worked example, and the thing that makes the browser leg of the test run mean
// something. `vitest.storybook.config.ts` boots a real chromium through vitest browser
// mode and runs every story in this package as a test. Before this file existed the
// glob `src/**/*.stories.*` matched nothing: the browser started, ran zero tests, and
// reported green while coverage read 0%.
//
// Delete this and `greeting.ts` when you use the template — but replace them with your
// own stories rather than leaving the storybook project matching nothing again.

// The explicit return type is not decoration: without it `tsc` emits TS2883 while
// building the declarations, because the inferred JSX element type cannot be named
// portably from this package.
function Greeting({ name }: { name: string }): ReactElement {
	return <p data-testid="greeting">{greet(name)}</p>
}

const meta = {
	title: 'Greeting',
	component: Greeting,
} satisfies Meta<typeof Greeting>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: { name: 'world' },
	// A `play` function turns the story into an assertion. Without one the story is
	// only a smoke test: it proves the component renders, nothing more.
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('greeting')).toHaveTextContent('Hello, world!')
	},
}

export const Named: Story = {
	args: { name: 'monorepo-template' },
	play: async ({ canvas }) => {
		await expect(canvas.getByTestId('greeting')).toHaveTextContent('Hello, monorepo-template!')
	},
}
