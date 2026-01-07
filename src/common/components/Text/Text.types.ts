import { TextProps as RNTextProps, TextStyle } from 'react-native';
import { fontFamily } from '../../../theme/typography';

export type FontWeight =
  | 'thin'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'bodySmall'
  | 'caption'
  | 'label';

export interface TextProps extends RNTextProps {
  variant?: TextVariant;
  weight?: FontWeight;
  color?: string;
  align?: TextStyle['textAlign'];
  children: React.ReactNode;
}

export const fontFamilyMap: Record<FontWeight, string> = {
  thin: fontFamily.thin,
  light: fontFamily.light,
  normal: fontFamily.regular,
  medium: fontFamily.medium,
  semibold: fontFamily.semibold,
  bold: fontFamily.bold,
  extrabold: fontFamily.extrabold,
  black: fontFamily.black,
};

export const variantStyles: Record<TextVariant, TextStyle> = {
  h1: { fontSize: 32, lineHeight: 40 },
  h2: { fontSize: 24, lineHeight: 32 },
  h3: { fontSize: 20, lineHeight: 28 },
  h4: { fontSize: 18, lineHeight: 26 },
  body: { fontSize: 16, lineHeight: 24 },
  bodySmall: { fontSize: 14, lineHeight: 20 },
  caption: { fontSize: 12, lineHeight: 16 },
  label: { fontSize: 10, lineHeight: 14 },
};
