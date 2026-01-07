// Auth
export const SIGN_UP_SCREEN = 'signup';
export const LOGIN_SCREEN = 'signin';
export const FORGOT_PASSWORD_SCREEN = 'forgot-password';

// Main App
export const HOME_SCREEN = 'home';
export const INVOICES_SCREEN = 'invoices';
export const QUOTATIONS_SCREEN = 'quotations';
export const SETTINGS_SCREEN = 'settings';
export const INBOX_SCREEN = 'inbox';
export const ACTIVITY_SCREEN = 'activity';
export const CASHFLOW_SCREEN = 'cashflow';

// Main
export const MAIN_ROUTE = 'MAIN_ROUTE';
// Home
export const HOME_ROUTE = 'HOME_ROUTE';
// Inbox
export const INBOX_ROUTE = 'INBOX_ROUTE';
// Settings
export const SETTINGS_ROUTE = 'SETTINGS_ROUTE';
// Notes
export const NOTES_ROUTE = 'NOTES_ROUTE';
// Invoices
export const INVOICES_ROUTE = 'INVOICES_ROUTE';
// Quotations
export const QUOTATIONS_ROUTE = 'QUOTATIONS_ROUTE';
// Activity
export const ACTIVITY_ROUTE = 'ACTIVITY_ROUTE';
// CashFlow
export const CASHFLOW_ROUTE = 'CASHFLOW_ROUTE';

export type RouteName =
  | typeof SIGN_UP_SCREEN
  | typeof LOGIN_SCREEN
  | typeof FORGOT_PASSWORD_SCREEN
  | typeof HOME_SCREEN
  | typeof INVOICES_SCREEN
  | typeof INVOICES_ROUTE
  | typeof QUOTATIONS_SCREEN
  | typeof QUOTATIONS_ROUTE
  | typeof SETTINGS_SCREEN
  | typeof ACTIVITY_SCREEN;

export default {
  SIGN_UP_SCREEN,
  LOGIN_SCREEN,
  FORGOT_PASSWORD_SCREEN,
  HOME_SCREEN,
  INVOICES_SCREEN,
  INVOICES_ROUTE,
  QUOTATIONS_SCREEN,
  QUOTATIONS_ROUTE,
  SETTINGS_SCREEN,
  ACTIVITY_SCREEN,
} as const;
