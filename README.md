# StartHub Academy - SEO-Optimized Course Detail Page

A high-performance, SEO-optimized Course Detail page built with Next.js 16 App Router. This project demonstrates best practices for Server-Side Rendering (SSR), dynamic metadata generation, and structured data implementation.

## Features

- **Dynamic Metadata Generation**: Automatic `<title>`, `<meta description>`, and Open Graph tags based on course data
- **JSON-LD Structured Data**: Schema.org Course markup for rich snippets in search results
- **Static Site Generation (SSG)**: Pre-rendered pages with `generateStaticParams` for optimal performance
- **Semantic HTML**: Proper heading hierarchy, ARIA labels, and accessible navigation
- **Core Web Vitals Optimized**: Designed for 90+ Lighthouse scores
- **TypeScript + Zod**: Type-safe data validation throughout the application

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Validation**: Zod
- **Fonts**: Geist (optimized with `next/font`)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with global metadata
│   ├── page.tsx             # Home page with course listings
│   ├── globals.css          # Global styles and Tailwind imports
│   └── courses/
│       ├── page.tsx         # All courses listing page
│       └── [slug]/
│           ├── page.tsx     # Course detail page (main task)
│           └── not-found.tsx # 404 page for invalid courses
├── components/
│   ├── courseHeader.tsx     # Course hero section
│   ├── courseSidebar.tsx    # Pricing and enrollment sidebar
│   ├── courseSyllabus.tsx   # Curriculum section
│   ├── courseSkills.tsx     # What you'll learn section
│   ├── coursePrerequisites.tsx # Prerequisites section
│   └── starRating.tsx       # Accessible star rating display
├── data/
│   └── courses.ts           # Mock course data and data fetching
├── lib/
│   ├── jsonLd.ts            # JSON-LD structured data generator
│   └── metadata.ts          # Metadata generation utilities
└── schemas/
    └── course.ts            # Zod schemas for type validation
```

## SEO Implementation

### 1. Dynamic Metadata

The course detail page uses `generateMetadata` to create dynamic metadata:

```typescript
export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = await getCourseBySlug(params.slug);
  return generateCourseMetadata(course);
}
```

This generates:
- Dynamic `<title>` tags
- Meta descriptions
- Open Graph tags for social sharing
- Twitter Card metadata
- Canonical URLs

### 2. JSON-LD Structured Data

The page includes Schema.org Course markup:

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Course Name",
  "description": "...",
  "provider": {
    "@type": "Organization",
    "name": "StartHub Academy"
  },
  "instructor": {
    "@type": "Person",
    "name": "Instructor Name"
  },
  "offers": { ... },
  "aggregateRating": { ... }
}
```

### 3. Static Site Generation

Courses are pre-rendered at build time using `generateStaticParams`:

```typescript
export async function generateStaticParams() {
  return getAllCourseSlugs();
}
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd next_js_interview

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Create production build
npm run build

# Start production server
npm run start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Available Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with featured courses |
| `/courses` | All courses listing |
| `/courses/startup-fundamentals-for-founders` | Course detail page (example) |
| `/courses/product-market-fit-mastery` | Course detail page (example) |

## Performance Optimizations

1. **Image Optimization**: Using `next/image` with automatic WebP/AVIF conversion
2. **Font Optimization**: Self-hosted fonts with `next/font` to prevent layout shift
3. **Static Generation**: Pre-rendered pages for instant loading
4. **Code Splitting**: Automatic route-based code splitting
5. **CSS Optimization**: Tailwind CSS with automatic purging

## Lighthouse Scores

The page is optimized to achieve 90+ scores in:
- **Performance**: Static generation, optimized images, efficient CSS
- **SEO**: Complete metadata, semantic HTML, structured data
- **Accessibility**: ARIA labels, proper heading hierarchy, skip links
- **Best Practices**: HTTPS-ready, no deprecated APIs

## Testing the JSON-LD

You can validate the structured data using:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_BASE_URL` | Base URL for canonical links | `https://starthub.academy` |

## License

This project is created for the StartHub Academy interview task.

---

**Author**: Elgiz Ismayilov  
**Date**: February 2026
# next_start_hub
