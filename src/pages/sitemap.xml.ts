import type { APIRoute } from 'astro';
import { firm } from '@/data/firm';
import { hreflang, locales, pageKeys, routes } from '@/i18n';

const priority: Record<string, string> = { home: '1.0', guide: '0.9', contact: '0.8' };

export const GET: APIRoute = () => {
  const urls = pageKeys.flatMap((page) =>
    locales.map((locale) => {
      const alternates = locales
        .map((l) => `<xhtml:link rel="alternate" hreflang="${hreflang[l]}" href="${firm.site}${routes[page][l]}"/>`)
        .join('');
      return [
        '<url>',
        `<loc>${firm.site}${routes[page][locale]}</loc>`,
        `<lastmod>${firm.updated}</lastmod>`,
        `<priority>${priority[page] ?? '0.8'}</priority>`,
        alternates,
        `<xhtml:link rel="alternate" hreflang="x-default" href="${firm.site}${routes[page].sq}"/>`,
        '</url>',
      ].join('');
    }),
  );
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    urls.join('\n') +
    '\n</urlset>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
