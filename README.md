# Rui Lu (卢睿) Personal Homepage

Source for <https://sladelu.github.io>, built with Jekyll and GitHub Pages.

## Content Layout

- `_pages/index.md`: English homepage entry.
- `_pages/chinese.md`: Chinese homepage entry.
- `_pages/sections/en/`: English profile sections.
- `_pages/sections/zh/`: Chinese profile sections.
- `_pages/sections/shared/`: Shared sections used by both languages.
- `_data/pubs.yml`: Publication and patent data.
- `_data/mount.yml`: Mountaineering and trekking gallery data.
- `_data/authors.yml`: Sidebar author profiles for English and Chinese pages.
- `_data/navigation.yml`: Header navigation.

## Assets

- `images/`: Site avatar, favicon files, and gallery photos.
- `assets/css/main.scss`: Main stylesheet entry point.
- `_sass/_custom.scss`: Site-specific styles.
- `assets/js/main.min.js`: Theme JavaScript used by the layout.

## Local Preview

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://127.0.0.1:4000>.

The helper script also works:

```bash
bash run_server.sh
```

## Notes

Google Analytics is disabled by default in `_config.yml`.

Google Scholar total citations are displayed from `google-scholar-stats/gs_data.json`.
If Firebase Firestore cache is configured in `_data/firebase.yml`, the site will try Firestore first and fall back to the JSON file.

To refresh that file locally:

```bash
python3 -m pip install scholarly
GOOGLE_SCHOLAR_ID=n4rWRCYAAAAJ python3 google_scholar_crawler/main.py
```

Then commit the updated files under `google-scholar-stats/`.

For Firestore cache, create a document like:

`scholar_stats/profile`

with fields:

```json
{
  "citedby": 1234,
  "updated": "2026-04-21T00:00:00Z"
}
```
