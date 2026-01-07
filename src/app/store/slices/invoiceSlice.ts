import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Invoice, InvoiceStatus } from '../../../types/invoice';

interface InvoiceState {
  items: Invoice[];
  selectedId: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: InvoiceState = {
  items: [],
  selectedId: null,
  loading: false,
  error: null,
};

const invoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    addInvoice: (state, action: PayloadAction<Invoice>) => {
      state.items.push(action.payload);
    },
    updateInvoice: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<Invoice> }>,
    ) => {
      const index = state.items.findIndex(inv => inv.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = {
          ...state.items[index],
          ...action.payload.updates,
        };
      }
    },
    deleteInvoice: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(inv => inv.id !== action.payload);
    },
    setSelectedInvoice: (state, action: PayloadAction<string | null>) => {
      state.selectedId = action.payload;
    },
    updateStatus: (
      state,
      action: PayloadAction<{ id: string; status: InvoiceStatus }>,
    ) => {
      const invoice = state.items.find(inv => inv.id === action.payload.id);
      if (invoice) {
        invoice.status = action.payload.status;
      }
    },
    clearAll: state => {
      state.items = [];
      state.selectedId = null;
    },
  },
});

export const {
  addInvoice,
  updateInvoice,
  deleteInvoice,
  setSelectedInvoice,
  updateStatus,
  clearAll,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;

// Selectors
export const selectAllInvoices = (state: { invoices: InvoiceState }) =>
  state.invoices.items;
export const selectInvoiceById = (
  state: { invoices: InvoiceState },
  id: string,
) => state.invoices.items.find(inv => inv.id === id);
export const selectInvoicesByStatus = (
  state: { invoices: InvoiceState },
  status: InvoiceStatus,
) => state.invoices.items.filter(inv => inv.status === status);
