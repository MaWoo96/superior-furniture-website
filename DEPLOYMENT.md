# Deployment Guide for Vercel

## Quick Deploy

### Option 1: GitHub + Vercel (Recommended)

1. **Initialize Git Repository**
   ```bash
   cd /Users/officemac/Projects/Superior_Furniture_Mattress/superior-furniture-website
   git init
   git add .
   git commit -m "Initial commit: Superior Furniture website"
   ```

2. **Create GitHub Repository**
   - Go to [GitHub](https://github.com/new)
   - Create a new repository named `superior-furniture-website`
   - Don't initialize with README (we already have one)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/superior-furniture-website.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy on Vercel**
   - Go to [Vercel](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your `superior-furniture-website` repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live at `superior-furniture-website.vercel.app`

### Option 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login and Deploy**
   ```bash
   cd /Users/officemac/Projects/Superior_Furniture_Mattress/superior-furniture-website
   vercel login
   vercel
   ```

3. **Follow Prompts**
   - Set up and deploy: Y
   - Which scope: Select your account
   - Link to existing project: N
   - Project name: superior-furniture-website
   - Directory: ./
   - Override settings: N

4. **Production Deploy**
   ```bash
   vercel --prod
   ```

## Custom Domain Setup

Once deployed on Vercel:

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `superiorfurniturede.com`)
4. Follow DNS configuration instructions
5. Vercel will automatically provision SSL certificate

## Environment Variables (Future)

When you add Stripe or other integrations:

1. Go to Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add:
   - `NEXT_PUBLIC_STRIPE_KEY` (Production)
   - `STRIPE_SECRET_KEY` (Production)
   - `NEXT_PUBLIC_SITE_URL`

## Build Settings (Auto-configured)

Vercel automatically detects:
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

## Post-Deployment Checklist

- [ ] Verify site loads at Vercel URL
- [ ] Test mobile responsiveness
- [ ] Check all navigation links
- [ ] Test product pages
- [ ] Verify images load correctly
- [ ] Update contact information if needed
- [ ] Set up custom domain
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Set up error monitoring (Sentry)
- [ ] Test contact forms once implemented

## Performance Optimization

The site is already optimized with:
- ✅ Image optimization (Next.js Image component)
- ✅ Font optimization (Google Fonts)
- ✅ Code splitting (Next.js App Router)
- ✅ Static generation where possible
- ✅ Tailwind CSS (purged in production)

## Monitoring

After deployment, monitor:
- Vercel Analytics (built-in)
- Core Web Vitals
- Deployment logs
- Error tracking

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` automatically deploys to production
- Pull requests create preview deployments
- Instant rollback available

## Support

For deployment issues:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)
