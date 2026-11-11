/**
 * Filiz — Global State (Zustand)
 */

import { create } from 'zustand';
import { UserProfile, MoodLog, OnboardingData, AuthTokens } from '@/types';

interface AppState {
  // Auth
  isAuthenticated: boolean;
  tokens: AuthTokens | null;
  setTokens: (tokens: AuthTokens | null) => void;

  // User
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;

  // Bugünkü ruh hali
  todayMood: MoodLog | null;
  setTodayMood: (mood: MoodLog | null) => void;

  // Onboarding
  onboardingData: Partial<OnboardingData>;
  setOnboardingData: (data: Partial<OnboardingData>) => void;

  // Genel
  isLoading: boolean;
  setLoading: (loading: boolean) => void;

  // Çıkış
  logout: () => void;
}

export const useStore = create<AppState>((set) => ({
  // Auth
  isAuthenticated: false,
  tokens: null,
  setTokens: (tokens) =>
    set({ tokens, isAuthenticated: !!tokens }),

  // User
  user: null,
  setUser: (user) => set({ user }),

  // Mood
  todayMood: null,
  setTodayMood: (todayMood) => set({ todayMood }),

  // Onboarding
  onboardingData: {},
  setOnboardingData: (data) =>
    set((state) => ({
      onboardingData: { ...state.onboardingData, ...data },
    })),

  // Loading
  isLoading: false,
  setLoading: (isLoading) => set({ isLoading }),

  // Logout
  logout: () =>
    set({
      isAuthenticated: false,
      tokens: null,
      user: null,
      todayMood: null,
      onboardingData: {},
    }),
}));
