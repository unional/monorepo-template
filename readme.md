# monorepo-template

[![GitHub Release][github-release]][github-action-url]
[![Visual Studio Code][vscode-image]][vscode-url]

A template for a pnpm + turbo monorepo that publishes to npm **without repository secrets**.

## Using it

Create a repository from this template, then:

```sh
mise install    # node and pnpm, pinned in mise.toml
pnpm install
pnpm verify
```

Rename or delete the two worked examples — [`packages/node-library`](packages/node-library) and
[`apps/page`](apps/page) — rather than building around them, and update the metadata in each
`package.json`.

`packages/node-library` is deliberately `private: true` at version `0.0.0`: the template itself must
never publish. Drop `private` and set a real version when you make it your own package.

## Layout

| Path             | What it is                                                                  |
| ---------------- | --------------------------------------------------------------------------- |
| `packages/*`     | libraries; the ones that publish                                              |
| `apps/*`         | everything that does not publish                                              |
| `mise.toml`      | the pinned local toolchain (node, pnpm)                                       |
| `AGENTS.md`      | guidance for AI coding assistants; `CLAUDE.md` is a symlink to it             |

## Scripts

| Script            | What it does                                                          |
| ----------------- | --------------------------------------------------------------------- |
| `pnpm check`      | biome format and lint, writing fixes                                   |
| `pnpm check:ci`   | biome in check-only mode, the way CI runs it                           |
| `pnpm test`       | node tests, plus every story run in a real browser                     |
| `pnpm typecheck`  | `tsc --noEmit` across the workspace                                    |
| `pnpm verify`     | everything CI runs: `check:ci`, knip, build, typecheck, coverage, size |
| `pnpm cs`         | write a changeset                                                      |

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

Never add `secrets: inherit` to a workflow call here. It is the one line that would put the
long-lived tokens back.

## Dependency policy

`pnpm-workspace.yaml` sets `minimumReleaseAge` to 10 days, so a version published today cannot be
installed today. It is a supply-chain control against a compromised release being pulled into a
build within hours of publication. Wait the soak out rather than adding a
`minimumReleaseAgeExclude` entry — see [`contributing.md`](contributing.md).

## [node-library](packages/node-library)

> The worked example: an ESM node library built with tsdown, tested with vitest, and documented with
> a storybook story that runs as a browser test.

[github-action-url]: https://github.com/cyberuni/monorepo-template/actions/workflows/release.yml
[github-release]: https://github.com/cyberuni/monorepo-template/actions/workflows/release.yml/badge.svg
[vscode-image]: https://img.shields.io/badge/vscode-ready-green.svg
[vscode-url]: https://code.visualstudio.com/
