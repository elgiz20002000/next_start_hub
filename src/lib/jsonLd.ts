import type { Course } from '@/schemas/course';

interface CourseJsonLd {
  '@context': 'https://schema.org';
  '@type': 'Course';
  name: string;
  description: string;
  url: string;
  image: string;
  provider: {
    '@type': 'Organization';
    name: string;
    url: string;
    logo?: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  instructor: {
    '@type': 'Person';
    name: string;
    url?: string;
    image?: string;
  };
  coursePrerequisites?: string;
  educationalLevel: string;
  inLanguage: string;
  timeRequired: string;
  datePublished: string;
  dateModified: string;
  teaches: string;
  hasCourseInstance: {
    '@type': 'CourseInstance';
    courseMode: string;
    courseWorkload: string;
  };
  offers: {
    '@type': 'Offer';
    price: number;
    priceCurrency: string;
    availability: string;
    url: string;
  };
  aggregateRating?: {
    '@type': 'AggregateRating';
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
}

export function generateCourseJsonLd(course: Course, baseUrl: string): CourseJsonLd {
  const jsonLd: CourseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    url: `${baseUrl}/courses/${course.slug}`,
    image: course.image,
    provider: {
      '@type': 'Organization',
      name: course.provider.name,
      url: course.provider.url,
      ...(course.provider.logo && {
        logo: {
          '@type': 'ImageObject',
          url: course.provider.logo,
        },
      }),
    },
    instructor: {
      '@type': 'Person',
      name: course.instructor.name,
      ...(course.instructor.url && { url: course.instructor.url }),
      ...(course.instructor.image && { image: course.instructor.image }),
    },
    coursePrerequisites: course.prerequisites?.join(', '),
    educationalLevel: course.level,
    inLanguage: course.language,
    timeRequired: course.duration,
    datePublished: course.publishedAt,
    dateModified: course.updatedAt,
    teaches: course.skills.join(', '),
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: course.duration,
    },
    offers: {
      '@type': 'Offer',
      price: course.price.amount,
      priceCurrency: course.price.currency,
      availability: 'https://schema.org/InStock',
      url: `${baseUrl}/courses/${course.slug}`,
    },
  };

  if (course.rating) {
    jsonLd.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: course.rating.ratingValue,
      reviewCount: course.rating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return jsonLd;
}

export function stringifyJsonLd<T>(jsonLd: T): string {
  return JSON.stringify(jsonLd).replace(/</g, '\\u003c');
}
