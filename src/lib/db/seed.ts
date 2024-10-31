import { db } from './config';
import { directions } from '../../data/directions';

export async function seedDatabase() {
  console.log('\n📝 Seeding database...');

  try {
    // Insert directions
    for (const direction of directions) {
      await db.execute({
        sql: `
          INSERT INTO directions (id, name, slug, description, thumbnail, rating, activities, distance, duration)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        args: [
          direction.id,
          direction.name,
          direction.slug,
          direction.description || null,
          direction.thumbnail || null,
          direction.rating || null,
          direction.activities || null,
          direction.distance || null,
          direction.duration || null
        ]
      });

      // Insert locations for each direction
      for (const location of direction.locations) {
        await db.execute({
          sql: `
            INSERT INTO locations (id, direction_id, title, slug, thumbnail, horizontal_cover, description)
            VALUES (?, ?, ?, ?, ?, ?, ?)
          `,
          args: [
            location.id,
            direction.id,
            location.title,
            location.slug,
            location.thumbnail || null,
            location.horizontal_cover || null,
            location.description || null
          ]
        });

        // Insert points for each location
        for (const point of location.points) {
          await db.execute({
            sql: `
              INSERT INTO points (id, location_id, title, category, image, description)
              VALUES (?, ?, ?, ?, ?, ?)
            `,
            args: [
              point.id,
              location.id,
              point.title,
              point.category,
              point.image || null,
              point.description || null
            ]
          });
        }
      }
    }

    console.log('✅ Database seeded successfully');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}