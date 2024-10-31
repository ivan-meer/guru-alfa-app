import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { DirectionsGrid } from '../components/DirectionsGrid';
import { directions } from '../data/directions';

export function AllDirections() {
  return (
    <div className="min-h-screen bg-background">
      <Container className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Все направления</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Исследуйте все доступные направления и найдите идеальное место для вашего следующего приключения
          </p>
        </motion.div>

        <DirectionsGrid directions={directions} />
      </Container>
    </div>
  );
}