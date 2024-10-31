import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LocationCardProps {
  slug?: string;
}

export function LocationCard({ slug = 'kata-beach' }: LocationCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/direction/kata/location/${slug}`)}
      className="bg-gray-800 rounded-xl overflow-hidden group hover:bg-gray-750 transition-colors cursor-pointer"
    >
      <div className="relative h-48">
        <img 
          src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=800&q=80"
          alt="Location"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-black/50 rounded-full px-2 py-1">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
            <span className="text-sm text-white">4.8</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-semibold mb-1 text-white">Kata Beach</h4>
        <div className="flex items-center text-gray-400 text-sm mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>15 min walk</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="text-indigo-400">Open</span>
            <span className="text-gray-400"> · Closes 7 PM</span>
          </div>
          <button className="text-indigo-400 hover:text-indigo-300">
            Details →
          </button>
        </div>
      </div>
    </div>
  );
}