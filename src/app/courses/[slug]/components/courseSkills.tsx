import { CheckIcon } from '@/assets/icons';

interface CourseSkillsProps {
  skills: string[];
}

export function CourseSkills({ skills }: CourseSkillsProps) {
  return (
    <section aria-labelledby="skills-heading" className="mb-8">
      <h2 id="skills-heading" className="mb-4 text-2xl font-bold text-gray-900">
        What You&apos;ll Learn
      </h2>
      <ul className="flex flex-wrap gap-2" role="list">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700"
          >
            <CheckIcon />
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
