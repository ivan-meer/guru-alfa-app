import React from 'react';
import { motion } from 'framer-motion';
import type { Point } from '../types';

interface Props {
  point: Point;
}

export function PointCard({ point }: Props) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      {point.image && (
        <div className="relative h-48">
          <img
            src={point.image}
            alt={point.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {point.category}
            </span>
          </div>
        </div>
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {point.title}
        </h3>
        
        {point.description && (
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
            {point.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}