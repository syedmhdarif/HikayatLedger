import React from 'react';
import { View, ViewStyle, TouchableOpacity } from 'react-native';
import { useTheme, spacing, shadows } from '../../../theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
  variant?: 'elevated' | 'outlined' | 'filled';
}

export default function Card({
  children,
  style,
  onPress,
  variant = 'elevated',
}: CardProps) {
  const theme = useTheme();

  const getCardStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      backgroundColor: theme.colors.surface,
      borderRadius: spacing.radiusLg,
      padding: spacing.cardPadding,
    };

    switch (variant) {
      case 'elevated':
        return { ...baseStyle, ...shadows.md };
      case 'outlined':
        return {
          ...baseStyle,
          borderWidth: 1,
          borderColor: theme.colors.border,
        };
      case 'filled':
        return {
          ...baseStyle,
          backgroundColor: theme.colors.surfaceVariant,
        };
      default:
        return baseStyle;
    }
  };

  if (onPress) {
    return (
      <TouchableOpacity style={[getCardStyle(), style]} onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={[getCardStyle(), style]}>{children}</View>;
}
