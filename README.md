# Harsh Vardhan Gupta — Portfolio

Personal portfolio site built with **Vite + React (JavaScript)**. Showcases MERN work on Reelax at Bridgeness Technologies.

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Deploy on Render (Static Site)

1. Push this repo to **GitHub**.
2. Open [Render Dashboard](https://dashboard.render.com) → **New** → **Static Site**.
3. Connect the GitHub repository.
4. Configure:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
5. Deploy. Render will give you a URL like `https://your-service.onrender.com`.

Optional: add a custom domain under the service’s **Settings → Custom Domains**.

## Update content

Edit [`src/data/content.js`](src/data/content.js) for name, bio, experience, projects, and skills. Replace images in `public/projects/` and `public/resume.pdf` as needed.
