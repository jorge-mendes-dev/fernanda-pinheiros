import { AppConfig } from 'config/AppConfig';

export default function sitemap() {
  const baseUrl = `https://${AppConfig.url}`;
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dicas`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/redes-sociais`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...AppConfig.social.links.map((link) => ({
      url: link.url,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    })),
  ];
}
