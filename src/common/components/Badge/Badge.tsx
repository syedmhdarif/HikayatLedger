import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme, spacing, typography } from '../../../theme';
import { fontSize, fontWeight } from '../../../theme/typography';

type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'default';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  style?: ViewStyle;
}

export default function Badge({
  label,
  variant = 'default',
  size = 'md',
  style,
}: BadgeProps) {
  const theme = useTheme();

  const getColors = () => {
    switch (variant) {
      case 'success':
        return {
          bg: theme.colors.successLight + '20',
          text: theme.colors.success,
        };
      case 'warning':
        return {
          bg: theme.colors.warningLight + '20',
          text: theme.colors.warning,
        };
      case 'error':
        return { bg: theme.colors.errorLight + '20', text: theme.colors.error };
      case 'info':
        return { bg: theme.colors.infoLight + '20', text: theme.colors.info };
      default:
        return {
          bg: theme.colors.surfaceVariant,
          text: theme.colors.textSecondary,
        };
    }
  };

  const colors = getColors();

  return (
    <View
      style={[
        styles.badge,
        size === 'sm' ? styles.badgeSm : styles.badgeMd,
        { backgroundColor: colors.bg },
        style,
      ]}
    >
      <Text
        style={[
          size === 'sm' ? styles.textSm : styles.textMd,
          { color: colors.text },
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: spacing.radiusFull,
    alignSelf: 'flex-start',
  },
  badgeSm: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
  },
  badgeMd: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  textSm: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
  },
  textMd: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
  },
});
