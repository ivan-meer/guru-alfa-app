import React from 'react';
import { BarChart, Users, MapPin, ArrowUp, ArrowDown } from 'lucide-react';

const stats = [
  {
    name: 'Всего направлений',
    value: '12',
    change: '+2.5%',
    trend: 'up',
    icon: MapPin
  },
  {
    name: 'Активных пользователей',
    value: '2,342',
    change: '+18.2%',
    trend: 'up',
    icon: Users
  },
  {
    name: 'Просмотров за неделю',
    value: '14,281',
    change: '-4.1%',
    trend: 'down',
    icon: BarChart
  }
];

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Панель управления</h1>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Последнее обновление: {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.name}
                </p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <stat.icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </div>
            </div>
            
            <div className="flex items-center mt-4">
              {stat.trend === 'up' ? (
                <ArrowUp className="w-4 h-4 text-green-500" />
              ) : (
                <ArrowDown className="w-4 h-4 text-red-500" />
              )}
              <span className={`text-sm ml-1 ${
                stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                vs прошлый месяц
              </span>
            </div>
          </div>
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
          <h2 className="text-lg font-semibold mb-4">Последние действия</h2>
          <div className="space-y-4">
            {[
              'Добавлено новое направление: Ката Бич',
              'Обновлены фотографии: Биг Будда',
              'Изменено описание: Патонг'
            ].map((action, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <span>{action}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}