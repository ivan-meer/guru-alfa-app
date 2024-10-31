import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { LocationsGrid } from '../components/layout/LocationsGrid';
import { directions } from '../data/directions';

export function CategoryPage() {
  const { slug } = useParams();
  
  // Собираем все локации с точками интереса в данной категории
  const locationsWithCategory = directions.flatMap(direction => 
    direction.locations.filter(location =>
      location.points.some(point => 
        point.category.toLowerCase() === slug?.toLowerCase()
      )
    ).map(location => ({
      ...location,
      directionSlug: direction.slug
    }))
  );

  return (
    <div className="min-h-screen bg-background">
      <Container className="py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          {slug?.charAt(0).toUpperCase() + slug?.slice(1).toLowerCase()}
        </h1>
        
        <LocationsGrid 
          locations={locationsWithCategory} 
          directionSlug={locationsWithCategory[0]?.directionSlug || ''}
        />
      </Container>
    </div>
  );
}