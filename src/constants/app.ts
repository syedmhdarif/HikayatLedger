export const APP_NAME = 'Hikayat Ledger';
export const APP_VERSION = '1.0.0';

export const CURRENCIES = [
  { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit' },
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' },
  { code: 'EUR', symbol: '\u20AC', name: 'Euro' },
  { code: 'GBP', symbol: '\u00A3', name: 'British Pound' },
  { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah' },
] as const;

export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu' },
] as const;

export const DATE_FORMATS = {
  display: 'dd MMM yyyy', // 05 Jan 2026
  displayShort: 'dd/MM/yyyy', // 05/01/2026
  displayLong: 'dd MMMM yyyy', // 05 January 2026
  iso: 'yyyy-MM-dd', // 2026-01-05
} as const;

export const STORAGE_KEYS = {
  SETTINGS: 'settings-storage',
  INVOICES: 'invoice-storage',
  CUSTOMERS: 'customer-storage',
  PRODUCTS: 'product-storage',
} as const;
