# monorepo-template

[![GitHub Release][github-release]][github-action-url]
[![Visual Studio Code][vscode-image]][vscode-url]

This is a template for monorepo.

Clone or create from this template,
and remove the packages you don't need,
and then run `pnpm install` to update the lock file.

This template uses GitHub workflows from [unional/.github](https://github.com/unional/.github).
They are flexible workflows that can be used for any repo.

They assume you have two GitHub Actions secrets:

- CI_GITHUB_TOKEN: a token with commit access to the repo
- NPM_TOKEN: a token with publish access to npm

They are used during release so that CHANGELOGs and git tags can be updated.

## [node-library](packages/node-library)

[![NPM version][npm-node-lib-image]][npm-node-lib-url]
[![NPM downloads][downloads-node-lib-image]][npm-node-lib-url]

> This is an awesome dual-package node library.

[downloads-node-lib-image]: https://img.shields.io/npm/dm/unional/node-library.svg?style=flat
[github-action-url]: https://github.com/unional/monorepo-template/actions/workflows/release.yml
[github-release]: https://github.com/unional/monorepo-template/actions/workflows/release.yml/badge.svg
[npm-node-lib-image]: https://img.shields.io/npm/v/unional/node-library.svg?style=flat
[npm-node-lib-url]: https://npmjs.org/package/unional/node-library
[vscode-image]: https://img.shields.io/badge/vscode-ready-green.svg
[vscode-url]: https://code.visualstudio.com/
