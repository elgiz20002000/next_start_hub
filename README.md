# StartHub Academy - SEO-Optimized Course Platform

A high-performance, SEO-optimized course platform built with Next.js 15 App Router. This project demonstrates best practices for Static Site Generation (SSG), dynamic metadata generation, and structured data implementation.

## Features

- **Dynamic Metadata Generation**: Automatic `<title>`, `<meta description>`, and Open Graph tags based on course data
- **JSON-LD Structured Data**: Schema.org Course markup for rich snippets in search results
- **Static Site Generation (SSG)**: Pre-rendered pages with `generateStaticParams` for optimal performance
- **Request Memoization**: React `cache()` for efficient data fetching
- **Semantic HTML**: Proper heading hierarchy, ARIA labels, and accessible navigation
- **Core Web Vitals Optimized**: Designed for 90+ Lighthouse scores
- **TypeScript + Zod**: Type-safe data validation throughout the application

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Validation**: Zod
- **Fonts**: Geist (optimized with `next/font`)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout with global metadata
│   ├── globals.css                   # Global styles and Tailwind imports
│   │
│   ├── (home)/                       # Route group for home page
│   │   ├── page.tsx                  # Home page
│   │   └── components/
│   │       ├── heroSection.tsx
│   │       ├── featuredCourses.tsx
│   │       ├── courseCard.tsx
│   │       ├── ctaSection.tsx
│   │       └── index.ts
│   │
│   └── courses/
│       ├── page.tsx                  # All courses listing
│       └── [slug]/
│           ├── page.tsx              # Course detail page
│           ├── not-found.tsx         # 404 for invalid courses
│           └── components/
│               ├── courseHeader.tsx
│               ├── courseSidebar.tsx
│               ├── courseSyllabus.tsx
│               ├── courseSkills.tsx
│               ├── coursePrerequisites.tsx
│               └── index.ts
│
├── assets/
│   └── icons/                        # SVG icon components
│       ├── types.ts                  # Shared IconProps interface
│       ├── clockIcon.tsx
│       ├── videoIcon.tsx
│       └── ...
│
├── components/                       # Global shared components
│   └── starRating.tsx
│
├── data/
│   └── courses.ts                    # Mock course data
│
├── services/
│   └── courseService.ts              # Data fetching with cache()
│
├── lib/
│   ├── jsonLd.ts                     # JSON-LD structured data generator
│   └── metadata.ts                   # Metadata generation utilities
│
├── schemas/
│   └── course.ts                     # Zod schemas for type validation
│
└── utils/
    ├── formatDate.ts
    ├── formatDuration.ts
    ├── formatPrice.ts
    └── index.ts
```

## Architecture Decisions

### Component Organization

- **Page-specific components**: Co-located with their pages in `components/` subdirectories
- **Global components**: Shared across multiple pages, located in `src/components/`
- **Route groups**: `(home)` folder organizes files without affecting URLs

### Data Layer

- **Data** (`src/data/`): Raw mock data
- **Services** (`src/services/`): Data fetching with React `cache()` for request deduplication

### Utility Functions

Separated into individual files in `src/utils/` for better maintainability:
- `formatDate.ts` - Date formatting
- `formatDuration.ts` - ISO 8601 duration parsing
- `formatPrice.ts` - Currency formatting

## SEO Implementation

### 1. Dynamic Metadata

The course detail page uses `generateMetadata` to create dynamic metadata:

```typescript
export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
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
export function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
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

| Route                                        | Description                     |
| -------------------------------------------- | ------------------------------- |
| `/`                                          | Home page with featured courses |
| `/courses`                                   | All courses listing             |
| `/courses/startup-fundamentals-for-founders` | Course detail page              |
| `/courses/product-market-fit-mastery`        | Course detail page              |

## Performance Optimizations

1. **Image Optimization**: Using `next/image` with automatic WebP/AVIF conversion
2. **Font Optimization**: Self-hosted fonts with `next/font` to prevent layout shift
3. **Static Generation**: Pre-rendered pages for instant loading
4. **Request Memoization**: React `cache()` prevents duplicate data fetches
5. **Code Splitting**: Automatic route-based code splitting
6. **CSS Optimization**: Tailwind CSS with automatic purging

## Lighthouse Scores

The page is optimized to achieve 90+ scores in:
- **Performance**: Static generation, optimized images, efficient CSS
- **SEO**: Complete metadata, semantic HTML, structured data
- **Accessibility**: ARIA labels, proper heading hierarchy, skip links
- **Best Practices**: HTTPS-ready, no deprecated APIs

## Testing the JSON-LD

Validate the structured data using:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)


## License

This project is created for the StartHub Academy interview task.

---

**Author**: Elgiz Ismayilov  
**Date**: February 2026
