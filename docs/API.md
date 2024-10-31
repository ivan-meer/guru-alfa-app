## Phuket Guru API Documentation

### Base URL
```
https://api.phuket.guru/v1
```

### Authentication
All requests must include a valid API token in the Authorization header:
```
Authorization: Bearer <token>
```

### Endpoints

#### Directions

```typescript
// Get all directions
GET /directions

// Get direction by ID
GET /directions/:id

// Get direction locations
GET /directions/:id/locations
```

#### Locations

```typescript
// Get all locations
GET /locations

// Get location by slug
GET /locations/:slug

// Get location points
GET /locations/:slug/points
```

#### Weather

```typescript
// Get current weather
GET /weather/:locationId

// Get weather forecast
GET /weather/:locationId/forecast
```

#### Categories

```typescript
// Get all categories
GET /categories

// Get category items
GET /categories/:id/items
```

### Response Format

All responses follow this structure:
```typescript
{
  success: boolean;
  data: T;
  error?: {
    code: string;
    message: string;
  };
}
```

### Error Codes

- `AUTH_ERROR`: Authentication failed
- `NOT_FOUND`: Resource not found
- `VALIDATION_ERROR`: Invalid request data
- `SERVER_ERROR`: Internal server error

### Rate Limiting

- 100 requests per minute per IP
- 1000 requests per hour per API key