import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Location } from '../types';
import { DEFAULT_IMAGES } from '../constants/images';

interface Props {
  location: Location;
  directionSlug: string;
}

export function LocationCard({ location, directionSlug }: Props) {
  const navigate = useNavigate();

  const thumbnailUrl = location.thumbnail || DEFAULT_IMAGES.LOCATION;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
      onClick={() => navigate(`/direction/${directionSlug}/location/${location.slug}`)}
    >
      <div className="relative h-48">
        <img
          src={thumbnailUrl}
          alt={location.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {location.points.length > 0 && (
          <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
            <Camera className="w-4 h-4" />
            <span className="text-sm">{location.points.length} точек</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {location.title}
        </h3>

        {location.description && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
            {location.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">Подробнее</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}