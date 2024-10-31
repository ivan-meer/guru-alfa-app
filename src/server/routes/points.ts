import { Router } from 'express';
import { prisma } from '../db';
import { z } from 'zod';

const router = Router();

// Validation schemas
const createPointSchema = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  description: z.string(),
  image: z.string().nullable(),
  locationId: z.string().min(1),
});

// Get all points
router.get('/', async (req, res) => {
  try {
    const points = await prisma.point.findMany({
      include: {
        location: true,
      },
    });
    res.json(points);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch points' });
  }
});

// Get point by ID
router.get('/:id', async (req, res) => {
  try {
    const point = await prisma.point.findUnique({
      where: { id: req.params.id },
      include: {
        location: true,
      },
    });
    
    if (!point) {
      return res.status(404).json({ error: 'Point not found' });
    }
    
    res.json(point);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch point' });
  }
});

// Create point
router.post('/', async (req, res) => {
  try {
    const data = createPointSchema.parse(req.body);
    
    const point = await prisma.point.create({
      data,
      include: {
        location: true,
      },
    });
    
    res.status(201).json(point);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    res.status(500).json({ error: 'Failed to create point' });
  }
});

// Update point
router.put('/:id', async (req, res) => {
  try {
    const data = createPointSchema.parse(req.body);
    
    const point = await prisma.point.update({
      where: { id: req.params.id },
      data,
      include: {
        location: true,
      },
    });
    
    res.json(point);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    res.status(500).json({ error: 'Failed to update point' });
  }
});

// Delete point
router.delete('/:id', async (req, res) => {
  try {
    await prisma.point.delete({
      where: { id: req.params.id },
    });
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete point' });
  }
});

export { router as pointsRouter };