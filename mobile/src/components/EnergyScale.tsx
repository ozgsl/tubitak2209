/**
 * Filiz — EnergyScale Bileşeni
 *
 * 1-5 enerji skalası, basit ve hızlı.
 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, typography, borderRadius, spacing } from '@/theme';

interface EnergyScaleProps {
  value: number | null; // 1-5
  onChange: (value: number) => void;
}

const ENERGY_LABELS = ['Çok düşük', 'Düşük', 'Orta', 'İyi', 'Çok iyi'];
const ENERGY_ICONS = ['🔋', '🪫', '⚡', '✨', '🌟'];

export const EnergyScale: React.FC<EnergyScaleProps> = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enerjin nasıl?</Text>
      <View style={styles.scaleRow}>
        {[1, 2, 3, 4, 5].map((level) => {
          const isSelected = value === level;
          const fillPercent = level / 5;
          return (
            <TouchableOpacity
              key={level}
              onPress={() => onChange(level)}
              activeOpacity={0.7}
              style={[
                styles.scaleItem,
                isSelected && {
                  backgroundColor: `rgba(91, 140, 90, ${0.1 + fillPercent * 0.3})`,
                  borderColor: colors.primary[500],
                },
              ]}
              accessibilityLabel={`Enerji seviyesi ${level}: ${ENERGY_LABELS[level - 1]}`}
            >
              <Text style={styles.icon}>{ENERGY_ICONS[level - 1]}</Text>
              <Text
                style={[
                  styles.label,
                  isSelected && styles.selectedLabel,
                ]}
              >
                {ENERGY_LABELS[level - 1]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.lg,
  },
  title: {
    ...typography.headlineSmall,
    color: colors.neutral[900],
    marginBottom: spacing.md,
  },
  scaleRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  scaleItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    backgroundColor: colors.neutral[50],
    borderWidth: 1.5,
    borderColor: colors.neutral[300],
    minHeight: 68,
    justifyContent: 'center',
  },
  icon: {
    fontSize: 20,
    marginBottom: spacing.xs,
  },
  label: {
    ...typography.caption,
    color: colors.neutral[700],
    textAlign: 'center',
    fontSize: 9,
  },
  selectedLabel: {
    color: colors.primary[700],
    fontWeight: '600',
  },
});
