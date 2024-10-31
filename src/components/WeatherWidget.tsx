import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Umbrella, 
  Moon, 
  Waves, 
  Wind, 
  Thermometer,
  Droplets
} from 'lucide-react';

interface WeatherInfo {
  temperature: number;
  condition: string;
  icon: string;
  seaCondition: {
    waveHeight: number;
    waterTemp: number;
    status: 'calm' | 'moderate' | 'rough';
    tide: {
      status: 'low' | 'medium' | 'high';
      time: string;
      height: number;
    };
    moonPhase: {
      phase: string;
      illumination: number;
    };
    warning?: string;
  };
}

const weatherData: WeatherInfo = {
  temperature: 29,
  condition: "Солнечно",
  icon: "sun",
  seaCondition: {
    waveHeight: 0.5,
    waterTemp: 28,
    status: 'calm',
    tide: {
      status: 'medium',
      time: '15:30',
      height: 1.2
    },
    moonPhase: {
      phase: 'waxing-crescent',
      illumination: 35
    }
  }
};

const WeatherIcon = ({ condition }: { condition: string }) => {
  switch (condition.toLowerCase()) {
    case 'солнечно':
      return <Sun className="w-8 h-8" />;
    case 'облачно':
      return <Cloud className="w-8 h-8" />;
    default:
      return <CloudRain className="w-8 h-8" />;
  }
};

const seaStatusColors = {
  calm: 'text-emerald-500 dark:text-emerald-400',
  moderate: 'text-amber-500 dark:text-amber-400',
  rough: 'text-red-500 dark:text-red-400'
};

const tideStatusColors = {
  low: 'text-amber-500 dark:text-amber-400',
  medium: 'text-emerald-500 dark:text-emerald-400',
  high: 'text-blue-500 dark:text-blue-400'
};

export function WeatherWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      {/* Main Weather Section */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Current Weather */}
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-500"
            >
              <WeatherIcon condition={weatherData.condition} />
            </motion.div>
            <div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl font-bold"
              >
                {weatherData.temperature}°C
              </motion.div>
              <div className="text-gray-500 dark:text-gray-400">
                {weatherData.condition}
              </div>
            </div>
          </div>

          {/* Sea Temperature */}
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-500"
            >
              <Thermometer className="w-8 h-8" />
            </motion.div>
            <div>
              <div className="text-3xl font-bold">
                {weatherData.seaCondition.waterTemp}°C
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                Температура воды
              </div>
            </div>
          </div>

          {/* Wave Height */}
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500"
            >
              <Waves className="w-8 h-8" />
            </motion.div>
            <div>
              <div className="text-3xl font-bold">
                {weatherData.seaCondition.waveHeight}м
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                Высота волн
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sea Status */}
          <div className="flex items-center space-x-3">
            <Wind className={`w-5 h-5 ${seaStatusColors[weatherData.seaCondition.status]}`} />
            <div>
              <div className="text-sm font-medium">Состояние моря</div>
              <div className={`text-sm ${seaStatusColors[weatherData.seaCondition.status]}`}>
                {weatherData.seaCondition.status === 'calm' ? 'Спокойное' : 
                 weatherData.seaCondition.status === 'moderate' ? 'Умеренное' : 'Неспокойное'}
              </div>
            </div>
          </div>

          {/* Tide Info */}
          <div className="flex items-center space-x-3">
            <Droplets className={`w-5 h-5 ${tideStatusColors[weatherData.seaCondition.tide.status]}`} />
            <div>
              <div className="text-sm font-medium">Прилив</div>
              <div className={`text-sm ${tideStatusColors[weatherData.seaCondition.tide.status]}`}>
                {weatherData.seaCondition.tide.height}м в {weatherData.seaCondition.tide.time}
              </div>
            </div>
          </div>

          {/* Moon Phase */}
          <div className="flex items-center space-x-3">
            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <div>
              <div className="text-sm font-medium">Луна</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {weatherData.seaCondition.moonPhase.illumination}% освещенности
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Section */}
      {weatherData.seaCondition.warning && (
        <div className="px-6 py-3 bg-red-50 dark:bg-red-900/20">
          <div className="flex items-center space-x-2 text-red-600 dark:text-red-400">
            <Umbrella className="w-5 h-5" />
            <span className="text-sm font-medium">{weatherData.seaCondition.warning}</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}