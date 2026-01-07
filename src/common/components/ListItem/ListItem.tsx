import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { useTheme, spacing, typography } from '../../../theme';

interface ListItemProps {
  title: string;
  subtitle?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  rightText?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export default function ListItem({
  title,
  subtitle,
  leftIcon,
  rightIcon,
  rightText,
  onPress,
  style,
}: ListItemProps) {
  const theme = useTheme();

  const content = (
    <View style={[styles.container, style]}>
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
        {subtitle && (
          <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
            {subtitle}
          </Text>
        )}
      </View>
      {rightText && (
        <Text style={[styles.rightText, { color: theme.colors.textSecondary }]}>
          {rightText}
        </Text>
      )}
      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </View>
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>;
  }

  return content;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.listItemPadding,
    paddingHorizontal: spacing.screenPadding,
  },
  leftIcon: {
    marginRight: spacing.md,
  },
  content: {
    flex: 1,
  },
  title: {
    ...typography.styles.body,
  },
  subtitle: {
    ...typography.styles.bodySmall,
    marginTop: 2,
  },
  rightText: {
    ...typography.styles.bodySmall,
    marginLeft: spacing.sm,
  },
  rightIcon: {
    marginLeft: spacing.sm,
  },
});
