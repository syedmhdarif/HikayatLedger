import { LineItem } from './common';

export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';

export interface Invoice {
  id: string;
  invoiceNumber: string;
  customerId: string;
  customerName: string;
  invoiceDate: string; // ISO string
  dueDate: string; // ISO string
  items: LineItem[];
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  discountRate: number;
  discountAmount: number;
  total: number;
  status: InvoiceStatus;
  notes?: string;
  terms?: string;
  paymentMethod?: string;
  paidDate?: string;

  // Metadata
  createdAt: string;
  updatedAt: string;
}

export interface CreateInvoiceInput {
  customerId: string;
  items: Omit<LineItem, 'id'>[];
  invoiceDate?: string;
  dueDate?: string;
  taxRate?: number;
  discountRate?: number;
  notes?: string;
  terms?: string;
}

export interface UpdateInvoiceInput extends Partial<CreateInvoiceInput> {
  status?: InvoiceStatus;
}
