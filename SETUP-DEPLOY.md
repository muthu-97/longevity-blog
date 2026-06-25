# One-time deploy setup (GitHub → Cloudflare Pages → your domain)

Do this once. After it, publishing forever is just `git push` (see PUBLISHING.md).

The repo lives inside this iCloud folder on purpose, so Cowork can write new posts straight into it.

---

## A. Put it on GitHub  (your Mac, Terminal)

We start the repo fresh here to avoid iCloud lock-file issues from the initial setup.

```bash
cd ~/Library/Mobile\ Documents/com~apple~CloudDocs/Cowork-OS/Longevity\ Lab/Blog
rm -rf .git                      # clear the half-made repo
git init -b main
git add -A
git commit -m "Longevity blog: initial site + first post"
```

Then create an empty **public** repo on github.com (suggested name: `longevity-blog`, no README/license), and:

```bash
git remote add origin https://github.com/<your-username>/longevity-blog.git
git push -u origin main
```

---

## B. Connect Cloudflare Pages  (I'll drive this in your browser)

1. dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorise GitHub, pick `longevity-blog`.
3. Build settings: **Framework preset = Astro**, **Build command = `npm run build`**, **Output directory = `dist`**. Save & Deploy.
4. ~1 minute later you get a free `longevity-blog.pages.dev` URL. That's the site live.

---

## C. Point your domain (it's at another registrar)

Two paths, pick one:

**Subdomain, e.g. `blog.yourdomain.com` (fastest, no nameserver change)**
- Cloudflare Pages → your project → **Custom domains** → add `blog.yourdomain.com`.
- Cloudflare shows a **CNAME target**. Add that CNAME at your registrar's DNS panel. SSL is automatic.

**Apex, the bare `yourdomain.com` (cleanest long-term)**
- Registrars can't CNAME the root, so move the domain's **nameservers** to Cloudflare (free): add the site at dash.cloudflare.com, it gives you two nameservers, set those at your registrar. Then add the custom domain in Pages.
- Takes a few hours to propagate; afterwards everything (DNS + hosting) is in one place.

**My recommendation:** if you want the bare `yourdomain.com`, do the one-time nameserver move. If you'd rather not touch nameservers today, ship on `blog.yourdomain.com` now and switch later, no rework.

---

## After this
Every new article = I render + commit, you run `git push`, Cloudflare rebuilds itself. Nothing here is ever repeated.
