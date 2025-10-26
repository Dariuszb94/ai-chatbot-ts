# Important: GitHub Pages Limitation

⚠️ **GitHub Pages serves static files only and does not support API routes.**

This means the `/api/chat` endpoint won't work when deployed to GitHub Pages, as it requires server-side functionality.

## Recommended Deployment Options for Full Functionality

### 1. **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```
- Free tier available
- Perfect for Next.js apps
- Supports API routes
- Automatic deployments from GitHub

### 2. **Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```
- Free tier available
- Supports serverless functions
- Easy GitHub integration

### 3. **Railway**
- Connect your GitHub repository
- Automatic deployments
- Built-in environment variable management
- Free tier with $5 credit/month

### 4. **Render**
- Free tier for web services
- Automatic GitHub deployments
- Environment variable support

## Alternative: Client-Side API Key (Not Recommended for Production)

If you still want to use GitHub Pages, you could modify the app to use the OpenAI API directly from the client with the API key, but **this is not secure** as the API key would be exposed in the browser.

## Current Configuration

The repository is configured with GitHub Actions for static export, but for a fully functional chatbot with API routes, please deploy to one of the platforms above.