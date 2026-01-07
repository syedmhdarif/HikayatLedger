import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ToastMessage from 'react-native-toast-message';

import './i18n'; // Initialize i18n
import { ThemeProvider, useTheme } from '../theme';
import Routes from './routes/Route';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../app/store';
import { Loading } from '../common/components';
import { AuthProvider } from '../common/context/AuthContext';

function AppContent() {
  const theme = useTheme();

  return (
    <>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <Routes />
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <PersistGate loading={<Loading fullScreen />} persistor={persistor}>
          <SafeAreaProvider>
            <AuthProvider>
              <AppContent />
              <ToastMessage />
            </AuthProvider>
          </SafeAreaProvider>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}
