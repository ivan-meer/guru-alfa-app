import { createClient } from '@libsql/client';

// Create database client
export const db = createClient({
  url: 'libsql://app-db-phuketguru.turso.io',
  authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MzAzOTQ3MzgsImlkIjoiMWMyOTJkZGQtNDMzZC00YmViLWJjZjktOWY4YmFlZGU4NDFiIn0.yfXcjoosKfiIP4ixpFTby-ZOECR8SKLbcVsATH7PQXifPhPdMkS4u1paSlM93i6TMM4LsSFJkwQYsmAOYhmODQ'
});