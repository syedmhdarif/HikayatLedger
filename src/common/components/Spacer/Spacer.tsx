import React from 'react';
import { View } from 'react-native';
import { spacing } from '../../../theme';

type SpacingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

interface SpacerProps {
  unit?: SpacingSize | number;
  horizontal?: boolean;
}

const sizeMap: Record<SpacingSize, number> = {
  xs: spacing.xs,
  sm: spacing.sm,
  md: spacing.md,
  lg: spacing.lg,
  xl: spacing.xl,
  xxl: spacing.xxl,
};

export default function Spacer({
  unit = 'md',
  horizontal = false,
}: SpacerProps) {
  const space = typeof unit === 'number' ? unit : sizeMap[unit];

  return (
    <View
      style={
        horizontal
          ? { width: space, height: '100%' }
          : { height: space, width: '100%' }
      }
    />
  );
}
