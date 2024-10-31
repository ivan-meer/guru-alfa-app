import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LocationCard } from './LocationCard';
import { useMediaQuery } from '../hooks/useMediaQuery';
import type { Location } from '../types';

interface Props {
  locations: Location[];
  directionSlug: string;
}

export function LocationsSlider({ locations, directionSlug }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === 'left' ? -400 : 400;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="relative group">
      <div
        ref={sliderRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4 cursor-grab active:cursor-grabbing"
      >
        {locations.map((location) => (
          <div 
            key={location.slug}
            className="snap-start shrink-0 w-[300px]"
          >
            <LocationCard 
              location={location} 
              directionSlug={directionSlug}
            />
          </div>
        ))}
      </div>

      {isDesktop && locations.length > 3 && (
        <>
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-1/2"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-1/2"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
        </>
      )}
    </div>
  );
}