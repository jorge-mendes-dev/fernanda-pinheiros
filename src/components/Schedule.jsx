import { AppConfig } from "config/AppConfig";
import { FaWhatsapp, FaTiktok } from "react-icons/fa6";
import Link from "next/link";

export default function Schedule() {
  const { schedule } = AppConfig;
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-pink-400 via-pink-300 to-pink-200 shadow-xl" id="schedule">
      <div className="absolute inset-0 bg-grid-white/10 mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6)) pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="relative px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/25 backdrop-blur-sm px-5 py-3 text-sm font-bold text-white shadow-lg ring-1 ring-white/30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white shadow-sm"></span>
            </span>
            {schedule.subtitle}
          </div>
          <h2 className="text-4xl font-black tracking-tight text-balance text-white sm:text-6xl drop-shadow-lg">
            {schedule.title}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl text-pretty text-white font-medium leading-relaxed drop-shadow-sm">
            {schedule.description}
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-x-6">
            <Link
              href={schedule.link.href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-center rounded-xl bg-white px-8 py-5 text-lg font-black text-primary shadow-2xl transition-all hover:shadow-white/20 hover:scale-105 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white overflow-hidden"
            >
              <span className="absolute inset-0 bg-linear-to-r from-pink-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-3">
                <FaWhatsapp className="h-6 w-6 text-green-500 group-hover:scale-110 transition-transform" aria-hidden="true" />
                {schedule.link.label}
              </span>
            </Link>
            <Link
              href={schedule.social.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center text-lg font-bold text-white px-6 py-5 rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/15 backdrop-blur-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <FaTiktok className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
              {schedule.social.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
