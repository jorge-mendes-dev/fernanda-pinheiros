import { AppConfig } from 'config/AppConfig';

export default function robots() {
  const baseUrl = `https://${AppConfig.url}`;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
