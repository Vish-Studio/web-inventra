# GitHub Pages Deployment Guide

This Next.js project is configured to deploy automatically to GitHub Pages.

## 🚀 Automatic Deployment

The project uses GitHub Actions to automatically build and deploy when you push to the `master` branch.

### Setup Steps

1. **Enable GitHub Pages:**
   - Go to your repository: `https://github.com/Vish-Studio/web-inventra`
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Push your changes:**
   ```bash
   git add .
   git commit -m "Configure Next.js for GitHub Pages"
   git push origin master
   ```

3. **Wait for deployment:**
   - Go to the **Actions** tab in your repository
   - Watch the "Deploy to GitHub Pages" workflow complete
   - Your site will be live at: `https://vish-studio.github.io/web-inventra/`

## 🔧 Configuration Details

### Next.js Static Export
The project is configured with:
- `output: 'export'` - Generates static HTML/CSS/JS
- `basePath: '/web-inventra'` - Matches your repository name
- `images.unoptimized: true` - Required for static export

### GitHub Actions Workflow
Located at `.github/workflows/deploy.yml`, it:
- Triggers on push to `master` branch
- Installs dependencies
- Builds the Next.js project
- Deploys the `out/` directory to GitHub Pages

## 🌐 Your Site URL

Once deployed, your site will be available at:
**https://vish-studio.github.io/web-inventra/**

## 🛠️ Local Testing

To test the production build locally:

```bash
# Build the static export
npm run build

# Serve the out/ directory (using any static server)
npx serve out
```

## 📝 Notes

- The `.nojekyll` file prevents GitHub Pages from processing files with underscores
- All assets and routes are prefixed with `/web-inventra`
- Changes pushed to `master` will automatically trigger a new deployment
- Deployment typically takes 2-3 minutes

## ⚠️ Troubleshooting

If your site doesn't load:
1. Check that GitHub Pages is set to use "GitHub Actions" as the source
2. Verify the workflow completed successfully in the Actions tab
3. Ensure the repository is public (or you have GitHub Pro for private repos)
4. Clear your browser cache and try again

## 🔄 Manual Deployment

If you need to trigger a deployment manually:
1. Go to the **Actions** tab
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"
