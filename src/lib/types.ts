export interface Direction {
  id: string;
  name: string;
  slug: string;
  description?: string;
  thumbnail?: string;
  rating?: number;
  activities?: number;
  distance?: string;
  duration?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Location {
  id: string;
  direction_id: string;
  title: string;
  slug: string;
  thumbnail?: string;
  horizontal_cover?: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Point {
  id: string;
  location_id: string;
  title: string;
  category: string;
  image?: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
}