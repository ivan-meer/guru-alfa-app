import { useState, useEffect } from 'react';
import type { Direction } from '../types';

export function useDirections() {
  const [directions, setDirections] = useState<Direction[]>([]);

  useEffect(() => {
    // Загрузка направлений из localStorage или API
    const savedDirections = localStorage.getItem('directions');
    if (savedDirections) {
      setDirections(JSON.parse(savedDirections));
    }
  }, []);

  const saveDirections = (newDirections: Direction[]) => {
    localStorage.setItem('directions', JSON.stringify(newDirections));
    setDirections(newDirections);
  };

  const addDirection = async (direction: Partial<Direction>) => {
    const newDirection = {
      ...direction,
      id: Date.now().toString(),
      locations: []
    } as Direction;
    
    const newDirections = [...directions, newDirection];
    saveDirections(newDirections);
  };

  const updateDirection = async (id: string, data: Partial<Direction>) => {
    const newDirections = directions.map(dir =>
      dir.id === id ? { ...dir, ...data } : dir
    );
    saveDirections(newDirections);
  };

  const deleteDirection = async (id: string) => {
    const newDirections = directions.filter(dir => dir.id !== id);
    saveDirections(newDirections);
  };

  return {
    directions,
    addDirection,
    updateDirection,
    deleteDirection
  };
}