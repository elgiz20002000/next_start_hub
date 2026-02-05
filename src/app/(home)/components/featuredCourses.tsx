import type { Course } from '@/schemas/course';
import { CourseCard } from './courseCard';

interface FeaturedCoursesProps {
  courses: Course[];
}

export function FeaturedCourses({ courses }: FeaturedCoursesProps) {
  return (
    <section aria-labelledby="courses-heading" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="courses-heading" className="mb-8 text-center text-3xl font-bold text-gray-900">
          Featured Courses
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
