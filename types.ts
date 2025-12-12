export interface Listing {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'House' | 'Apartment' | 'Villa' | 'Penthouse';
  imageUrl: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export interface FilterState {
  minPrice: number;
  maxPrice: number;
  type: string;
  bedrooms: string;
  location: string;
}
