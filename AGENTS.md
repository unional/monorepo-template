# AGENTS.md

This file provides guidance to AI coding assistants when working with code in this repository.

This repository is a **GitHub template**. Every repo scaffolded from it starts with whatever is
here, so a defect left in place propagates. Treat changes accordingly.

- **scripts:** repository scripts are in `package.json`, such as `test`, `check` and `verify`
- **toolchain:** node and pnpm are pinned in `mise.toml`; run `mise install` to get them

## Commit Discipline

- **Unit of work:** one complete, reviewed, coherent, independently revertable change
- **Message format:** Conventional Commits, enforced on every commit by commitlint. Case and length
  rules are relaxed; type and structure are not
- **Staging:** stage only the files belonging to the unit of work. A pre-commit hook formats staged
  files with biome and re-stages them, so expect the commit to include those rewrites
- **Releases:** user-facing changes to a published package need a changeset (`pnpm cs`). The
  template's own `node-library` is private and publishes nothing, so it needs none

## Architecture

pnpm + turbo monorepo.

- `packages/*` — the publishable libraries. `packages/node-library` is the worked example: tsdown
  build, vitest node tests, a storybook story exercised in a real browser through vitest browser mode
- `apps/*` — non-published apps. `apps/page` aggregates the packages' storybooks into the GitHub
  Pages site

When you use this template, rename or delete `packages/node-library` and `apps/page` rather than
building around them.

## Release pipeline

Releases are **secretless**. See the "Release pipeline" section of `readme.md` — publishing goes
through npm trusted publishing (OIDC) and the version pull request through the built-in
`GITHUB_TOKEN`. Never reintroduce an `NPM_TOKEN` or a `CI_GITHUB_TOKEN`, and never add
`secrets: inherit` to a workflow call.

CI delegates to reusable workflows shared across the org from `cyberuni/.github`.

## Dependencies

`pnpm-workspace.yaml` sets `minimumReleaseAge` — a newly published version is not installable until
it has been on the registry for 10 days. This is a supply-chain control, not an inconvenience. Do
**not** pass `--config.minimumReleaseAge=0` and do not add `minimumReleaseAgeExclude` entries to get
past it. On `ERR_PNPM_MINIMUM_RELEASE_AGE_VIOLATION`, run `pnpm clean --lockfile` then a plain
`pnpm install`.

`allowBuilds` in the same file is a **map**, not a list, and it is the pnpm 11 key — do not "fix" it
to `onlyBuiltDependencies`, which is silently ignored.

## Validation After Changes

Match validation cost to the change:

- For source, build/runtime configuration, or dependency changes, run:

```bash
pnpm verify   # biome ci + knip + build + typecheck + coverage + size
```

- For changes limited to repository guidance, such as `AGENTS.md` or `readme.md`, run
  `git diff --check` instead.

## Language

Write all content in en-US (American English spelling).
