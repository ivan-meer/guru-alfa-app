import React from 'react';
import { ThemeToggle } from './theme/ThemeToggle';
import { TreePine } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TreePine className="w-8 h-8 text-blue-500" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Phuket Guru
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}