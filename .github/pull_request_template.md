## Member Submission

Please fill this out so we can quickly review and merge your addition.

### Member Data

- Name:
- Year:
- Website (full URL, https://...):
- What you do (optional, e.g. job title, "Student", "Founder"):
- Instagram (optional, full URL):
- Twitter/X (optional, full URL):
- LinkedIn (optional, full URL):
- GitHub (optional, full URL):

### JSON Snippet Added to `data/members.json`

Add your entry to the `sites` array in `data/members.json`. Use empty string `""` for any optional link you don't have. Omit `role` if you prefer not to include it.

```json
{
  "name": "Your Name",
  "year": 20XX,
  "website": "https://your-site.com",
  "role": "Software Engineer at Company",
  "links": {
    "instagram": "",
    "twitter": "https://x.com/your-handle",
    "linkedin": "https://linkedin.com/in/your-handle",
    "github": ""
  }
}
```

### Checklist

- [ ] I added my entry to `data/members.json` in the `sites` array.
- [ ] My website URL is valid and starts with `https://`.
- [ ] If included, social links are full URLs; unused links use `""`.
- [ ] I kept the JSON valid (no trailing commas, correct quotes).
- [ ] I verified my row appears correctly in the table.
- [ ] (Optional) I added a `role` so visitors can find me by what I do.
