import React from 'react';
import { MapPin, Star, Heart, Share2, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative h-[500px]">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=2000&q=80" 
          alt="Kata Area"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-gray-900" />
      </div>

      <div className="relative">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button 
            onClick={() => navigate('/home')}
            className="flex items-center text-white space-x-2"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Areas</span>
          </button>
          <div className="flex space-x-2">
            <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 pt-16">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 text-white/80 mb-4">
            <MapPin className="w-5 h-5" />
            <span>South Phuket</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Kata Area</h1>
          <p className="text-lg text-white/90 mb-6">
            A perfect blend of serene beaches, vibrant nightlife, and local culture
          </p>
          <div className="flex items-center space-x-6 text-white">
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
              <span>4.8</span>
            </div>
            <div>150+ Places</div>
            <div>2,500+ Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}