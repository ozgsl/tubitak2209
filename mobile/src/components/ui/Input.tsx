/**
 * Filiz — Input Bileşeni
 */

import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import { colors, typography, borderRadius, spacing } from '@/theme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  isPassword?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  isPassword = false,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.inputContainer,
          isFocused && styles.focused,
          error && styles.errorBorder,
        ]}
      >
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={colors.neutral[500]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={isPassword && !showPassword}
          autoCapitalize="none"
          {...props}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeButton}
          >
            <Text style={styles.eyeText}>{showPassword ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
      {helperText && !error && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  label: {
    ...typography.bodyMedium,
    fontWeight: '500',
    color: colors.neutral[900],
    marginBottom: spacing.sm,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.neutral[50],
    borderRadius: borderRadius.md,
    borderWidth: 1.5,
    borderColor: colors.neutral[300],
    paddingHorizontal: spacing.lg,
  },
  focused: {
    borderColor: colors.primary[500],
    backgroundColor: colors.white,
  },
  errorBorder: {
    borderColor: colors.status.error,
  },
  input: {
    flex: 1,
    ...typography.bodyLarge,
    color: colors.neutral[900],
    paddingVertical: spacing.lg,
  },
  eyeButton: {
    padding: spacing.sm,
  },
  eyeText: {
    fontSize: 18,
  },
  errorText: {
    ...typography.bodySmall,
    color: colors.status.error,
    marginTop: spacing.xs,
  },
  helperText: {
    ...typography.bodySmall,
    color: colors.neutral[700],
    marginTop: spacing.xs,
  },
});
