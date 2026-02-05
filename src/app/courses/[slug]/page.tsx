import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCourseBySlug, getAllCourseSlugs } from '@/services/courseService';
import { generateCourseMetadata, BASE_URL } from '@/lib/metadata';
import { generateCourseJsonLd, stringifyJsonLd } from '@/lib/jsonLd';
import {
  CourseHeader,
  CourseSidebar,
  CourseSyllabus,
  CourseSkills,
  CoursePrerequisites,
} from './components';

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    return {
      title: 'Course Not Found',
      description: 'The requested course could not be found.',
    };
  }

  return generateCourseMetadata(course);
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const jsonLd = generateCourseJsonLd(course, BASE_URL);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(jsonLd),
        }}
      />

      <main className="min-h-screen bg-gray-50">
        <CourseHeader course={course} />

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <article className="lg:col-span-2">
              <section aria-labelledby="description-heading" className="mb-8">
                <h2
                  id="description-heading"
                  className="mb-4 text-2xl font-bold text-gray-900"
                >
                  About This Course
                </h2>
                <p className="leading-relaxed text-gray-700">{course.description}</p>
              </section>

              <CourseSkills skills={course.skills} />

              {course.prerequisites && course.prerequisites.length > 0 && (
                <CoursePrerequisites prerequisites={course.prerequisites} />
              )}

              <CourseSyllabus syllabus={course.syllabus} />
            </article>

            <aside className="mt-8 lg:mt-0">
              <CourseSidebar course={course} />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
