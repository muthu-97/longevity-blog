# Longevity Blog (Astro + Cloudflare Pages)

Muthu's longevity blog. Plain-language posts with hand-built SVG graphs. Source of truth for posts is the Longevity Lab station's `knowledge/` files; this repo is the render + publish layer.

## How to post (the easy path)
1. Ask Cowork to render a `knowledge/` file into a post (it follows `00_Resources/blog-render-recipe.md`).
2. A new `.mdx` lands in `src/content/posts/`.
3. Commit + push. Cloudflare Pages rebuilds. The home page, tags, and ordering update themselves, no manual index editing, ever.

## Run locally
```
npm install
npm run dev      # preview at localhost:4321
npm run build    # outputs static site to dist/
```

## One-time deploy (interactive, needs your logins)
1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Pages → Connect to Git → pick the repo.
3. Build command: `npm run build`. Output dir: `dist`.
4. Add your custom domain in Pages → free SSL, done.
5. Set `site` in `astro.config.mjs` to your domain.

Free tier covers this comfortably: no bandwidth cap, 20k files, 500 builds/month.

## Structure
- `src/content/posts/*.mdx` — the posts (frontmatter schema in `src/content/config.ts`).
- `src/pages/index.astro` — auto-generated post list.
- `src/pages/posts/[...slug].astro` — the post template.
- `src/styles/global.css` — the house style (shared with the station's preview).
