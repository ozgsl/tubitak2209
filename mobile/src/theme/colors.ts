/**
 * Filiz Design System — Renk Paleti
 *
 * Botanik / organik temelli, sıcak ve sakin bir renk sistemi.
 * Klinik veya hastane hissi vermekten kaçınılmıştır.
 */

export const colors = {
  // Primer renkler
  primary: {
    50: '#EFF5EE',
    100: '#D4E6D1',
    200: '#B5D4B0',
    300: '#8DB580',
    400: '#6FA364',
    500: '#5B8C5A', // Ana yeşil
    600: '#4A7349',
    700: '#3A5B3A',
    800: '#2B432B',
    900: '#1C2C1C',
  },

  // Nötr renkler (sıcak tonlu)
  neutral: {
    50: '#FAFAF7',   // Sayfa arka planı
    100: '#F5F0E8',  // Krem
    200: '#EDE8DF',
    300: '#E8E5DF',  // Border
    400: '#C5C0B8',
    500: '#9E9890',
    600: '#7D776F',
    700: '#636E72',  // İkincil metin
    800: '#3D4145',
    900: '#2D3436',  // Ana metin (koyu kömür)
  },

  // Botanik vurgu renkleri
  botanical: {
    sage: '#A3B899',
    peach: '#F2E6D9',
    lavender: '#D5CCE6',
    warmYellow: '#F5E6C8',
    softPink: '#F0D9D9',
    sky: '#D1E3F0',
  },

  // Durum renkleri
  status: {
    success: '#5B8C5A',
    warning: '#D4A853',
    error: '#C0392B',
    info: '#5A7D8C',
  },

  // Ruh hali renkleri
  mood: {
    veryGood: '#5B8C5A',
    good: '#8DB580',
    neutral: '#D4A853',
    bad: '#C08C5A',
    veryBad: '#A35B5B',
  },

  // Sabit
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  overlay: 'rgba(0, 0, 0, 0.3)',
} as const;

// Kısa erişim
export const bg = colors.neutral[50];
export const cardBg = colors.white;
export const textPrimary = colors.neutral[900];
export const textSecondary = colors.neutral[700];
export const border = colors.neutral[300];
export const accent = colors.primary[500];
