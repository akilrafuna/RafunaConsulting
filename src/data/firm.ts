/** Single source of truth for the firm's facts (NAP, hours, links). */
export const firm = {
  name: 'Rafuna Consulting',
  site: 'https://rafunaconsulting.com',
  founded: 2009,
  founder: 'Agron Rafuna',
  phone: '+383 44 114 981',
  phoneE164: '+38344114981',
  whatsapp: '38344114981',
  email: 'rafunaconsulting@gmail.com',
  street: 'Rr. Zija Shemsiu C-12, H-5, K-1, Nr. 4',
  district: 'Ulpianë',
  city: 'Prishtinë',
  postalCode: '10000',
  countryCode: 'XK',
  /** Street-level position of Rr. Zija Shemsiu (OpenStreetMap). Confirm against the Google Maps pin. */
  geo: { lat: 42.64887, lng: 21.15965 },
  hours: { opens: '08:00', closes: '16:00', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
  formEndpoint: 'https://formspree.io/f/xaqlrvgv',
  /** Shown as "last updated" and used as sitemap lastmod. */
  updated: '2026-10-12',
} as const;

export const telHref = `tel:${firm.phoneE164}`;
export const mailHref = `mailto:${firm.email}`;
export const waHref = (text: string) => `https://wa.me/${firm.whatsapp}?text=${encodeURIComponent(text)}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${firm.street}, ${firm.district}, ${firm.postalCode} ${firm.city}, Kosovo`,
)}`;
export const yearsActive = (now = new Date()) => now.getFullYear() - firm.founded;
