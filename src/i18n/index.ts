import { de } from './content/de';
import { en } from './content/en';
import { sq } from './content/sq';
import type { Locale } from './routes';
import type { Dict } from './types';

export const dicts: Record<Locale, Dict> = { sq, en, de };

export const getDict = (locale: Locale): Dict => dicts[locale];

export * from './routes';
export type * from './types';
