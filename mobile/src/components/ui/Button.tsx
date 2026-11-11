/**
 * Filiz — Button Bileşeni
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors, typography, borderRadius, spacing } from '@/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'text' | 'disabled';
  size?: 'large' | 'medium' | 'small';
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'large',
  loading = false,
  disabled = false,
  style,
  textStyle,
  icon,
}) => {
  const isDisabled = disabled || variant === 'disabled' || loading;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
      style={[
        styles.base,
        styles[`${variant}Container`],
        styles[`${size}Size`],
        isDisabled && styles.disabledContainer,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? colors.white : colors.primary[500]}
          size="small"
        />
      ) : (
        <>
          {icon}
          <Text
            style={[
              styles.baseText,
              styles[`${variant}Text`],
              styles[`${size}Text`],
              isDisabled && styles.disabledText,
              textStyle,
            ]}
          >
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },

  // Varyant stiller
  primaryContainer: {
    backgroundColor: colors.primary[500],
    borderRadius: borderRadius.md,
  },
  secondaryContainer: {
    backgroundColor: colors.neutral[50],
    borderRadius: borderRadius.md,
    borderWidth: 1.5,
    borderColor: colors.primary[500],
  },
  textContainer: {
    backgroundColor: 'transparent',
  },
  disabledContainer: {
    backgroundColor: colors.neutral[200],
    borderColor: colors.neutral[300],
    opacity: 0.6,
  },

  // Boyut stiller
  largeSize: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing['2xl'],
    minHeight: 56,
  },
  mediumSize: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    minHeight: 48,
  },
  smallSize: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    minHeight: 36,
  },

  // Metin stiller
  baseText: {
    textAlign: 'center',
  },
  primaryText: {
    ...typography.buttonLarge,
    color: colors.white,
  },
  secondaryText: {
    ...typography.buttonLarge,
    color: colors.primary[500],
  },
  textText: {
    ...typography.buttonMedium,
    color: colors.primary[500],
  },
  disabledText: {
    color: colors.neutral[500],
  },
  largeText: {
    ...typography.buttonLarge,
  },
  mediumText: {
    ...typography.buttonMedium,
  },
  smallText: {
    ...typography.bodySmall,
  },
});
