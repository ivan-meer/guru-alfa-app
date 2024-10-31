import { createClient } from '@libsql/client';

const DATABASE_URL = 'libsql://app-db-phuketguru.turso.io';
const AUTH_TOKEN = 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MzAzOTQ3MzgsImlkIjoiMWMyOTJkZGQtNDMzZC00YmViLWJjZjktOWY4YmFlZGU4NDFiIn0.yfXcjoosKfiIP4ixpFTby-ZOECR8SKLbcVsATH7PQXifPhPdMkS4u1paSlM93i6TMM4LsSFJkwQYsmAOYhmODQ';

if (!DATABASE_URL || !AUTH_TOKEN) {
  throw new Error('Database configuration missing');
}

export const db = createClient({
  url: DATABASE_URL,
  authToken: AUTH_TOKEN
});