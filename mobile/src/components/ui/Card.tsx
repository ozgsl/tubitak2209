/**
 * Filiz — Card Bileşeni
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { colors, typography, borderRadius, spacing, shadow } from '@/theme';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  onPress?: () => void;
  style?: ViewStyle;
  variant?: 'default' | 'highlighted' | 'botanical';
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  onPress,
  style,
  variant = 'default',
}) => {
  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      style={[
        styles.container,
        variant === 'highlighted' && styles.highlighted,
        variant === 'botanical' && styles.botanical,
        style,
      ]}
    >
      {title && (
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      )}
      {children}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    ...shadow.md,
  },
  highlighted: {
    borderLeftWidth: 3,
    borderLeftColor: colors.primary[500],
  },
  botanical: {
    backgroundColor: colors.botanical.peach,
    borderWidth: 0,
  },
  header: {
    marginBottom: spacing.md,
  },
  title: {
    ...typography.headlineSmall,
    color: colors.neutral[900],
  },
  subtitle: {
    ...typography.bodySmall,
    color: colors.neutral[700],
    marginTop: spacing.xs,
  },
});
