import { firm, mapsHref } from '@/data/firm';
import { tax } from '@/data/tax';
import { getDict, routes, serviceKeys, type Locale, type PageKey, type ServiceKey } from '@/i18n';
import type { FAQ } from '@/i18n/types';

const site = firm.site;
const abs = (path: string) => site + path;
const ids = {
  firm: `${site}/#firm`,
  founder: `${site}/#agron-rafuna`,
  website: `${site}/#website`,
};

type Node = Record<string, unknown>;

function firmNode(locale: Locale): Node {
  const d = getDict(locale);
  return {
    '@type': 'AccountingService',
    '@id': ids.firm,
    name: firm.name,
    description: d.firm.description,
    slogan: d.firm.motto,
    url: abs(routes.home[locale]),
    logo: { '@type': 'ImageObject', url: abs('/brand/logo.png'), width: 960, height: 287 },
    image: abs('/og.png'),
    telephone: firm.phoneE164,
    email: firm.email,
    foundingDate: String(firm.founded),
    founder: { '@id': ids.founder },
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${firm.street}, ${firm.district}`,
      addressLocality: firm.city,
      postalCode: firm.postalCode,
      addressCountry: firm.countryCode,
    },
    geo: { '@type': 'GeoCoordinates', latitude: firm.geo.lat, longitude: firm.geo.lng },
    hasMap: mapsHref,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: firm.hours.days.map((day) => `https://schema.org/${day}`),
        opens: firm.hours.opens,
        closes: firm.hours.closes,
      },
    ],
    areaServed: [
      { '@type': 'Country', name: 'Kosovo' },
      { '@type': 'City', name: 'Prishtina' },
    ],
    knowsAbout: [
      'Accounting',
      'Bookkeeping',
      'Financial statements',
      'Value-added tax (VAT) in Kosovo',
      'Corporate income tax in Kosovo',
      'Personal income tax in Kosovo',
      'Tax audits by the Tax Administration of Kosovo (ATK)',
      'Financial planning',
      'Long-term investment advisory',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: firm.phoneE164,
        email: firm.email,
        areaServed: 'XK',
        availableLanguage: ['sq'],
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: d.nav.services,
      itemListElement: serviceKeys.map((k) => ({
        '@type': 'Offer',
        itemOffered: { '@id': `${abs(routes[k][locale])}#service` },
      })),
    },
  };
}

function founderNode(locale: Locale): Node {
  const d = getDict(locale);
  return {
    '@type': 'Person',
    '@id': ids.founder,
    name: firm.founder,
    jobTitle: d.home.founderRole,
    worksFor: { '@id': ids.firm },
    knowsAbout: ['Accounting', 'Taxation in Kosovo'],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Specialization',
      name: d.home.founderCredential,
    },
  };
}

function websiteNode(): Node {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: abs('/'),
    name: firm.name,
    inLanguage: ['sq', 'en', 'de'],
    publisher: { '@id': ids.firm },
  };
}

function faqNode(url: string, faqs: FAQ[], locale: Locale): Node {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    inLanguage: locale,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

function breadcrumbNode(url: string, trail: { name: string; url: string }[]): Node {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: trail.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, item: t.url })),
  };
}

const pageType: Partial<Record<PageKey, string>> = { about: 'AboutPage', contact: 'ContactPage' };

export interface Crumb {
  name: string;
  url: string;
}

export function pageSchema(page: PageKey, locale: Locale, opts: { title: string; description: string; crumbs: Crumb[] }) {
  const d = getDict(locale);
  const url = abs(routes[page][locale]);
  const graph: Node[] = [firmNode(locale), founderNode(locale), websiteNode()];

  const webpage: Node = {
    '@type': pageType[page] ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.title,
    description: opts.description,
    inLanguage: locale,
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.firm },
    dateModified: firm.updated,
  };
  if (opts.crumbs.length > 1) {
    graph.push(breadcrumbNode(url, opts.crumbs.map((c) => ({ name: c.name, url: abs(c.url) }))));
    webpage.breadcrumb = { '@id': `${url}#breadcrumb` };
  }
  graph.push(webpage);

  if (page === 'home') graph.push(faqNode(url, d.home.faqs, locale));

  if ((serviceKeys as readonly string[]).includes(page)) {
    const s = d.services[page as ServiceKey];
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: s.name,
      serviceType: s.name,
      description: s.answer,
      url,
      provider: { '@id': ids.firm },
      areaServed: { '@type': 'Country', name: 'Kosovo' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: s.includesTitle,
        itemListElement: s.includes.map((i) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: i.title, description: i.text },
        })),
      },
    });
    graph.push(faqNode(url, s.faqs, locale));
  }

  if (page === 'guide') {
    graph.push({
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: d.guide.h1,
      description: opts.description,
      inLanguage: locale,
      datePublished: firm.updated,
      dateModified: firm.updated,
      author: { '@id': ids.firm },
      publisher: { '@id': ids.firm },
      mainEntityOfPage: { '@id': `${url}#webpage` },
      citation: tax.sources.map((s) => s.url),
      about: ['Taxation in Kosovo', 'Value-added tax', 'Corporate income tax', 'Personal income tax'],
    });
    graph.push(faqNode(url, d.guide.faqs, locale));
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
