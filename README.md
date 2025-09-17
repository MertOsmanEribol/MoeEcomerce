# Moe E-commerce (İlk Prototip)

Bu proje, **Moe E-commerce** adlı hobi proje sitesinin ilk prototipidir. Frontend React ve TailwindCSS ile geliştirilmiş olup, backend Node.js ve Express ile MSSQL veritabanından veri çekmektedir. Canlı siteyi inceleyebilirsiniz: [Moe E-commerce](https://moe-ecomerce.vercel.app/Homepage)

## Teknolojiler
- Frontend: React, TailwindCSS, Vite
- Backend (API): Node.js, Express
- Veritabanı: MSSQL (Google Cloud üzerinde)
- Hosting: Frontend → Vercel, Backend & Database → Google Cloud

## Özellikler
- Responsive tasarım (mobil uyumlu)
- REST API ile ürün verilerinin backend’den çekilmesi (Örnek endpoint: `GET /ManProducts` → MSSQL’den JSON veri döner)
- Sepet yönetimi (localStorage desteği ile)
- Dinamik ürün listesi
- Bu proje ilk prototip niteliğindedir ve geliştirmeye açıktır

## Kurulum ve Çalıştırma
1. Projeyi klonlayın:
```bash
git clone <proje-linki>
cd <proje-dizini>

Gerekli paketleri yükleyin:

npm install

Geliştirme sunucusunu başlatın:

npm run dev
Not: Frontend Vercel, backend ve veritabanı Google Cloud üzerinde çalışmaktadır.

Proje Yapısı
/
├─ src/
│  ├─ components/       # React bileşenleri
│  ├─ pages/            # Sayfa bileşenleri (Homepage, Manpage vs.)
│  └─ App.jsx
├─ server/              # Backend API (Express + MSSQL)
└─ package.json

İletişim

Her türlü geri bildiriminiz için:

LinkedIn: [ www.linkedin.com/in/merteribol ]

E-mail: [ Mert Osman Eribol]

Portoflio [ https://mertosmaneribol.github.io/Portfolio/ ]


Geliştirici : Mert Osman Eribol