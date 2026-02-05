import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Learn Entrepreneurship
          <br />
          <span className="text-indigo-300">From Experts Who&apos;ve Done It</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-200">
          Get hands-on guidance, expert-led training, exclusive tools, and access to a strong
          community of startup builders and investors.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/courses"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
          >
            Explore Courses
          </Link>
          <a
            href="#"
            className="rounded-lg border border-indigo-300 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-800"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
