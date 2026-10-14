import { siteUrl as baseUrl } from 'config/site';

// No lastModified: the build date on every page would tell crawlers that
// everything changes on each deploy, and they would stop trusting it.
export default function sitemap() {
  return [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sobre`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dicas`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/redes-sociais`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
