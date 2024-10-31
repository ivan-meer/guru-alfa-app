import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Camera } from 'lucide-react';
import type { Point } from '../../types';

interface Props {
  points: Point[];
}

export function PointsList({ points }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {points.map((point, index) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
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
                <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full backdrop-blur-sm">
                  {point.category}
                </span>
              </div>
            </div>
          )}
          
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {point.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
              {point.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}