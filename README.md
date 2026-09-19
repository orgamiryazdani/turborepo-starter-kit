# Turborepo Starter Kit

A modern frontend monorepo starter built with [Turborepo](https://turborepo.dev), featuring a Next.js application and a React + Vite application with shared TypeScript, ESLint, Prettier, and Tailwind CSS configurations.

It also includes a ready-to-use Git workflow with Husky, lint-staged, and Commitlint, so you can start building without spending time setting up the initial development tooling.

## Why This Starter?

Starting a new frontend project often means repeating the same configuration for TypeScript, ESLint, Prettier, Tailwind CSS, Git hooks, and other development tools.

This starter provides a structured Turborepo monorepo with the essential tooling already configured and shared across applications.

It is intentionally kept minimal, so you can use it as a foundation for your own frontend projects and extend it according to your needs.

## What's Included

### Applications

* **Next.js** — A Next.js application ready for development
* **React + Vite** — A React application powered by Vite

### Shared Configuration Packages

* **TypeScript** — Shared TypeScript configurations for the workspace
* **ESLint** — Shared ESLint configuration
* **Prettier** — Shared code formatting configuration
* **Tailwind CSS** — Shared Tailwind CSS configuration

### Development Tooling

* **Turborepo** — Monorepo task orchestration and caching
* **pnpm** — Workspace and package management
* **Husky** — Git hooks
* **lint-staged** — Run ESLint and Prettier on staged files
* **Commitlint** — Validate commit messages using Conventional Commits

## Project Structure

```text
.
├── apps/
│   ├── web/                 # Next.js application
│   └── admin/               # React + Vite application
│
├── packages/
│   ├── eslint-config/       # Shared ESLint configuration
│   ├── prettier-config/     # Shared Prettier configuration
│   ├── tailwind-config/     # Shared Tailwind CSS configuration
│   └── typescript-config/   # Shared TypeScript configurations
│
├── .husky/                  # Git hooks
├── .lintstagedrc            # lint-staged configuration
├── commitlint.config.js     # Commitlint configuration
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Tech Stack

* [Turborepo](https://turborepo.dev)
* [Next.js](https://nextjs.org)
* [React](https://react.dev)
* [Vite](https://vite.dev)
* [TypeScript](https://www.typescriptlang.org)
* [Tailwind CSS](https://tailwindcss.com)
* [ESLint](https://eslint.org)
* [Prettier](https://prettier.io)
* [pnpm](https://pnpm.io)
* [Husky](https://typicode.github.io/husky/)
* [lint-staged](https://github.com/lint-staged/lint-staged)
* [Commitlint](https://commitlint.js.org)

## Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org) 24 or later
* [pnpm](https://pnpm.io) 11 or later

### Installation

Clone the repository:

```bash
git clone https://github.com/orgamiryazdani/turborepo-starter-kit.git
```

Navigate to the project directory:

```bash
cd turborepo-starter-kit
```

Install dependencies:

```bash
pnpm install
```

### Development

Start all applications in development mode:

```bash
pnpm dev
```

You can also run an individual application using pnpm filters:

```bash
pnpm --filter web dev
```

```bash
pnpm --filter admin dev
```

## Available Commands

Run commands from the root of the repository.

| Command            | Description                                 |
| ------------------ | ------------------------------------------- |
| `pnpm dev`         | Start development tasks across the monorepo |
| `pnpm build`       | Build applications and packages             |
| `pnpm lint`        | Run ESLint across the workspace             |
| `pnpm format`      | Format files with Prettier                  |
| `pnpm check-types` | Run TypeScript type checking                |

Turborepo coordinates these tasks across the workspace and handles task dependencies and caching where configured.

## Git Hooks & Commit Workflow

This starter includes a Git workflow powered by Husky, lint-staged, and Commitlint.

### Pre-commit

Before a commit is created, lint-staged runs the configured checks against staged files:

* ESLint
* Prettier

This helps prevent formatting and linting issues from being committed.

### Commit Messages

Commit messages are validated with Commitlint using Conventional Commits. Scopes are required for all commit messages.

Examples:

```text
feat(web): add product listing page
fix(admin): resolve form validation issue
chore(root): update dependencies
```

This keeps commit history consistent and makes changes easier to identify by scope.

## Shared Configuration

The shared configuration packages are designed to keep development tooling consistent across applications.

Each application can consume the workspace configurations instead of maintaining separate configuration files for common tools.

This makes it easier to add additional applications to the monorepo while keeping the development experience consistent.

## Customization

This starter is intentionally minimal and can be adapted to different frontend projects.

You can:

* Add new applications under `apps/`
* Add reusable packages under `packages/`
* Extend or customize the shared configuration packages
* Remove applications or tooling you do not need
* Add project-specific dependencies and configurations
* Adjust Turborepo tasks to match your workflow

Use this repository as a starting point rather than a fixed project structure.

## Contributing

Contributions, improvements, and suggestions are welcome.

Before opening a pull request, make sure the project passes the available checks:

```bash
pnpm lint
pnpm check-types
pnpm format
pnpm build
```

Please follow the project's Conventional Commits rules and include a scope in every commit message.

## License

This project is licensed under the [MIT License](LICENSE).
