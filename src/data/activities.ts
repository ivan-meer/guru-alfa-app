import { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: '1',
    title: 'Пляж Карон',
    description: 'Один из самых длинных пляжей Пхукета с белоснежным песком и потрясающими закатами',
    image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=800&q=80',
    category: 'beach',
    location: 'west',
    rating: 4.8,
    price: 'Бесплатно',
    bestTime: 'Утро/Закат'
  },
  {
    id: '2',
    title: 'Храм Большого Будды',
    description: 'Величественная статуя Будды высотой 45 метров с панорамным видом на остров',
    image: 'https://images.unsplash.com/photo-1553604376-0e89c4b5c8b3?auto=format&fit=crop&w=800&q=80',
    category: 'culture',
    location: 'south',
    rating: 4.9,
    price: '200 ฿',
    bestTime: 'Утро'
  },
  {
    id: '3',
    title: 'Ночной рынок в Старом городе',
    description: 'Аутентичная тайская еда, местные деликатесы и сувениры',
    image: 'https://images.unsplash.com/photo-1516211881327-e5120a941edc?auto=format&fit=crop&w=800&q=80',
    category: 'food',
    location: 'east',
    rating: 4.7,
    price: '300-500 ฿',
    bestTime: 'Вечер'
  },
  {
    id: '4',
    title: 'Смотровая площадка Карон',
    description: 'Потрясающий вид на три пляжа с высоты птичьего полета',
    image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&w=800&q=80',
    category: 'nature',
    location: 'west',
    rating: 4.6,
    price: 'Бесплатно',
    bestTime: 'Закат'
  },
  {
    id: '5',
    title: 'Central Festival Phuket',
    description: 'Крупнейший торговый центр острова с магазинами, ресторанами и развлечениями',
    image: 'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&w=800&q=80',
    category: 'shopping',
    location: 'east',
    rating: 4.5,
    price: 'Разная',
    bestTime: 'День'
  }
];