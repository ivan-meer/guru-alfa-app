import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { DirectionsSlider } from '../components/DirectionsSlider';
import { CategorySlider } from '../components/CategorySlider';
import { FeaturedSlider } from '../components/FeaturedSlider';
import { WeatherWidget } from '../components/WeatherWidget';
import { UserMenu } from '../components/ui/UserMenu';
import { directions } from '../data/directions';

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[85vh] bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=2000&q=80"
            alt="Phuket"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* User Menu */}
        <div className="absolute top-4 right-4 z-10">
          <UserMenu />
        </div>

        <Container className="relative h-full flex flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Откройте для себя Пхукет
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl"
          >
            Ваш персональный гид по лучшим местам, пляжам и развлечениям острова
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-xl relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Найти места, пляжи, развлечения..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </motion.div>
        </Container>
      </section>

      {/* Main Content */}
      <Container className="py-12 space-y-16">
        {/* Weather Section */}
        <section>
          <WeatherWidget />
        </section>

        {/* Directions Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Популярные направления</h2>
              <p className="text-muted-foreground">
                Исследуйте самые интересные места острова
              </p>
            </div>
            <button className="flex items-center space-x-2 text-primary hover:underline">
              <span>Все направления</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <DirectionsSlider />
        </section>

        {/* Categories Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Категории</h2>
              <p className="text-muted-foreground">
                Выберите активности по интересам
              </p>
            </div>
          </div>
          <CategorySlider />
        </section>

        {/* Featured Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Рекомендуем посетить</h2>
              <p className="text-muted-foreground">
                Лучшие места и развлечения этой недели
              </p>
            </div>
            <button className="flex items-center space-x-2 text-primary hover:underline">
              <span>Все места</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <FeaturedSlider />
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Направлений', value: directions.length },
            { label: 'Локаций', value: directions.reduce((acc, dir) => acc + dir.locations.length, 0) },
            { label: 'Точек интереса', value: directions.reduce((acc, dir) => 
              acc + dir.locations.reduce((sum, loc) => sum + loc.points.length, 0), 0) 
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg"
            >
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </section>
      </Container>
    </div>
  );
}