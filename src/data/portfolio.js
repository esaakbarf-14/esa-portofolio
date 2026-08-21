  export const personalInfo = {
    name: "Esa Akbar Febrian",
    studentId: "312210137",
    major: "Teknik Informatika",

    roles: [
      "Web Developer",
      "Mahasiswa Teknik Informatika",
      "Staf Administrasi & IT Sekolah"
    ],

    bio: "Sarjana Teknik Informatika Universitas Pelita Bangsa dengan pengalaman lebih dari 4 tahun di bidang teknologi informasi, pengelolaan sistem, dan pengolahan data. Berpengalaman mengembangkan aplikasi berbasis web menggunakan PHP Native dan Laravel, serta membangun solusi otomatisasi dan integrasi menggunakan Google Apps Script, Python, Microsoft Excel VBA, dan API. Memiliki kemampuan dalam problem solving, analisis sistem, pengembangan aplikasi, dan pengelolaan database, serta terbiasa bekerja secara mandiri maupun dalam tim.",

    education: {
      degree: "S1 Teknik Informatika",
      institution: "Universitas Pelita Bangsa",
      graduation: "Lulus: 26 Juli 2026"
    },

    contact: {
      phone: "081905555843",
      email: "esaakbarfebrian14@gmail.com",
      location: "Cikarang, Kabupaten Bekasi, Indonesia",

      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      }
    },

    stats: [
      {
        label: "Tahun Pengalaman",
        value: "4+"
      },
      {
        label: "Project",
        value: "10+"
      },
      {
        label: "Teknologi Digunakan",
        value: "10+"
      }
    ]
  };

 export const education = [
  {
    id: 1,
    school: "Universitas Pelita Bangsa",
    degree: "S1 Teknik Informatika",
    period: "2024 - November 2026 (Perkiraan Lulus)",
    description: "Fokus pada pengembangan sistem informasi, manajemen database, rekayasa perangkat lunak, dan implementasi sistem skala sekolah.",
  },
];


export const techStack = [
  {
    category: "Pemrograman",

    skills: [
      {
        name: "PHP",
        desc: "Pengembangan Aplikasi Web"
      },
      {
        name: "JavaScript",
        desc: "Interaktivitas & Logika Web"
      },
      {
        name: "Python",
        desc: "Scripting & Pengolahan Data"
      }
    ]
  },

  {
    category: "Pengembangan Web",

    skills: [
      {
        name: "PHP Native",
        desc: "Pengembangan Web Server-side"
      },
      {
        name: "Laravel",
        desc: "Framework Aplikasi Web MVC"
      },
      {
        name: "HTML & CSS",
        desc: "Struktur & Tampilan Web"
      },
      {
        name: "Tailwind CSS",
        desc: "Styling Antarmuka Web"
      },
      {
        name: "Bootstrap",
        desc: "Framework Antarmuka Responsif"
      }
    ]
  },

  {
    category: "Basis Data",

    skills: [
      {
        name: "MySQL",
        desc: "Manajemen Basis Data Relasional"
      },
      {
        name: "SQL",
        desc: "Query & Pengelolaan Data"
      }
    ]
  },

  {
    category: "Data",

    skills: [
      {
        name: "Google Apps Script",
        desc: "Otomasi Data & Alur Kerja"
      },
      {
        name: "Microsoft Excel",
        desc: "Pengelolaan & Analisis Data"
      },
      {
        name: "Excel VBA",
        desc: "Otomasi Proses & Macro"
      }
    ]
  }
];


  export const experiences = [
    {
      id: "experience-01",

      role: "Staf Administrasi & IT Sekolah",
      period: "2022 — 2026",
      type: "Administrasi & IT",

      description:
        "Mengelola administrasi dan data sekolah sekaligus mengembangkan solusi berbasis teknologi untuk mendukung proses operasional dan meningkatkan efisiensi pengelolaan data.",

      highlights: [
        "Mengelola ratusan data sekolah dan administrasi secara terstruktur",
        "Mengembangkan dan mengelola sistem berbasis web untuk mendukung proses administrasi",
        "Membangun otomasi pengolahan data dan dokumen menggunakan Google Apps Script dan Microsoft Excel VBA",
        "Memberikan dukungan teknis dalam penggunaan sistem dan pengelolaan data"
      ]
    },

    {
      id: "experience-02",

      role: "Kuliah Kerja Praktek (KKP)",
      period: "1 Bulan",
      type: "Pengembangan Web",

      description:
        "Mengembangkan sistem PPDB berbasis PHP untuk mendukung proses pendaftaran dan pengelolaan data calon siswa.",

      highlights: [
        "Mengembangkan aplikasi web berbasis database untuk proses PPDB",
        "Mengimplementasikan formulir pendaftaran dan validasi data",
        "Mendukung pengelolaan data calon siswa dan proses administrasi"
      ]
    }
  ];


  export const projects = [
  {
    id: 1,
    title: "Sistem Informasi PPDB",
    description: "Sistem Informasi Penerimaan Peserta Didik Baru berbasis web dengan fitur pendaftaran online, portal orang tua, pengumuman seleksi, dan notifikasi otomatis WhatsApp.",
    image: "/projects/ppdb.png",
    tags: ["PHP", "MySQL", "Tailwind CSS", "WhatsApp API", "JavaScript"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "SPMB SDN Sukadami 02 - Sistem Zonasi",
    description: "Sistem pendaftaran siswa baru berbasis Google Apps Script dan Sheets dengan fitur pemantauan status real-time dan perangkingan jarak zonasi otomatis.",
    image: "/projects/spmb.jpg",
    tags: ["Google Apps Script", "Google Sheets", "Tailwind CSS", "JavaScript"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "SIPTAS – Manajemen Disiplin SMAN 2 Cikarang Selatan",
    description: "Aplikasi pencatatan dan pemantauan pelanggaran siswa berbasis barcode scanner dengan dashboard statistik disiplin dan manajemen poin siswa.",
    image: "/projects/siptas.jpg",
    tags: ["PHP", "MySQL", "Tailwind CSS", "Barcode Scanner API"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 4,
    title: "Sistem Presensi & Disiplin Siswa SDN Sukadami 02",
    description: "Sistem kelola presensi harian, poin akumulasi pelanggaran, dashboard analitik presensi (Chart.js), dan cetak laporan PDF secara real-time.",
    image: "/projects/displin.jpg",
    tags: ["Google Apps Script", "Google Sheets", "Chart.js", "JavaScript"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 5,
    title: "Sistem Informasi Akademik (SIAKAD)",
    description: "Platform akademik terintegrasi dengan akses multi-role (Admin, Guru, Siswa). Fitur mencakup kelola nilai, presensi, laporan akademik, dan koreksi data.",
    image: "/projects/siakad.png",
    tags: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    githubUrl: "#",
    demoUrl: "#"
  },

  {
    id: 7,
    title: "Portal Mutasi & Arsip Digital Siswa",
    description: "Sistem otomatisasi pembuatan surat mutasi/penerimaan siswa dan arsip dokumen digital lengkap dengan dashboard pemantauan status siswa.",
    image: "/projects/mutasi.jpg",
    tags: ["Google Apps Script", "Google Sheets", "JavaScript"],
    githubUrl: "#",
    demoUrl: "#"
  },
  
];

  export const certificates = [
    {
      title: "Introduction to Software Engineering",
      issuer: "RevoU",
      category: "Software Engineering"
    },

    {
      title: "Excel untuk Karier",
      issuer: "Jobstreet",
      category: "Data & Produktivitas"
    },

    {
      title: "Database Foundations",
      issuer: "Oracle Academy",
      category: "Basis Data"
    },

    {
      title: "Database Design",
      issuer: "Oracle Academy",
      category: "Basis Data"
    }
  ];


  export const languages = [
    {
      name: "Bahasa Indonesia",
      level: "Fasih",
      proficiency: 100
    },
    {
      name: "Bahasa Jepang",
      level: "Setara N4",
      description:
        "Memahami kosakata, tata bahasa, membaca, dan percakapan dasar.",
      proficiency: 65
    }
  ];
