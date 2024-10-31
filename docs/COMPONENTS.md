## Component Documentation

### Core Components

#### DirectionCard
```typescript
interface Props {
  direction: Direction;
}
```
Displays a direction with:
- Thumbnail image
- Name
- Location count
- Rating
- Hover animations

#### LocationCard
```typescript
interface Props {
  location: Location;
  directionSlug: string;
}
```
Shows location details:
- Thumbnail
- Title
- Point count
- Description preview
- Navigation

### Layout Components

#### Container
Provides consistent padding and max-width:
- Responsive margins
- Centered content
- Proper spacing

#### Grid Components
- DirectionsGrid
- LocationsGrid
- Points Grid

### Navigation

#### UserMenu
User interaction component:
- Login/Logout
- Admin access
- Profile management
- Settings

#### Header
Main navigation component:
- Logo
- Navigation links
- Theme toggle
- User menu

### Best Practices

1. Component Structure
   - Single responsibility
   - Proper prop typing
   - Default props
   - Error boundaries

2. Performance
   - Lazy loading
   - Memoization
   - Image optimization
   - Animation optimization

3. Accessibility
   - ARIA labels
   - Keyboard navigation
   - Screen reader support
   - Color contrast

4. State Management
   - Local state
   - Context usage
   - Props drilling prevention
   - Event handling