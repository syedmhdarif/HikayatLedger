import { NavigatorScreenParams } from '@react-navigation/native';
import * as Routes from './routeName';

export type AuthNavigation = {
  [Routes.SIGN_UP_SCREEN]?: undefined;
  [Routes.LOGIN_SCREEN]?: undefined;
  [Routes.FORGOT_PASSWORD_SCREEN]?: undefined;
};

export type InboxNavigation = {
  [Routes.INBOX_SCREEN]: undefined;
};

export type SettingsNavigation = {
  [Routes.SETTINGS_SCREEN]: undefined;
};

export type InvoicesNavigation = {
  [Routes.INVOICES_SCREEN]: undefined;
};

export type QuotationsNavigation = {
  [Routes.QUOTATIONS_SCREEN]: undefined;
};

export type ActivityNavigation = {
  [Routes.ACTIVITY_SCREEN]: undefined;
};

export type CashFlowNavigation = {
  [Routes.CASHFLOW_SCREEN]: undefined;
};

export type HomeNavigation = {
  [Routes.HOME_SCREEN]?: undefined;
  [Routes.INVOICES_ROUTE]?: NavigatorScreenParams<InvoicesNavigation>;
  [Routes.QUOTATIONS_ROUTE]?: NavigatorScreenParams<QuotationsNavigation>;
};

export type MainNavigation = {
  [Routes.HOME_ROUTE]?: NavigatorScreenParams<HomeNavigation>;
  [Routes.INBOX_ROUTE]?: NavigatorScreenParams<InboxNavigation>;
  [Routes.SETTINGS_ROUTE]?: NavigatorScreenParams<SettingsNavigation>;
  [Routes.INVOICES_ROUTE]?: NavigatorScreenParams<InvoicesNavigation>;
  [Routes.ACTIVITY_ROUTE]?: NavigatorScreenParams<ActivityNavigation>;
  [Routes.CASHFLOW_ROUTE]?: NavigatorScreenParams<CashFlowNavigation>;
};

export type RootNavigation = MainNavigation & {
  [Routes.SIGN_UP_SCREEN]?: undefined;
  [Routes.LOGIN_SCREEN]?: undefined;
  [Routes.FORGOT_PASSWORD_SCREEN]?: undefined;
  [Routes.HOME_ROUTE]?: NavigatorScreenParams<HomeNavigation>;
  [Routes.MAIN_ROUTE]?: NavigatorScreenParams<MainNavigation>;
};
