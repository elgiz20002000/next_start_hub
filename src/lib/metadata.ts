import type { Metadata } from 'next';
import type { Course } from '@/schemas/course';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://starthub.academy';

export const defaultMetadata: Metadata = {
  title: {
    default: 'StartHub Academy - Learn Entrepreneurship from Experts',
    template: '%s | StartHub Academy',
  },
  description:
    'Master entrepreneurship with expert-led courses. Get hands-on guidance, exclusive tools, and access to a community of startup builders and investors.',
  keywords: ['entrepreneurship', 'startup', 'founder', 'business', 'courses', 'education'],
  authors: [{ name: 'StartHub Academy' }],
  creator: 'StartHub Academy',
  publisher: 'StartHub Academy',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'StartHub Academy',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@starthubacademy',
    creator: '@starthubacademy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function generateCourseMetadata(course: Course): Metadata {
  const courseUrl = `${BASE_URL}/courses/${course.slug}`;
  const title = `${course.name} - ${course.level} Course`;

  return {
    title,
    description: course.shortDescription,
    keywords: [
      ...course.skills,
      course.level.toLowerCase(),
      'online course',
      'entrepreneurship',
      course.provider.name,
    ],
    authors: [{ name: course.instructor.name, url: course.instructor.url }],
    openGraph: {
      title,
      description: course.shortDescription,
      url: courseUrl,
      siteName: 'StartHub Academy',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: course.image,
          width: 1200,
          height: 630,
          alt: `${course.name} - Course Cover Image`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: course.shortDescription,
      images: [course.image],
      site: '@starthubacademy',
      creator: '@starthubacademy',
    },
    alternates: {
      canonical: courseUrl,
    },
  };
}
