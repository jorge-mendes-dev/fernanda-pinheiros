import { AppConfig } from 'config/AppConfig';
import {
  BeakerIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  DevicePhoneMobileIcon,
  HeartIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline'

// feature.icon in AppConfig.evaluation.includes
const ICONS = {
  assessment: ScaleIcon,
  guidance: ChatBubbleLeftRightIcon,
  recipes: BookOpenIcon,
  exams: BeakerIcon,
  supplements: ClipboardDocumentListIcon,
  support: DevicePhoneMobileIcon,
};

export default function Evaluation() {
  const { evaluation } = AppConfig;
  return (
    <>
      <div className="relative bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary/10 to-pink-200/20 px-4 py-2 text-sm font-bold text-primary ring-1 ring-primary/20 mb-4">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {evaluation.highlight}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-display">
            {evaluation.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
            {evaluation.description}
          </p>
          {/* Compact 2-column grid on mobile: six tall stacked cards made a very long scroll */}
          <ul role="list" className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {evaluation.includes.map((feature) => {
              const Icon = ICONS[feature.icon] ?? HeartIcon;
              return (
                <li
                  key={feature.title}
                  className="group flex flex-col items-center rounded-2xl bg-gradient-to-br from-pink-50 to-white px-3 py-6 text-center shadow-sm ring-1 ring-pink-100 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-primary/30 sm:px-6 sm:py-8"
                >
                  <span className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-pink-600 p-2.5 shadow-md transition-transform duration-300 group-hover:scale-110 sm:p-3">
                    <Icon aria-hidden="true" className="size-6 text-white sm:size-7" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold leading-snug tracking-tight text-gray-900 transition-colors group-hover:text-primary sm:mt-5 sm:text-lg">
                    {feature.title}
                  </h3>
                  {feature.description && <p className="mt-1 text-xs text-gray-600 sm:text-sm">{feature.description}</p>}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
