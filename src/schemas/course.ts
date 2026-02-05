import { z } from 'zod';

export const InstructorSchema = z.object({
  name: z.string().min(1, 'Instructor name is required'),
  url: z.string().url().optional(),
  image: z.string().url().optional(),
});

export const ProviderSchema = z.object({
  name: z.string().min(1, 'Provider name is required'),
  url: z.string().url(),
  logo: z.string().url().optional(),
});

export const RatingSchema = z.object({
  ratingValue: z.number().min(0).max(5),
  reviewCount: z.number().int().positive(),
});

export const CourseSchema = z.object({
  id: z.string().min(1, 'Course ID is required'),
  slug: z.string().min(1, 'Course slug is required'),
  name: z.string().min(1, 'Course name is required'),
  description: z.string().min(1, 'Course description is required'),
  shortDescription: z.string().min(1, 'Short description is required'),
  image: z.string().url('Valid image URL is required'),
  provider: ProviderSchema,
  instructor: InstructorSchema,
  price: z.object({
    amount: z.number().nonnegative(),
    currency: z.string().length(3),
  }),
  duration: z.string().min(1, 'Duration is required'),
  level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  language: z.string().min(1, 'Language is required'),
  rating: RatingSchema.optional(),
  enrollmentCount: z.number().int().nonnegative().optional(),
  prerequisites: z.array(z.string()).optional(),
  syllabus: z.array(
    z.object({
      title: z.string(),
      duration: z.string(),
      lessons: z.number().int().positive(),
    })
  ),
  skills: z.array(z.string()),
  publishedAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Instructor = z.infer<typeof InstructorSchema>;
export type Provider = z.infer<typeof ProviderSchema>;
export type Rating = z.infer<typeof RatingSchema>;
export type Course = z.infer<typeof CourseSchema>;
