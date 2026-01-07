import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme, spacing, typography } from '../../../theme';

// Placeholder - implement with a proper picker library or custom modal
interface SelectProps {
  label?: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  containerStyle?: ViewStyle;
}

export default function Select({
  label,
  value,
  options,
  onChange,
  placeholder = 'Select...',
  error,
  containerStyle,
}: SelectProps) {
  const theme = useTheme();
  const selectedOption = options.find(opt => opt.value === value);

  // TODO: Implement proper picker modal
  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[styles.label, { color: theme.colors.text }]}>{label}</Text>
      )}
      <View
        style={[
          styles.selectContainer,
          {
            backgroundColor: theme.colors.surface,
            borderColor: error ? theme.colors.error : theme.colors.border,
          },
        ]}>
        <Text
          style={[
            styles.value,
            {
              color: selectedOption
                ? theme.colors.text
                : theme.colors.placeholder,
            },
          ]}>
          {selectedOption?.label || placeholder}
        </Text>
      </View>
      {error && (
        <Text style={[styles.error, { color: theme.colors.error }]}>{error}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    ...typography.styles.label,
    marginBottom: spacing.xs,
  },
  selectContainer: {
    borderWidth: 1,
    borderRadius: spacing.radiusMd,
    paddingVertical: spacing.inputPadding,
    paddingHorizontal: spacing.inputPadding,
  },
  value: {
    ...typography.styles.body,
  },
  error: {
    ...typography.styles.caption,
    marginTop: spacing.xs,
  },
});
