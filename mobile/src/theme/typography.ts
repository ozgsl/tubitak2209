/**
 * Filiz Design System — Tipografi
 *
 * Inter font ailesi kullanılır.
 * Güçlü hiyerarşi ile okunabilirlik ön plandadır.
 */

import { TextStyle } from 'react-native';

export const fontFamily = {
  light: 'Inter_300Light',
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semibold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
};

export const typography: Record<string, TextStyle> = {
  // Büyük ekran başlıkları
  displayLarge: {
    fontFamily: fontFamily.bold,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  displayMedium: {
    fontFamily: fontFamily.bold,
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: -0.3,
  },

  // Bölüm başlıkları
  headlineLarge: {
    fontFamily: fontFamily.semibold,
    fontSize: 24,
    lineHeight: 32,
  },
  headlineMedium: {
    fontFamily: fontFamily.semibold,
    fontSize: 20,
    lineHeight: 28,
  },
  headlineSmall: {
    fontFamily: fontFamily.semibold,
    fontSize: 18,
    lineHeight: 26,
  },

  // Gövde metni
  bodyLarge: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 24,
  },
  bodyMedium: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 22,
  },
  bodySmall: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 18,
  },

  // Buton metni
  buttonLarge: {
    fontFamily: fontFamily.semibold,
    fontSize: 16,
    lineHeight: 24,
  },
  buttonMedium: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 22,
  },

  // Etiket / caption
  label: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.3,
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    lineHeight: 16,
  },
};
