# ☕ Brew Cafe

A modern, responsive coffee shop website built with **React**, **Vite** and **TypeScript**.

## Features

- **Home** — hero section, highlights, customer favorites, testimonials and a call to action
- **Menu** — coffee, tea and desserts with prices, plus category filters
- **About Us** — the cafe's story, values and team
- **Contact** — address, hours, and a validated contact form (front-end only)
- Sticky navigation with a mobile hamburger menu, and a site-wide footer
- Fully responsive layout for mobile, tablet and desktop
- Accessible markup: semantic landmarks, skip link, ARIA states, keyboard focus styles, reduced-motion support
- Client-side routing with React Router, including a 404 page

## Tech stack

| Tool | Purpose |
| --- | --- |
| [React](https://react.dev) | UI library |
| [Vite](https://vite.dev) | Dev server and bundler |
| [TypeScript](https://www.typescriptlang.org) | Static typing |
| [React Router](https://reactrouter.com) | Client-side routing |
| [Vitest](https://vitest.dev) + [Testing Library](https://testing-library.com) | Unit / component tests |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org) 20.19+ or 22.12+ (Node 22 LTS recommended)
- npm 10+

### Install

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Then open the URL printed in the terminal (usually <http://localhost:5173>).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Type-check and build a production bundle into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run typecheck` | Type-check the project without building |

## Project structure

```
brew-cafe/
├── index.html            # HTML entry point
├── public/               # Static assets (favicon)
├── src/
│   ├── main.tsx          # App bootstrap + router
│   ├── App.tsx           # Route definitions
│   ├── index.css         # Global styles and responsive layout
│   ├── components/       # Navbar, Footer, Layout, MenuCard, etc.
│   ├── pages/            # Home, Menu, About, Contact, NotFound
│   ├── data/             # Menu items and cafe details
│   └── test/             # Test setup and helpers
├── vite.config.ts        # Vite + Vitest config
└── tsconfig*.json        # TypeScript config
```

## Customizing

- **Menu items and prices:** edit `src/data/menu.ts`
- **Address, phone, email and hours:** edit `src/data/site.ts`
- **Colors and fonts:** edit the CSS variables at the top of `src/index.css`

## Deployment notes

`npm run build` outputs a static site in `dist/`. Because the site uses client-side routing, configure your host to
serve `index.html` for unknown paths (SPA fallback) so routes like `/menu` work on refresh.

The contact form currently validates input and shows a confirmation message only; it does not send data anywhere.
Hook it up to a backend or form service when you're ready.
