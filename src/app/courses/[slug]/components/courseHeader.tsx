import Image from 'next/image';
import Link from 'next/link';
import type { Course } from '@/schemas/course';
import { StarRating } from '@/components/starRating';
import { ClockIcon, LanguageIcon, CalendarIcon } from '@/assets/icons';
import { formatDuration, formatDate } from '@/utils';

interface CourseHeaderProps {
  course: Course;
}

export function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <header className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="mb-8 lg:mb-0">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center space-x-2 text-sm text-indigo-200">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/courses" className="hover:text-white transition-colors">
                    Courses
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white font-medium">
                  {course.name}
                </li>
              </ol>
            </nav>

            <span className="inline-block rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              {course.level}
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {course.name}
            </h1>

            <p className="mt-4 text-lg text-indigo-100">{course.shortDescription}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              {course.rating && (
                <div className="flex items-center gap-2">
                  <StarRating rating={course.rating.ratingValue} />
                  <span className="font-semibold">{course.rating.ratingValue.toFixed(1)}</span>
                  <span className="text-indigo-200">
                    ({course.rating.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
              )}
              {course.enrollmentCount && (
                <span className="text-indigo-200">
                  {course.enrollmentCount.toLocaleString()} students enrolled
                </span>
              )}
            </div>

            <div className="mt-6 flex items-center gap-3">
              {course.instructor.image && (
                <Image
                  src={course.instructor.image}
                  alt={`${course.instructor.name} - Course Instructor`}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              )}
              <div>
                <p className="text-sm text-indigo-200">Created by</p>
                <p className="font-medium">{course.instructor.name}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-indigo-200">
              <span className="flex items-center gap-1">
                <ClockIcon />
                {formatDuration(course.duration)}
              </span>
              <span className="flex items-center gap-1">
                <LanguageIcon />
                {course.language}
              </span>
              <span className="flex items-center gap-1">
                <CalendarIcon />
                Last updated {formatDate(course.updatedAt)}
              </span>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
            <Image
              src={course.image}
              alt={`${course.name} - Course Preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
