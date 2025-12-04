# Next.js Migration Plan for Soncresity Industries Website

## **Phase 1: Project Setup & Foundation**
*Estimated Time: 2-3 hours*

### **1.1 Create New Next.js Project**
```bash
npx create-next-app@latest soncresity-website-nextjs --typescript --tailwind --eslint --app
```

### **1.2 Copy Static Assets**
- Move `/public/assets/` directory (images, videos, logos)
- Transfer `favicon.ico` and other meta assets
- Copy any fonts or icons

### **1.3 Install Dependencies**
```bash
npm install jszip react-bits
```

## **Phase 2: Core Layout & Styling Migration**
*Estimated Time: 3-4 hours*

### **2.1 Convert CSS to Global Styles**
- Move `App.css` → `app/globals.css`
- Update CSS imports and paths
- Convert to CSS modules where beneficial

### **2.2 Create Root Layout**
```typescript
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <BackgroundVideo />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

### **2.3 Navigation Component**
- Extract navigation from `App.tsx` into `components/Navigation.tsx`
- Use Next.js `Link` component instead of React Router
- Add active state handling with `usePathname()`

## **Phase 3: Page Structure Migration**
*Estimated Time: 4-5 hours*

### **3.1 Create App Router Pages**
```
app/
├── layout.tsx           # Root layout with nav/footer
├── page.tsx            # Homepage (current Home component)
├── about/page.tsx      # About page
├── projects/page.tsx   # Projects listing
├── tools/page.tsx      # Tools page
├── blog/page.tsx       # Blog listing
├── contact/page.tsx    # Contact page
└── blog/[slug]/page.tsx # Individual blog posts
```

### **3.2 Add Metadata to Each Page**
```typescript
// Example: app/about/page.tsx
export const metadata = {
  title: 'About - Soncresity Industries',
  description: 'Learn about our mission, team, and values at Soncresity Industries.',
  openGraph: {
    title: 'About Soncresity Industries',
    description: 'Innovative software solutions and gaming experiences.',
    images: ['/assets/images/og-about.png'],
  },
}
```

## **Phase 4: Component Migration**
*Estimated Time: 3-4 hours*

### **4.1 Direct Component Transfers**
These components need minimal changes:
- `ElectricBorder.tsx` → `components/ElectricBorder.tsx`
- `HeightDatapackGenerator.tsx` → `components/HeightDatapackGenerator.tsx`
- `About.tsx`, `Contact.tsx`, `Tools.tsx`

### **4.2 Router-Dependent Components**
Update these for Next.js routing:
- **Projects.tsx**: Replace `react-router-dom` links with Next.js `Link`
- **Blog.tsx**: Update routing for blog post navigation
- **Project detail components**: Convert to dynamic routes

## **Phase 5: Blog System Enhancement**
*Estimated Time: 2-3 hours*

### **5.1 Blog Post Structure**
```typescript
// lib/blog.ts
export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  tags: string[]
  featured?: boolean
  seoTitle?: string
  metaDescription?: string
  ogImage?: string
}
```

### **5.2 Static Generation for Blog**
```typescript
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug)
  return {
    title: post.seoTitle || post.title,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage || '/assets/images/blog-default.png'],
    },
  }
}
```

## **Phase 6: SEO & Performance Optimization**
*Estimated Time: 2-3 hours*

### **6.1 Image Optimization**
Replace `<img>` tags with Next.js `Image` component:
```typescript
import Image from 'next/image'

<Image
  src="/assets/images/logo.png"
  alt="Soncresity Industries"
  width={200}
  height={50}
  priority
/>
```

### **6.2 Metadata Configuration**
```typescript
// app/layout.tsx
export const metadata = {
  title: {
    template: '%s - Soncresity Industries',
    default: 'Soncresity Industries - Innovative Software Solutions',
  },
  description: 'Discover innovative software solutions, gaming projects, and development tools from Soncresity Industries.',
  keywords: ['software development', 'gaming', 'minecraft', 'tools', 'modpacks'],
  authors: [{ name: 'Soncresity Industries' }],
  openGraph: {
    siteName: 'Soncresity Industries',
    locale: 'en_US',
    type: 'website',
  },
}
```

## **Phase 7: Advanced Features**
*Estimated Time: 3-4 hours*

### **7.1 Dynamic Project Routes**
```typescript
// app/projects/[projectId]/page.tsx
export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }))
}
```

### **7.2 API Routes (Optional)**
```typescript
// app/api/contact/route.ts - For contact form
export async function POST(request: Request) {
  // Handle contact form submissions
}
```

### **7.3 Sitemap Generation**
```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://soncresity.com',
      lastModified: new Date(),
    },
    {
      url: 'https://soncresity.com/about',
      lastModified: new Date(),
    },
    // ... other pages
  ]
}
```

## **Phase 8: Testing & Deployment**
*Estimated Time: 1-2 hours*

### **8.1 Local Testing**
- Test all routes and functionality
- Verify SEO meta tags with browser dev tools
- Check image optimization and loading

### **8.2 Vercel Deployment**
- Update Vercel project to point to new Next.js build
- Configure environment variables if needed
- Test production deployment

## **Phase 9: Post-Migration Cleanup**
*Estimated Time: 1 hour*

### **9.1 Remove Old Files**
- Archive or delete Vite configuration
- Clean up unused dependencies
- Update README and documentation

## **Expected Benefits After Migration**

✅ **SEO Improvements**: Each page gets proper meta tags and descriptions  
✅ **Social Sharing**: Rich previews when sharing on Discord/Twitter  
✅ **Performance**: ~40-60% faster initial page loads  
✅ **Blog Discoverability**: SI: Aftermath updates will rank in Google  
✅ **Professional Experience**: Faster, more polished user experience  
✅ **Image Optimization**: Automatic WebP conversion and lazy loading  

## **Total Estimated Time: 18-26 hours**

The migration preserves all your current functionality while significantly improving SEO, performance, and professional appearance. Your video background, ElectricBorder effects, transparent styling, and all current features will work exactly the same but with better optimization.

Would you like me to start with Phase 1 and begin the migration process?