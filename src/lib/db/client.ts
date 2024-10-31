import { createClient } from '@libsql/client';
import type { Direction, Location, Point } from '../types';

// Database client singleton
class DatabaseClient {
  private static instance: DatabaseClient;
  private client;

  private constructor() {
    const url = 'libsql://app-db-phuketguru.turso.io';
    const authToken = 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MzAzOTQ3MzgsImlkIjoiMWMyOTJkZGQtNDMzZC00YmViLWJjZjktOWY4YmFlZGU4NDFiIn0.yfXcjoosKfiIP4ixpFTby-ZOECR8SKLbcVsATH7PQXifPhPdMkS4u1paSlM93i6TMM4LsSFJkwQYsmAOYhmODQ';

    this.client = createClient({
      url,
      authToken
    });
  }

  public static getInstance(): DatabaseClient {
    if (!DatabaseClient.instance) {
      DatabaseClient.instance = new DatabaseClient();
    }
    return DatabaseClient.instance;
  }

  // Directions
  async getDirections(): Promise<Direction[]> {
    const { rows } = await this.client.execute('SELECT * FROM directions');
    return rows as Direction[];
  }

  async getDirection(id: string): Promise<Direction | null> {
    const { rows } = await this.client.execute({
      sql: 'SELECT * FROM directions WHERE id = ?',
      args: [id]
    });
    return rows[0] as Direction || null;
  }

  async getDirectionBySlug(slug: string): Promise<Direction | null> {
    const { rows } = await this.client.execute({
      sql: 'SELECT * FROM directions WHERE slug = ?',
      args: [slug]
    });
    return rows[0] as Direction || null;
  }

  // Locations
  async getLocations(): Promise<Location[]> {
    const { rows } = await this.client.execute('SELECT * FROM locations');
    return rows as Location[];
  }

  async getLocation(id: string): Promise<Location | null> {
    const { rows } = await this.client.execute({
      sql: 'SELECT * FROM locations WHERE id = ?',
      args: [id]
    });
    return rows[0] as Location || null;
  }

  async getLocationBySlug(slug: string): Promise<Location | null> {
    const { rows } = await this.client.execute({
      sql: 'SELECT * FROM locations WHERE slug = ?',
      args: [slug]
    });
    return rows[0] as Location || null;
  }

  async getLocationsByDirection(directionId: string): Promise<Location[]> {
    const { rows } = await this.client.execute({
      sql: 'SELECT * FROM locations WHERE direction_id = ?',
      args: [directionId]
    });
    return rows as Location[];
  }

  // Points
  async getPoints(): Promise<Point[]> {
    const { rows } = await this.client.execute('SELECT * FROM points');
    return rows as Point[];
  }

  async getPoint(id: string): Promise<Point | null> {
    const { rows } = await this.client.execute({
      sql: 'SELECT * FROM points WHERE id = ?',
      args: [id]
    });
    return rows[0] as Point || null;
  }

  async getPointsByLocation(locationId: string): Promise<Point[]> {
    const { rows } = await this.client.execute({
      sql: 'SELECT * FROM points WHERE location_id = ?',
      args: [locationId]
    });
    return rows as Point[];
  }

  // Complex queries
  async getDirectionWithLocations(directionId: string): Promise<Direction & { locations: Location[] }> {
    const direction = await this.getDirection(directionId);
    if (!direction) throw new Error('Direction not found');

    const locations = await this.getLocationsByDirection(directionId);
    return { ...direction, locations };
  }

  async getLocationWithPoints(locationId: string): Promise<Location & { points: Point[] }> {
    const location = await this.getLocation(locationId);
    if (!location) throw new Error('Location not found');

    const points = await this.getPointsByLocation(locationId);
    return { ...location, points };
  }

  // Search functionality
  async searchLocations(query: string): Promise<Location[]> {
    const { rows } = await this.client.execute({
      sql: `
        SELECT * FROM locations 
        WHERE title LIKE ? OR description LIKE ?
      `,
      args: [`%${query}%`, `%${query}%`]
    });
    return rows as Location[];
  }
}

// Export singleton instance
export const db = DatabaseClient.getInstance();