import { AppConfig } from 'config/AppConfig';
import { phone, siteUrl as baseUrl } from 'config/site';
import { Inter, Pinyon_Script } from 'next/font/google';
import './globals.css';

// The variable names must not collide with Tailwind's own --font-sans /
// --font-display (globals.css). Pinyon Script (titles) has a single weight;
// Inter is a variable font, one file for every weight.
const pinyonScript = Pinyon_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pinyon',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
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
};

// "R$ 1.150,00" -> "1150.00"; null when the price has no number ("Sob consulta")
const priceValue = (price) => {
  const value = price?.replace(/[^\d,]/g, '').replace(',', '.');
  return value && Number(value) > 0 ? value : null;
};
const sentence = (text) => text.trim().replace(/[.!]+$/, '');

export default function RootLayout({ children }) {
  const { curriculum, pricing } = AppConfig;
  const prices = pricing.plans.map((plan) => Number(priceValue(plan.price))).filter(Boolean);

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
        telephone: phone,
        image: `${baseUrl}${AppConfig.header.image.src}`,
        ...(prices.length && { priceRange: `R$ ${Math.min(...prices)} - R$ ${Math.max(...prices)}` }),
        paymentAccepted: sentence(pricing.payment.replace(/^Pagamento via /, '')),
        currenciesAccepted: 'BRL',
        areaServed: [
          { '@type': 'City', name: 'São Paulo' },
          { '@type': 'Country', name: 'Brasil' },
        ],
        founder: { '@id': `${baseUrl}/#fernanda` },
        makesOffer: pricing.plans.map((plan) => ({
          '@type': 'Offer',
          name: plan.name,
          description: `${[plan.description, ...plan.details, plan.note].filter(Boolean).map(sentence).join('. ')}.`,
          ...(priceValue(plan.price) && { price: priceValue(plan.price), priceCurrency: 'BRL' }),
          url: `${baseUrl}/#pricing`,
        })),
        logo: {
          '@type': 'ImageObject',
          url: `https://${AppConfig.url}${AppConfig.company.logo.src}`,
        },
        sameAs: [
          AppConfig.social.instagram,
          AppConfig.social.tiktok,
          AppConfig.social.whatsapp,
          AppConfig.social.linkedin,
        ],
        address: {
          '@type': 'PostalAddress',
          ...AppConfig.office.addressParts,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: AppConfig.office.geo.latitude,
          longitude: AppConfig.office.geo.longitude,
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
        '@type': 'Person',
        '@id': `${baseUrl}/#fernanda`,
        name: 'Fernanda Souza',
        jobTitle: 'Nutricionista',
        description: AppConfig.about.description,
        image: `${baseUrl}${AppConfig.header.image.src}`,
        url: `${baseUrl}/sobre`,
        worksFor: { '@id': `${baseUrl}/#organization` },
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Registro profissional',
          name: AppConfig.crn,
          recognizedBy: {
            '@type': 'Organization',
            name: 'Conselho Regional de Nutricionistas da 3ª Região (CRN-3)',
          },
        },
        alumniOf: curriculum.education.map((item) => ({
          '@type': 'EducationalOrganization',
          name: item.institution,
        })),
        knowsAbout: [
          'Nutrição Clínica',
          'Nutrição Materno-Infantil',
          'Nutrição Esportiva',
          'Introdução alimentar',
          'Nutrição na gestação e lactação',
          'Plano alimentar personalizado',
        ],
        sameAs: [AppConfig.social.instagram, AppConfig.social.tiktok, AppConfig.social.linkedin],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `https://${AppConfig.url}/#service`,
        name: AppConfig.site_name,
        serviceType: [
          'Nutrição Clínica',
          'Nutrição Materno-Infantil',
          'Nutrição Esportiva',
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
        publisher: { '@id': `${baseUrl}/#organization` },
      },
    ],
  };

  return (
    <html lang={AppConfig.locale} className={`light bg-white ${pinyonScript.variable} ${inter.variable}`}>
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
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
