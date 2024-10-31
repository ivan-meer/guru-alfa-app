import { db } from './config';

export async function createTables() {
  console.log('\n📝 Creating tables...');

  try {
    // Drop existing tables in reverse order
    console.log('  → Cleaning up existing tables...');
    await db.execute('DROP TABLE IF EXISTS points');
    await db.execute('DROP TABLE IF EXISTS locations');
    await db.execute('DROP TABLE IF EXISTS directions');
    console.log('  ✓ Tables cleaned up');

    // Create tables in correct order
    console.log('  → Creating directions table...');
    await db.execute(`
      CREATE TABLE directions (
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

    console.log('  → Creating locations table...');
    await db.execute(`
      CREATE TABLE locations (
        id TEXT PRIMARY KEY,
        direction_id TEXT NOT NULL,
        title TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        thumbnail TEXT,
        horizontal_cover TEXT,
        description TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (direction_id) REFERENCES directions(id) ON DELETE CASCADE
      )
    `);

    console.log('  → Creating points table...');
    await db.execute(`
      CREATE TABLE points (
        id TEXT PRIMARY KEY,
        location_id TEXT NOT NULL,
        title TEXT NOT NULL,
        category TEXT NOT NULL,
        image TEXT,
        description TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (location_id) REFERENCES locations(id) ON DELETE CASCADE
      )
    `);

    console.log('✅ All tables created successfully');
  } catch (error) {
    console.error('❌ Error creating tables:', error);
    throw error;
  }
}