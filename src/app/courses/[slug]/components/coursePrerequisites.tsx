import { InfoIcon } from '@/assets/icons';

interface CoursePrerequisitesProps {
  prerequisites: string[];
}

export function CoursePrerequisites({ prerequisites }: CoursePrerequisitesProps) {
  return (
    <section aria-labelledby="prerequisites-heading" className="mb-8">
      <h2 id="prerequisites-heading" className="mb-4 text-2xl font-bold text-gray-900">
        Prerequisites
      </h2>
      <ul className="space-y-2" role="list">
        {prerequisites.map((prerequisite, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-700">
            <span className="mt-1 flex-shrink-0 text-indigo-600" aria-hidden="true">
              <InfoIcon />
            </span>
            {prerequisite}
          </li>
        ))}
      </ul>
    </section>
  );
}
