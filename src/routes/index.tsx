import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { DirectionPage } from '../pages/DirectionPage';
import { LocationDetails } from '../pages/LocationDetails';
import { CategoryPage } from '../pages/CategoryPage';
import { SearchPage } from '../pages/SearchPage';
import { FavoritesPage } from '../pages/FavoritesPage';
import { RoutesPage } from '../pages/RoutesPage';
import { AllDirections } from '../pages/AllDirections';
import { AllLocations } from '../pages/AllLocations';
import { NotFound } from '../pages/NotFound';

// Admin pages
import { AdminLayout } from '../pages/admin/AdminLayout';
import { AdminDashboard } from '../pages/admin/AdminDashboard';
import { DirectionsPage } from '../pages/admin/DirectionsPage';
import { LocationsPage } from '../pages/admin/LocationsPage';
import { CategoriesPage } from '../pages/admin/CategoriesPage';
import { UsersPage } from '../pages/admin/UsersPage';
import { AnalyticsPage } from '../pages/admin/AnalyticsPage';
import { SettingsPage } from '../pages/admin/SettingsPage';

export function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/directions" element={<AllDirections />} />
      <Route path="/locations" element={<AllLocations />} />
      <Route path="/direction/:slug" element={<DirectionPage />} />
      <Route path="/direction/:directionSlug/location/:locationSlug" element={<LocationDetails />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/routes" element={<RoutesPage />} />

      {/* Admin routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="directions" element={<DirectionsPage />} />
        <Route path="locations" element={<LocationsPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}