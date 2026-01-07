import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../theme';

interface ScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
  safeArea?: boolean;
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
  fullWidth?: boolean;
}

export default function MainScreen({
  children,
  style,
  safeArea = true,
  edges = ['top', 'bottom', 'left', 'right'],
  fullWidth = false,
}: ScreenProps) {
  const theme = useTheme();

  const containerStyle = [
    styles.container,
    fullWidth && styles.fullWidthContainer,
    { backgroundColor: theme.colors.background },
    style,
  ];

  if (safeArea) {
    return (
      <SafeAreaView style={containerStyle} edges={edges}>
        {children}
      </SafeAreaView>
    );
  }

  return <View style={containerStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  fullWidthContainer: {
    paddingHorizontal: 0,
    width: '100%',
  },
});
