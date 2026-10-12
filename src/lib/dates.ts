export type DateLocale = 'sq' | 'en' | 'de';

export const monthYear = (date: Date, months: readonly string[]) => `${months[date.getMonth()]} ${date.getFullYear()}`;

/** "12 tetor 2026" · "12 October 2026" · "12. Oktober 2026" */
export const longDate = (date: Date, locale: DateLocale, months: readonly string[]) =>
  `${date.getDate()}${locale === 'de' ? '.' : ''} ${monthYear(date, months)}`;
