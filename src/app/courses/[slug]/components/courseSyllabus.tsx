import { LessonIcon, ClockIcon } from '@/assets/icons';

interface SyllabusModule {
  title: string;
  duration: string;
  lessons: number;
}

interface CourseSyllabusProps {
  syllabus: SyllabusModule[];
}

export function CourseSyllabus({ syllabus }: CourseSyllabusProps) {
  const totalLessons = syllabus.reduce((sum, module) => sum + module.lessons, 0);

  return (
    <section aria-labelledby="syllabus-heading" className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 id="syllabus-heading" className="text-2xl font-bold text-gray-900">
          Course Curriculum
        </h2>
        <span className="text-sm text-gray-500">
          {syllabus.length} modules • {totalLessons} lessons
        </span>
      </div>

      <ul className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
        {syllabus.map((module, index) => (
          <li key={index} className="p-4 transition-colors hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <h3 className="font-medium text-gray-900">{module.title}</h3>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <LessonIcon />
                  {module.lessons} lessons
                </span>
                <span className="flex items-center gap-1">
                  <ClockIcon />
                  {module.duration}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
