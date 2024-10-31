import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Clock, Calendar } from 'lucide-react';
import { Container } from '../components/layout/Container';

const routes = [
  {
    id: '1',
    title: 'Классический Пхукет',
    duration: '7 дней',
    locations: ['Патонг', 'Карон', 'Ката'],
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80',
    description: 'Идеальный маршрут для первого знакомства с островом'
  },
  {
    id: '2',
    title: 'Южный Пхукет',
    duration: '3 дня',
    locations: ['Раваи', 'Най Харн', 'Мыс Промтеп'],
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    description: 'Исследуйте живописный юг острова'
  }
];

export function RoutesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Container className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Маршруты</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Готовые маршруты для путешествия по Пхукету, составленные экспертами
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск маршрутов..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-border"
            />
          </div>
          <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg">
            <Filter className="w-4 h-4" />
            <span>Фильтры</span>
          </button>
        </div>

        <div className="grid gap-6">
          {routes.map((route) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-72 h-48">
                  <img
                    src={route.image}
                    alt={route.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-semibold mb-2">{route.title}</h3>
                  <p className="text-muted-foreground mb-4">{route.description}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{route.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{route.locations.join(' → ')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}