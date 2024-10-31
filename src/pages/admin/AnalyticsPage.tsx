import React from 'react';
import { BarChart, Users, MapPin, ArrowUp, ArrowDown, Eye, Clock } from 'lucide-react';
import { StatsCard } from '../../components/admin/StatsCard';

const stats = [
  {
    title: 'Просмотры',
    value: '14,281',
    change: '+12.5%',
    trend: 'up' as const,
    icon: Eye
  },
  {
    title: 'Среднее время',
    value: '4м 32с',
    change: '-1.5%',
    trend: 'down' as const,
    icon: Clock
  },
  {
    title: 'Активные пользователи',
    value: '2,342',
    change: '+18.2%',
    trend: 'up' as const,
    icon: Users
  }
];

export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Аналитика</h1>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Последнее обновление: {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Популярные направления</h2>
          <div className="space-y-4">
            {['Пхукет', 'Патонг', 'Карон'].map((location) => (
              <div
                key={location}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <span>{location}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {Math.floor(Math.random() * 1000)} просмотров
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Активность пользователей</h2>
          <div className="space-y-4">
            {[
              'Новый отзыв: Пляж Карон',
              'Добавлено в избранное: Биг Будда',
              'Поделились: Пхи-Пхи'
            ].map((action, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <span>{action}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date().toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}