export type Theme = 'light' | 'dark';

export interface Direction {
  id: string;
  name: string;
  slug: string;
  thumbnail: string | null;
  description: string;
  rating?: number;
  activities?: number;
  distance?: string;
  duration?: string;
  locations: Location[];
}

export interface Location {
  id: string;
  title: string;
  slug: string;
  thumbnail: string | null;
  horizontal_cover: string | null;
  description?: string;
  directionId: string;
  points: Point[];
}

export interface Point {
  id: string;
  title: string;
  category: PointCategory;
  image: string | null;
  description: string;
  locationId: string;
}

export type PointCategory = 
  | 'ПЛЯЖ'
  | 'ОБЗОРНАЯ ПЛОЩАДКА'
  | 'ИСТОРИЯ И КУЛЬТУРА'
  | 'МЕСТО ДЛЯ ФОТО'
  | 'ВОДОПАД'
  | 'АКТИВНЫЙ ОТДЫХ'
  | 'КУРОРТНАЯ ЗОНА'
  | 'РАЗВЛЕЧЕНИЯ И НОЧНАЯ ЖИЗНЬ'
  | 'БУХТА ИЛИ ЛАГУНА'
  | 'ПИРС ИЛИ МАРИНА'
  | 'ФЛОРА И ФАУНА'
  | 'ПЕЩЕРА'
  | 'МЕСТО ДЛЯ СНОРКЛИНГА'
  | 'ПЛЯЖНЫЙ КЛУБ'
  | 'СУВЕНИРЫ И ШОПИНГ'
  | 'ОТЕЛИ И ВИЛЛЫ';