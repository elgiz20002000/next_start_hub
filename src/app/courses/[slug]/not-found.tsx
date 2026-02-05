import Link from 'next/link';

export default function CourseNotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-bold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Course Not Found</h1>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, we couldn&apos;t find the course you&apos;re looking for.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Go Home
          </Link>
          <Link
            href="/courses"
            className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </main>
  );
}
