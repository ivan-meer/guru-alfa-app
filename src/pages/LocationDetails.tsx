import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { LocationHeader } from '../components/location/LocationHeader';
import { LocationGallery } from '../components/location/LocationGallery';
import { PointsList } from '../components/location/PointsList';
import { WeatherWidget } from '../components/WeatherWidget';
import { directions } from '../data/directions';

export function LocationDetails() {
  const { directionSlug, locationSlug } = useParams();

  const direction = directions.find(d => d.slug === directionSlug);
  const location = direction?.locations.find(l => l.slug === locationSlug);

  if (!direction || !location) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="min-h-screen bg-background">
      <LocationHeader 
        location={location}
        directionName={direction.name}
        directionSlug={direction.slug}
      />

      <Container className="py-12 space-y-12">
        {/* Weather Widget */}
        <WeatherWidget />

        {/* Gallery Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-2">Галерея</h2>
            <p className="text-muted-foreground">
              Фотографии и интересные места
            </p>
          </motion.div>
          <LocationGallery points={location.points} />
        </section>

        {/* Points of Interest */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-2">Точки интереса</h2>
            <p className="text-muted-foreground">
              Что посмотреть и чем заняться
            </p>
          </motion.div>
          <PointsList points={location.points} />
        </section>
      </Container>
    </div>
  );
}