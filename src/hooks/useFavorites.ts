import { useState, useEffect } from 'react';
import type { Location } from '../types';

export function useFavorites() {
  const [favorites, setFavorites] = useState<(Location & { directionSlug: string })[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const addToFavorites = (location: Location, directionSlug: string) => {
    const newFavorites = [...favorites, { ...location, directionSlug }];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (slug: string) => {
    const newFavorites = favorites.filter(fav => fav.slug !== slug);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (slug: string) => {
    return favorites.some(fav => fav.slug === slug);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  };
}