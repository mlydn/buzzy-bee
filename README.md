# Buzzy Bee

Marketing site for Buzzy Bee Bookkeeping, built with Vite and React and deployed through AWS Amplify.

## Stack

- React 18
- Vite 5
- CSS modules are not used; styling lives in `src/App.css` and `src/index.css`

## Local development

```bash
npm install
npm run dev
```

The local dev server runs on Vite's default port unless overridden.

## Quality checks

```bash
npm run lint
npm run build
```

## Deployment

- `main` is the production deployment branch.
- AWS Amplify builds and deploys automatically when changes are merged into `main`.
- Feature work can be done on a separate branch and merged when ready.

## Important files

- `src/App.jsx`: page content and section structure
- `src/App.css`: component and layout styling
- `src/index.css`: global styles and theme variables
- `src/assets/bee-extracted.png`: active bee logo asset
- `src/assets/header-new.jpeg`: active hero image
