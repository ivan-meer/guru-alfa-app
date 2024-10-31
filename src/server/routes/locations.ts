import { Router } from 'express';
import { prisma } from '../db';
import { z } from 'zod';

const router = Router();

// Validation schemas
const createLocationSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string(),
  thumbnail: z.string().nullable(),
  horizontal_cover: z.string().nullable(),
  directionId: z.string().min(1),
});

// Get all locations
router.get('/', async (req, res) => {
  try {
    const locations = await prisma.location.findMany({
      include: {
        points: true,
        direction: true,
      },
    });
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch locations' });
  }
});

// Get location by ID
router.get('/:id', async (req, res) => {
  try {
    const location = await prisma.location.findUnique({
      where: { id: req.params.id },
      include: {
        points: true,
        direction: true,
      },
    });
    
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    
    res.json(location);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch location' });
  }
});

// Create location
router.post('/', async (req, res) => {
  try {
    const data = createLocationSchema.parse(req.body);
    
    const location = await prisma.location.create({
      data,
      include: {
        points: true,
        direction: true,
      },
    });
    
    res.status(201).json(location);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    res.status(500).json({ error: 'Failed to create location' });
  }
});

// Update location
router.put('/:id', async (req, res) => {
  try {
    const data = createLocationSchema.parse(req.body);
    
    const location = await prisma.location.update({
      where: { id: req.params.id },
      data,
      include: {
        points: true,
        direction: true,
      },
    });
    
    res.json(location);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    res.status(500).json({ error: 'Failed to update location' });
  }
});

// Delete location
router.delete('/:id', async (req, res) => {
  try {
    await prisma.location.delete({
      where: { id: req.params.id },
    });
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete location' });
  }
});

export { router as locationsRouter };