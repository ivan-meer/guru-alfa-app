import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock } from 'lucide-react';
import type { Activity } from '../types';

interface Props {
  activity: Activity;
}

export function ActivityCard({ activity }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-background rounded-xl overflow-hidden shadow-lg border border-border"
    >
      <div className="relative h-48">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-background rounded-lg px-2 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium text-foreground">
            {activity.rating}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {activity.title}
        </h3>
        <p className="text-sm text-foreground/70 mb-4">
          {activity.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-foreground/60">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Пхукет</span>
            </div>
            {activity.bestTime && (
              <div className="flex items-center space-x-1 text-foreground/60">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{activity.bestTime}</span>
              </div>
            )}
          </div>
          <span className="text-primary font-medium">
            {activity.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
}