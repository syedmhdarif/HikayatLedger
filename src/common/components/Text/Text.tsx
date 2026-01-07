import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';
import { useTheme } from '../../../theme';
import { fontFamilyMap, variantStyles } from './Text.types';

type TextColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'error'
  | 'success'
  | 'warning';

interface TextProps extends RNTextProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body'
    | 'bodySmall'
    | 'caption'
    | 'label';
  weight?:
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
  color?: TextColor;
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

export default function Text({
  variant = 'body',
  weight = 'normal',
  color = 'primary',
  align = 'left',
  style,
  children,
  ...props
}: TextProps) {
  const theme = useTheme();

  const getColor = () => {
    switch (color) {
      case 'primary':
        return theme.colors.text;
      case 'secondary':
        return theme.colors.textSecondary;
      case 'tertiary':
        return theme.colors.textTertiary;
      case 'error':
        return theme.colors.error;
      case 'success':
        return theme.colors.success;
      case 'warning':
        return theme.colors.warning;
      default:
        return theme.colors.text;
    }
  };

  return (
    <RNText
      allowFontScaling={false}
      style={[
        styles.base,
        variantStyles[variant],
        {
          color: getColor(),
          textAlign: align,
          fontFamily: fontFamilyMap[weight],
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  base: {
    // fontFamily is set dynamically based on weight prop
  },
});
