# Contributing to uoguelph.network

## Membership Requirements

- You are a University of Guelph student/alum.
- You have a personal site you want linked in the ring.

## Add Yourself

1. Fork this repository.
2. Create a branch.
3. (Optional) Add a square image in `public/photos/`.
4. Add your member object to `data/members.ts`.
5. Run:
   - `npm test`
   - `npm run lint`
6. Open a pull request.

## Member Schema

Required fields:

- `id` (slug, unique)
- `name`
- `url` (absolute URL)
- `bio`
- `tags` (at least one)
- `addedAt` (`YYYY-MM-DD`)

Optional fields:

- `program`, `year`, `profilePic`
- `instagram`, `twitter`, `linkedin`
- `connections` (array of member ids)
- `status` (`active` or `paused`)

## Embed Snippet

```html
<script
  src="https://uoguelph.network/embed.js"
  data-webring
  data-user="your-member-id"
  data-mode="ring"
></script>
```

`data-mode="connections"` uses your optional connections list.
