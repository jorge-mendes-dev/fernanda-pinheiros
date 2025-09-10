import localFont from 'next/font/local';
import { AppConfig } from 'config/AppConfig';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
  url: AppConfig.url,
  author: AppConfig.site_name,
  keywords: AppConfig.keywords,
};

export default function RootLayout({ children }) {
  return (
    <html lang={AppConfig.locale}>
      <head>
        <meta property="og:title" content={AppConfig.title} />
        <meta property="og:description" content={AppConfig.description} />
        <meta property="og:url" content={AppConfig.url} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${AppConfig.title} RSS feed`}
          href="/rss.xml"
        />
        <link
          rel="alternate"
          type="application/sitemap+xml"
          title={`${AppConfig.title} sitemap`}
          href="/sitemap.xml"
        />
        <meta
          property="og:image"
          content={`${AppConfig.url}/assets/header.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta name="theme-color" content={AppConfig.bg_color} />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={AppConfig.bg_color}
        />
        <meta
          name="msapplication-navbutton-color"
          content={AppConfig.bg_color}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
