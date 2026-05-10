
# Tourism Management Dashboard - LKS 2026 🗺️

Repositori ini berisi proyek pengembangan sistem manajemen pariwisata yang dikembangkan untuk **LKS (Lomba Kompetensi Siswa) 2026**. Proyek ini menggunakan arsitektur *decoupled* dengan Laravel sebagai backend API dan React sebagai interface frontend.

## 🚀 Tech Stack

### Frontend
*   **React.js** (Vite)
*   **Tailwind CSS** (Styling)
*   **Native Fetch API** (Data Fetching)

### Backend
*   **Laravel 11+** (RESTful API)
*   **MySQL** (Database)
*   **Eloquent ORM**

### Infrastructure & Tools
*   **Laragon/DBngin** (Local Development)
*   **Postman** (API Testing)

---

## 📁 Struktur Proyek

Proyek ini terbagi menjadi dua bagian utama:
*   `/backend` - Source code Laravel API.
*   `/frontend` - Source code React (Vite) application.

---

## ⚙️ Instalasi & Persiapan

### 1. Clone Repository
```bash
git clone https://github.com/mrzcyber/lks2026.git
cd lks2026### 2. Konfigurasi Backend (Laravel)
1. Masuk ke direktori backend: `cd backend`
2. Install dependencies: `composer install`
3. Salin file environment: `cp .env.example .env`
4. Generate app key: `php artisan key:generate`
5. Konfigurasi database di `.env` (sesuaikan dengan Laragon atau DBngin).
6. Jalankan migrasi & seeder: `php artisan migrate `
7. Jalankan server: `php artisan serve`

### 3. Konfigurasi Frontend (React)
1. Masuk ke direktori frontend: `cd ../frontend`
2. Install dependencies: `npm install`
3. Jalankan aplikasi: `npm run dev`

---

## 🛠️ Fitur Utama

- [x] **Authentication**: Login & Register sistem menggunakan Jwt auth.
- [x] **Dashboard**: Ringkasan data pariwisata.
- [x] **Management Wisata**: CRUD data tempat wisata (Nama, Deskripsi, Koordinat Map).
- [x] **Category Filtering**: Filter tempat wisata berdasarkan kategori.
- [x] **Image Gallery**: Manajemen galeri foto untuk setiap objek wisata.
