import { TextStyle } from 'react-native';
import Colors from './colors';

// Font family definitions
export const fontFamily = {
  thin: 'Roboto-Thin',
  light: 'Roboto-Light',
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
  semibold: 'Roboto-SemiBold',
  bold: 'Roboto-Bold',
  extrabold: 'Roboto-ExtraBold',
  black: 'Roboto-Black',
} as const;

export const fontWeight = {
  thin: '100',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

// Font sizes
export const fontSize = {
  xs: 10,
  sm: 12,
  md: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 40,
} as const;

// Line heights
export const lineHeight = {
  tight: 1.2,
  snug: 1.35,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

// Letter spacing
export const letterSpacing = {
  tighter: -0.8,
  tight: -0.4,
  normal: 0,
  wide: 0.4,
  wider: 0.8,
  widest: 1.6,
} as const;

// Typography presets - semantic naming for different text types
export const typography = {
  // Display - Large headlines for hero sections
  displayLarge: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize['5xl'],
    lineHeight: fontSize['5xl'] * lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  } as TextStyle,

  displayMedium: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize['4xl'],
    lineHeight: fontSize['4xl'] * lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  } as TextStyle,

  displaySmall: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize['3xl'],
    lineHeight: fontSize['3xl'] * lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  } as TextStyle,

  // Headlines - Section headers
  headlineExtraLarge: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize['5xl'],
    lineHeight: fontSize['5xl'] * lineHeight.tight,
    letterSpacing: letterSpacing.tight,
    fontWeight: '700',
  } as TextStyle,

  headlineLarge: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize['3xl'],
    lineHeight: fontSize['3xl'] * lineHeight.snug,
    letterSpacing: letterSpacing.normal,
    fontWeight: '700',
  } as TextStyle,

  headlineMedium: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.xl,
    lineHeight: fontSize.xl * lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  } as TextStyle,

  headlineSmall: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.lg,
    lineHeight: fontSize.lg * lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  } as TextStyle,

  // Titles - Card titles, list item titles
  titleLarge: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.lg,
    lineHeight: fontSize.lg * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  } as TextStyle,

  titleMedium: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.base,
    lineHeight: fontSize.base * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  } as TextStyle,

  titleSmall: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    lineHeight: fontSize.md * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  } as TextStyle,

  // Body - Main content text
  bodyLarge: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.base,
    lineHeight: fontSize.base * lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
  } as TextStyle,

  bodyMedium: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    lineHeight: fontSize.md * lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
  } as TextStyle,

  bodySmall: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
  } as TextStyle,

  // Labels - Form labels, button text, tabs
  labelLarge: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    lineHeight: fontSize.md * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  } as TextStyle,

  labelMedium: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  } as TextStyle,

  labelSmall: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.xs,
    lineHeight: fontSize.xs * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  } as TextStyle,

  // Captions - Image captions, timestamps, metadata
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  } as TextStyle,

  captionSmall: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.xs,
    lineHeight: fontSize.xs * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  } as TextStyle,

  // Overline - Category labels, section dividers
  overline: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.xs,
    lineHeight: fontSize.xs * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
    textTransform: 'uppercase',
  } as TextStyle,

  // Button text
  buttonLarge: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.base,
    lineHeight: fontSize.base * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  } as TextStyle,

  buttonMedium: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    lineHeight: fontSize.md * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  } as TextStyle,

  buttonSmall: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  } as TextStyle,

  // Link/Clickable text - uses primary color with semibold weight
  link: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
    lineHeight: fontSize.md * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: '600',
  } as TextStyle,

  linkSmall: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: '600',
  } as TextStyle,

  linkLarge: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.base,
    lineHeight: fontSize.base * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: '600',
  } as TextStyle,

  // Clickable text (alias for link, semantic naming)
  clickable: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.md,
    lineHeight: fontSize.md * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: '700',
  } as TextStyle,

  clickableSmall: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: '600',
  } as TextStyle,

  // Tooltip/Help text
  tooltip: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
  } as TextStyle,

  // Input text
  input: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.base,
    lineHeight: fontSize.base * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  } as TextStyle,

  inputSmall: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    lineHeight: fontSize.md * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  } as TextStyle,

  // Placeholder text
  placeholder: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.base,
    lineHeight: fontSize.base * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  } as TextStyle,

  // Error/Helper text
  helper: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  } as TextStyle,

  error: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  } as TextStyle,

  // Badge/Tag text
  badge: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.xs,
    lineHeight: fontSize.xs * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  } as TextStyle,

  // Navigation
  navTitle: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.lg,
    lineHeight: fontSize.lg * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  } as TextStyle,

  tabLabel: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  } as TextStyle,

  // News specific
  newsTitle: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.lg,
    lineHeight: fontSize.lg * lineHeight.snug,
    letterSpacing: letterSpacing.tight,
  } as TextStyle,

  newsDescription: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    lineHeight: fontSize.md * lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
  } as TextStyle,

  newsSource: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  } as TextStyle,

  newsTimestamp: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  } as TextStyle,

  styles: {
    h1: {
      fontFamily: fontFamily.bold,
      fontSize: fontSize['4xl'],
      lineHeight: fontSize.xl * lineHeight.snug,
      letterSpacing: letterSpacing.tight,
    } as TextStyle,
    h2: {
      fontFamily: fontFamily.bold,
      fontSize: fontSize['3xl'],
      lineHeight: fontSize['3xl'] * lineHeight.snug,
      letterSpacing: letterSpacing.tight,
    } as TextStyle,
    h3: {
      fontFamily: fontFamily.bold,
      fontSize: fontSize['2xl'],
      lineHeight: fontSize['2xl'] * lineHeight.snug,
      letterSpacing: letterSpacing.tight,
    } as TextStyle,
    h4: {
      fontFamily: fontFamily.bold,
      fontSize: fontSize['xl'],
      lineHeight: fontSize['xl'] * lineHeight.snug,
      letterSpacing: letterSpacing.tight,
    } as TextStyle,
    body: {
      fontFamily: fontFamily.regular,
      fontSize: fontSize.md,
      lineHeight: fontSize.md * lineHeight.relaxed,
      letterSpacing: letterSpacing.normal,
    } as TextStyle,

    label: {
      fontFamily: fontFamily.medium,
      fontSize: fontSize.sm,
      lineHeight: fontSize.sm * lineHeight.normal,
      letterSpacing: letterSpacing.wide,
    } as TextStyle,
  },
} as const;

export type TypographyKey = keyof typeof typography;
