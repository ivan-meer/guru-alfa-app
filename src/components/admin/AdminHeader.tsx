import React from 'react';
import { Bell, User } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

export function AdminHeader() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Админ панель</h1>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <Bell className="w-5 h-5" />
          </button>
          
          <button className="flex items-center space-x-2 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <User className="w-5 h-5" />
            <span>Админ</span>
          </button>
        </div>
      </div>
    </header>
  );
}