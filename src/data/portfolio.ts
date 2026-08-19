export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  socialLinks: { github: string; linkedin: string; twitter: string; instagram: string };
  email: string;
  phone: string;
  location: string;
  yearsExperience: number;
  totalProjects: number;
  happyClients: number;
  awardsWon: number;
}

export const personalInfo: PersonalInfo = {
  name: 'Arya Pratama',
  role: 'Full-Stack Developer & UI/UX Designer',
  tagline: 'Mengubah ide menjadi pengalaman digital yang luar biasa',
  bio: 'Saya adalah seorang Full-Stack Developer yang bersemangat dengan pengalaman lebih dari 5 tahun dalam membangun aplikasi web modern. Saya menggabungkan keahlian teknis dengan desain antarmuka yang intuitif untuk menciptakan solusi yang tidak hanya berfungsi dengan baik, tetapi juga terlihat menakjubkan. Selalu terbuka untuk tantangan baru dan berkolaborasi dalam proyek-proyek inovatif.',
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com'
  },
  email: 'hello@aryapratama.dev',
  phone: '+62 812 3456 7890',
  location: 'Jakarta, Indonesia',
  yearsExperience: 5,
  totalProjects: 50,
  happyClients: 30,
  awardsWon: 12
};

export interface Skill {
  name: string;
  iconName: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools';
}

export const skills: Skill[] = [
  { name: 'React', iconName: 'atom', level: 95, category: 'Frontend' },
  { name: 'Next.js', iconName: 'triangle', level: 90, category: 'Frontend' },
  { name: 'TypeScript', iconName: 'code', level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', iconName: 'wind', level: 95, category: 'Frontend' },
  { name: 'Vue.js', iconName: 'layers', level: 75, category: 'Frontend' },
  { name: 'Node.js', iconName: 'server', level: 85, category: 'Backend' },
  { name: 'Express', iconName: 'box', level: 80, category: 'Backend' },
  { name: 'PostgreSQL', iconName: 'database', level: 75, category: 'Backend' },
  { name: 'MongoDB', iconName: 'leaf', level: 80, category: 'Backend' },
  { name: 'Python', iconName: 'terminal', level: 70, category: 'Backend' },
  { name: 'Figma', iconName: 'figma', level: 90, category: 'Tools' },
  { name: 'Git', iconName: 'git-branch', level: 85, category: 'Tools' },
  { name: 'Docker', iconName: 'container', level: 70, category: 'Tools' },
  { name: 'AWS', iconName: 'cloud', level: 65, category: 'Tools' },
  { name: 'Vercel', iconName: 'triangle', level: 90, category: 'Tools' },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  techStack: string[];
  category: 'Web' | 'Mobile' | 'UI/UX';
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'EcoMarket',
    description: 'Platform E-Commerce modern untuk produk ramah lingkungan.',
    longDescription: 'EcoMarket adalah platform e-commerce komprehensif yang dibangun untuk mendukung produk-produk berkelanjutan. Dilengkapi dengan keranjang belanja real-time, integrasi pembayaran yang aman, dan dashboard admin yang intuitif.',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    category: 'Web',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '2',
    title: 'SocialMetric',
    description: 'Dashboard analitik media sosial untuk brand dan influencer.',
    longDescription: 'Alat analitik yang membantu brand melacak performa media sosial mereka dalam satu dashboard sentral. Menyediakan grafik interaktif, laporan otomatis, dan wawasan berbasis AI.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Recharts'],
    category: 'Web',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '3',
    title: 'FinMate',
    description: 'Aplikasi mobile fintech untuk manajemen keuangan pribadi.',
    longDescription: 'FinMate membantu pengguna melacak pengeluaran, menetapkan anggaran, dan mencapai tujuan keuangan dengan UI/UX yang cantik dan notifikasi cerdas.',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
    techStack: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    category: 'Mobile',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '4',
    title: 'DevPortfolio V1',
    description: 'Website portofolio interaktif dengan animasi 3D.',
    longDescription: 'Iterasi pertama dari portofolio pribadi saya, menampilkan eksplorasi desain kreatif dengan Three.js dan Framer Motion untuk memberikan pengalaman unik.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    techStack: ['Next.js', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    category: 'Web',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: '5',
    title: 'TaskFlow',
    description: 'Aplikasi manajemen tugas kolaboratif untuk tim.',
    longDescription: 'Platform manajemen proyek yang terinspirasi oleh Trello dan Asana. Mendukung drag-and-drop, pembaruan real-time, dan manajemen hak akses pengguna.',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fc36b',
    techStack: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Vuex'],
    category: 'Web',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: '6',
    title: 'FitTrack Pro',
    description: 'Desain UI/UX untuk aplikasi kesehatan dan kebugaran.',
    longDescription: 'Konsep desain antarmuka pengguna untuk aplikasi kebugaran komprehensif, mencakup pelacakan latihan, rencana nutrisi, dan fitur sosial.',
    imageUrl: 'https://images.unsplash.com/photo-1526506118432-84a1420cc30f',
    techStack: ['Figma', 'Illustrator', 'Prototyping'],
    category: 'UI/UX',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experience: Experience[] = [
  {
    company: 'TechCorp',
    role: 'Senior Full-Stack Developer',
    period: '2022 - Sekarang',
    description: 'Memimpin tim beranggotakan 5 developer dalam membangun arsitektur microservices yang scalable. Mengurangi waktu muat aplikasi sebesar 40% dan meningkatkan retensi pengguna.',
    technologies: ['Next.js', 'Node.js', 'AWS', 'PostgreSQL', 'Docker']
  },
  {
    company: 'StartupXYZ',
    role: 'Full-Stack Developer',
    period: '2020 - 2022',
    description: 'Mengembangkan fitur utama untuk aplikasi SaaS B2B, berkolaborasi dengan desainer, dan mengimplementasikan alur kerja CI/CD otomatis.',
    technologies: ['React', 'Express', 'MongoDB', 'Redis', 'Jest']
  },
  {
    company: 'WebStudio',
    role: 'Junior Frontend Developer',
    period: '2019 - 2020',
    description: 'Membangun antarmuka web responsif dan interaktif untuk berbagai klien. Mengubah desain PSD/Figma menjadi kode yang bersih dan dapat dipelihara.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Bootstrap']
  }
];

export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Budi Santoso',
    company: 'CEO StartupXYZ',
    quote: 'Arya adalah salah satu developer terbaik yang pernah bekerja dengan saya. Dedikasinya terhadap kualitas kode dan pengalaman pengguna sangat luar biasa.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
  },
  {
    name: 'Siti Aminah',
    company: 'Product Manager TechCorp',
    quote: 'Bekerja dengan Arya selalu menyenangkan. Dia tidak hanya mengeksekusi ide dengan sempurna tetapi juga selalu memberikan saran teknis yang berharga.',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  },
  {
    name: 'Reza Rahadian',
    company: 'Founder EcoMarket',
    quote: 'Produk akhir yang dikirimkan Arya jauh melampaui ekspektasi kami. Website kami sekarang jauh lebih cepat dan tingkat konversi meningkat tajam.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
  }
];

export const navItems = ['Beranda', 'Tentang', 'Keahlian', 'Portofolio', 'Pengalaman', 'Kontak'];
