import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="bg-indigo-50 py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to Start Your Entrepreneurship Journey?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Join thousands of founders who have transformed their ideas into successful businesses
          with our expert-led courses.
        </p>
        <Link
          href="/courses/startup-fundamentals-for-founders"
          className="mt-8 inline-block rounded-lg bg-indigo-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
}
