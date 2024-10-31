import React from 'react';
import { motion } from 'framer-motion';
import type { OnboardingSlide as OnboardingSlideType } from '../types';

interface Props {
  slide: OnboardingSlideType;
  isActive: boolean;
}

export function OnboardingSlide({ slide, isActive }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 100 }}
      className="flex flex-col items-center px-6 w-full"
    >
      <div className="w-full aspect-square relative mb-8">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        {slide.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center max-w-xs">
        {slide.description}
      </p>
    </motion.div>
  );
}