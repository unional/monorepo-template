# node-library

This is a template for a nodejs library.

Feel free to delete it if you don't need it.

If you want to use it,
update the `package.json` and this `readme.md` file:

- [ ] Update the `name` field in `package.json`
- [ ] Remove the `private` field in `package.json`
- [ ] Update the `description` field in `package.json`
- [ ] Update the `homepage`, `bugs`, and `repository` field in `package.json`
- [ ] Update the `keywords` field in `package.json`
- [ ] Update the `author` field in `package.json`
- [ ] Update the top-level `tsconfig.json` file
- [ ] Update the top-level `readme.md` file
- [ ] Add the npm version and downloads badges back once the package is published
- [ ] Register a trusted publisher for the package at `npmjs.com/package/<name>/access`,
      naming this repo and `release.yml`

## About this template

It is an ESM library published from `dist`, with the sources shipped alongside.

It uses the following:

- [TypeScript](https://www.typescriptlang.org/)
  - [@repobuddy/typescript](https://github.com/repobuddy/repobuddy/blob/main/packages/typescript/README.md)
- [tsdown](https://tsdown.dev/) for the build
- [Vitest](https://vitest.dev/) for tests, in both node and browser modes
  - [@repobuddy/vitest](https://github.com/repobuddy/repobuddy/blob/main/packages/vitest/README.md)
- [Storybook](https://storybook.js.org/) for stories, run as browser tests
- [Biome](https://biomejs.dev/) for lint and format
  - [@repobuddy/biome](https://github.com/repobuddy/repobuddy/blob/main/packages/biome/README.md)
- [knip](https://knip.dev/) for unused files, exports and dependencies
- [size-limit](https://github.com/ai/size-limit#readme)

## Install

```sh
# npm
npm install node-library

# yarn
yarn add node-library

# pnpm
pnpm add node-library
```
