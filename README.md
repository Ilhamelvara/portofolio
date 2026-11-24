# Personal Developer Portfolio — Mohammad Ilham Putra Irawan
> **Junior Web Developer** | Modern, Elegant, High-Performance Developer Portfolio

Website portofolio developer modern yang dirancang khusus untuk memamerkan keahlian teknis, koleksi proyek pilihan, sertifikasi, dan personal branding sebagai Junior Web Developer.

---

## 🚀 Fitur Utama

1. **Modern Minimalist Visual Design**:
   - Skema warna Dark Mode elegan (#0B0F19, #111827, #151D2E) dengan aksen Indigo (#6366F1) & Sky Blue (#38BDF8).
   - Dukungan **Light Mode** instan dengan toggle tema dan penyimpanan preferensi di `localStorage`.
   - Glassmorphism, subtle glowing borders, interactive badges, dan tipografi modern (Plus Jakarta Sans & JetBrains Mono).

2. **Hero Section dengan Interactive Terminal**:
   - Headline profesional dan status badge: `OPEN TO WORK & COLLABORATION`.
   - Visual terminal IDE interaktif dengan live code object snippet dan opsi copy-to-clipboard.
   - Quick CTA: *Explore My Projects*, *Download CV*, *Contact Me*.
   - Inisial monogram "MI" yang khas (tanpa foto palsu / AI portrait).

3. **About Me**:
   - Ringkasan narasi profesional, area minat utama, kartu quick stats (Projects, Tech Stack, Dedikasi, Ketersediaan Kerja).
   - Grid informasi terstruktur dengan placeholder yang jelas dan mudah diubah.

4. **Technical Skills (6 Kategori Terstandarisasi)**:
   - Programming Languages (HTML, CSS, JavaScript, PHP, Dart)
   - Frontend Development (React.js, Vite, Bootstrap, Tailwind CSS, Axios, React Router)
   - Backend Development (Laravel, REST API, Laravel Sanctum, PHP, Authentication, Authorization)
   - Database Management (MySQL, MariaDB, PostgreSQL)
   - Mobile Development (Flutter, Dart)
   - Development Tools & Workflow (VS Code, Git, GitHub, Postman, Figma, Docker)
   - Filter kategori interaktif, level badges (*Advanced, Intermediate, Beginner*), dan progress bar persentase dinamis saat di-scroll.

5. **Featured Projects Showcase & Rich Detail Modal**:
   - Filter proyek: *All Projects*, *Frontend*, *Backend*, *Fullstack*, *Mobile*.
   - Desain mockup aplikasi modern (App Window schematic) untuk 6 Proyek Kandidat: **ResQNet**, **Facegram**, **Bookshelf API**, **Vaccinify**, **Mini Social Media App**, dan **Elvara Shop**.
   - **Interactive Modal**: Menampilkan Project Overview, Background, Problem Statement, Solution Provided, Tech Badges, Main Features checklist, Development Challenges, Key Learnings, dan Repository link.

6. **Certificates & Achievements Gallery**:
   - Kartu sertifikat dengan badge kategori, issuer, tanggal, dan nomor identitas kredensial.
   - Lightbox modal preview interaktif.

7. **Contact Section & Validated Form**:
   - Formulir pesan interaktif dengan validasi format email dan panjang karakter di sisi klien.
   - Feedback submission loading state dan success toast.
   - Kartu kontak email, lokasi, status ketersediaan, dan profil sosial.

8. **Navigasi, Animasi & Aksesibilitas**:
   - Sticky navbar dengan backdrop blur dan active scroll-spy.
   - Top scroll progress indicator (`ScrollProgressBar`).
   - Scroll-reveal animations menggunakan Framer Motion.
   - Menu drawer responsif untuk perangkat mobile / tablet.
   - Floating *Back to Top* button dengan circular scroll progress indicator.

---

## 🛠️ Tech Stack

- **Framework**: [React.js](https://react.dev/) (v19)
- **Bundler & Dev Server**: [Vite](https://vite.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4 via `@tailwindcss/vite`)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **Typography**: Plus Jakarta Sans & JetBrains Mono (Google Fonts)
- **Deployment Ready**: Vercel & Netlify

---

## 📁 Struktur Arsitektur Folder

```text
src/
├── assets/                  # Asset grafis dan ikon pendukung
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx       # Sticky header, menu link, active spy, mobile drawer
│   │   ├── Footer.jsx       # Identitas, navigasi cepat, copyright, status
│   │   └── ThemeToggle.jsx  # Tombol toggle dark/light mode
│   │
│   ├── common/
│   │   ├── SectionHeading.jsx   # Judul seksi terstandarisasi dengan badge glow
│   │   ├── ScrollProgressBar.jsx # Top scroll indicator
│   │   ├── ScrollReveal.jsx     # Reusable scroll animation component
│   │   ├── SocialLinks.jsx      # Tautan media sosial & email
│   │   ├── BrandIcons.jsx       # Ikon SVG presisi untuk brand (GitHub, LinkedIn, Figma)
│   │   └── ScrollToTop.jsx      # Tombol scroll ke atas dengan circular progress
│   │
│   ├── sections/
│   │   ├── Hero.jsx         # Hero section, terminal interaktif, floating badges
│   │   ├── About.jsx        # Cerita personal, quick stats, info profil
│   │   ├── Skills.jsx       # 6 kategori skill cards dengan filter & level
│   │   ├── Projects.jsx     # Grid proyek & interaksi filter
│   │   ├── Certificates.jsx # Galeri sertifikat & lightbox preview
│   │   └── Contact.jsx      # Formulir kontak tervalidasi & info channel
│   │
│   └── projects/
│       ├── ProjectCard.jsx        # Kartu proyek dengan app window mockup
│       ├── ProjectFilter.jsx      # Tombol filter kategori dengan counter
│       └── ProjectDetailModal.jsx # Modal detail proyek komprehensif
│
├── data/                    # PISAHKAN DATA & TAMPILAN
│   ├── personal.js          # Informasi diri, hero text, kontak, status
│   ├── skills.js            # Daftar teknologi, tingkat kemahiran, dan icon
│   ├── projects.js          # Detail 6 proyek kandidat lengkap
│   └── certificates.js      # Data sertifikat dan capaian
│
├── hooks/
│   └── useTheme.js          # Hook persistensi tema (dark / light)
│
├── index.css                # Konfigurasi Tailwind, CSS variables & scrollbar
├── App.jsx                  # Root komponen aplikasi
└── main.jsx                 # Entry point Vite React
```

---

## 📝 Panduan Mengedit Data Portofolio

Semua data telah dipisahkan secara rapi di dalam folder `src/data/`:

| File Data | Keterangan yang Dapat Anda Perbarui |
|---|---|
| `src/data/personal.js` | Ganti nama, link LinkedIn/GitHub, email, teks hero, dan lokasi. Letakkan file CV Anda di folder `public/` (misal: `public/resume.pdf`) lalu ubah `cvDownloadUrl: "/resume.pdf"`. |
| `src/data/skills.js` | Tambah/kurang skill, ubah persentase atau level (`Advanced`, `Intermediate`, `Beginner`). |
| `src/data/projects.js` | Ubah link repo GitHub asli, pasang link Live Demo jika sudah di-hosting, atau tambahkan proyek baru. |
| `src/data/certificates.js` | Tambahkan nama sertifikat asli, nomor kredensial, dan tautan verifikasi sertifikat. |

---

## 💻 Cara Menjalankan Proyek di Lokal

### 1. Menjalankan Server Pengembangan (Dev Mode)
```bash
npm run dev
```
Buka browser di alamat `http://localhost:5173/`.

### 2. Menjalankan Pengecekan Linting
```bash
npm run lint
```

### 3. Membangun untuk Produksi (Build)
```bash
npm run build
```
Hasil kompilasi siap rilis akan disimpan di dalam folder `dist/`.

---

## 🌐 Cara Deployment ke Vercel

```bash
git init
git add .
git commit -m "feat: junior web developer portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```
Import repositori ke Vercel dashboard, pilih preset **Vite**, dan klik **Deploy**.
