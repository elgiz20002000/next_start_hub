import { cache } from 'react';
import type { Course } from '@/schemas/course';
import { courses } from '@/data/courses';

export const getCourseBySlug = cache(async (slug: string): Promise<Course | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return courses.find((course) => course.slug === slug);
});

export const getAllCourses = cache(async (): Promise<Course[]> => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return courses;
});

export function getAllCourseSlugs(): string[] {
  return courses.map((course) => course.slug);
}
