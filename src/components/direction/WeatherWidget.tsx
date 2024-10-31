import React from 'react';
import { Sun } from 'lucide-react';

interface WeatherRowProps {
  day: string;
  temp: string;
}

function WeatherRow({ day, temp }: WeatherRowProps) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-gray-400">{day}</span>
      <div className="flex items-center space-x-2">
        <Sun className="w-4 h-4 text-yellow-400" />
        <span>{temp}</span>
      </div>
    </div>
  );
}

export function WeatherWidget() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Current Weather</h3>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Sun className="w-8 h-8 text-yellow-400 mr-3" />
          <div>
            <div className="text-2xl font-bold">32°C</div>
            <div className="text-gray-400">Sunny</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-400">Humidity</div>
          <div>75%</div>
        </div>
      </div>
      <div className="space-y-2">
        <WeatherRow day="Today" temp="32°" />
        <WeatherRow day="Tomorrow" temp="31°" />
        <WeatherRow day="Saturday" temp="30°" />
      </div>
    </div>
  );
}