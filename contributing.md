# Contributing guide

## Prerequisites

This repository uses [`turborepo`](https://turborepo.org/) with [pnpm](https://pnpm.io/).

Node and pnpm are pinned in [`mise.toml`](mise.toml). The least surprising way to get exactly the
versions this repository is developed against is [mise](https://mise.jdx.dev/):

```sh
mise install
```

If you would rather not use mise, [`corepack`](https://nodejs.org/api/corepack.html) picks up the
pnpm version from the `packageManager` field in `package.json`:

```sh
corepack enable
```

Keep `mise.toml` and `packageManager` in step — they name the same pnpm version on purpose.

## Setup

```sh
pnpm install
```

## Working

```sh
pnpm check     # format and lint with biome, writing fixes
pnpm test      # node tests plus the stories, run in a real browser
pnpm verify    # everything CI runs: biome ci, knip, build, typecheck, coverage, size
```

`pnpm verify` is what the `code / all-checks` context on a pull request runs. Run it before pushing.

## Dependencies

`pnpm-workspace.yaml` sets `minimumReleaseAge`: a newly published version is not installable until it
has been on the registry for 10 days. If an install fails with
`ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION`, run `pnpm clean --lockfile` and then a plain
`pnpm install` — do not disable the soak.

## Releasing

Releases run from `main` through changesets and publish with no repository secrets. See the
[release pipeline](readme.md#release-pipeline) section of the readme.

Add a changeset for any change to a published package:

```sh
pnpm cs
```
