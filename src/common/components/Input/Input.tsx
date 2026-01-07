import React, { useState, useCallback } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
  Pressable,
} from 'react-native';
import { useTheme, spacing, typography, Colors } from '../../../theme';
import Text from '../Text';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  inputContainerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  disabled?: boolean;
  required?: boolean;
}

export default function Input({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  onRightIconPress,
  containerStyle,
  inputStyle,
  inputContainerStyle,
  labelStyle,
  disabled = false,
  required = false,
  onFocus,
  onBlur,
  multiline,
  numberOfLines = 1,
  style,
  ...props
}: InputProps) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(
    (e: any) => {
      setIsFocused(true);
      onFocus?.(e);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (e: any) => {
      setIsFocused(false);
      onBlur?.(e);
    },
    [onBlur],
  );

  const getBorderColor = () => {
    if (error) return theme.colors.error;
    if (isFocused) return theme.colors.primary;
    return theme.colors.border;
  };

  const getBackgroundColor = () => {
    if (disabled) return theme.colors.surfaceVariant;
    return theme.colors.surface;
  };

  const renderRightIcon = () => {
    if (!rightIcon) return null;

    if (onRightIconPress) {
      return (
        <Pressable
          onPress={onRightIconPress}
          style={styles.iconButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          disabled={disabled}
        >
          {rightIcon}
        </Pressable>
      );
    }

    return <View style={styles.icon}>{rightIcon}</View>;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <View style={styles.labelContainer}>
          <Text
            variant="label"
            color="secondary"
            style={[styles.label, labelStyle]}
          >
            {label}
          </Text>
          {required && (
            <Text variant="label" color="error" style={styles.required}>
              *
            </Text>
          )}
        </View>
      )}

      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: getBackgroundColor(),
            borderColor: getBorderColor(),
            borderWidth: isFocused ? 1.5 : 1,
          },
          multiline ? styles.multilineContainer : null,
          multiline
            ? { minHeight: numberOfLines * 24 + spacing.inputPadding * 2 }
            : null,
          inputContainerStyle,
        ]}
      >
        {leftIcon && <View style={styles.icon}>{leftIcon}</View>}

        <TextInput
          style={[
            styles.input,
            { color: disabled ? theme.colors.textTertiary : theme.colors.text },
            leftIcon ? styles.inputWithLeftIcon : null,
            rightIcon ? styles.inputWithRightIcon : null,
            multiline ? styles.multilineInput : null,
            inputStyle,
            style,
          ]}
          placeholderTextColor={theme.colors.placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={!disabled}
          multiline={multiline}
          numberOfLines={numberOfLines}
          textAlignVertical={multiline ? 'top' : 'center'}
          {...props}
        />

        {renderRightIcon()}
      </View>

      {(error || helperText) && (
        <Text
          variant="caption"
          color={error ? 'error' : 'tertiary'}
          style={styles.helperText}
        >
          {error || helperText}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  label: {
    ...typography.labelMedium,
    color: Colors.black400,
  },
  required: {
    marginLeft: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: spacing.radiusMd,
    overflow: 'hidden',
  },
  multilineContainer: {
    alignItems: 'flex-start',
  },
  input: {
    flex: 1,
    minHeight: 52,
    paddingHorizontal: spacing.inputPadding,
    ...typography.bodyMedium,
  },
  multilineInput: {
    paddingTop: spacing.inputPadding,
  },
  inputWithLeftIcon: {
    paddingLeft: spacing.xs,
  },
  inputWithRightIcon: {
    paddingRight: spacing.xs,
  },
  icon: {
    paddingHorizontal: spacing.sm,
  },
  iconButton: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },
  helperText: {
    marginTop: spacing.xs,
  },
});
