# Harvest Bridge Development Initiative (HBDI) — Website

> Empowering farmers through sustainable agriculture and community development across Africa.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animation:** Framer Motion
- **Deployment:** Cloudflare Pages (via `@cloudflare/next-on-pages`)
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- [pnpm](https://pnpm.io/) ≥ 9

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build (local preview)

```bash
pnpm build
pnpm start
```

## Cloudflare Pages Deployment

### Option A — Cloudflare Dashboard (CI/CD)

| Field               | Value                                |
| ------------------- | ------------------------------------ |
| **Build command**   | `pnpm run build`                     |
| **Deploy command**  | `npx wrangler pages deploy .vercel/output/static --project-name=harvest` |
| **Root directory**  | `/`                                  |
| **Build token**     | Create a Cloudflare API token with Pages permissions |
| **Node version**    | Set via environment variable: `NODE_VERSION=22` |

> If the dashboard does not support a separate deploy command, use only the build command above and set the **Output directory** to `.vercel/output/static`. Then add the `@cloudflare/next-on-pages` build step:

**Build command (recommended):**

```
npx @cloudflare/next-on-pages
```

**Output directory:**

```
.vercel/output/static
```

### Option B — Wrangler CLI (manual deploy)

```bash
# 1. Build for Cloudflare Pages
npx @cloudflare/next-on-pages

# 2. Deploy
npx wrangler pages deploy .vercel/output/static --project-name=harvest
```

### Option C — Cloudflare Workers (alternative)

```bash
# 1. Build
pnpm build

# 2. Deploy as a Worker
npx wrangler deploy
```

### First-time setup

```bash
# Authenticate with Cloudflare
npx wrangler login

# Initialize project (if not already linked)
npx wrangler pages project create harvest
```

### Environment Variables

Set any required environment variables in the Cloudflare dashboard under **Settings > Environment variables**.

For local development, create a `.env.local` file:

```
# Example (add real values as needed)
NEXT_PUBLIC_SITE_URL=https://harvest.pages.dev
```

## Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── about/page.tsx
│   ├── blog/page.tsx
│   ├── contact/page.tsx
│   ├── projects/page.tsx
│   ├── team/page.tsx
│   ├── globals.css
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable components + shadcn/ui
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities
├── public/                 # Static assets
├── styles/                 # Legacy static site styles
├── index.html              # Legacy static homepage
├── *.html                  # Legacy static pages
├── next.config.mjs
├── wrangler.toml           # Cloudflare Pages config
├── tsconfig.json
└── package.json
```

## Scripts

| Command                   | Description                                  |
| ------------------------- | -------------------------------------------- |
| `pnpm dev`                | Start Next.js dev server on port 3000        |
| `pnpm build`              | Production build                             |
| `pnpm start`              | Start production server                      |
| `pnpm lint`               | Run ESLint                                   |
| `pnpm pages:build`        | Build for Cloudflare Pages                   |
| `pnpm pages:deploy`       | Deploy to Cloudflare Pages                   |

## Troubleshooting

### Build fails — "Unable to detect the version of the `next` package"

Run `pnpm install` to ensure `next` is installed. The `package.json` must list `next` in `dependencies`.

### Wrangler deploy fails — interactive prompt in CI

Wrangler runs in non-interactive mode in CI. Make sure `wrangler.toml` exists and contains the correct `pages_build_output_dir`.

### Static pages (index.html, about.html, etc.)

The legacy static HTML pages at the project root are preserved for reference. The canonical site is served by Next.js via the `app/` directory.

## License

See [LICENSE](./LICENSE).
