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
  metadataBase: new URL(`https://${AppConfig.url}`),
  title: {
    default: AppConfig.title,
    template: `%s | ${AppConfig.site_name}`
  },
  description: AppConfig.description,
  keywords: AppConfig.keywords,
  authors: [{ name: AppConfig.site_name }],
  creator: AppConfig.site_name,
  publisher: AppConfig.site_name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: AppConfig.locale,
    url: `https://${AppConfig.url}`,
    title: AppConfig.title,
    description: AppConfig.description,
    siteName: AppConfig.site_name,
    images: [
      {
        url: `https://${AppConfig.url}/assets/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: AppConfig.site_name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: AppConfig.title,
    description: AppConfig.description,
    images: [`https://${AppConfig.url}/assets/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: `https://${AppConfig.url}`,
    types: {
      'application/rss+xml': `https://${AppConfig.url}/rss.xml`,
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
};

export default function RootLayout({ children }) {
  // Structured data JSON-LD
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `https://${AppConfig.url}/#organization`,
        name: 'Fernanda Souza - Nutricionista',
        legalName: `Fernanda Souza Nutricionista ${AppConfig.crn}`,
        description: AppConfig.description,
        url: `https://${AppConfig.url}`,
        telephone: '+55-11-97827-1175',
        image: `https://${AppConfig.url}/assets/images/header.jpg`,
        logo: {
          '@type': 'ImageObject',
          url: `https://${AppConfig.url}${AppConfig.company.logo.src}`,
        },
        sameAs: [
          AppConfig.social.instagram,
          AppConfig.social.tiktok,
          AppConfig.social.whatsapp,
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'São Paulo',
          addressRegion: 'SP',
          addressCountry: 'BR',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
          },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `https://${AppConfig.url}/#service`,
        name: AppConfig.site_name,
        serviceType: [
          'Nutrição Clínica',
          'Nutrição Materno-Infantil',
          'Consultas Online',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `https://${AppConfig.url}/#website`,
        url: `https://${AppConfig.url}`,
        name: AppConfig.site_name,
        description: AppConfig.description,
        inLanguage: 'pt-BR',
      },
    ],
  };

  return (
    <html lang={AppConfig.locale} className='light bg-white'>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content={AppConfig.bg_color} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-navbutton-color" content={AppConfig.bg_color} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
