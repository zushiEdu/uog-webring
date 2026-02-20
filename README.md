# uoguelph.network

A webring for University of Guelph students, inspired by Waterloo-style directory + embed patterns.

## Routes

- `/` home + mission + highlights
- `/members` searchable directory
- `/graph` optional connection graph
- `/join` PR onboarding
- `/ring?site=<url>&action=prev|next|random` strict ring redirect
- `/api/webring?user=<memberId>` connection targets for widget
- `/embed.js` embeddable widget script

## Local Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm test
npm run build
```

## Deploy

Deploy to Vercel. Set `NEXT_PUBLIC_BASE_URL` to your production origin (for example `https://uoguelph.network`).

## Join the Ring

See `CONTRIBUTING.md`.
