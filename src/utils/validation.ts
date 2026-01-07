import * as yup from 'yup';

export const lineItemSchema = yup.object({
  description: yup.string().required('Description is required'),
  quantity: yup
    .number()
    .required('Quantity is required')
    .positive('Quantity must be positive'),
  unitPrice: yup
    .number()
    .required('Price is required')
    .min(0, 'Price cannot be negative'),
  unit: yup.string().default('pcs'),
});

export const invoiceSchema = yup.object({
  customerId: yup.string().required('Customer is required'),
  items: yup.array().of(lineItemSchema).min(1, 'At least one item is required'),
  invoiceDate: yup.string(),
  dueDate: yup.string(),
  taxRate: yup.number().min(0).max(100),
  discountRate: yup.number().min(0).max(100),
  notes: yup.string(),
  terms: yup.string(),
});
