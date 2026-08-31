# monorepo-template

[![GitHub Release][github-release]][github-action-url]
[![Visual Studio Code][vscode-image]][vscode-url]

This is a template for monorepo.

Clone or create from this template,
and remove the packages you don't need,
and then run `pnpm install` to update the lock file.

## Release pipeline

This template uses the shared GitHub workflows from [cyberuni/.github](https://github.com/cyberuni/.github).
They are flexible workflows that can be used for any repo.

They need **no repository secrets**:

- the release publishes through [npm trusted publishing](https://docs.npmjs.com/trusted-publishers)
  (OIDC), which also emits SLSA provenance, so there is no `NPM_TOKEN`
- versioning, tags and the "version packages" pull request go through the built-in
  `GITHUB_TOKEN` with the `permissions:` block declared in `.github/workflows/release.yml`,
  so there is no `CI_GITHUB_TOKEN` personal access token

Each package you publish from a repo made with this template needs a trusted publisher
registered at `npmjs.com/package/<name>/access`, naming the repo and the **caller**
workflow's filename (`release.yml`).

## [node-library](packages/node-library)

> This is an awesome dual-package node library.

[github-action-url]: https://github.com/cyberuni/monorepo-template/actions/workflows/release.yml
[github-release]: https://github.com/cyberuni/monorepo-template/actions/workflows/release.yml/badge.svg
[vscode-image]: https://img.shields.io/badge/vscode-ready-green.svg
[vscode-url]: https://code.visualstudio.com/
