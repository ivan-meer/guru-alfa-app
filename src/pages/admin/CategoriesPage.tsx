import React from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { categories } from '../../data/categories';

export function CategoriesPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Категории</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
          <Plus className="w-4 h-4" />
          <span>Добавить категорию</span>
        </button>
      </div>

      <div className="grid gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg">
                <Pencil className="w-4 h-4" />
              </button>
              <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}