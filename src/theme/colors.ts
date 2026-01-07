// ------------------- DESIGN SYSTEM - MONOCHROMATIC PALETTE -------------------  //

// Base Colors
export const white = '#FFFFFF';
export const black = '#000000';
export const transparent = '#FFFFFF00';

// ------------------- PRIMARY - Slate Blue Gray -------------------  //
// Base: #7D93A0
// A sophisticated, calm, professional slate blue-gray
export const primary50 = '#F4F6F7';
export const primary100 = '#E8ECEE';
export const primary200 = '#D1D9DD';
export const primary300 = '#B3C0C7';
export const primary400 = '#95A7B0';
export const primary500 = '#7D93A0';
export const primary600 = '#6A8290';
export const primary700 = '#576B77';
export const primary800 = '#45545D';
export const primary900 = '#333E44';

// ------------------- SUCCESS - Sage Green -------------------  //
// Base: #5CA37E (darker) & #7DB598 (lighter)
// A muted, earthy, sophisticated green
export const success50 = '#F3F9F6';
export const success100 = '#E5F3EC';
export const success200 = '#C9E6D7';
export const success300 = '#9DD4BA';
export const success400 = '#7DB598';
export const success500 = '#6CAC8B';
export const success600 = '#5CA37E';
export const success700 = '#4A8265';
export const success800 = '#38624C';
export const success900 = '#254133';

// Alias for green (backwards compatibility)
export const green50 = success50;
export const green100 = success100;
export const green200 = success200;
export const green300 = success300;
export const green400 = success400;
export const green500 = success500;
export const green600 = success600;
export const green700 = success700;
export const green800 = success800;
export const green900 = success900;

// ------------------- WARNING - Muted Gold -------------------  //
// Base: #C3B43C (darker) & #CFC363 (lighter)
// A sophisticated, muted gold/ochre
export const warning50 = '#FDFBF0';
export const warning100 = '#FAF6DC';
export const warning200 = '#F4EDB9';
export const warning300 = '#E8DE86';
export const warning400 = '#CFC363';
export const warning500 = '#C9BC4F';
export const warning600 = '#C3B43C';
export const warning700 = '#9C9030';
export const warning800 = '#756C24';
export const warning900 = '#4E4818';

// Alias for yellow (backwards compatibility)
export const yellow50 = warning50;
export const yellow100 = warning100;
export const yellow200 = warning200;
export const yellow300 = warning300;
export const yellow400 = warning400;
export const yellow500 = warning500;
export const yellow600 = warning600;
export const yellow700 = warning700;
export const yellow800 = warning800;
export const yellow900 = warning900;

// ------------------- ERROR - Terracotta -------------------  //
// Base: #B85C47 (darker) & #C67C6C (lighter)
// A warm, earthy terracotta/rust
export const error50 = '#FDF5F3';
export const error100 = '#FAEAE6';
export const error200 = '#F2CFC8';
export const error300 = '#E5A89C';
export const error400 = '#C67C6C';
export const error500 = '#BF6959';
export const error600 = '#B85C47';
export const error700 = '#934A39';
export const error800 = '#6E372B';
export const error900 = '#49251C';

// Alias for red (backwards compatibility)
export const red50 = error50;
export const red100 = error100;
export const red200 = error200;
export const red300 = error300;
export const red400 = error400;
export const red500 = error500;
export const red600 = error600;
export const red700 = error700;
export const red800 = error800;
export const red900 = error900;
export const red1000 = error100; // Legacy alias

// ------------------- INFO - Steel Blue -------------------  //
// Complementary blue for informational states
export const info50 = '#F0F4F7';
export const info100 = '#E1E9EF';
export const info200 = '#C3D3DF';
export const info300 = '#94B1C5';
export const info400 = '#6B91A9';
export const info500 = '#5A7F96';
export const info600 = '#4A6E84';
export const info700 = '#3C586A';
export const info800 = '#2E4350';
export const info900 = '#1F2D36';

// Alias for blue (backwards compatibility)
export const blue50 = info50;
export const blue100 = info100;
export const blue200 = info200;
export const blue300 = info300;
export const blue400 = info400;
export const blue500 = info500;
export const blue600 = info600;
export const blue700 = info700;
export const blue800 = info800;
export const blue900 = info900;

// ------------------- INDIGO - Accent Color -------------------  //
// Vibrant indigo for special UI elements like "For You" category
export const indigo50 = '#EEF2FF';
export const indigo100 = '#E0E7FF';
export const indigo200 = '#C7D2FE';
export const indigo300 = '#A5B4FC';
export const indigo400 = '#818CF8';
export const indigo500 = '#6366F1';
export const indigo600 = '#4F46E5';
export const indigo700 = '#4338CA';
export const indigo800 = '#3730A3';
export const indigo900 = '#312E81';

// ------------------- NEUTRAL - Gray Scale -------------------  //
// Balanced neutral grays with slight warmth
export const grey = '#6B7780';
export const grey50 = '#FAFBFB';
export const grey100 = '#F5F6F7';
export const grey200 = '#EBEEF0';
export const grey300 = '#DFE3E6';
export const grey400 = '#CED4D9';
export const grey500 = '#B8C0C7';
export const grey600 = '#9BA4AC';
export const grey700 = '#7A848D';
export const grey800 = '#5C656D';
export const grey900 = '#3F474E';

// ------------------- BLACK Scale -------------------  //
// Deep, rich blacks with blue undertone
export const black50 = '#E8EAEB';
export const black100 = '#C5C9CC';
export const black200 = '#9DA3A8';
export const black300 = '#757D84';
export const black400 = '#5A626A';
export const black500 = '#3F4850';
export const black600 = '#353D44';
export const black700 = '#2A3138';
export const black800 = '#1F252A';
export const black900 = '#14191D';

// ------------------- INTERACTIVE COLORS -------------------  //
// Clickable/Link text - uses primary500 with fontWeight 600
export const clickable = primary500;
export const link = primary500;

// ------------------- GLASS/TRANSPARENT COLORS -------------------  //
// iOS-style glassmorphism colors
export const glassWhite = 'rgba(255, 255, 255, 0.85)';
export const glassWhiteLight = 'rgba(255, 255, 255, 0.65)';
export const glassWhiteMedium = 'rgba(255, 255, 255, 0.45)';
export const glassDark = 'rgba(20, 25, 29, 0.75)';
export const glassDarkLight = 'rgba(20, 25, 29, 0.55)';
export const glassBorder = 'rgba(255, 255, 255, 0.18)';
export const glassBorderDark = 'rgba(0, 0, 0, 0.08)';

// ------------------- GRADIENT PRESETS -------------------  //
// Gradient color arrays for LinearGradient
export const Gradients = {
  // Primary gradients (slate blue-gray)
  primary: [primary400, primary600],
  primaryLight: [primary200, primary400],
  primaryDark: [primary600, primary900],
  primarySoft: ['rgba(125, 147, 160, 0.1)', 'rgba(106, 130, 144, 0.2)'],

  // Glass gradients (iOS-style)
  glassLight: ['rgba(255, 255, 255, 0.88)', 'rgba(255, 255, 255, 0.7)'],
  glassMedium: ['rgba(255, 255, 255, 0.75)', 'rgba(255, 255, 255, 0.55)'],
  glassDark: ['rgba(45, 55, 65, 0.85)', 'rgba(30, 38, 45, 0.9)'],
  glassSubtle: ['rgba(255, 255, 255, 0.95)', 'rgba(248, 250, 252, 0.85)'],

  // Frosted glass with hint of primary
  glassPrimary: ['rgba(244, 246, 247, 0.92)', 'rgba(232, 236, 238, 0.88)'],
  glassPrimaryDark: ['rgba(51, 62, 68, 0.9)', 'rgba(45, 54, 60, 0.85)'],

  // Tab bar specific
  tabBarLight: ['rgba(255, 255, 255, 0.95)', 'rgba(250, 251, 251, 0.9)'],
  tabBarDark: ['rgba(30, 35, 40, 0.92)', 'rgba(20, 25, 29, 0.95)'],

  // Success gradients
  success: [success400, success600],
  successLight: [success200, success400],

  // Warning gradients
  warning: [warning400, warning600],
  warningLight: [warning200, warning400],

  // Error gradients
  error: [error400, error600],
  errorLight: [error200, error400],

  // Neutral gradients
  neutral: [grey200, grey400],
  neutralDark: [grey700, grey900],

  // Overlay gradients
  overlayLight: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)'],
  overlayDark: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)'],

  // Card gradients
  cardLight: ['#FFFFFF', '#FAFBFB'],
  cardDark: [black700, black900],
};

// ------------------- SEMANTIC COLORS -------------------  //
// Convenient semantic aliases
export const Colors = {
  // Base
  white,
  black,
  transparent,

  // Interactive/Clickable text
  clickable,
  link,

  // Glass/Transparent
  glassWhite,
  glassWhiteLight,
  glassWhiteMedium,
  glassDark,
  glassDarkLight,
  glassBorder,
  glassBorderDark,

  // Primary
  primary50,
  primary100,
  primary200,
  primary300,
  primary400,
  primary500,
  primary600,
  primary700,
  primary800,
  primary900,

  // Success
  success50,
  success100,
  success200,
  success300,
  success400,
  success500,
  success600,
  success700,
  success800,
  success900,

  // Warning
  warning50,
  warning100,
  warning200,
  warning300,
  warning400,
  warning500,
  warning600,
  warning700,
  warning800,
  warning900,

  // Error
  error50,
  error100,
  error200,
  error300,
  error400,
  error500,
  error600,
  error700,
  error800,
  error900,

  // Info
  info50,
  info100,
  info200,
  info300,
  info400,
  info500,
  info600,
  info700,
  info800,
  info900,

  // Indigo
  indigo50,
  indigo100,
  indigo200,
  indigo300,
  indigo400,
  indigo500,
  indigo600,
  indigo700,
  indigo800,
  indigo900,

  // Blue (alias for info)
  blue50,
  blue100,
  blue200,
  blue300,
  blue400,
  blue500,
  blue600,
  blue700,
  blue800,
  blue900,

  // Greys
  grey,
  grey50,
  grey100,
  grey200,
  grey300,
  grey400,
  grey500,
  grey600,
  grey700,
  grey800,
  grey900,

  // Blacks
  black50,
  black100,
  black200,
  black300,
  black400,
  black500,
  black600,
  black700,
  black800,
  black900,

  // Legacy aliases (backwards compatibility)
  green50,
  green100,
  green200,
  green300,
  green400,
  green500,
  green600,
  green700,
  green800,
  green900,
  yellow50,
  yellow100,
  yellow200,
  yellow300,
  yellow400,
  yellow500,
  yellow600,
  yellow700,
  yellow800,
  yellow900,
  red50,
  red100,
  red200,
  red300,
  red400,
  red500,
  red600,
  red700,
  red800,
  red900,
  red1000,
};

// Lowercase alias for convenience
export const colors = Colors;

export default Colors;

export const lightColors = {
  // Primary
  primary: primary500,
  primaryLight: primary300,
  primaryDark: primary700,

  // Secondary (using info colors)
  secondary: info500,
  secondaryLight: info300,
  secondaryDark: info700,

  // Success
  success: success500,
  successLight: success300,
  successDark: success700,

  // Warning
  warning: warning500,
  warningLight: warning300,
  warningDark: warning700,

  // Error
  error: error500,
  errorLight: error300,
  errorDark: error700,

  // Info
  info: info500,
  infoLight: info300,
  infoDark: info700,

  // Invoice status colors
  draft: grey500,
  sent: info500,
  paid: success500,
  overdue: error500,
  cancelled: grey600,

  // Backgrounds & Surfaces
  background: '#FFFFFF',
  surface: '#F9FAFB',
  surfaceVariant: '#F3F4F6',

  // Text
  text: '#111827',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',

  // Borders
  border: '#E5E7EB',
  borderLight: '#F3F4F6',

  // States
  disabled: '#D1D5DB',
  placeholder: '#9CA3AF',
  backdrop: 'rgba(0, 0, 0, 0.5)',
};

export const darkColors = {
  // Primary
  primary: primary600,
  primaryLight: primary200,
  primaryDark: primary800,

  // Secondary (using info colors)
  secondary: info400,
  secondaryLight: info200,
  secondaryDark: info600,

  // Success
  success: success400,
  successLight: success200,
  successDark: success600,

  // Warning
  warning: warning400,
  warningLight: warning200,
  warningDark: warning600,

  // Error
  error: error400,
  errorLight: error200,
  errorDark: error600,

  // Info
  info: info400,
  infoLight: info200,
  infoDark: info600,

  // Invoice status colors
  draft: grey400,
  sent: info400,
  paid: success400,
  overdue: error400,
  cancelled: grey500,

  // Backgrounds & Surfaces
  background: '#323741ff',
  surface: '#1b2635ff',
  surfaceVariant: '#374151',

  // Text
  text: '#F9FAFB',
  textSecondary: '#b1bdd2ff',
  textTertiary: '#6B7280',

  // Borders
  border: '#374151',
  borderLight: '#4B5563',

  // States
  disabled: '#4B5563',
  placeholder: '#6B7280',
  backdrop: 'rgba(0, 0, 0, 0.7)',
};
