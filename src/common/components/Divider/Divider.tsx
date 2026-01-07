import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme, spacing } from '../../../theme';
import Text from '../Text';

type DividerVariant = 'full' | 'inset' | 'middle';
type SpacingSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface DividerProps {
  style?: ViewStyle;
  vertical?: boolean;
  variant?: DividerVariant;
  thickness?: number;
  color?: string;
  spacing?: SpacingSize;
  text?: string;
  insetStart?: number;
  insetEnd?: number;
}

const spacingMap: Record<SpacingSize, number> = {
  none: 0,
  xs: spacing.xs,
  sm: spacing.sm,
  md: spacing.md,
  lg: spacing.lg,
  xl: spacing.xl,
};

export default function Divider({
  style,
  vertical = false,
  variant = 'full',
  thickness = 1,
  color,
  spacing: spacingSize = 'sm',
  text,
  insetStart,
  insetEnd,
}: DividerProps) {
  const theme = useTheme();
  const dividerColor = color || theme.colors.border;
  const marginSize = spacingMap[spacingSize];

  const getInsets = () => {
    switch (variant) {
      case 'inset':
        return { marginStart: insetStart ?? 16, marginEnd: insetEnd ?? 0 };
      case 'middle':
        return { marginStart: insetStart ?? 16, marginEnd: insetEnd ?? 16 };
      default:
        return { marginStart: insetStart ?? 0, marginEnd: insetEnd ?? 0 };
    }
  };

  const insets = getInsets();

  if (text) {
    return (
      <View
        style={[
          styles.textContainer,
          vertical ? { marginHorizontal: marginSize } : { marginVertical: marginSize },
          style,
        ]}
      >
        <View
          style={[
            styles.textLine,
            { backgroundColor: dividerColor, height: thickness },
          ]}
        />
        <Text variant="caption" color="tertiary" style={styles.text}>
          {text}
        </Text>
        <View
          style={[
            styles.textLine,
            { backgroundColor: dividerColor, height: thickness },
          ]}
        />
      </View>
    );
  }

  if (vertical) {
    return (
      <View
        style={[
          styles.vertical,
          {
            width: thickness,
            backgroundColor: dividerColor,
            marginHorizontal: marginSize,
            marginTop: insets.marginStart,
            marginBottom: insets.marginEnd,
          },
          style,
        ]}
      />
    );
  }

  return (
    <View
      style={[
        styles.horizontal,
        {
          height: thickness,
          backgroundColor: dividerColor,
          marginVertical: marginSize,
          marginStart: insets.marginStart,
          marginEnd: insets.marginEnd,
        },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  horizontal: {
    width: '100%',
  },
  vertical: {
    height: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLine: {
    flex: 1,
  },
  text: {
    paddingHorizontal: spacing.sm,
  },
});
