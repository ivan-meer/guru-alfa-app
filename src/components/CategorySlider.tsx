import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { categories } from '../data/categories';

export function CategorySlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === 'left' ? -200 : 200;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="relative group">
      <div
        ref={sliderRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="snap-start shrink-0 w-[150px] bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white">
                {category.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                {category.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

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