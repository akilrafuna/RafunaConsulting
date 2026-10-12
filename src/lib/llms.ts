import { firm } from '@/data/firm';
import { tax } from '@/data/tax';
import { getDict, locales, routes, serviceKeys } from '@/i18n';

const url = (path: string) => firm.site + path;

/** Concise profile following the llms.txt convention (llmstxt.org). */
export function llmsTxt() {
  const en = getDict('en');
  const lines = [
    `# ${firm.name}`,
    '',
    `> ${en.home.answer}`,
    '',
    'Key facts:',
    `- Address: ${firm.street}, ${firm.district}, ${firm.postalCode} Prishtinë (Pristina), Kosovo`,
    `- Coordinates: ${firm.geo.lat}, ${firm.geo.lng}`,
    `- Opening hours: Monday to Friday, ${firm.hours.opens}–${firm.hours.closes} (Kosovo time, Europe/Belgrade)`,
    `- Phone and WhatsApp: ${firm.phone}`,
    `- Email: ${firm.email}`,
    `- Founded: ${firm.founded} in Prishtina by ${firm.founder} (specialisation in accounting)`,
    `- Team: ${en.home.team.join('; ')}`,
    `- Sectors served: ${en.home.sectors.join(', ')}; businesses in Kosovo and owners living abroad`,
    '- Website languages: Albanian (default), English, German',
    '',
    '## Services',
    ...serviceKeys.map((k) => `- [${en.services[k].name}](${url(routes[k].en)}): ${en.services[k].summary}`),
    '',
    '## Guides',
    `- [${en.guide.h1}](${url(routes.guide.en)}): ${en.guide.meta.description}`,
    `- [${getDict('sq').guide.h1}](${url(routes.guide.sq)}): Albanian version`,
    `- [${getDict('de').guide.h1}](${url(routes.guide.de)}): German version`,
    '',
    '## Company',
    `- [About](${url(routes.about.en)}): history, founder, team and values`,
    `- [Contact and booking](${url(routes.contact.en)}): phone, WhatsApp, email and booking form`,
    `- [Full text for language models](${url('/llms-full.txt')})`,
    '',
    '## Optional',
    ...locales.map((l) => `- [${getDict(l).langName} home page](${url(routes.home[l])})`),
    '',
  ];
  return lines.join('\n');
}

/** Full English digest of the site's factual content, in Markdown. */
export function llmsFullTxt() {
  const en = getDict('en');
  const out: string[] = [`# ${firm.name}: full profile`, '', en.home.answer, ''];

  out.push('## Contact', '');
  out.push(`- Address: ${en.firm.addressLines.join(', ')}`);
  out.push(`- Hours: ${en.firm.days}, ${firm.hours.opens}–${firm.hours.closes}`);
  out.push(`- Phone and WhatsApp: ${firm.phone}`, `- Email: ${firm.email}`, `- Booking: ${url(routes.contact.en)}`, '');

  out.push('## Founder and team', '', ...en.about.founderText, '', en.about.teamText, '');

  for (const k of serviceKeys) {
    const s = en.services[k];
    out.push(`## ${s.name}`, '', `Source: ${url(routes[k].en)}`, '', s.answer, '');
    out.push(...s.includes.map((i) => `- **${i.title}:** ${i.text}`), '');
    out.push(`Who it is for: ${s.audience}`, '');
    for (const f of s.faqs) out.push(`### ${f.q}`, '', f.a, '');
  }

  const g = en.guide;
  out.push(`## ${g.h1}`, '', `Source: ${url(routes.guide.en)} (updated ${firm.updated})`, '', g.answer, '');
  out.push(`### ${g.calendarTitle}`, '', `| ${g.calendarHead.join(' | ')} |`, '| --- | --- | --- |');
  out.push(...g.calendar.map((r) => `| ${r.what} | ${r.when} | ${r.who} |`), '');
  out.push(`### ${g.ratesTitle}`, '', `| ${g.ratesHead.join(' | ')} |`, '| --- | --- | --- |');
  out.push(...g.rates.map((r) => `| ${r.what} | ${r.rate} | ${r.note} |`), '');
  out.push(`### ${g.pitTitle}`, '', `| ${g.pitHead.join(' | ')} |`, '| --- | --- |');
  out.push(...g.pit.map(([b, r]) => `| ${b} | ${r} |`), '');
  out.push(
    `${g.sourcesNote} ${tax.sources.map((s) => `${s.name} (${s.url}${s.reviewed ? `, reviewed ${s.reviewed}` : ''})`).join('; ')}.`,
    '',
    g.disclaimer,
    '',
  );

  out.push('## Frequently asked questions', '');
  for (const f of [...en.home.faqs, ...g.faqs]) out.push(`### ${f.q}`, '', f.a, '');
  return out.join('\n');
}
