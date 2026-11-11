/**
 * Filiz — Tip Tanımlamaları
 */

// Yaş grupları
export type AgeGroup = 'child' | 'youth' | 'adult';

// Tedavi durumu
export type TreatmentStatus = 'active' | 'completed' | 'unknown';

// Ruh hali seçenekleri
export type MoodType = 'very_good' | 'good' | 'neutral' | 'bad' | 'very_bad';

export const MOOD_OPTIONS: { type: MoodType; emoji: string; label: string }[] = [
  { type: 'very_good', emoji: '😊', label: 'İyi' },
  { type: 'good', emoji: '🙂', label: 'Fena değil' },
  { type: 'neutral', emoji: '😐', label: 'Kararsızım' },
  { type: 'bad', emoji: '😔', label: 'Zor' },
  { type: 'very_bad', emoji: '😣', label: 'Çok zor' },
];

// Belirti türleri
export type SymptomType = 'pain' | 'nausea' | 'fatigue' | 'appetite' | 'sleep' | 'other';

export const SYMPTOM_OPTIONS: { type: SymptomType; icon: string; label: string }[] = [
  { type: 'pain', icon: '🔴', label: 'Ağrı' },
  { type: 'nausea', icon: '🤢', label: 'Bulantı' },
  { type: 'fatigue', icon: '😴', label: 'Yorgunluk' },
  { type: 'appetite', icon: '🍽️', label: 'İştah' },
  { type: 'sleep', icon: '🌙', label: 'Uyku' },
  { type: 'other', icon: '📝', label: 'Diğer' },
];

// Öneri kategorileri
export type RecommendationCategory =
  | 'breathing'
  | 'relaxation'
  | 'mindfulness'
  | 'exercise'
  | 'education'
  | 'music';

// Kullanıcı profili
export interface UserProfile {
  id: number;
  email: string;
  fullName: string;
  ageGroup: AgeGroup;
  treatmentStatus: TreatmentStatus;
  onboardingCompleted: boolean;
  interests: string[];
  challenges: string[];
  createdAt: string;
}

// Ruh hali kaydı
export interface MoodLog {
  id: number;
  mood: MoodType;
  energyLevel: number; // 1-5
  notes?: string;
  loggedAt: string;
}

// Belirti kaydı
export interface SymptomLog {
  id: number;
  symptomType: SymptomType;
  severity: number; // 1-5
  notes?: string;
  loggedAt: string;
}

// Öneri
export interface Recommendation {
  id: number;
  title: string;
  description: string;
  category: RecommendationCategory;
  durationMinutes: number;
  isExpertContent: boolean;
  expertName?: string;
  contentUrl?: string;
}

// AI Danışman mesajı
export interface AdvisorMessage {
  id: number;
  role: 'user' | 'assistant' | 'system';
  content: string;
  isVoiceInput: boolean;
  createdAt: string;
}

// Günlük girişi
export interface JournalEntry {
  id: number;
  content: string;
  isVoice: boolean;
  aiSummary?: string;
  moodDetected?: string;
  createdAt: string;
}

// Aile bağlantısı
export interface FamilyConnection {
  id: number;
  caregiverName: string;
  caregiverEmail: string;
  canSeeMood: boolean;
  canSeeSymptoms: boolean;
  canSendMessages: boolean;
  canReceiveAlerts: boolean;
  status: 'pending' | 'active' | 'revoked';
}

// Onboarding verileri
export interface OnboardingData {
  primaryGoals: string[];
  energyLevel: number;
  mainChallenges: string[];
}

// API yanıtları
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

// Haftalık rapor
export interface WeeklySummary {
  period: string;
  avgMood: number;
  avgEnergy: number;
  topSymptoms: { type: SymptomType; avgSeverity: number }[];
  moodTrend: 'improving' | 'stable' | 'declining';
  energyTrend: 'improving' | 'stable' | 'declining';
  talkingPoints: string[];
}
