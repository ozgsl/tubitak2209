/**
 * Filiz — API İstemcisi
 */

import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { AuthTokens } from '@/types';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

class ApiService {
  private client: AxiosInstance;
  private accessToken: string | null = null;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 15000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // İstek interceptor — JWT token ekleme
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (this.accessToken) {
          config.headers.Authorization = `Bearer ${this.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Yanıt interceptor — hata yönetimi
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          // Token süresi dolmuş — refresh dene
          // TODO: Token yenileme mantığı
        }
        return Promise.reject(error);
      }
    );
  }

  setToken(token: string) {
    this.accessToken = token;
  }

  clearToken() {
    this.accessToken = null;
  }

  // ─── Auth ────────────────────────────────────────
  async register(data: { fullName: string; email: string; password: string }) {
    return this.client.post<AuthTokens>('/auth/register', data);
  }

  async login(data: { email: string; password: string }) {
    return this.client.post<AuthTokens>('/auth/login', data);
  }

  // ─── User ────────────────────────────────────────
  async getProfile() {
    return this.client.get('/users/me');
  }

  async updateProfile(data: Partial<{ fullName: string; ageGroup: string }>) {
    return this.client.put('/users/me', data);
  }

  async completeOnboarding(data: {
    primaryGoals: string[];
    energyLevel: number;
    mainChallenges: string[];
  }) {
    return this.client.put('/users/onboarding', data);
  }

  // ─── Mood ────────────────────────────────────────
  async logMood(data: { mood: string; energyLevel: number; notes?: string }) {
    return this.client.post('/mood/log', data);
  }

  async getMoodHistory(days: number = 7) {
    return this.client.get(`/mood/history?days=${days}`);
  }

  async getTodayMood() {
    return this.client.get('/mood/today');
  }

  // ─── Symptoms ────────────────────────────────────
  async logSymptom(data: { symptomType: string; severity: number; notes?: string }) {
    return this.client.post('/symptoms/log', data);
  }

  async getSymptomHistory(days: number = 7) {
    return this.client.get(`/symptoms/history?days=${days}`);
  }

  // ─── Recommendations ────────────────────────────
  async getDailyRecommendations() {
    return this.client.get('/recommendations/daily');
  }

  async sendRecommendationFeedback(id: number, score: number) {
    return this.client.post('/recommendations/feedback', {
      recommendationId: id,
      feedbackScore: score,
    });
  }

  // ─── AI Advisor ──────────────────────────────────
  async sendAdvisorMessage(content: string, isVoice: boolean = false) {
    return this.client.post('/advisor/chat', { content, isVoice });
  }

  async getAdvisorHistory() {
    return this.client.get('/advisor/history');
  }

  // ─── Journal ─────────────────────────────────────
  async createJournalEntry(data: { content: string; isVoice: boolean }) {
    return this.client.post('/journal/entry', data);
  }

  async getJournalEntries() {
    return this.client.get('/journal/entries');
  }

  // ─── Family ──────────────────────────────────────
  async inviteFamily(data: { name: string; email: string }) {
    return this.client.post('/family/invite', data);
  }

  async getFamilyMembers() {
    return this.client.get('/family/members');
  }

  async updateFamilyPermissions(
    connectionId: number,
    permissions: {
      canSeeMood?: boolean;
      canSeeSymptoms?: boolean;
      canSendMessages?: boolean;
      canReceiveAlerts?: boolean;
    }
  ) {
    return this.client.put(`/family/permissions/${connectionId}`, permissions);
  }

  // ─── Reports ─────────────────────────────────────
  async getWeeklySummary() {
    return this.client.get('/reports/weekly-summary');
  }
}

export const api = new ApiService();
export default api;
