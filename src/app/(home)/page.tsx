import { getAllCourses } from '@/services/courseService';
import { HeroSection, FeaturedCourses, CtaSection } from './components';

export default async function HomePage() {
  const courses = await getAllCourses();

  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedCourses courses={courses} />
      <CtaSection />
    </main>
  );
}
