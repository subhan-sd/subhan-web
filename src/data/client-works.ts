export interface ClientWorkItem {
  id: string;
  title: string;
  tagline: string;
  scope: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  image: string;
  location: string;
  year: string;
}

export const clientWorks: ClientWorkItem[] = [
  {
    id: 'hostariola',
    title: 'Hostariola Ristorante',
    tagline: 'Authentic Italian dining experience in Emilia-Romagna',
    scope: 'International Client · Full Website Delivery',
    description:
      'Website presentasi dan reservasi meja untuk restoran tradisional di Colorno, Parma. Mendukung dua bahasa (Inggris dan Italia), galeri hidangan musiman, peta terintegrasi, dan alur booking langsung via WhatsApp dan telepon.',
    technologies: ['Astro', 'CSS', 'Cloudflare Workers', 'i18n'],
    liveUrl: 'https://hostariola-restaurant.subhan-singandaru2.workers.dev/en/',
    image: '/projects/hostariola.png',
    location: 'Colorno, Parma (Italy)',
    year: '2024',
  },
  {
    id: 'klinik-centra-raya-medika',
    title: 'Klinik Centra Raya Medika',
    tagline: 'Healthcare service and doctor consultation center',
    scope: 'Healthcare Profile & Patient Routing',
    description:
      'Portal profil layanan kesehatan untuk fasilitas klinik di Cilebut, Bogor. Menyediakan jadwal praktik dokter umum dan gigi, daftar tindakan medis, panduan BPJS/asuransi, serta tombol navigasi darurat ke lokasi klinik.',
    technologies: ['Astro', 'CSS', 'Cloudflare Workers', 'Responsive UI'],
    liveUrl: 'https://klinik-centra-raya-medika.subhan-singandaru2.workers.dev/',
    image: '/projects/klinik-centra-raya-medika.png',
    location: 'Bogor, Indonesia',
    year: '2024',
  },
  {
    id: 'seafood-kade',
    title: 'Seafood KaDe',
    tagline: 'Direct-from-source fresh seafood supplier & distribution',
    scope: 'Catalog Landing Page & Order Channel',
    description:
      'Landing page komersial untuk supplier hasil laut segar di wilayah Bogor. Menampilkan etalase komoditas harian (ikan laut, udang, cumi), jaminan rantai dingin distribusi, dan alur pemesanan langsung terhubung ke admin WhatsApp.',
    technologies: ['Astro', 'CSS', 'Cloudflare Workers', 'WhatsApp Integration'],
    liveUrl: 'https://seafood-kade.subhan-singandaru2.workers.dev/',
    image: '/projects/seafood-kade.png',
    location: 'Bogor, Indonesia',
    year: '2024',
  },
];
