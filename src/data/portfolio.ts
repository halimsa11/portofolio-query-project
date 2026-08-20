export interface PersonalInfo {
  name: string;
  displayName: string;
  role: string;
  tagline: string;
  bio: string;
  socialLinks: { github: string; instagram: string };
  email: string;
  phone: string;
  location: string;
  yearsExperience: number;
  totalProjects: number;
  happyClients: number;
  awardsWon: number;
}

export const personalInfo: PersonalInfo = {
  name: 'halim samodra',
  displayName: 'Halim Samodra',
  role: 'Full-Stack Developer',
  tagline: 'Membangun solusi web yang elegan dan fungsional',
  bio: 'Saya Halim Samodra, seorang Full-Stack Developer dengan pengalaman 3 tahun dalam pengembangan web. Saat ini saya melanjutkan pendidikan di PPQIT Almahir sambil terus mengasah skill di bidang teknologi. Berbasis di Semarang, Indonesia.',
  socialLinks: {
    github: 'https://github.com/halimsa11',
    instagram: 'https://www.instagram.com/umymind/',
  },
  email: 'halimsamodra2009@gmail.com',
  phone: '+6281228025019',
  location: 'Semarang, Indonesia',
  yearsExperience: 3,
  totalProjects: 20,
  happyClients: 20,
  awardsWon: 10,
};

export interface Skill {
  name: string;
  iconName: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools';
}

export const skills: Skill[] = [
  { name: 'HTML', iconName: 'code', level: 90, category: 'Frontend' },
  { name: 'CSS', iconName: 'wind', level: 85, category: 'Frontend' },
  { name: 'JavaScript', iconName: 'terminal', level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', iconName: 'wind', level: 88, category: 'Frontend' },
  { name: 'Next.js', iconName: 'triangle', level: 80, category: 'Frontend' },
  { name: 'Node.js', iconName: 'server', level: 78, category: 'Backend' },
  { name: 'PostgreSQL', iconName: 'database', level: 75, category: 'Backend' },
  { name: 'Drizzle', iconName: 'layers', level: 70, category: 'Backend' },
  { name: 'Neon', iconName: 'cloud', level: 72, category: 'Backend' },
  { name: 'Git', iconName: 'git-branch', level: 85, category: 'Tools' },
  { name: 'Vercel', iconName: 'triangle', level: 82, category: 'Tools' },
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
    id: 'financial-tracker',
    title: 'Financial Tracker',
    description: 'Aplikasi pencatatan keuangan pribadi untuk memantau pemasukan dan pengeluaran.',
    longDescription: 'Financial Tracker adalah aplikasi web modern yang membantu pengguna mengelola keuangan pribadi mereka dengan fitur pencatatan transaksi, visualisasi data pengeluaran, dan manajemen anggaran bulanan.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    category: 'Web',
    liveUrl: 'https://financial-trecker.vercel.app/',
    githubUrl: 'https://github.com/halimsa11/financial-trecker',
    featured: true,
  },
  {
    id: 'absensi-alatsar',
    title: 'Absensi Al-Atsar',
    description: 'Sistem informasi absensi modern untuk institusi pendidikan.',
    longDescription: 'Sistem absensi digital yang memudahkan proses pencatatan kehadiran, pelaporan data secara real-time, dan manajemen data presensi harian dengan antarmuka yang intuitif dan responsif.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    category: 'Web',
    liveUrl: 'https://absensi-alatsar.vercel.app/',
    githubUrl: 'https://github.com/halimsa11/absensi-alatsar',
    featured: true,
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
    company: 'PPQIT Almahir (SMA)',
    role: 'Belajar Full-Stack Developer',
    period: '2024 - Sekarang',
    description:
      'Mempelajari pengembangan web full-stack, mulai dari frontend hingga backend. Fokus pada Next.js, Node.js, PostgreSQL, dan praktik membangun aplikasi web modern.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Git'],
  },
  {
    company: 'Sekolah Almadinah Kartasura',
    role: 'Siswa SMP',
    period: '2021 - 2023',
    description:
      'Menempuh pendidikan menengah pertama sambil mulai mengenal dunia teknologi dan pemrograman dasar.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  avatarUrl: string | null;
}

export const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    company: 'Client',
    quote:
      'Halim adalah developer yang rajin belajar dan selalu berusaha memberikan hasil terbaik. Komunikasinya baik dan pekerjaannya rapi.',
    avatarUrl: null,
  },
];

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Kontak', href: '#kontak' },
];
