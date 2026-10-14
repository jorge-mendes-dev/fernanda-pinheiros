import { siteUrl } from 'config/site';

// AI assistants that search, cite or learn from the web. '*' already covers
// them; naming them documents that they are welcome. They share the '*' group,
// so any disallow added here applies to them too.
const AI_CRAWLERS = [
  'OAI-SearchBot', // ChatGPT search
  'ChatGPT-User', // ChatGPT browsing on a user's request
  'GPTBot', // OpenAI training
  'Google-Extended', // Gemini
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'Applebot-Extended', // Apple Intelligence
  'Bingbot', // Bing, which also feeds Copilot and ChatGPT search
];

export default function robots() {
  return {
    rules: [{ userAgent: ['*', ...AI_CRAWLERS], allow: '/' }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
