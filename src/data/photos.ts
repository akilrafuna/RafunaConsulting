import accountantDesk from '@/assets/photos/accountant-desk.jpg';
import signingDocuments from '@/assets/photos/signing-documents.jpg';
import taxBlocks from '@/assets/photos/tax-blocks.jpg';
import type { Locale } from '@/i18n';

/** Stock photography, shown as engraved vignettes. Alt text per language. */
export const photos = {
  accountant: {
    src: accountantDesk,
    position: '55% 62%',
    alt: {
      sq: 'Dorë që shënon shifra pranë një makine llogaritëse',
      en: 'A hand writing figures beside a calculator',
      de: 'Eine Hand notiert Zahlen neben einem Taschenrechner',
    },
  },
  signing: {
    src: signingDocuments,
    position: '45% 48%',
    alt: {
      sq: 'Duar që plotësojnë dokumente në një tavolinë pune',
      en: 'Hands filling in documents at a desk',
      de: 'Hände füllen Unterlagen an einem Schreibtisch aus',
    },
  },
  inspection: {
    src: taxBlocks,
    position: '58% 60%',
    alt: {
      sq: 'Lupë mbi një tabelë me shifra',
      en: 'A magnifying glass over a table of figures',
      de: 'Eine Lupe über einer Zahlentabelle',
    },
  },
} as const;

export type PhotoKey = keyof typeof photos;
export const photoAlt = (key: PhotoKey, locale: Locale) => photos[key].alt[locale];
