import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import invoiceReducer from './slices/invoiceSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  invoices: invoiceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
