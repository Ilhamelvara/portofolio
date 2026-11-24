/**
 * Projects Data
 * Candidate projects by Mohammad Ilham Putra Irawan
 * 
 * Features comprehensive details for project cards and the interactive modal:
 * Overview, Background, Problem, Solution, Technologies, Main Features, Challenges, Learnings.
 */

export const projectCategories = [
  "All Projects",
  "Frontend",
  "Backend",
  "Fullstack",
  "Mobile",
];

export const projectsData = [
  {
    id: "resqnet",
    title: "ResQNet",
    subtitle: "Real-time Disaster Information & Community Reporting Platform",
    category: "Frontend",
    tag: "Web Development / Disaster Management",
    shortDescription:
      "Platform informasi kebencanaan modern yang dirancang untuk menyajikan data bencana terkini, peta interaktif sebaran bencana, laporan masyarakat, dan berita mitigasi terpercaya.",
    thumbnailGradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
    accentColor: "#F59E0B",
    featured: true,
    technologies: ["React.js", "Vite", "Bootstrap", "Leaflet", "REST API"],
    stats: [
      { label: "Interactive Maps", value: "Leaflet GIS" },
      { label: "Data Source", value: "Real-time REST API" },
      { label: "UI Framework", value: "Bootstrap 5 & React" },
    ],
    links: {
      github: "https://github.com", // [Placeholder] Ganti dengan URL repo GitHub Anda
      liveDemo: null, // Berikan URL demo jika sudah dideploy
      status: "Portfolio Showcase",
    },
    detail: {
      overview:
        "ResQNet adalah platform berbasis web yang bertujuan meningkatkan kesiapsiagaan menghadapi bencana alam melalui transparansi informasi spasial dan pemberdayaan laporan dari masyarakat.",
      background:
        "Indonesia berada di kawasan Cincin Api Pasifik (Ring of Fire) dengan frekuensi bencana alam yang tinggi. Seringkali masyarakat menghadapi kesenjangan informasi darurat yang akurat dan visualisasi lokasi terdampak yang lambat diperbarui.",
      problem:
        "Informasi seputar bencana sering tersebar di berbagai saluran tanpa visualisasi geografis yang jelas, sehingga mempersulit warga lokal untuk mengetahui radius bahaya secara cepat.",
      solution:
        "Membangun antarmuka web interaktif yang mengintegrasikan Leaflet Maps untuk memetakan titik-titik bencana secara dinamis, dilengkapi kanal pelaporan warga yang terstruktur dan kurasi berita bencana mutakhir.",
      mainFeatures: [
        "Peta interaktif berbasis Leaflet dengan marker titik kejadian bencana dan detail status risiko.",
        "Penyajian data bencana real-time yang diambil dari REST API terkait.",
        "Formulir pelaporan bencana oleh masyarakat dengan upload informasi lokasi.",
        "Pusat berita dan tips mitigasi bencana dengan tata letak artikel responsif.",
        "Antarmuka cepat dan ringan dibangun dengan bundling Vite dan React.",
      ],
      challenges:
        "Mengintegrasikan peta interaktif Leaflet ke dalam siklus hidup komponen React secara efisien agar tidak terjadi kebocoran memori saat render ulang dan navigasi halaman.",
      learnings:
        "Memahami integrasi library GIS pihak ketiga dalam ekosistem React, manajemen state asinkron untuk data berukuran besar, serta teknik perancangan UI bertema darurat.",
    },
  },
  {
    id: "facegram",
    title: "Facegram",
    subtitle: "Interactive Social Media & Community Content Sharing Web App",
    category: "Fullstack",
    tag: "Fullstack Development",
    shortDescription:
      "Aplikasi media sosial interaktif yang menyediakan fitur interaksi antarpengguna, berbagi konten postingan foto dan teks, serta manajemen akun pengguna yang aman.",
    thumbnailGradient: "from-indigo-500/20 via-purple-500/10 to-pink-500/20",
    accentColor: "#6366F1",
    featured: true,
    technologies: ["Laravel", "React.js", "MySQL", "REST API", "Tailwind CSS"],
    stats: [
      { label: "Architecture", value: "Decoupled Fullstack" },
      { label: "Backend API", value: "Laravel REST API" },
      { label: "Client Layer", value: "React.js SPA" },
    ],
    links: {
      github: "https://github.com", // [Placeholder]
      liveDemo: null,
      status: "Portfolio Showcase",
    },
    detail: {
      overview:
        "Facegram adalah platform jejaring sosial modern yang menggabungkan backend kokoh Laravel untuk manajemen data dan otentikasi dengan frontend reaktif berbasis React.",
      background:
        "Dibuat sebagai eksplorasi mendalam arsitektur Single Page Application (SPA) yang berkomunikasi dengan API backend secara terpisah untuk menciptakan pengalaman pengguna yang cepat dan mulus tanpa reload halaman.",
      problem:
        "Aplikasi web monolitik tradisional seringkali terasa kaku dan lambat saat interaksi sosial seperti menyukai postingan, mengunggah foto, dan memperbarui feed.",
      solution:
        "Mengadopsi pemisahan frontend React dan backend Laravel melalui RESTful JSON API, dengan MySQL sebagai database relasional untuk menyimpan relasi follower, postingan, dan komentar.",
      mainFeatures: [
        "Sistem otentikasi akun pengguna (registrasi, login, proteksi rute pengguna).",
        "Feed postingan dinamis dengan dukungan upload gambar dan takarir.",
        "Interaksi postingan termasuk fitur like dan penambahan komentar secara dinamis.",
        "Halaman profil personal pengguna dengan ringkasan aktivitas dan galeri postingan.",
        "Pengelolaan database terstruktur dengan foreign keys dan Eloquent ORM.",
      ],
      challenges:
        "Mengelola sinkronisasi status like dan komentar di sisi klien React agar antarmuka terasa instan (optimistic UI) sembari memastikan integritas data di backend Laravel.",
      learnings:
        "Menguasai alur kerja Fullstack decoupled: konfigurasi CORS, format respons JSON konsisten, handling error HTTP, dan pengelolaan state frontend yang kompleks.",
    },
  },
  {
    id: "bookshelf-api",
    title: "Bookshelf API",
    subtitle: "Structured RESTful API for Book Collection Management",
    category: "Backend",
    tag: "Backend Development",
    shortDescription:
      "Aplikasi REST API terstandarisasi untuk mengelola koleksi buku dengan operasi data terstruktur, validasi payload ketat, dan respon status kode HTTP yang akurat.",
    thumbnailGradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    accentColor: "#10B981",
    featured: true,
    technologies: ["JavaScript", "Node.js", "Hapi.js", "Postman"],
    stats: [
      { label: "Runtime", value: "Node.js" },
      { label: "Framework", value: "Hapi.js" },
      { label: "API Standards", value: "RESTful JSON" },
    ],
    links: {
      github: "https://github.com", // [Placeholder]
      liveDemo: null,
      status: "Portfolio Showcase",
    },
    detail: {
      overview:
        "Bookshelf API adalah layanan backend yang menyediakan endpoint lengkap CRUD (Create, Read, Update, Delete) untuk manajemen katalog buku dengan validasi bisnis yang presisi.",
      background:
        "Proyek backend fundamental yang dibangun untuk menguji dan memvalidasi keahlian perancangan API sesuai spesifikasi teknis dan kriteria pengujian otomatis (automated testing).",
      problem:
        "Banyak API pemula gagal mematuhi standar HTTP status code (misal: 400 Bad Request saat data input tidak lengkap, atau 404 Not Found saat ID tidak ditemukan) dan validasi properti buku yang konsisten.",
      solution:
        "Membangun REST API menggunakan framework Hapi.js di Node.js dengan middleware validasi payload yang ketat, aturan bisnis (seperti pengecekan apakah pageCount >= readPage), dan format respons JSON terstruktur.",
      mainFeatures: [
        "Menambahkan buku baru dengan validasi otomatis properti wajib (seperti nama buku).",
        "Menampilkan seluruh koleksi buku dengan dukungan filter query parameter (nama, status baca, status selesai).",
        "Menampilkan detail buku spesifik berdasarkan ID unik.",
        "Memperbarui data buku dengan penanganan error yang jelas dan deskriptif.",
        "Menghapus buku berdasarkan ID dengan respon status code yang sesuai standar REST.",
      ],
      challenges:
        "Menerapkan logika perhitungan otomatis untuk status `finished` (apakah pageCount sama dengan readPage) serta memastikan lolos semua skenario automated testing dari Postman runner.",
      learnings:
        "Mendalami prinsip perancangan RESTful API, pemanfaatan status code HTTP (200, 201, 400, 404), dan penulisan kode JavaScript asinkron yang bersih di lingkungan Node.js.",
    },
  },
  {
    id: "vaccinify",
    title: "Vaccinify",
    subtitle: "Vaccination Management System & Token-Secured API",
    category: "Backend",
    tag: "Backend Development",
    shortDescription:
      "Sistem manajemen data vaksinasi modern dengan antarmuka API aman, otentikasi token berbasis Laravel Sanctum, dan kontrol izin data vaksinasi.",
    thumbnailGradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
    accentColor: "#3B82F6",
    featured: false,
    technologies: ["Laravel", "PHP", "MySQL", "Laravel Sanctum", "Postman"],
    stats: [
      { label: "Security", value: "Sanctum Token Auth" },
      { label: "Database", value: "MySQL Relational" },
      { label: "Testing", value: "Postman Collections" },
    ],
    links: {
      github: "https://github.com", // [Placeholder]
      liveDemo: null,
      status: "Portfolio Showcase",
    },
    detail: {
      overview:
        "Vaccinify adalah backend sistem informasi vaksinasi yang dirancang untuk mengelola antrean penerima vaksin, jadwal vaksinasi, dan verifikasi sertifikat secara terpusat.",
      background:
        "Kebutuhan akan platform pendataan vaksinasi yang aman dan efisien di mana integritas data pasien dan riwayat dosis vaksin harus terlindungi dengan ketat.",
      problem:
        "Pendataan manual vaksinasi berisiko menimbulkan duplikasi data, kebocoran data medis, dan lambatnya proses verifikasi status vaksinasi peserta.",
      solution:
        "Membangun API service berbasis Laravel dengan sistem otentikasi token via Laravel Sanctum, otorisasi berbasis peran (Admin, Petugas Medis, Pasien), dan database MySQL yang ternormalisasi.",
      mainFeatures: [
        "Otentikasi token bearer yang aman dengan Laravel Sanctum.",
        "Manajemen data vaksin, jenis dosis, dan tanggal ketersediaan kuota.",
        "Pencatatan riwayat vaksinasi peserta dengan nomor identitas unik.",
        "Endpoint pelaporan rekapitulasi capaian vaksinasi.",
        "Koleksi pengujian Postman komprehensif untuk memverifikasi setiap endpoint.",
      ],
      challenges:
        "Merancang relasi database yang fleksibel untuk mendukung berbagai jenis dosis vaksin (dosis 1, dosis 2, booster) tanpa menyebabkan inkonsistensi data riwayat medis.",
      learnings:
        "Menguasai keamanan API backend menggunakan Sanctum, middleware otorisasi Laravel, database migrations, model factories, dan validasi request form kustom.",
    },
  },
  {
    id: "mini-social-app",
    title: "Mini Social Media App",
    subtitle: "Mobile Social Networking Experience built with Flutter",
    category: "Mobile",
    tag: "Mobile Development",
    shortDescription:
      "Aplikasi media sosial mobile yang ringan dan responsif, dibangun menggunakan Flutter untuk menghadirkan interaksi feed pengguna yang mulus pada perangkat smartphone.",
    thumbnailGradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
    accentColor: "#38BDF8",
    featured: false,
    technologies: ["Flutter", "Dart", "REST API"],
    stats: [
      { label: "Platform", value: "Android & Cross-platform" },
      { label: "Language", value: "Dart" },
      { label: "UI", value: "Flutter Material 3" },
    ],
    links: {
      github: "https://github.com", // [Placeholder]
      liveDemo: null,
      status: "Portfolio Showcase",
    },
    detail: {
      overview:
        "Mini Social Media App adalah aplikasi mobile prototipe jejaring sosial yang fokus pada kenyamanan navigasi ponsel pintar, tata letak kartu postingan yang rapi, dan konsumsi REST API.",
      background:
        "Eksplorasi pembuatan aplikasi mobile multi-platform menggunakan framework Flutter untuk memahami arsitektur widget dan manajemen status pada layar sentuh.",
      problem:
        "Pengalaman menjelajah media sosial di peramban mobile terkadang kurang halus dibandingkan native feel aplikasi khusus smartphone.",
      solution:
        "Memanfaatkan arsitektur declarative UI dari Flutter dan bahasa Dart untuk menyusun widget interaktif dengan rendering performa 60 FPS.",
      mainFeatures: [
        "Antarmuka feed postingan bergaya kartu modern dengan scroll mulus.",
        "Widget avatar profil dan status pengguna.",
        "Simulasi interaksi menyukai postingan dan penyimpanan bookmark.",
        "Struktur widget yang modular dan reusable.",
        "Konsumsi endpoint API sederhana untuk memuat data mock postingan.",
      ],
      challenges:
        "Memahami lifecycle Stateful vs Stateless widget serta pengaturan layout hierarki Flutter agar tidak terjadi overflow pixel pada berbagai resolusi layar ponsel.",
      learnings:
        "Dasar-dasar pengembangan aplikasi mobile modern dengan Flutter, bahasa pemrograman Dart berorientasi objek, serta kebiasaan membagi komponen UI menjadi widget mandiri.",
    },
  },
  {
    id: "elvara-shop",
    title: "Elvara Shop",
    subtitle: "Responsive E-Commerce Catalog & Product Showcase",
    category: "Frontend",
    tag: "Frontend Development",
    shortDescription:
      "Antarmuka toko online responsif yang dirancang untuk menampilkan katalog produk busana secara visual menarik, cepat diakses, dan memberikan pengalaman belanja yang intuitif.",
    thumbnailGradient: "from-pink-500/20 via-rose-500/10 to-orange-500/20",
    accentColor: "#EC4899",
    featured: false,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    stats: [
      { label: "Styling", value: "Bootstrap 5 & Custom CSS" },
      { label: "Interactivity", value: "Vanilla JS ES6" },
      { label: "Responsiveness", value: "Mobile First" },
    ],
    links: {
      github: "https://github.com", // [Placeholder]
      liveDemo: null,
      status: "Portfolio Showcase",
    },
    detail: {
      overview:
        "Elvara Shop adalah prototipe toko online modern yang mengedepankan kesederhanaan, tipografi editorial yang rapi, dan kemudahan bagi pengunjung untuk mengeksplorasi produk.",
      background:
        "Membangun pemahaman fundamental yang kokoh mengenai dasar-dasar web (semantic HTML5, modern CSS styling, dan DOM manipulation) sebelum beralih ke framework tingkat lanjut.",
      problem:
        "Banyak antarmuka katalog belanja online memiliki navigasi yang membingungkan dan tata letak produk yang berantakan ketika diakses dari smartphone.",
      solution:
        "Merancang antarmuka bersih menggunakan sistem grid responsif Bootstrap 5 yang dipadukan dengan kustomisasi CSS estetik dan skrip JavaScript untuk interaksi keranjang belanja.",
      mainFeatures: [
        "Grid katalog produk responsif dengan badge diskon dan harga jelas.",
        "Filter kategori produk berbasis JavaScript interaktif.",
        "Modal pratinjau cepat produk (Quick View) dengan rincian spesifikasi.",
        "Simulasi keranjang belanja (cart counter & summary view).",
        "Banner hero promosi dengan tombol panggilan tindakan (CTA) menarik.",
      ],
      challenges:
        "Mengatur tata letak kartu produk agar tetap seragam dan proporsional terlepas dari variasi panjang teks nama produk dan rasio gambar.",
      learnings:
        "Memperkuat pemahaman tentang Semantic HTML, CSS Flexbox & Grid, event handling di Vanilla JavaScript, serta prinsip dasar UI/UX e-commerce yang ramah pengguna.",
    },
  },
];
