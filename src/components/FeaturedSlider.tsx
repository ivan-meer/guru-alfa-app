import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { activities } from '../data/activities';

export function FeaturedSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === 'left' ? -320 : 320;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="relative group">
      <div
        ref={sliderRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
      >
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            whileHover={{ y: -5 }}
            className="snap-start shrink-0 w-[300px] bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative h-48">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                <span className="text-white text-sm">{activity.rating}</span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {activity.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                {activity.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{activity.bestTime}</span>
                  </div>
                </div>
                <span className="text-primary font-medium">
                  {activity.price}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-1/2"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </button>
      
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-1/2"
      >
        <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </button>
    </div>
  );
}