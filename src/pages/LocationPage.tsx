import React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Heart, Share2, MapPin, Camera } from 'lucide-react';
import { WeatherWidget } from '../components/WeatherWidget';
import { directions } from '../data/directions';

export function LocationPage() {
  const { directionSlug, locationSlug } = useParams();
  const navigate = useNavigate();

  const direction = directions.find(d => d.id === directionSlug);
  const location = direction?.locations.find(l => l.slug === locationSlug);

  if (!direction || !location) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
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
              <span>Назад к {direction.name}</span>
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
                <span>{direction.name}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">
                {location.title}
              </h1>

              {location.points.length > 0 && (
                <div className="flex items-center space-x-4 text-white/80">
                  <div className="flex items-center space-x-2">
                    <Camera className="w-5 h-5" />
                    <span>{location.points.length} точек интереса</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 -mt-10">
        <WeatherWidget />
        
        {/* Points of Interest */}
        {location.points.length > 0 && (
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Точки интереса
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.points.map((point) => (
                <motion.div
                  key={point.title}
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
                    </div>
                  )}
                  <div className="p-4">
                    <div className="text-sm text-primary mb-2">
                      {point.category}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {point.title}
                    </h3>
                    {point.description && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                        {point.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}