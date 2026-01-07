import { InvoiceStatus } from '../types/invoice';
import { QuotationStatus } from '../types/quotation';

export const INVOICE_STATUS_OPTIONS: {
  value: InvoiceStatus;
  label: string;
  color: string;
}[] = [
  { value: 'draft', label: 'Draft', color: 'draft' },
  { value: 'sent', label: 'Sent', color: 'sent' },
  { value: 'paid', label: 'Paid', color: 'paid' },
  { value: 'overdue', label: 'Overdue', color: 'overdue' },
  { value: 'cancelled', label: 'Cancelled', color: 'cancelled' },
];

export const QUOTATION_STATUS_OPTIONS: {
  value: QuotationStatus;
  label: string;
  color: string;
}[] = [
  { value: 'draft', label: 'Draft', color: 'draft' },
  { value: 'sent', label: 'Sent', color: 'sent' },
  { value: 'accepted', label: 'Accepted', color: 'paid' },
  { value: 'rejected', label: 'Rejected', color: 'overdue' },
  { value: 'expired', label: 'Expired', color: 'cancelled' },
];

export const DEFAULT_PAYMENT_TERMS = [
  { value: 0, label: 'Due on Receipt' },
  { value: 7, label: 'Net 7' },
  { value: 14, label: 'Net 14' },
  { value: 30, label: 'Net 30' },
  { value: 60, label: 'Net 60' },
] as const;

export const DEFAULT_TAX_RATES = [
  { value: 0, label: 'No Tax (0%)' },
  { value: 6, label: 'SST (6%)' },
  { value: 8, label: 'Service Tax (8%)' },
  { value: 10, label: 'Tax (10%)' },
] as const;

export const UNIT_OPTIONS = [
  { value: 'pcs', label: 'Pieces' },
  { value: 'unit', label: 'Unit' },
  { value: 'kg', label: 'Kilogram' },
  { value: 'g', label: 'Gram' },
  { value: 'l', label: 'Litre' },
  { value: 'ml', label: 'Millilitre' },
  { value: 'hour', label: 'Hour' },
  { value: 'day', label: 'Day' },
  { value: 'service', label: 'Service' },
  { value: 'box', label: 'Box' },
  { value: 'pack', label: 'Pack' },
] as const;
