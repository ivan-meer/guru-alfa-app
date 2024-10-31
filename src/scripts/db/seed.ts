import { db } from './config';
import { directions } from '../../data/directions';

export async function seedData() {
  console.log('\n📥 Seeding data...');

  try {
    // Insert directions
    console.log('\n  → Inserting directions:');
    for (const direction of directions) {
      try {
        await db.execute({
          sql: `
            INSERT INTO directions (id, name, slug, description, thumbnail, rating, activities, distance, duration)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
          `,
          args: [
            direction.id,
            direction.name,
            direction.slug,
            direction.description,
            direction.thumbnail,
            direction.rating || null,
            direction.activities || null,
            direction.distance || null,
            direction.duration || null
          ]
        });
        console.log(`    ✓ Added direction: ${direction.name}`);

        // Insert locations for each direction
        console.log(`      → Inserting locations for ${direction.name}:`);
        for (const location of direction.locations) {
          try {
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
                location.thumbnail,
                location.horizontal_cover,
                location.description
              ]
            });
            console.log(`        ✓ Added location: ${location.title}`);

            // Insert points for each location
            console.log(`          → Inserting points for ${location.title}:`);
            for (const point of location.points) {
              try {
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
                    point.image,
                    point.description
                  ]
                });
                console.log(`            ✓ Added point: ${point.title}`);
              } catch (error) {
                console.error(`            ❌ Failed to add point: ${point.title}`, error);
                throw error;
              }
            }
          } catch (error) {
            console.error(`        ❌ Failed to add location: ${location.title}`, error);
            throw error;
          }
        }
      } catch (error) {
        console.error(`    ❌ Failed to add direction: ${direction.name}`, error);
        throw error;
      }
    }

    console.log('\n✨ Data seeding completed successfully!');
  } catch (error) {
    console.error('\n❌ Error seeding data:', error);
    throw error;
  }
}