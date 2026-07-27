export interface Category {
  id: string;
  name: string;
  description?: string;
}

export interface Service {
  id: string;
  technicianId: string;
  categoryId: string;
  title: string;
  description?: string;
  price: number;
  duration?: number;
  category?: Category;
}
