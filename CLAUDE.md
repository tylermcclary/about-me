# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal "about me" portfolio website for Tyler McClary, built with Create React App and deployed to Firebase Hosting as a static site. It's content-driven: four routed pages (About, Experience, Projects, Contact) each rendering hardcoded JSX bio/resume content — there is no backend data fetching in the current build.

## Commands

```
npm start          # dev server at http://localhost:3000, hot reload
npm test            # CRA test runner (Jest + React Testing Library), interactive watch mode
npm test -- --watchAll=false --testPathPattern=App   # run a single test file non-interactively
npm run build        # production build into build/ (must run before deploying)
```

There is no lint script defined; ESLint runs as part of `react-scripts start`/`build` via the `eslintConfig` in [package.json](package.json) (`react-app`, `react-app/jest`).

## Deployment

Static hosting via Firebase (see [firebase.json](firebase.json)): the `build/` directory is served, with all routes rewritten to `index.html` (required for `react-router-dom` client-side routing).

```
npm run build
firebase deploy
```

Firebase project alias is `about-me-440ae` (`.firebaserc`). Auth for the Firebase CLI is session-based — if a deploy fails on auth, `firebase logout` then `firebase login` again.

`build/` is committed in this repo (not gitignored) — after any content or code change intended for deployment, regenerate it with `npm run build` before deploying, and expect the rebuild to show up as a diff across `build/static/*`.

## Architecture

- [src/App.js](src/App.js) sets up `react-router-dom` routes (`/`, `/experience`, `/projects`, `/contact`), each mapped to one component in `src/components/`. `Navigation` is rendered outside `<Routes>` so it persists across all pages.
- Each page component (`About.js`, `Experience.js`, `Projects.js`, `Contact.js`) is self-contained: static JSX content, no props, no shared state. Styling is class-based via [src/App.css](src/App.css) (`main-content`, `education-item`, `*-section` conventions reused across pages — match these class names rather than inventing new ones when adding sections).
- [src/firebase.js](src/firebase.js) initializes the Firebase app, Firestore (`db`), and Auth (`auth`), but **nothing currently imports or uses these exports** — the site does not read/write Firestore or use auth anywhere yet. Treat this file as scaffolding for future dynamic features, not active infrastructure.
- No global state management, no API calls, no environment-based config — the Firebase config object is hardcoded directly in `src/firebase.js`.
