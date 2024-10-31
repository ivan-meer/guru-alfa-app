import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Star, ArrowLeft, Clock } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { LocationsGrid } from '../components/LocationsGrid';
import { WeatherWidget } from '../components/WeatherWidget';
import { directions } from '../data/directions';
import { DEFAULT_IMAGES } from '../constants/images';

export function DirectionPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const direction = directions.find(d => d.slug === slug);

  if (!direction) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          className="absolute inset-0"
        >
          <img
            src={direction.thumbnail || DEFAULT_IMAGES.DIRECTION}
            alt={direction.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </motion.div>

        {/* Navigation */}
        <Container className="relative h-full flex flex-col justify-between py-6">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-white/90 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Назад</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="flex items-center space-x-2 text-white/80 mb-4">
              <MapPin className="w-5 h-5" />
              <span>{direction.locations.length} локаций</span>
              {direction.rating && (
                <>
                  <span className="mx-2">•</span>
                  <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  <span>{direction.rating}</span>
                </>
              )}
            </div>

            <h1 className="text-4xl font-bold text-white mb-4">
              {direction.name}
            </h1>

            <p className="text-lg text-white/90">
              {direction.description}
            </p>
          </motion.div>
        </Container>
      </section>

      <Container className="py-12 space-y-12">
        {/* Weather Widget */}
        <WeatherWidget />

        {/* Locations Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Локации</h2>
              <p className="text-muted-foreground">
                Исследуйте интересные места в этом направлении
              </p>
            </div>
          </div>

          <LocationsGrid 
            locations={direction.locations} 
            directionSlug={direction.slug}
          />
        </section>
      </Container>
    </div>
  );
}