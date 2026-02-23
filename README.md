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
  "role": "Software Engineer at Company",
  "links": {
    "instagram": "https://instagram.com/your-handle",
    "twitter": "https://x.com/your-handle",
    "linkedin": "https://linkedin.com/in/your-handle"
  }
}
```

- **`role`** (optional): What you currently do—e.g. job title, "Student", "Founder", "ML Engineer". Helps others find you when browsing or searching the webring.

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
- **Optional:** Add a `role` field (e.g. "Software Engineer", "Student", "Founder") so visitors can search and filter by what people do.
- If you are not in CS, you can still make your own webring for your community.

## Attribution

This project is forked from:
https://cs.uwatering.com/

Original repository:
https://github.com/JusGu/uwatering

Used under the MIT License.
