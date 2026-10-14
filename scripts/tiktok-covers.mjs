// Downloads the cover image of every post in AppConfig.tiktokVideos, for the
// TikTok grid on the home page. TikTok's profile embed is broken
// ("overload-protect triggered") and its CDN cover URLs expire, so the covers
// are saved in the repo.
//
// Run after adding a video to AppConfig.tiktokVideos:
//   node scripts/tiktok-covers.mjs
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { AppConfig } from '../src/config/AppConfig.js';

const COVERS_DIR = new URL('../public/assets/images/tiktok/', import.meta.url);
const MANIFEST = new URL('../src/config/tiktokCovers.json', import.meta.url);
const PUBLIC_PATH = '/assets/images/tiktok/';
const TIMEOUT = 15_000;
const MAX_ALT = 120;
const EXTENSIONS = {
  'image/jpeg': 'jpg',
  'image/webp': 'webp',
  'image/png': 'png',
  'image/avif': 'avif',
};
const HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36',
};

// The same endpoint TikTok's embed player (tiktok.com/player/v1/<id>) calls.
// It returns no items when asked for several ids at once, so fetch one by one.
async function fetchItem(id) {
  const params = new URLSearchParams({
    item_ids: id,
    language: 'pt-BR',
    aid: '1284',
    data_source: 'web_core',
    app_name: 'tiktok_web',
    device_platform: 'web_pc',
  });
  const res = await fetch(
    `https://www.tiktok.com/player/api/v1/items?${params}`,
    { headers: HEADERS, signal: AbortSignal.timeout(TIMEOUT) }
  );
  if (!res.ok) throw new Error(`items API answered ${res.status}`);
  const item = (await res.json()).items?.[0];
  if (!item) throw new Error('items API returned no post');
  return item;
}

async function downloadCover(urls, id) {
  for (const url of urls) {
    const res = await fetch(url, {
      headers: HEADERS,
      signal: AbortSignal.timeout(TIMEOUT),
    }).catch(() => null);
    const ext =
      EXTENSIONS[res?.headers.get('content-type')?.split(';')[0].trim()];
    if (!res?.ok || !ext) {
      await res?.body?.cancel();
      continue;
    }
    const file = `${id}.${ext}`;
    await writeFile(
      new URL(file, COVERS_DIR),
      Buffer.from(await res.arrayBuffer())
    );
    return file;
  }
  throw new Error('no cover URL answered with an image');
}

// The caption, without hashtags and emoji, cut to a short alt text
function altText(desc = '') {
  const text = desc
    .replace(/#\S+/g, '')
    .replace(/\p{Extended_Pictographic}|\uFE0F/gu, '')
    .replace(/\s+/g, ' ')
    .replace(/( \.)+\s*$/, '')
    .trim();
  if (!text) return 'Post no TikTok de Fernanda Souza';
  if (text.length <= MAX_ALT) return text;
  return `${text.slice(0, MAX_ALT).replace(/\s+\S*$/, '')}…`;
}

await mkdir(COVERS_DIR, { recursive: true });

// A post whose download fails keeps the cover it already had
const previous = JSON.parse(await readFile(MANIFEST, 'utf8').catch(() => '{}'));
const covers = {};
let failed = 0;

for (const { url } of AppConfig.tiktokVideos) {
  const id = url?.match(/\/(?:video|photo)\/(\d+)/)?.[1];
  if (!id) {
    console.warn(`skip: no post id in ${url}`);
    continue;
  }

  try {
    const item = await fetchItem(id);
    // Videos keep the cover in video_info, photo posts in image_post_info.
    // Use origin_cover (~100 KB JPEG), never cover (~900 KB PNG with TikTok's logo on it).
    const coverUrls =
      item.video_info?.origin_cover?.url_list ??
      item.image_post_info?.cover?.display_image?.url_list ??
      [];
    const file = await downloadCover(coverUrls, id);
    covers[id] = { src: PUBLIC_PATH + file, alt: altText(item.desc) };
    console.log(`ok:   ${id} -> ${file}`);
  } catch (error) {
    failed++;
    if (previous[id]) covers[id] = previous[id];
    console.error(
      `fail: ${id}: ${error.message}${previous[id] ? ' (kept the previous cover)' : ''}`
    );
  }
}

// Drop covers of posts that left AppConfig, only after a clean run, so a
// failing TikTok API never deletes covers that are still in use
if (!failed) {
  const keep = new Set(
    Object.values(covers).map(({ src }) => src.slice(PUBLIC_PATH.length))
  );
  for (const file of await readdir(COVERS_DIR)) {
    if (/^\d+\.(jpg|webp|png|avif)$/.test(file) && !keep.has(file))
      await rm(new URL(file, COVERS_DIR));
  }
}

await writeFile(MANIFEST, `${JSON.stringify(covers, null, 2)}\n`);
console.log(`\n${Object.keys(covers).length} covers saved, ${failed} failed`);
process.exitCode = failed ? 1 : 0;
