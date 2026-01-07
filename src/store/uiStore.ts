import { create } from 'zustand';

interface UIState {
  // Loading states
  isLoading: boolean;
  loadingMessage: string | null;

  // Modal states
  isModalVisible: boolean;
  modalType: string | null;
  modalData: unknown;

  // Toast/Snackbar
  toastMessage: string | null;
  toastType: 'success' | 'error' | 'info' | 'warning' | null;

  // Actions
  setLoading: (isLoading: boolean, message?: string) => void;
  showModal: (type: string, data?: unknown) => void;
  hideModal: () => void;
  showToast: (
    message: string,
    type: 'success' | 'error' | 'info' | 'warning',
  ) => void;
  hideToast: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isLoading: false,
  loadingMessage: null,
  isModalVisible: false,
  modalType: null,
  modalData: null,
  toastMessage: null,
  toastType: null,

  setLoading: (isLoading, message) =>
    set({
      isLoading,
      loadingMessage: message ?? null,
    }),

  showModal: (type, data) =>
    set({
      isModalVisible: true,
      modalType: type,
      modalData: data,
    }),

  hideModal: () =>
    set({
      isModalVisible: false,
      modalType: null,
      modalData: null,
    }),

  showToast: (message, type) =>
    set({
      toastMessage: message,
      toastType: type,
    }),

  hideToast: () =>
    set({
      toastMessage: null,
      toastType: null,
    }),
}));
