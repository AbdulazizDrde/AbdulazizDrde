# Migration Manifest

- Project: ذاكرة تشاد / Chad Memory
- Migrated at: 2026-10-02
- Source platform: AppDeploy
- Source app id: `app-aprclz`
- Source snapshot version: `1790908073076`
- Source URL at migration: `https://app-aprclz.v2.appdeploy.ai/`
- Destination ownership layer: GitHub account `AbdulazizDrde`
- Destination path: `chad-memory-site/`
- Intended production host: Vercel account/team `abdulazizdrde-projects`

## Files copied from the source snapshot
- `components/MemorySite.tsx`
- `styles/global.css`
- `pages/_app.tsx`
- `pages/index.tsx`
- `next.config.ts`
- `package.json`
- `postcss.config.js`
- `tailwind.config.js`
- `tsconfig.json`
- `tests/tests.json`

## Controlled migration adjustments
- Renamed the npm package to `chad-memory-site`
- Added a Node.js engine floor for reproducibility
- Added `npm run check`
- Expanded Tailwind content scanning to include `components/`
- Added README, migration manifest and `.gitignore`

No application secrets, database credentials or private archival materials are included in this prototype source.
