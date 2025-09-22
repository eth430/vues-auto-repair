// Brand Colors - Based on Vue's Auto Repair logo (brighter version)
export const brandColors = {
  // Logo blue - vibrant royal blue (not purple-ish)
  blue: {
    50: '#eff6ff',
    100: '#dbeafe', 
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Lighter blue for highlights
    600: '#1e40af', // Main logo blue - true royal blue
    700: '#1e3a8a', // Darker blue for depth
    800: '#1e2563',
    900: '#172554', // Very dark blue
  },
  
  // Secondary colors for accents and CTAs
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b', // Current secondary main
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  
  // Status colors for alerts, success, warnings
  status: {
    success: {
      light: '#bbf7d0',
      main: '#22c55e',
      dark: '#16a34a',
    },
    warning: {
      light: '#fed7aa',
      main: '#f97316',
      dark: '#ea580c',
    },
    error: {
      light: '#fecaca',
      main: '#ef4444',
      dark: '#dc2626',
    },
    info: {
      light: '#bae6fd',
      main: '#0ea5e9',
      dark: '#0284c7',
    },
  },
} as const;

// Racing/Performance shop colors - with white contrast like the logo
export const racingColors = {
  // Dark racing backgrounds
  midnight: '#0a0a0a',        // Pure dark for racing aesthetic
  asphalt: '#1a1a1a',        // Dark asphalt color
  carbon: '#2a2a2a',         // Carbon fiber inspired
  modernGray: '#18181b',      // Modern sophisticated dark gray
  gunmetal: '#1f2937',        // Professional gunmetal gray
  
  // Light backgrounds (from logo inspiration)
  white: '#ffffff',           // Pure white like logo background
  lightGray: '#f8fafc',       // Very light gray
  pearl: '#f1f5f9',          // Pearl white for subtle variation
  
  // Logo-based accent colors (brighter, less purple)
  logoBlue: '#1e40af',        // Main Vue's Auto blue - true royal blue
  accentBlue: '#3b82f6',      // Lighter blue for highlights
  deepBlue: '#1e3a8a',        // Darker blue for depth
  
  // Racing highlights
  chrome: '#e5e7eb',          // Brighter chrome/metallic
  silver: '#9ca3af',          // Silver accents
  
  // Track lines/grid
  gridLine: '#374151',        // Subtle grid lines for dark sections
  lightGridLine: '#e2e8f0',   // Light grid lines for white sections
} as const;

// Auto repair specific semantic colors
export const semanticColors = {
  // Trust and reliability - blues and navy
  trust: brandColors.blue[600],
  trustLight: brandColors.blue[100],
  trustDark: brandColors.blue[800],
  
  // Professional service - clean grays
  professional: brandColors.slate[600],
  professionalLight: brandColors.slate[100],
  professionalDark: brandColors.slate[800],
  
  // Emergency/urgent services - warm oranges/reds
  urgent: brandColors.status.warning.main,
  urgentLight: brandColors.status.warning.light,
  
  // Success/completed - greens
  success: brandColors.status.success.main,
  successLight: brandColors.status.success.light,
  
  // Racing/performance aesthetic
  racing: {
    midnight: racingColors.midnight,
    asphalt: racingColors.asphalt,
    carbon: racingColors.carbon,
    modernGray: racingColors.modernGray,
    gunmetal: racingColors.gunmetal,
    white: racingColors.white,
    lightGray: racingColors.lightGray,
    pearl: racingColors.pearl,
    logoBlue: racingColors.logoBlue,
    accentBlue: racingColors.accentBlue,
    deepBlue: racingColors.deepBlue,
    chrome: racingColors.chrome,
    silver: racingColors.silver,
    gridLine: racingColors.gridLine,
    lightGridLine: racingColors.lightGridLine,
  },
  
  // Backgrounds
  surface: '#ffffff',
  surfaceVariant: brandColors.slate[50],
  surfaceElevated: '#fcfcfd',
} as const;

// Light theme palette
export const lightPalette = {
  mode: 'light' as const,
  primary: {
    main: brandColors.blue[600],
    light: brandColors.blue[400],
    dark: brandColors.blue[700],
    contrastText: '#ffffff',
  },
  secondary: {
    main: brandColors.slate[500],
    light: brandColors.slate[400],
    dark: brandColors.slate[600],
    contrastText: '#ffffff',
  },
  background: {
    default: semanticColors.surface,
    paper: semanticColors.surfaceVariant,
  },
  text: {
    primary: brandColors.slate[900],
    secondary: brandColors.slate[700],
  },
  success: brandColors.status.success,
  warning: brandColors.status.warning,
  error: brandColors.status.error,
  info: brandColors.status.info,
  grey: brandColors.slate,
} as const;

// Dark theme palette
export const darkPalette = {
  mode: 'dark' as const,
  primary: {
    main: brandColors.blue[400],
    light: brandColors.blue[300],
    dark: brandColors.blue[600],
    contrastText: '#ffffff',
  },
  secondary: {
    main: brandColors.slate[400],
    light: brandColors.slate[300],
    dark: brandColors.slate[500],
    contrastText: '#ffffff',
  },
  background: {
    default: brandColors.slate[900],
    paper: brandColors.slate[800],
  },
  text: {
    primary: brandColors.slate[100],
    secondary: brandColors.slate[300],
  },
  success: {
    main: brandColors.status.success.main,
    light: brandColors.status.success.light,
    dark: brandColors.status.success.dark,
  },
  warning: {
    main: brandColors.status.warning.main,
    light: brandColors.status.warning.light,
    dark: brandColors.status.warning.dark,
  },
  error: {
    main: brandColors.status.error.main,
    light: brandColors.status.error.light,
    dark: brandColors.status.error.dark,
  },
  info: {
    main: brandColors.status.info.main,
    light: brandColors.status.info.light,
    dark: brandColors.status.info.dark,
  },
  grey: brandColors.slate,
} as const;

// Export commonly used colors for direct access
export const colors = {
  // Brand colors
  brand: brandColors.blue[600],
  brandLight: brandColors.blue[400],
  brandDark: brandColors.blue[700],
  
  // Semantic colors
  ...semanticColors,
  
  // Racing colors (direct access)
  racing: racingColors,
  
  // Full palettes
  blue: brandColors.blue,
  slate: brandColors.slate,
  status: brandColors.status,
} as const;