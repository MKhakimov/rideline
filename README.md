# RIDELINE

A mountain bike culture website built with Next.js App Router.

## Project Structure

- `src/app` — application pages, root layout, and global styles.
- `src/components/layout` — layout components, including the header and container.
- `src/components/sections` — page sections.
- `src/styles` — variables, mixins, and reset styles.

## Routes

Add `.gpx` files to `public/gpx/routes`. Titles and dates are read from GPX metadata; distance and SVG previews are generated automatically. The homepage shows the six newest routes by GPX date. Rebuild and redeploy to publish additions.
