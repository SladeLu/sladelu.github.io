# Rui LU Personal Homepage

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

Google Analytics and Google Scholar citation fetching are disabled by default in `_config.yml`.
Set `google_analytics_id` or `google_scholar_stats_enabled` only when the corresponding service is configured.
