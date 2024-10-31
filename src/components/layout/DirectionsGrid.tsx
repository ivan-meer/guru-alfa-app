import React from 'react';
import { motion } from 'framer-motion';
import { DirectionCard } from '../DirectionCard';
import type { Direction } from '../../types';

interface Props {
  directions: Direction[];
}

export function DirectionsGrid({ directions }: Props) {
  return (
    <div className="container mx-auto px-4">
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
        directions.length < 3 ? 'justify-items-center' : ''
      }`}>
        {directions.map((direction) => (
          <motion.div
            key={direction.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-sm"
          >
            <DirectionCard direction={direction} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}