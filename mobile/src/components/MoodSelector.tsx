/**
 * Filiz — MoodSelector Bileşeni
 *
 * Tek dokunuşla ruh hali seçimi.
 * Büyük dokunma alanları, erişilebilir tasarım.
 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, typography, borderRadius, spacing, shadow } from '@/theme';
import { MoodType, MOOD_OPTIONS } from '@/types';

interface MoodSelectorProps {
  selectedMood: MoodType | null;
  onSelect: (mood: MoodType) => void;
}

export const MoodSelector: React.FC<MoodSelectorProps> = ({
  selectedMood,
  onSelect,
}) => {
  return (
    <View style={styles.container}>
      {MOOD_OPTIONS.map((option) => {
        const isSelected = selectedMood === option.type;
        return (
          <TouchableOpacity
            key={option.type}
            onPress={() => onSelect(option.type)}
            activeOpacity={0.7}
            style={[
              styles.option,
              isSelected && styles.selectedOption,
            ]}
            accessibilityLabel={`Ruh hali: ${option.label}`}
            accessibilityRole="button"
            accessibilityState={{ selected: isSelected }}
          >
            <Text style={styles.emoji}>{option.emoji}</Text>
            <Text
              style={[
                styles.label,
                isSelected && styles.selectedLabel,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  option: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xs,
    borderRadius: borderRadius.md,
    backgroundColor: colors.neutral[50],
    borderWidth: 1.5,
    borderColor: colors.neutral[300],
    minHeight: 72,
    justifyContent: 'center',
  },
  selectedOption: {
    backgroundColor: colors.primary[50],
    borderColor: colors.primary[500],
    ...shadow.sm,
  },
  emoji: {
    fontSize: 28,
    marginBottom: spacing.xs,
  },
  label: {
    ...typography.caption,
    color: colors.neutral[700],
    textAlign: 'center',
  },
  selectedLabel: {
    color: colors.primary[700],
    fontWeight: '600',
  },
});
