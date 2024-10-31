import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/categories';
import type { CategoryType } from '../types';

interface Props {
  selected: CategoryType;
  onSelect: (category: CategoryType) => void;
}

export function CategoryFilter({ selected, onSelect }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Enable horizontal scrolling with mouse wheel
  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      element.scrollLeft += e.deltaY;
    };

    element.addEventListener('wheel', onWheel);
    return () => element.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div 
      ref={scrollRef}
      className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 snap-x snap-mandatory"
    >
      {categories.map(({ id, name, icon: Icon }) => (
        <motion.button
          key={id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(id)}
          className={`flex flex-col items-center space-y-1 px-6 py-3 rounded-xl snap-start transition-colors duration-200 ${
            selected === id
              ? 'bg-primary text-white shadow-lg'
              : 'bg-secondary text-foreground hover:bg-secondary/80'
          }`}
        >
          <Icon className="w-6 h-6" />
          <span className="text-sm font-medium whitespace-nowrap">{name}</span>
        </motion.button>
      ))}
    </div>
  );
}