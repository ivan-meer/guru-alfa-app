import React from 'react';
import { Save } from 'lucide-react';

export function SettingsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Настройки</h1>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
        <form className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Основные настройки</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Название сайта
                </label>
                <input
                  type="text"
                  defaultValue="Phuket Guru"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">
                  Описание
                </label>
                <textarea
                  rows={3}
                  defaultValue="Ваш персональный гид по Пхукету"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">API настройки</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  API ключ погоды
                </label>
                <input
                  type="password"
                  defaultValue="************************"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Настройки уведомлений</h2>
            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="rounded" />
                <span>Email уведомления</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="rounded" />
                <span>Push уведомления</span>
              </label>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              type="submit"
              className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              <Save className="w-4 h-4" />
              <span>Сохранить изменения</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}