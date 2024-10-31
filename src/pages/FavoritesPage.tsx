import React from 'react';
import { Container } from '../components/layout/Container';
import { LocationsGrid } from '../components/layout/LocationsGrid';
import { useFavorites } from '../hooks/useFavorites';

export function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-background">
      <Container className="py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Избранное
        </h1>

        {favorites.length > 0 ? (
          <LocationsGrid 
            locations={favorites}
            directionSlug={favorites[0]?.directionSlug || ''}
          />
        ) : (
          <div className="text-center text-muted-foreground">
            У вас пока нет избранных мест
          </div>
        )}
      </Container>
    </div>
  );
}