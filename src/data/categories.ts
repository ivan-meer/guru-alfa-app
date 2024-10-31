import { Category } from '../types';
import { 
  Umbrella, 
  Landmark, 
  UtensilsCrossed, 
  Mountain, 
  ShoppingBag, 
  TreePine 
} from 'lucide-react';

export const categories: Category[] = [
  {
    id: 'beach',
    name: 'Пляжи',
    icon: Umbrella,
    description: 'Лучшие пляжи Пхукета'
  },
  {
    id: 'culture',
    name: 'Культура',
    icon: Landmark,
    description: 'Храмы и музеи'
  },
  {
    id: 'food',
    name: 'Еда',
    icon: UtensilsCrossed,
    description: 'Рестораны и рынки'
  },
  {
    id: 'adventure',
    name: 'Приключения',
    icon: Mountain,
    description: 'Активный отдых'
  },
  {
    id: 'shopping',
    name: 'Шоппинг',
    icon: ShoppingBag,
    description: 'Магазины и рынки'
  },
  {
    id: 'nature',
    name: 'Природа',
    icon: TreePine,
    description: 'Парки и viewpoints'
  }
];