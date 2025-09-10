'use client';

import { Suspense } from "react";
import { AppConfig } from "config/AppConfig";
import Loader from "./Loader";
import { useEffect, useRef } from "react";

export default function Instagram() {
    const instagramRef = useRef(null);

  useEffect(() => {
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <div className="sm:flex transition-shadow duration-300 mt-8 inline-block">
        <blockquote
          ref={instagramRef}
          className="instagram-media"
          data-instgrm-permalink={AppConfig.social.instagram}
          data-instgrm-version="14"
        ></blockquote>
      </div>
    </Suspense>
  );
}
