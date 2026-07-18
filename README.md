# Playlist Polisher Site

`playlistpolisher-site` is the static marketing and documentation site for Playlist Polisher.

It is a simple nginx-served site with hand-authored HTML, CSS, JavaScript, and image assets. The repo is separate from the main app so product-site changes can be deployed independently from application releases.

## Contents

- `site/index.html` landing page
- `site/roadmap.html` public roadmap
- `site/privacy.html` privacy policy
- `site/terms.html` terms page
- `site/styles.css` site styling
- `site/assets/` logos and favicon
- `nginx.conf` static hosting config

## Run

```bash
docker build -t playlistpolisher-site .
docker run --rm -p 8080:80 playlistpolisher-site
```

## Notes

- The Docker image serves static files only.
- Canonical product/application code lives in the main Playlist Polisher repository.
