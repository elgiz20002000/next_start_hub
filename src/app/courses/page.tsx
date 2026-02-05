import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllCourses } from '@/services/courseService';
import { StarRating } from '@/components/starRating';
import { formatDuration } from '@/utils';

export const metadata: Metadata = {
  title: 'All Courses',
  description:
    'Browse all entrepreneurship courses at StartHub Academy. Learn from experienced founders and industry experts.',
  openGraph: {
    title: 'All Courses | StartHub Academy',
    description:
      'Browse all entrepreneurship courses at StartHub Academy. Learn from experienced founders and industry experts.',
  },
};

export default async function CoursesPage() {
  const courses = await getAllCourses();

  return (
    <main className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">All Courses</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Explore our comprehensive collection of entrepreneurship courses designed to help
            you build and scale your startup.
          </p>
        </header>

        <section aria-label="Course listings">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.id}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <Link href={`/courses/${course.slug}`} className="block">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={course.image}
                      alt={`${course.name} - Course Preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                      {course.level}
                    </span>
                  </div>

                  <div className="p-6">
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600">
                      {course.name}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                      {course.shortDescription}
                    </p>

                    <p className="mt-4 text-sm text-gray-500">
                      By {course.instructor.name}
                    </p>

                    {course.rating && (
                      <div className="mt-3 flex items-center gap-2">
                        <StarRating rating={course.rating.ratingValue} />
                        <span className="text-sm font-medium text-gray-900">
                          {course.rating.ratingValue.toFixed(1)}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({course.rating.reviewCount.toLocaleString()})
                        </span>
                      </div>
                    )}

                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="text-xl font-bold text-indigo-600">
                        ${course.price.amount}
                      </span>
                      <span className="text-sm text-gray-500">
                        {formatDuration(course.duration)}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
