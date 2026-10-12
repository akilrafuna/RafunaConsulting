export const locales = ['sq', 'en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'sq';

export const serviceKeys = ['accounting', 'tax', 'financial', 'investment'] as const;
export type ServiceKey = (typeof serviceKeys)[number];

export type PageKey = 'home' | ServiceKey | 'guide' | 'about' | 'contact';

/** Every page exists in all three languages; slugs are native to each language. */
export const routes: Record<PageKey, Record<Locale, string>> = {
  home: { sq: '/', en: '/en/', de: '/de/' },
  accounting: {
    sq: '/sherbimet/kontabilitet/',
    en: '/en/services/accounting/',
    de: '/de/leistungen/buchhaltung/',
  },
  tax: {
    sq: '/sherbimet/keshillim-tatimor/',
    en: '/en/services/tax-advisory/',
    de: '/de/leistungen/steuerberatung/',
  },
  financial: {
    sq: '/sherbimet/keshillim-financiar/',
    en: '/en/services/financial-advisory/',
    de: '/de/leistungen/finanzberatung/',
  },
  investment: {
    sq: '/sherbimet/keshillim-investiv/',
    en: '/en/services/investment-advisory/',
    de: '/de/leistungen/investitionsberatung/',
  },
  guide: {
    sq: '/afatet-tatimore/',
    en: '/en/kosovo-tax-guide/',
    de: '/de/steuern-kosovo/',
  },
  about: { sq: '/rreth-nesh/', en: '/en/about/', de: '/de/ueber-uns/' },
  contact: { sq: '/kontakt/', en: '/en/contact/', de: '/de/kontakt/' },
};

export const pageKeys = Object.keys(routes) as PageKey[];

export const href = (page: PageKey, locale: Locale) => routes[page][locale];

/** hreflang values used in <link rel="alternate"> and the sitemap. */
export const hreflang: Record<Locale, string> = { sq: 'sq', en: 'en', de: 'de' };
