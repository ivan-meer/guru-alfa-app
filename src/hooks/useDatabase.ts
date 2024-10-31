import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '../lib/api';

// Directions hooks
export function useDirections() {
  return useQuery({
    queryKey: ['directions'],
    queryFn: api.getDirections
  });
}

export function useDirection(id: string) {
  return useQuery({
    queryKey: ['direction', id],
    queryFn: () => api.getDirection(id)
  });
}

// Locations hooks
export function useLocations() {
  return useQuery({
    queryKey: ['locations'],
    queryFn: api.getLocations
  });
}

export function useLocation(id: string) {
  return useQuery({
    queryKey: ['location', id],
    queryFn: () => api.getLocation(id)
  });
}

export function useLocationsByDirection(directionId: string) {
  return useQuery({
    queryKey: ['locations', directionId],
    queryFn: () => api.getLocationsByDirection(directionId)
  });
}

// Points hooks
export function usePoints() {
  return useQuery({
    queryKey: ['points'],
    queryFn: api.getPoints
  });
}

export function usePointsByLocation(locationId: string) {
  return useQuery({
    queryKey: ['points', locationId],
    queryFn: () => api.getPointsByLocation(locationId)
  });
}