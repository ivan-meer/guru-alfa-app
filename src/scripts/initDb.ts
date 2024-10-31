import { createTables } from '../lib/db/schema';
import { seedDatabase } from '../lib/db/seed';

async function initDatabase() {
  try {
    await createTables();
    await seedDatabase();
    
    console.log('\n✨ Database initialization completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Database initialization failed:', error);
    process.exit(1);
  }
}

initDatabase();