import type { DeadlineKind } from '@/data/tax';
import type { Locale, ServiceKey } from './routes';

export interface Meta {
  title: string;
  description: string;
}
export interface Item {
  title: string;
  text: string;
}
export interface FAQ {
  q: string;
  a: string;
}

export interface ServiceContent {
  /** Short name for navigation and listings. */
  name: string;
  /** One sentence used where services are listed. */
  summary: string;
  meta: Meta;
  h1: string;
  /** Direct, self-contained answer (40–70 words) for search and AI extraction. */
  answer: string;
  includesTitle: string;
  includes: Item[];
  audienceTitle: string;
  audience: string;
  faqs: FAQ[];
}

export interface Dict {
  locale: Locale;
  langName: string;
  ogLocale: string;
  /** Used to format dates in the deadline calendar. */
  intl: string;
  /** Month names, written out so formatting never depends on the browser's locale data. */
  months: string[];

  nav: {
    services: string;
    guide: string;
    about: string;
    contact: string;
    book: string;
    call: string;
    whatsapp: string;
    menu: string;
    close: string;
    language: string;
    skip: string;
    home: string;
    primary: string;
  };

  firm: {
    description: string;
    motto: string;
    mottoNote: string;
    addressLines: [string, string];
    days: string;
    hoursLabel: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    openNow: string;
    closedNow: string;
    directions: string;
    whatsappText: string;
  };

  home: {
    meta: Meta;
    display: string;
    h1: string;
    lede: string;
    answer: string;
    facts: { value: string; label: string }[];
    servicesTitle: string;
    servicesText: string;
    calendarTitle: string;
    calendarText: string;
    calendarLink: string;
    processTitle: string;
    processText: string;
    steps: Item[];
    founderTitle: string;
    founderText: string[];
    founderRole: string;
    founderCredential: string;
    teamTitle: string;
    team: string[];
    diasporaTitle: string;
    diasporaText: string;
    diasporaPoints: string[];
    sectorsTitle: string;
    sectors: string[];
    faqTitle: string;
    faqs: FAQ[];
    closingTitle: string;
    closingText: string;
  };

  services: Record<ServiceKey, ServiceContent>;

  service: {
    breadcrumb: string;
    otherServices: string;
    askTitle: string;
    askText: string;
    factsTitle: string;
    guideLink: string;
  };

  guide: {
    meta: Meta;
    h1: string;
    byline: string;
    updated: string;
    answer: string;
    nextTitle: string;
    nextText: string;
    calendarTitle: string;
    calendarHead: [string, string, string];
    calendar: { what: string; when: string; who: string }[];
    ratesTitle: string;
    ratesHead: [string, string, string];
    rates: { what: string; rate: string; note: string }[];
    pitTitle: string;
    pitHead: [string, string];
    pit: [string, string][];
    faqs: FAQ[];
    sourcesTitle: string;
    sourcesNote: string;
    reviewed: string;
    disclaimer: string;
  };

  deadlines: {
    labels: Record<DeadlineKind, string>;
    period: Record<DeadlineKind, string>;
    today: string;
    tomorrow: string;
    inDays: string;
    live: string;
  };

  about: {
    meta: Meta;
    h1: string;
    lede: string;
    story: string[];
    founderTitle: string;
    founderText: string[];
    teamTitle: string;
    teamText: string;
    valuesTitle: string;
    values: Item[];
    officeTitle: string;
    officeText: string;
  };

  contact: {
    meta: Meta;
    h1: string;
    lede: string;
    answer: string;
    channelsTitle: string;
    callText: string;
    whatsappTextLong: string;
    emailText: string;
    formTitle: string;
    formText: string;
    visitTitle: string;
    visitText: string;
    mapButton: string;
    mapNote: string;
  };

  form: {
    name: string;
    namePh: string;
    phone: string;
    phonePh: string;
    email: string;
    emailPh: string;
    service: string;
    servicePh: string;
    serviceOptions: string[];
    message: string;
    messagePh: string;
    optional: string;
    submit: string;
    sending: string;
    sent: string;
    sentText: string;
    error: string;
    privacy: string;
    subject: string;
  };

  footer: {
    rights: string;
    explore: string;
    reach: string;
    languages: string;
    note: string;
  };

  notFound: {
    meta: Meta;
    h1: string;
    text: string;
    back: string;
  };

  common: {
    updated: string;
    readMore: string;
    sources: string;
    allServices: string;
    breadcrumbLabel: string;
  };
}
