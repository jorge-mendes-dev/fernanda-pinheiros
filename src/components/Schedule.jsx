import { AppConfig } from "config/AppConfig";
import { FaWhatsapp } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import Link from "next/link";

export default function Schedule() {
  const { schedule } = AppConfig;
  return (
    <div className="bg-pink-300 shadow-sm" id="schedule">
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            {schedule.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-zinc-900">
            {schedule.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link   
              href={schedule.link.href}
              target="_blank"
              rel="noreferrer"
              className="flex rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary shadow-xs hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {' '}
              {schedule.link.label}{' '}
              <FaWhatsapp className="ml-2 -mr-0.5 h-5 w-5" aria-hidden="true" />
            </Link>
            <Link 
              href={schedule.social.href}
              target="_blank"
              rel="noreferrer"
              className="flex text-sm/6 font-semibold text-white hover:underline">
              {schedule.social.label}{' '}
              <span aria-hidden="true"><CiInstagram className="ml-2 -mr-0.5 h-5 w-5" aria-hidden="true" /></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
