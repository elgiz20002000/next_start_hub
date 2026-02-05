import Image from 'next/image';
import Link from 'next/link';
import type { Course } from '@/schemas/course';
import { StarRating } from '@/components/starRating';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <Link href={`/courses/${course.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={course.image}
            alt={`${course.name} - Course Preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
            {course.level}
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600">
            {course.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-gray-600">{course.shortDescription}</p>

          <p className="mt-4 text-sm text-gray-500">By {course.instructor.name}</p>

          <div className="mt-4 flex items-center justify-between">
            {course.rating && (
              <div className="flex items-center gap-2">
                <StarRating rating={course.rating.ratingValue} />
                <span className="text-sm font-medium text-gray-900">
                  {course.rating.ratingValue.toFixed(1)}
                </span>
                <span className="text-sm text-gray-500">
                  ({course.rating.reviewCount.toLocaleString()})
                </span>
              </div>
            )}
            <span className="text-xl font-bold text-indigo-600">${course.price.amount}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
