import type { Course } from '@/schemas/course';
import { VideoIcon, BookIcon, ModuleIcon, DeviceIcon, CertificateIcon } from '@/assets/icons';
import { formatPrice, formatDuration } from '@/utils';

interface CourseSidebarProps {
  course: Course;
}

export function CourseSidebar({ course }: CourseSidebarProps) {
  const totalLessons = course.syllabus.reduce((sum, module) => sum + module.lessons, 0);

  return (
    <div className="sticky top-8 rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
      <div className="mb-6 text-center">
        <p className="text-4xl font-bold text-gray-900">
          {formatPrice(course.price.amount, course.price.currency)}
        </p>
        <p className="mt-1 text-sm text-gray-500">Full lifetime access</p>
      </div>

      <button
        type="button"
        className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        aria-label={`Enroll in ${course.name}`}
      >
        Enroll Now
      </button>

      <p className="mt-3 text-center text-sm text-gray-500">30-day money-back guarantee</p>

      <div className="mt-6 border-t border-gray-200 pt-6">
        <h3 className="mb-4 font-semibold text-gray-900">This course includes:</h3>
        <ul className="space-y-3">
          <SidebarItem
            icon={<VideoIcon />}
            text={`${formatDuration(course.duration)} of video content`}
          />
          <SidebarItem icon={<BookIcon />} text={`${totalLessons} lessons`} />
          <SidebarItem icon={<ModuleIcon />} text={`${course.syllabus.length} modules`} />
          <SidebarItem icon={<DeviceIcon />} text="Access on mobile and desktop" />
          <SidebarItem icon={<CertificateIcon />} text="Certificate of completion" />
        </ul>
      </div>

      <div className="mt-6 border-t border-gray-200 pt-6">
        <p className="text-sm text-gray-500">
          Offered by{' '}
          <a
            href={course.provider.url}
            className="font-medium text-indigo-600 hover:text-indigo-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {course.provider.name}
          </a>
        </p>
      </div>
    </div>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
}

function SidebarItem({ icon, text }: SidebarItemProps) {
  return (
    <li className="flex items-center gap-3 text-sm text-gray-700">
      <span className="flex-shrink-0 text-indigo-600" aria-hidden="true">
        {icon}
      </span>
      {text}
    </li>
  );
}
