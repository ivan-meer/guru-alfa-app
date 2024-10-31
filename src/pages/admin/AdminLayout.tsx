import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminNav } from '../../components/admin/AdminNav';
import { AdminHeader } from '../../components/admin/AdminHeader';

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <AdminHeader />
      <div className="flex">
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-[calc(100vh-4rem)] p-4">
          <AdminNav />
        </aside>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}