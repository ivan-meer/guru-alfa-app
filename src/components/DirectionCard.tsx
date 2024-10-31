import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import type { Direction } from '../types';
import { DEFAULT_IMAGES } from '../constants/images';

interface Props {
  direction: Direction;
}

export function DirectionCard({ direction }: Props) {
  const navigate = useNavigate();

  const thumbnailUrl = direction.thumbnail || DEFAULT_IMAGES.DIRECTION;
  const rating = direction.rating || 4.8;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
      onClick={() => navigate(`/direction/${direction.slug}`)}
    >
      <div className="relative h-48">
        <img
          src={thumbnailUrl}
          alt={direction.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2">
            {direction.name}
          </h3>
          
          <div className="flex items-center justify-between text-white/80">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{direction.locations.length} локаций</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
              <span className="text-sm">{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}