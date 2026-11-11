# 🌱 Filiz — Yapay Zeka Destekli Psikososyal Destek Mobil Uygulaması

> **TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı**

Filiz, kanser hastalarının tedavi sürecinde psikolojik iyi oluşlarını destekleyen, yapay zeka destekli bir mobil sağlık uygulamasıdır.

## 🎯 Proje Amacı

Kanser hastalarının (Çocuk, Genç, Yetişkin) yaş grubuna özel kişiselleştirilmiş psikososyal destek sağlamak. Uygulama:

- 📊 Günlük ruh hali ve belirti takibi
- 🧠 ML tabanlı kişiselleştirilmiş öneri sistemi
- 💬 Yapay zeka destekli psiko-eğitim danışmanı
- 🧘 Bilinçli farkındalık ve gevşeme egzersizleri
- 👨‍👩‍👧 Aile/yakın bağlantı modülü
- 📋 Doktor özet raporu

## 🏗️ Teknoloji Stack

| Katman | Teknoloji |
|--------|-----------|
| **Mobil** | React Native (Expo) + TypeScript |
| **Backend** | FastAPI (Python 3.11+) |
| **Veritabanı** | MySQL 8.0+ |
| **ML/AI** | Scikit-learn · TensorFlow · Gemini API |
| **Deployment** | Docker + Docker Compose |

## 📁 Proje Yapısı

```
tubitak2209/
├── mobile/          # React Native (Expo) mobil uygulaması
├── backend/         # FastAPI backend API
├── ml/              # Makine öğrenimi modelleri
├── docs/            # Proje dokümantasyonu
└── docker-compose.yml
```

## 🚀 Hızlı Başlangıç

### Mobil Uygulama
```bash
cd mobile
npm install
npx expo start
```

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env      # .env dosyasını düzenle
uvicorn main:app --reload --port 8000
```

### ML Ortamı
```bash
cd ml
pip install -r requirements.txt
```

## 👥 Ekip

- **Beyza Ferhan Bağdatlıoğlu** — Mobil Uygulama & UI/UX
- **Özge Sanal** — ML/AI & Backend Geliştirme

## 📄 Lisans

Bu proje TÜBİTAK 2209-A programı kapsamında geliştirilmektedir.

---

*"Bu süreçte yanında."*
