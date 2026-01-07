import { format, parseISO } from 'date-fns';
import { DATE_FORMATS } from '../constants/app';

export function formatCurrency(
  amount: number,
  currencySymbol: string = 'RM',
): string {
  return `${currencySymbol} ${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function formatDate(
  dateString: string,
  formatStr: string = DATE_FORMATS.display,
): string {
  try {
    const date = parseISO(dateString);
    return format(date, formatStr);
  } catch {
    return dateString;
  }
}

export function formatPhoneNumber(phone: string): string {
  // Basic Malaysian phone format
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('60')) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 4)}-${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }
  return phone;
}

export function formatInvoiceNumber(prefix: string, number: number): string {
  return `${prefix}${number.toString().padStart(5, '0')}`;
}
