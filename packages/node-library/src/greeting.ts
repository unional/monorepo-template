/**
 * The template's one real export, so that `src/index.ts` is not empty and the build,
 * the node test and the browser story all have something to exercise.
 */
export function greet(name: string) {
	return `Hello, ${name}!`
}
