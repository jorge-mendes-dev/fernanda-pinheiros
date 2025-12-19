'use client';

import { Suspense } from "react";
import { AppConfig } from "config/AppConfig";
import Loader from "./Loader";
import { useEffect } from "react";
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa6";
import Link from "next/link";

export default function Instagram() {
  useEffect(() => {
    // Instagram embed script
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    // TikTok embed script
    if (!document.getElementById("tiktok-embed-script")) {
      const script = document.createElement("script");
      script.id = "tiktok-embed-script";
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <div className="my-8">
        {/* Social Media Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <Link
            href={AppConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 px-4 py-2.5 text-sm text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <CiInstagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
            Instagram
          </Link>
          <Link
            href={AppConfig.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <FaTiktok className="h-4 w-4 group-hover:scale-110 transition-transform" />
            TikTok
          </Link>
        </div>

        {/* Embeds */}
        <div className="space-y-4">
          {/* Instagram Embed */}
          <div className="max-w-md">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={AppConfig.social.instagram}
              data-instgrm-version="14"
              style={{ margin: '0 !important', width: '100%', maxWidth: '540px' }}
            ></blockquote>

            <blockquote
              className="tiktok-embed"
              cite={AppConfig.social.tiktok}
              data-unique-id={AppConfig.social.tiktokUsername}
              data-embed-type="creator"
              style={{ margin: '0 auto', width: '100%', maxWidth: '540px' }}
            >
              <section>
                <a target="_blank" rel="noopener noreferrer" href={AppConfig.social.tiktok}>@{AppConfig.social.tiktokUsername}</a>
              </section>
            </blockquote>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
