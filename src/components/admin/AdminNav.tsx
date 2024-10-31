import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Compass, 
  MapPin, 
  Tags, 
  Users,
  Settings,
  BarChart
} from 'lucide-react';

const navigation = [
  { name: 'Дашборд', href: '/admin', icon: LayoutDashboard },
  { name: 'Направления', href: '/admin/directions', icon: Compass },
  { name: 'Локации', href: '/admin/locations', icon: MapPin },
  { name: 'Категории', href: '/admin/categories', icon: Tags },
  { name: 'Пользователи', href: '/admin/users', icon: Users },
  { name: 'Аналитика', href: '/admin/analytics', icon: BarChart },
  { name: 'Настройки', href: '/admin/settings', icon: Settings },
];

export function AdminNav() {
  return (
    <nav className="space-y-1">
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
  );
}