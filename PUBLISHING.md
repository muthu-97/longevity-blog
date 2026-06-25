# Publishing

## Every time we write a new article
You mostly just say *"publish the &lt;topic&gt; article"* and I do steps 1–5. You do step 6.

1. **Render.** I turn a `knowledge/` file (marked `blog: ready`) into `src/content/posts/<slug>.mdx`, following `00_Resources/blog-render-recipe.md`: simple layer (hook, analogy, SVGs, takeaway, studio-floor) then the Go-deeper layer (The proper names + Where this fits brain-map).
2. **Glossary.** Any new jargon gets added to `src/pages/glossary.astro` with an anchor, and the post links to it.
3. **Wire the series.** Set `series`, `seriesOrder`, `prev`/`next` (+ titles). Update the neighbour posts' `next`/`prev` to point back at this one. Add this node (and its edges) to the relevant brain-maps.
4. **Preview.** `npm run dev` → open localhost:4321. Check the post, the glossary anchors, prev/next, and that brain-map links resolve.
5. **Commit.** I stage it: `git add -A && git commit -m "post: <title>"`.
6. **Publish.** You run `git push`. Cloudflare Pages rebuilds in ~1 min. The home page, series, tags and pagination all update themselves, no manual index editing, ever.
7. **Mark done.** I flip the `knowledge/` file to `blog: published`.

Dead links to articles that don't exist yet are fine and intended, they go live automatically the day that post ships. The brain map grows itself.

## One-time setup (do once, see SETUP section below once filled in)
See `SETUP-DEPLOY.md` for the GitHub + Cloudflare + domain steps. After that, publishing is just step 6 forever.

## Local commands
```
npm install      # first time only
npm run dev      # live preview at localhost:4321
npm run build    # static build into dist/ (what Cloudflare runs)
```
