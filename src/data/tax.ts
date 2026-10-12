/**
 * Kosovo tax figures shown on the site. Verified against PwC Worldwide Tax
 * Summaries (Kosovo, last reviewed 7 Aug 2026). Re-check every January.
 */
export const tax = {
  vat: { standard: 18, reduced: 8, threshold: 30000, returnDay: 20 },
  cit: { rate: 10, annualReturn: { month: 3, day: 31 }, advanceDay: 15, advanceMonths: [1, 4, 7, 10] },
  smallBusiness: { threshold: 30000, trade: 3, services: 9, minPerQuarter: 37.5 },
  pit: { bands: [{ to: 3000, rate: 0 }, { to: 5400, rate: 8 }, { to: null, rate: 10 }] },
  pension: { employee: 5, employer: 5 },
  withholding: { day: 15, interest: 10, royalties: 10, rent: 9, dividends: 0 },
  sources: [
    {
      name: 'PwC Worldwide Tax Summaries: Kosovo',
      url: 'https://taxsummaries.pwc.com/kosovo',
      reviewed: '2026-08-07',
    },
    {
      name: 'Administrata Tatimore e Kosovës (ATK)',
      url: 'https://www.atk-ks.org/',
      reviewed: null,
    },
  ],
} as const;

export type DeadlineKind = 'vat' | 'withholding' | 'advance' | 'annual';

export interface Deadline {
  kind: DeadlineKind;
  date: Date;
  /** First day of the period the filing covers (month for vat/withholding, quarter for advance, year for annual). */
  period: Date;
}

/** Upcoming statutory deadlines from `from` (inclusive), sorted by date. */
export function upcomingDeadlines(from: Date, count = 4): Deadline[] {
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  const out: Deadline[] = [];
  for (let m = -1; m < 14; m++) {
    const y = start.getFullYear();
    const mo = start.getMonth() + m;
    const prev = new Date(y, mo - 1, 1);
    out.push({ kind: 'vat', date: new Date(y, mo, tax.vat.returnDay), period: prev });
    out.push({ kind: 'withholding', date: new Date(y, mo, tax.withholding.day), period: prev });
    const monthIndex = ((mo % 12) + 12) % 12;
    if (tax.cit.advanceMonths.includes((monthIndex + 1) as 1 | 4 | 7 | 10)) {
      out.push({ kind: 'advance', date: new Date(y, mo, tax.cit.advanceDay), period: new Date(y, mo - 3, 1) });
    }
    if (monthIndex === tax.cit.annualReturn.month - 1) {
      const d = new Date(y, mo, tax.cit.annualReturn.day);
      out.push({ kind: 'annual', date: d, period: new Date(d.getFullYear() - 1, 0, 1) });
    }
  }
  return out
    .filter((d) => d.date >= start)
    .sort((a, b) => a.date.getTime() - b.date.getTime() || a.kind.localeCompare(b.kind))
    .slice(0, count);
}
