import React, { createContext, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { lightColors, darkColors } from './colors';
import { useSettingsStore } from '../store/settingsStore';
import type { Theme } from './types';

const ThemeContext = createContext<Theme | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const systemColorScheme = useColorScheme();
  const themeSetting = useSettingsStore(state => state.theme);

  const theme = useMemo<Theme>(() => {
    let isDark = false;

    if (themeSetting === 'system') {
      isDark = systemColorScheme === 'dark';
    } else {
      isDark = themeSetting === 'dark';
    }

    return {
      dark: isDark,
      colors: isDark ? darkColors : lightColors,
    };
  }, [themeSetting, systemColorScheme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): Theme {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
