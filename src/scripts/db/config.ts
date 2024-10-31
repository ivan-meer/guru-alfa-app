import { createClient } from '@libsql/client';

// Database configuration
export const config = {
  url: process.env.VITE_DATABASE_URL || 'libsql://guru-phuketguru.turso.io',
  authToken: process.env.VITE_DATABASE_AUTH_TOKEN || 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MzAzODk3NTcsImlkIjoiMmIyYTFkZTEtNDcyOC00NzIyLTk2MDItOTI0NDc2OTYyM2Q1In0.lqBKFUdH7ShzWtuX1h8OLOIoS7BondF3zVJarSzFlsxsJyHTpPeuicaG5xGhlaJI0K3lAaieFLGAaHozwYxKCg'
};

// Create and export database client
export const db = createClient({
  url: config.url,
  authToken: config.authToken
});