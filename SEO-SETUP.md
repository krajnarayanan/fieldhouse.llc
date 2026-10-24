# Search visibility setup

The site now has page-specific search titles and descriptions, social sharing metadata, basic organization structured data, and a `robots.txt` that permits search crawlers. Canonical URLs, the sitemap, and the robots sitemap directive point to `https://www.fieldhouse.llc/`. Raleigh, North Carolina is set as the service area.

## Finish when the site is published

1. Upload `sitemap.xml` and `robots.txt` to the site root when deploying.
2. Configure DNS and hosting so `www.fieldhouse.llc` serves the site over HTTPS, and redirect `fieldhouse.llc` to `https://www.fieldhouse.llc/`.
3. Add and verify the domain in Google Search Console, then submit `https://www.fieldhouse.llc/sitemap.xml` and request indexing for the homepage and About page.
4. The site identifies Raleigh, North Carolina as the service area. Add other service locations only if you serve them.

The contact form currently opens a visitor's email app; it does not submit to a website server. The SEO metadata does not change that behavior.
