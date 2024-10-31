import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down';
  icon: LucideIcon;
}

export function StatsCard({ title, value, change, trend, icon: Icon }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </div>
      </div>
      
      {change && (
        <div className="flex items-center mt-4">
          <span className={`text-sm ${
            trend === 'up' ? 'text-green-500' : 'text-red-500'
          }`}>
            {change}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
            vs прошлый месяц
          </span>
        </div>
      )}
    </motion.div>
  );
}