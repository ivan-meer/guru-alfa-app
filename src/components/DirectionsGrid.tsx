import React from 'react';
import { motion } from 'framer-motion';
import { DirectionCard } from './DirectionCard';
import type { Direction } from '../types';

interface Props {
  directions: Direction[];
}

export function DirectionsGrid({ directions }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {directions.map((direction, index) => (
        <motion.div
          key={direction.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <DirectionCard direction={direction} />
        </motion.div>
      ))}
    </div>
  );
}