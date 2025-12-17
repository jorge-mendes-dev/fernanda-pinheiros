import { AppConfig } from "config/AppConfig";
import { FaWhatsapp } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import Link from "next/link";

export default function Schedule() {
  const { schedule } = AppConfig;
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-pink-400 via-pink-300 to-pink-200 shadow-xl" id="schedule">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />
      <div className="relative px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Disponível para atendimento
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-balance text-white sm:text-5xl drop-shadow-sm">
            {schedule.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-white/90 font-medium">
            {schedule.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-x-6">
            <Link
              href={schedule.link.href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-center rounded-xl bg-white px-6 py-4 text-base font-bold text-primary shadow-xl transition-all hover:shadow-2xl hover:scale-105 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center">
                {schedule.link.label}
                <FaWhatsapp className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
              </span>
            </Link>
            <Link
              href={schedule.social.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center text-base font-semibold text-white px-4 py-3 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              {schedule.social.label}
              <CiInstagram className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
