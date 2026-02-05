import type { Course } from '@/schemas/course';

export const courses: Course[] = [
  {
    id: '1',
    slug: 'startup-fundamentals-for-founders',
    name: 'Startup Fundamentals: From Idea to Launch',
    description:
      'Master the essential skills needed to transform your startup idea into a thriving business. This comprehensive course covers everything from validating your concept and building an MVP to securing funding and scaling your venture. Learn from experienced founders and industry experts who have successfully navigated the startup journey. You will gain hands-on experience with real-world case studies, pitch deck creation, financial modeling, and customer development strategies.',
    shortDescription:
      'Learn the essential skills to transform your startup idea into a thriving business with hands-on guidance from experienced founders.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=630&fit=crop',
    provider: {
      name: 'StartHub Academy',
      url: 'https://starthub.academy',
      logo: 'https://starthub.academy/logo.png',
    },
    instructor: {
      name: 'Sarah Chen',
      url: 'https://starthub.academy/instructors/sarah-chen',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    },
    price: {
      amount: 299,
      currency: 'USD',
    },
    duration: 'PT40H',
    level: 'Beginner',
    language: 'English',
    rating: {
      ratingValue: 4.8,
      reviewCount: 1247,
    },
    enrollmentCount: 15420,
    prerequisites: [
      'Basic understanding of business concepts',
      'Passion for entrepreneurship',
      'Access to a computer with internet connection',
    ],
    syllabus: [
      {
        title: 'Module 1: Ideation & Validation',
        duration: '8 hours',
        lessons: 12,
      },
      {
        title: 'Module 2: Building Your MVP',
        duration: '10 hours',
        lessons: 15,
      },
      {
        title: 'Module 3: Customer Development',
        duration: '6 hours',
        lessons: 8,
      },
      {
        title: 'Module 4: Funding & Pitching',
        duration: '8 hours',
        lessons: 10,
      },
      {
        title: 'Module 5: Growth & Scaling',
        duration: '8 hours',
        lessons: 12,
      },
    ],
    skills: [
      'Business Model Canvas',
      'MVP Development',
      'Pitch Deck Creation',
      'Financial Modeling',
      'Customer Discovery',
      'Fundraising Strategy',
    ],
    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2025-12-01T14:30:00Z',
  },
  {
    id: '2',
    slug: 'product-market-fit-mastery',
    name: 'Product-Market Fit Mastery: Finding Your Niche',
    description:
      'Discover the proven frameworks and strategies to achieve product-market fit for your startup. This advanced course dives deep into market research, customer segmentation, competitive analysis, and iterative product development. Learn how to identify your ideal customer profile, validate demand, and position your product for maximum market impact. Includes real case studies from successful startups that found their PMF.',
    shortDescription:
      'Master proven frameworks to achieve product-market fit and position your startup for success.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
    provider: {
      name: 'StartHub Academy',
      url: 'https://starthub.academy',
      logo: 'https://starthub.academy/logo.png',
    },
    instructor: {
      name: 'Marcus Rodriguez',
      url: 'https://starthub.academy/instructors/marcus-rodriguez',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    },
    price: {
      amount: 399,
      currency: 'USD',
    },
    duration: 'PT30H',
    level: 'Intermediate',
    language: 'English',
    rating: {
      ratingValue: 4.9,
      reviewCount: 856,
    },
    enrollmentCount: 8750,
    prerequisites: [
      'Basic startup experience or completed Startup Fundamentals',
      'An existing product idea or early-stage startup',
      'Understanding of basic market research concepts',
    ],
    syllabus: [
      {
        title: 'Module 1: Understanding Product-Market Fit',
        duration: '5 hours',
        lessons: 7,
      },
      {
        title: 'Module 2: Customer Research Deep Dive',
        duration: '8 hours',
        lessons: 10,
      },
      {
        title: 'Module 3: Competitive Positioning',
        duration: '6 hours',
        lessons: 8,
      },
      {
        title: 'Module 4: Iteration & Validation',
        duration: '6 hours',
        lessons: 9,
      },
      {
        title: 'Module 5: Scaling After PMF',
        duration: '5 hours',
        lessons: 6,
      },
    ],
    skills: [
      'Market Research',
      'Customer Segmentation',
      'Competitive Analysis',
      'Product Positioning',
      'Metrics & Analytics',
      'Growth Strategy',
    ],
    publishedAt: '2024-06-01T09:00:00Z',
    updatedAt: '2025-11-15T16:00:00Z',
  },
];

