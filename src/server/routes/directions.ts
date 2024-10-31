import { Router } from 'express';
import { prisma } from '../db';
import { z } from 'zod';

const router = Router();

// Validation schemas
const createDirectionSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string(),
  thumbnail: z.string().nullable(),
});

// Get all directions
router.get('/', async (req, res) => {
  try {
    const directions = await prisma.direction.findMany({
      include: {
        locations: true,
      },
    });
    res.json(directions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch directions' });
  }
});

// Get direction by ID
router.get('/:id', async (req, res) => {
  try {
    const direction = await prisma.direction.findUnique({
      where: { id: req.params.id },
      include: {
        locations: {
          include: {
            points: true,
          },
        },
      },
    });
    
    if (!direction) {
      return res.status(404).json({ error: 'Direction not found' });
    }
    
    res.json(direction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch direction' });
  }
});

// Create direction
router.post('/', async (req, res) => {
  try {
    const data = createDirectionSchema.parse(req.body);
    
    const direction = await prisma.direction.create({
      data,
      include: {
        locations: true,
      },
    });
    
    res.status(201).json(direction);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    res.status(500).json({ error: 'Failed to create direction' });
  }
});

// Update direction
router.put('/:id', async (req, res) => {
  try {
    const data = createDirectionSchema.parse(req.body);
    
    const direction = await prisma.direction.update({
      where: { id: req.params.id },
      data,
      include: {
        locations: true,
      },
    });
    
    res.json(direction);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    res.status(500).json({ error: 'Failed to update direction' });
  }
});

// Delete direction
router.delete('/:id', async (req, res) => {
  try {
    await prisma.direction.delete({
      where: { id: req.params.id },
    });
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete direction' });
  }
});

export { router as directionsRouter };