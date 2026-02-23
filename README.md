# Guelph Webring

A webring for University of Guelph Computer Science students and alumni.

Live site: [www.uguelph.network](https://www.uguelph.network)

## Join the webring

1. Add the widget to your site (template below).
2. Fork this repo.
3. Edit `data/members.json` and add your entry inside `sites`:

```json
{
  "name": "Your Name",
  "website": "https://your-website.com",
  "year": 20XX,
  "links": {
    "instagram": "https://instagram.com/your-handle",
    "twitter": "https://x.com/your-handle",
    "linkedin": "https://linkedin.com/in/your-handle"
  }
}
```

4. Open a pull request.

## Widget template

### HTML

```html
<div style="display: flex; align-items: center; gap: 8px;">
  <a href="https://www.uguelph.network/#your-site-here?nav=prev">←</a>
  <a href="https://www.uguelph.network/#your-site-here" target="_blank" rel="noopener noreferrer">
    <img src="https://www.uguelph.network/webAssets/gryphon.svg" alt="Guelph Webring" style="width: 32px; height: auto; opacity: 0.9;" />
  </a>
  <a href="https://www.uguelph.network/#your-site-here?nav=next">→</a>
</div>
```

### JSX

```jsx
<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
  <a href="https://www.uguelph.network/#your-site-here?nav=prev">←</a>
  <a href="https://www.uguelph.network/#your-site-here" target="_blank" rel="noopener noreferrer">
    <img
      src="https://www.uguelph.network/webAssets/gryphon.svg"
      alt="Guelph Webring"
      style={{ width: "32px", height: "auto", opacity: 0.9 }}
    />
  </a>
  <a href="https://www.uguelph.network/#your-site-here?nav=next">→</a>
</div>
```

The badge uses the gryphon SVG (`gryphon.svg`).

## Notes

- Keep URLs absolute (`https://...`).
- Keep the JSON valid in `data/members.json`.
- If you are not in CS, you can still make your own webring for your community.
