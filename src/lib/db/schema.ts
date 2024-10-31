import { db } from './config';

export async function createTables() {
  console.log('\n📦 Creating database tables...');

  try {
    // Create directions table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS directions (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        description TEXT,
        thumbnail TEXT,
        rating REAL,
        activities INTEGER,
        distance TEXT,
        duration TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create locations table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS locations (
        id TEXT PRIMARY KEY,
        direction_id TEXT NOT NULL REFERENCES directions(id),
        title TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        thumbnail TEXT,
        horizontal_cover TEXT,
        description TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create points table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS points (
        id TEXT PRIMARY KEY,
        location_id TEXT NOT NULL REFERENCES locations(id),
        title TEXT NOT NULL,
        category TEXT NOT NULL,
        image TEXT,
        description TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('✅ Database tables created successfully');
  } catch (error) {
    console.error('❌ Error creating tables:', error);
    throw error;
  }
}