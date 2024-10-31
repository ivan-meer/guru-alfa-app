export const DIRECTION_IMAGES = {
  PHUKET: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=2000&q=80',
  PHANG_NGA: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=2000&q=80',
  PHI_PHI: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=2000&q=80',
  KRABI: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=2000&q=80',
  RAILAY: 'https://images.unsplash.com/photo-1583830379747-068fd6d2f476?auto=format&fit=crop&w=2000&q=80',
  SIMILAN: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000&q=80',
  KHAO_SOK: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2000&q=80'
} as const;

export const LOCATION_IMAGES = {
  BEACH: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=800&q=80',
  TEMPLE: 'https://images.unsplash.com/photo-1553604376-0e89c4b5c8b3?auto=format&fit=crop&w=800&q=80',
  VIEWPOINT: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&w=800&q=80',
  MARKET: 'https://images.unsplash.com/photo-1516211881327-e5120a941edc?auto=format&fit=crop&w=800&q=80',
  NATURE: 'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&w=800&q=80'
} as const;

export const DEFAULT_IMAGES = {
  DIRECTION: DIRECTION_IMAGES.PHUKET,
  LOCATION: LOCATION_IMAGES.BEACH,
  POINT: LOCATION_IMAGES.VIEWPOINT,
  HERO: DIRECTION_IMAGES.PHUKET,
  USER: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
} as const;