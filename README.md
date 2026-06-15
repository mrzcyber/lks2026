# 🗺️ Destinasi Sragen — Tourism Management Dashboard (LKS 2026)

Sistem manajemen pariwisata Kabupaten Sragen yang dikembangkan untuk **LKS (Lomba Kompetensi Siswa) 2026**. Dibangun dengan arsitektur *decoupled* menggunakan Laravel sebagai backend RESTful API dan React sebagai frontend SPA.

---

## 🚀 Tech Stack

### Frontend
- **React 19** (Vite 7)
- **Tailwind CSS 4** (Styling)
- **React Router 7** (Client-side routing)
- **React Icons** (Icon library)
- **SweetAlert2** (Interactive dialog/alert)
- **clsx** (Conditional classnames)

### Backend
- **Laravel 12** (RESTful API)
- **SQLite** (Database)
- **Eloquent ORM** (Database abstraction)
- **JWT Auth** (tymon/jwt-auth — Authentication)

---

## 📁 Struktur Proyek

```
lks2026/
├── lks-2026be/          # Backend — Laravel API
│   ├── app/
│   │   ├── Http/Controllers/
│   │   │   ├── AuthController.php
│   │   │   ├── CategoryController.php
│   │   │   └── DestinastionController.php
│   │   └── Models/
│   │       ├── Category.php
│   │       ├── Destination.php
│   │       ├── Galery.php
│   │       └── User.php
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   ├── routes/
│   │   └── api.php
│   └── ...
│
├── lks-2026fe/          # Frontend — React (Vite)
│   ├── src/
│   │   ├── api/          # API service & alert utilities
│   │   ├── componen/     # Reusable components (Navbar, Footer, Form, Edit)
│   │   ├── dashboard/    # Dashboard pages (Destinasi, Kategori, Proteksi)
│   │   └── page/         # Public pages (Home, Katalog, Detail, Login)
│   └── ...
│
└── README.md
```

---

## ⚙️ Instalasi & Persiapan

### 1. Clone Repository

```bash
git clone https://github.com/mrzcyber/lks2026.git
cd lks2026
```

### 2. Konfigurasi Backend (Laravel)

```bash
cd lks-2026be
composer install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
touch database/database.sqlite
php artisan migrate
php artisan storage:link
php artisan db:seed
php artisan serve --port=8000
```

### 3. Konfigurasi Frontend (React)

```bash
cd lks-2026fe
npm install
```

Buat file `.env` di root `lks-2026fe/`:

```env
VITE_API_URL=http://localhost:8000/api/
VITE_API=http://localhost:8000/
```

Jalankan development server:

```bash
npm run dev
```

### 4. Akses Aplikasi

| Service  | URL                          |
|----------|------------------------------|
| Frontend | http://localhost:5173         |
| Backend  | http://localhost:8000         |
| API Base | http://localhost:8000/api     |

---

## 🛠️ Fitur Utama

### 🌐 Halaman Publik (Visitor)

- **🏠 Landing Page (Home)**
  - Hero section dengan background image destinasi
  - Section "Destinasi Terpopuler" — grid responsif menampilkan semua destinasi
  - Statistik ringkasan: 50+ Destinasi, 100.000+ Pengunjung, 15 Penghargaan
  - Rating bintang pada setiap kartu destinasi

- **📖 Katalog Destinasi**
  - Menampilkan seluruh destinasi wisata Sragen
  - **Filter kategori** — filter destinasi berdasarkan kategori (Wisata Alam, Sejarah, Budaya, Kuliner)
  - **Pencarian** — cari destinasi berdasarkan nama
  - Tombol "Semua" untuk menampilkan semua kategori
  - Grid responsif (1/2/4 kolom)

- **📍 Detail Destinasi**
  - Informasi lengkap: nama, deskripsi, lokasi, jam operasional, harga tiket
  - **Galeri foto** — menampilkan koleksi foto destinasi
  - **Peta lokasi** — embed Google Maps
  - **Rekomendasi destinasi** — menampilkan 3 destinasi random sebagai rekomendasi

### 🔐 Autentikasi

- **Login** — Autentikasi menggunakan JWT (JSON Web Token)
- **Route Protection** — Halaman dashboard dilindungi, redirect ke login jika belum terotentikasi
- Token disimpan di `localStorage` dan dikirim sebagai `Authorization: Bearer` header

### 📊 Dashboard Admin

- **Manajemen Destinasi**
  - Tabel daftar destinasi (nama, alamat, kategori, harga tiket)
  - **Tambah destinasi** — form lengkap: nama, deskripsi, lokasi, latitude, longitude, kategori, harga tiket, foto utama, dan galeri foto (multi upload)
  - **Edit destinasi** — update data dan ganti foto/galeri
  - **Hapus destinasi** — dengan konfirmasi SweetAlert2, otomatis hapus foto dari storage

- **Manajemen Kategori**
  - Tabel daftar kategori wisata
  - **Tambah kategori** — dialog SweetAlert2 dengan input
  - **Edit kategori** — dialog SweetAlert2 untuk update nama
  - **Hapus kategori** — dengan konfirmasi, cascade delete ke destinasi terkait

### 🔌 RESTful API

#### Public Endpoints (tanpa autentikasi)
| Method | Endpoint                         | Deskripsi                            |
|--------|----------------------------------|--------------------------------------|
| POST   | `/api/login`                     | Login & dapatkan JWT token           |
| GET    | `/api/destinations`              | Daftar semua destinasi (+ `?q=` search) |
| GET    | `/api/destinations/{id}`         | Detail destinasi + kategori + galeri |
| GET    | `/api/destinations/kategori/{id}`| Destinasi berdasarkan kategori       |
| GET    | `/api/kategori`                  | Daftar semua kategori                |

#### Protected Endpoints (JWT required)
| Method | Endpoint                          | Deskripsi            |
|--------|-----------------------------------|----------------------|
| GET    | `/api/dash/destinasi`             | List destinasi       |
| GET    | `/api/dash/destinasi/{id}`        | Detail destinasi     |
| POST   | `/api/dash/destinasi/create`      | Tambah destinasi     |
| PUT    | `/api/dash/destinasi/edit/{id}`   | Update destinasi     |
| DELETE | `/api/dash/destinasi/delete/{id}` | Hapus destinasi      |
| GET    | `/api/dash/kategori`              | List kategori        |
| GET    | `/api/dash/kategori/{id}`         | Detail kategori      |
| POST   | `/api/dash/kategori/create`       | Tambah kategori      |
| PUT    | `/api/dash/kategori/edit/{id}`    | Update kategori      |
| DELETE | `/api/dash/kategori/delete/{id}`  | Hapus kategori       |

---

## 🗄️ Database Schema

### Users
| Kolom              | Tipe      | Keterangan    |
|--------------------|-----------|---------------|
| id                 | bigint    | Primary Key   |
| name               | string    | Nama user     |
| email              | string    | Email (unique)|
| password           | string    | Hashed        |
| email_verified_at  | timestamp | Nullable      |

### Categories
| Kolom          | Tipe      | Keterangan    |
|----------------|-----------|---------------|
| id             | bigint    | Primary Key   |
| nama_kategori  | string    | Nama kategori |

### Destinations
| Kolom        | Tipe      | Keterangan                    |
|--------------|-----------|-------------------------------|
| id           | bigint    | Primary Key                   |
| nama         | string    | Nama destinasi                |
| deskripsi    | text      | Deskripsi lengkap             |
| lokasi       | string    | Alamat/lokasi                 |
| lat          | string    | Latitude (koordinat)          |
| long         | string    | Longitude (koordinat)         |
| foto         | string    | Path foto utama               |
| category_id  | foreignId | FK → categories (cascade)     |
| harga_tiket  | string    | Harga tiket masuk             |

### Galeries
| Kolom          | Tipe      | Keterangan                    |
|----------------|-----------|-------------------------------|
| id             | bigint    | Primary Key                   |
| nama_galeri    | string    | Path file gambar              |
| destination_id | foreignId | FK → destinations (cascade)   |

---

## 🔑 Akun Default

| Email             | Password   | Role  |
|-------------------|------------|-------|
| admin@gmail.com   | 12345678   | Admin |

---

## 📄 Lisensi

MIT License
