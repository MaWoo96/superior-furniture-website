# Superior Furniture and Mattress Website

Premium furniture and mattress e-commerce marketing website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🏢 About

Superior Furniture and Mattress is Delaware's home for superior sleep & style. This website showcases our quality furniture and mattresses with a focus on conversion optimization and mobile-first design.

**Location**: Partnered with God's Way Thrift Store, 1 Maple Ave, Milford, DE 19663

## ✨ Features

- **Mobile-First Design**: Optimized for 77% mobile traffic with responsive layouts
- **High-Converting UI**: Based on furniture e-commerce best practices
- **Trust Signals**: 100-night trial, free delivery, warranty displays
- **Financing Integration**: Ready for Stripe and BNPL providers
- **Product Showcase**: Featured products with detailed pages
- **SEO Optimized**: Proper metadata and semantic HTML
- **Fast Performance**: Optimized images and lazy loading

## 🚀 Getting Started

### Development Server

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage
│   └── products/[id]/      # Dynamic product pages
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky header with mega menu
│   │   └── Footer.tsx      # Footer with trust badges
│   └── sections/
│       ├── Hero.tsx        # Hero section with CTAs
│       ├── Categories.tsx  # Shop by room categories
│       ├── FeaturedProducts.tsx
│       ├── Financing.tsx   # Financing information
│       └── Testimonials.tsx
├── public/
│   └── logos/              # Superior Furniture logos
└── tailwind.config.ts      # Brand colors and theme
```

## 🎨 Brand Colors

- **Burgundy**: #8B3A3A (Primary)
- **Burgundy Dark**: #6B2B2B
- **Burgundy Light**: #A54B4B
- **Cream**: #F5F5F0 (Background)
- **Charcoal**: #2C2C2C (Text)

## 📦 Key Dependencies

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Icon library
- **Inter & Playfair Display**: Google Fonts

## 🚢 Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy
4. Your site will be live at `your-project.vercel.app`

### Environment Variables (Future)

When adding e-commerce functionality, you'll need:

```env
NEXT_PUBLIC_STRIPE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
```

## 🛠️ Future Enhancements

- [ ] Add product database (Sanity CMS or Shopify)
- [ ] Implement Stripe checkout
- [ ] Add financing integration (Affirm/Klarna)
- [ ] Implement search functionality
- [ ] Add shopping cart
- [ ] Create CMS for product management
- [ ] Add customer reviews system
- [ ] Implement AR/3D product visualization
- [ ] Add email marketing integration

## 📱 Pages

- `/` - Homepage with hero, categories, featured products
- `/products/[id]` - Individual product pages
- `/categories/*` - Category landing pages (to be built)

## 🎯 Conversion Optimization Features

- Trust signals above the fold
- 100-night trial messaging
- Flexible financing options
- Free delivery information
- Customer testimonials
- Mobile bottom navigation
- Clear CTAs throughout
- Simplified checkout flow ready

## 📞 Contact

For questions about the website or business inquiries:
- Email: info@superiorfurniturede.com
- Phone: (123) 456-7890

---

Built with ❤️ for Superior Furniture and Mattress
