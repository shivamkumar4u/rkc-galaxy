import { Product, Category, Brand, Testimonial } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'laptops',
    name: 'Laptops',
    description: 'Premium HP, Lenovo, and Acer laptops for every need.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800',
    icon: 'Laptop',
  },
  {
    id: 'desktops',
    name: 'Desktops',
    description: 'High-performance workstations and home computers.',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800',
    icon: 'Monitor',
  },
  {
    id: 'printers',
    name: 'Printers',
    description: 'Reliable printing solutions from Epson, Canon, and Brother.',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800',
    icon: 'Printer',
  },
  {
    id: 'cctv',
    name: 'CCTV Cameras',
    description: 'Advanced security systems for your home and business.',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=800',
    icon: 'Camera',
  },
  {
    id: 'networking',
    name: 'Networking',
    description: 'High-speed routers and switches for seamless connectivity.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    icon: 'Wifi',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Essential peripherals and electronics from top brands.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800',
    icon: 'Mouse',
  },
];

export const PRODUCTS: Product[] = [
  // Laptops
  {
    id: 'hp-pavilion',
    name: 'HP Pavilion 15',
    category: 'laptops',
    brand: 'HP',
    specs: ['Intel Core i7', '16GB RAM', '512GB SSD', '15.6" FHD Display'],
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'lenovo-ideapad',
    name: 'Lenovo IdeaPad 3',
    category: 'laptops',
    brand: 'Lenovo',
    specs: ['AMD Ryzen 5', '8GB RAM', '256GB SSD', '14" Display'],
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'acer-aspire',
    name: 'Acer Aspire 5',
    category: 'laptops',
    brand: 'Acer',
    specs: ['Intel Core i5', '12GB RAM', '512GB SSD', 'Backlit Keyboard'],
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400',
  },
  // Desktops
  {
    id: 'hp-envy-desktop',
    name: 'HP Envy Desktop',
    category: 'desktops',
    brand: 'HP',
    specs: ['Intel Core i9', '32GB RAM', '1TB SSD', 'NVIDIA RTX 3060'],
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'lenovo-thinkcentre',
    name: 'Lenovo ThinkCentre',
    category: 'desktops',
    brand: 'Lenovo',
    specs: ['Intel Core i5', '16GB RAM', '512GB SSD', 'Compact Design'],
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=400',
  },
  // Printers
  {
    id: 'epson-ecotank',
    name: 'Epson EcoTank L3210',
    category: 'printers',
    brand: 'Epson',
    specs: ['Ink Tank System', 'Print, Scan, Copy', 'High Yield Ink'],
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'canon-pixma',
    name: 'Canon PIXMA G3010',
    category: 'printers',
    brand: 'Canon',
    specs: ['Wireless Connectivity', 'Refillable Ink', 'Photo Printing'],
    image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=400',
  },
  // CCTV
  {
    id: 'cp-plus-camera',
    name: 'CP Plus 2MP Camera',
    category: 'cctv',
    brand: 'CP Plus',
    specs: ['Full HD Resolution', 'Night Vision', 'Weatherproof'],
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'hikvision-dvr',
    name: 'Hikvision 8CH DVR',
    category: 'cctv',
    brand: 'Hikvision',
    specs: ['H.265+ Compression', '4K Output', 'Remote Viewing'],
    image: 'https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?auto=format&fit=crop&q=80&w=400',
  },
  // Networking
  {
    id: 'tp-link-router',
    name: 'TP-Link Archer AX50',
    category: 'networking',
    brand: 'TP-Link',
    specs: ['Wi-Fi 6 Speed', 'Dual Band', 'Gigabit Ports'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'dlink-switch',
    name: 'D-Link 8-Port Switch',
    category: 'networking',
    brand: 'D-Link',
    specs: ['Gigabit Ethernet', 'Plug and Play', 'Metal Casing'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400',
  },
  // Accessories
  {
    id: 'lapcare-keyboard',
    name: 'Lapcare Wireless Combo',
    category: 'accessories',
    brand: 'Lapcare',
    specs: ['Ergonomic Design', 'Long Battery Life', 'Silent Keys'],
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=400',
  },
];

export const BRANDS: Brand[] = [
  { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
  { name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg' },
  { name: 'Acer', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Acer_Logo.svg' },
  { name: 'Epson', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Epson_logo.svg' },
  { name: 'Canon', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Canon_logo.svg' },
  { name: 'Brother', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Brother_logo.svg' },
  { name: 'CP Plus', logo: 'https://www.cpplusworld.com/assets/images/logo.png' },
  { name: 'Dahua', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Dahua_Technology_logo.svg' },
  { name: 'Hikvision', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hikvision_logo.svg' },
  { name: 'D-Link', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/D-Link_logo.svg' },
  { name: 'TP-Link', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/TP-Link_logo.svg' },
  { name: 'Tenda', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Tenda_logo.svg' },
  { name: 'Lapcare', logo: 'https://www.lapcare.com/wp-content/uploads/2021/04/lapcare-logo.png' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rahul Sharma',
    role: 'Business Owner',
    content: 'Best place for IT solutions in the city. Got my showroom CCTV installed perfectly.',
    rating: 5,
  },
  {
    name: 'Priya Verma',
    role: 'Graphic Designer',
    content: 'Bought a high-end HP laptop. The service and price were unbeatable.',
    rating: 5,
  },
  {
    name: 'Ankit Gupta',
    role: 'IT Professional',
    content: 'Excellent range of networking equipment. Highly recommended for genuine products.',
    rating: 4,
  },
];
