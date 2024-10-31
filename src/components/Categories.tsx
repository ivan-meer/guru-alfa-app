import React from 'react';
import { categories } from '../data/categories';

export function Categories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {categories.map((category) => (
        <div
          key={category.id}
          className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <category.icon className="w-8 h-8 mb-2 text-blue-500" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
              {category.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {category.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}