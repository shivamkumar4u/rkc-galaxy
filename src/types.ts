export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  specs: string[];
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export interface Brand {
  name: string;
  logo: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}
