import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Heart, Share2, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Location } from '../../types';

interface Props {
  location: Location;
  directionName: string;
  directionSlug: string;
}

export function LocationHeader({ location, directionName, directionSlug }: Props) {
  const navigate = useNavigate();

  return (
    <section className="relative h-[60vh]">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        className="absolute inset-0"
      >
        <img
          src={location.horizontal_cover || location.thumbnail}
          alt={location.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </motion.div>

      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 p-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(`/direction/${directionSlug}`)}
            className="flex items-center space-x-2 text-white/90 hover:text-white"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Назад к {directionName}</span>
          </motion.button>
          
          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm"
            >
              <Heart className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm"
            >
              <Share2 className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="flex items-center space-x-2 text-white/80 mb-4">
              <MapPin className="w-5 h-5" />
              <span>{directionName}</span>
              <span className="mx-2">•</span>
              <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
              <span>4.8</span>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-4">
              {location.title}
            </h1>

            <p className="text-lg text-white/90">
              {location.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}