import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { zustandStorage } from './storage';

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  taxId?: string;
  logo?: string;
}

interface SettingsState {
  // App settings
  language: 'en' | 'ms';
  currency: string;
  currencySymbol: string;
  theme: 'light' | 'dark' | 'system';

  // Business settings
  businessInfo: BusinessInfo;

  // Invoice/Quotation
  invoicePrefix: string;
  quotationPrefix: string;
  nextInvoiceNumber: number;
  nextQuotationNumber: number;
  defaultTaxRate: number;
  defaultPaymentTerms: number;

  // Actions
  setLanguage: (language: 'en' | 'ms') => void;
  setCurrency: (currency: string, symbol: string) => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setBusinessInfo: (info: Partial<BusinessInfo>) => void;
  setInvoicePrefix: (prefix: string) => void;
  setQuotationPrefix: (prefix: string) => void;
  incrementInvoiceNumber: () => number;
  incrementQuotationNumber: () => number;
  setDefaultTaxRate: (rate: number) => void;
  setDefaultPaymentTerms: (days: number) => void;
  resetSettings: () => void;
}

const initialState = {
  language: 'en' as const,
  currency: 'MYR',
  currencySymbol: 'RM',
  theme: 'system' as const,
  businessInfo: {
    name: '',
    address: '',
    phone: '',
    email: '',
  },
  invoicePrefix: 'INV-',
  quotationPrefix: 'QUO-',
  nextInvoiceNumber: 1,
  nextQuotationNumber: 1,
  defaultTaxRate: 0,
  defaultPaymentTerms: 30,
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setLanguage: language => set({ language }),

      setCurrency: (currency, symbol) =>
        set({ currency, currencySymbol: symbol }),

      setTheme: theme => set({ theme }),

      setBusinessInfo: info =>
        set(state => ({
          businessInfo: { ...state.businessInfo, ...info },
        })),

      setInvoicePrefix: prefix => set({ invoicePrefix: prefix }),

      setQuotationPrefix: prefix => set({ quotationPrefix: prefix }),

      incrementInvoiceNumber: () => {
        const current = get().nextInvoiceNumber;
        set({ nextInvoiceNumber: current + 1 });
        return current;
      },

      incrementQuotationNumber: () => {
        const current = get().nextQuotationNumber;
        set({ nextQuotationNumber: current + 1 });
        return current;
      },

      setDefaultTaxRate: rate => set({ defaultTaxRate: rate }),

      setDefaultPaymentTerms: days => set({ defaultPaymentTerms: days }),

      resetSettings: () => set(initialState),
    }),
    {
      name: 'settings-storage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
