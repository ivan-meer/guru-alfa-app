import React from 'react';
import { motion } from 'framer-motion';
import { LocationCard } from '../LocationCard';
import type { Location } from '../../types';

interface Props {
  locations: Location[];
  directionSlug: string;
}

export function LocationsGrid({ locations, directionSlug }: Props) {
  return (
    <div className="container mx-auto px-4">
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
        locations.length < 3 ? 'justify-items-center' : ''
      }`}>
        {locations.map((location) => (
          <motion.div
            key={location.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-sm"
          >
            <LocationCard 
              location={location} 
              directionSlug={directionSlug}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}