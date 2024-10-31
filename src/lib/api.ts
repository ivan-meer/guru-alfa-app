import { db } from './db';
import type { Direction, Location, Point } from '../types';

// Directions API
export async function getDirections() {
  const { rows } = await db.execute('SELECT * FROM directions');
  return rows as Direction[];
}

export async function getDirection(id: string) {
  const { rows } = await db.execute({
    sql: 'SELECT * FROM directions WHERE id = ?',
    args: [id]
  });
  return rows[0] as Direction;
}

// Locations API
export async function getLocations() {
  const { rows } = await db.execute('SELECT * FROM locations');
  return rows as Location[];
}

export async function getLocation(id: string) {
  const { rows } = await db.execute({
    sql: 'SELECT * FROM locations WHERE id = ?',
    args: [id]
  });
  return rows[0] as Location;
}

export async function getLocationsByDirection(directionId: string) {
  const { rows } = await db.execute({
    sql: 'SELECT * FROM locations WHERE direction_id = ?',
    args: [directionId]
  });
  return rows as Location[];
}

// Points API
export async function getPoints() {
  const { rows } = await db.execute('SELECT * FROM points');
  return rows as Point[];
}

export async function getPointsByLocation(locationId: string) {
  const { rows } = await db.execute({
    sql: 'SELECT * FROM points WHERE location_id = ?',
    args: [locationId]
  });
  return rows as Point[];
}