import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Compass, 
  MapPin, 
  Tag, 
  Settings, 
  Users,
  BarChart
} from 'lucide-react';

const navigation = [
  { name: 'Дашборд', href: '/admin', icon: BarChart },
  { name: 'Направления', href: '/admin/directions', icon: Compass },
  { name: 'Локации', href: '/admin/locations', icon: MapPin },
  { name: 'Категории', href: '/admin/categories', icon: Tag },
  { name: 'Пользователи', href: '/admin/users', icon: Users },
  { name: 'Настройки', href: '/admin/settings', icon: Settings },
];

export function AdminSidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen">
      <nav className="p-4 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}