'use client';

import { AppConfig } from "config/AppConfig";

export default function Instagram() {
  return (
    <div className="sm:flex transition-shadow duration-300 mt-8 inline-block">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={AppConfig.social.instagram}
        data-instgrm-version="14"
      ></blockquote>
      <script async src="//www.instagram.com/embed.js"></script>
    </div>
  );
}
