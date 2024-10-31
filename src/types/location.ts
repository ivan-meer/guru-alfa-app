export interface Location {
  id: string;
  title: string;
  slug: string;
  thumbnail: string | null;
  horizontal_cover: string | null;
  description: string;
  directionId: string;
  category: string;
  rating?: number;
  activities?: number;
  points: Point[];
  createdAt: string;
  updatedAt: string;
}

export interface Point {
  id: string;
  title: string;
  category: string;
  image: string | null;
  description: string;
  locationId: string;
  createdAt: string;
  updatedAt: string;
}

export interface LocationFormData {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  horizontal_cover: string;
  category: string;
  directionId: string;
}