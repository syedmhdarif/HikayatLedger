import ToastMessage from 'react-native-toast-message';
import i18n from '../../../app/i18n';

interface ToastOptions {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  title?: string;
}

const getDefaultTitle = (type: ToastOptions['type']): string => {
  switch (type) {
    case 'success':
      return i18n.t('common.success');
    case 'error':
      return i18n.t('common.error');
    case 'warning':
      return i18n.t('common.warning');
    case 'info':
    default:
      return i18n.t('common.info');
  }
};

const getToastType = (
  type: ToastOptions['type'],
): 'success' | 'error' | 'info' => {
  switch (type) {
    case 'success':
      return 'success';
    case 'error':
      return 'error';
    case 'warning':
    case 'info':
    default:
      return 'info';
  }
};

export default function Toast({ message, type = 'info', title }: ToastOptions) {
  ToastMessage.show({
    type: getToastType(type),
    text1: title ?? getDefaultTitle(type),
    text2: message,
    position: 'top',
    visibilityTime: 3000,
  });
}
