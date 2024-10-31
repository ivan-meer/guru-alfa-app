import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { LocationsGrid } from '../components/layout/LocationsGrid';
import { directions } from '../data/directions';

export function SearchPage() {
  const [query, setQuery] = useState('');

  const searchResults = directions.flatMap(direction =>
    direction.locations.filter(location =>
      location.title.toLowerCase().includes(query.toLowerCase()) ||
      location.points.some(point =>
        point.title.toLowerCase().includes(query.toLowerCase()) ||
        point.description?.toLowerCase().includes(query.toLowerCase())
      )
    ).map(location => ({
      ...location,
      directionSlug: direction.slug
    }))
  );

  return (
    <div className="min-h-screen bg-background">
      <Container className="py-8">
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Поиск мест, пляжей, достопримечательностей..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {query && (
          <LocationsGrid 
            locations={searchResults}
            directionSlug={searchResults[0]?.directionSlug || ''}
          />
        )}
      </Container>
    </div>
  );
}