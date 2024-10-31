import React from 'react';
import { User, Mail, Calendar, MoreVertical } from 'lucide-react';

const users = [
  {
    id: '1',
    name: 'Алексей Иванов',
    email: 'alex@example.com',
    joinDate: '2024-01-15',
    status: 'active'
  },
  {
    id: '2',
    name: 'Мария Петрова',
    email: 'maria@example.com',
    joinDate: '2024-02-01',
    status: 'inactive'
  }
];

export function UsersPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Пользователи</h1>
        <div className="flex space-x-2">
          <input
            type="search"
            placeholder="Поиск пользователей..."
            className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left p-4">Пользователь</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Дата регистрации</th>
              <th className="text-left p-4">Статус</th>
              <th className="text-left p-4"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 dark:border-gray-700 last:border-0"
              >
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                      <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span>{user.email}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>{new Date(user.joinDate).toLocaleDateString()}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    user.status === 'active'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                  }`}>
                    {user.status === 'active' ? 'Активен' : 'Неактивен'}
                  </span>
                </td>
                <td className="p-4">
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}