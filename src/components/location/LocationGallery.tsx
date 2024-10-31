import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import type { Point } from '../../types';

interface Props {
  points: Point[];
}

export function LocationGallery({ points }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {points.map((point) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative aspect-square rounded-xl overflow-hidden"
        >
          <img
            src={point.image || 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80'}
            alt={point.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center space-x-2 text-white/80 text-sm mb-1">
                <Camera className="w-4 h-4" />
                <span>{point.category}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{point.title}</h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}