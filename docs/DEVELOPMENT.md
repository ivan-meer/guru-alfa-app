# Phuket Guru - Development Guide

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Route components
├── routes/        # Routing configuration
├── context/       # React context providers
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── types/         # TypeScript definitions
├── data/          # Static data and constants
└── db/           # Database schema and queries
```

## Key Technologies

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Prisma

## Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run typecheck

# Linting
npm run lint
```

## Code Style

- Use TypeScript for all components
- Follow functional component patterns
- Use hooks for state management
- Implement proper error boundaries
- Follow accessibility guidelines

## Component Guidelines

- Keep components focused and small
- Use TypeScript interfaces for props
- Implement proper loading states
- Handle error cases
- Document complex logic

## State Management

- Use React Context for global state
- Implement proper data fetching
- Handle loading and error states
- Cache responses when appropriate

## Performance

- Implement code splitting
- Optimize images
- Use proper memoization
- Implement virtual scrolling for lists
- Monitor bundle size

## Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage
```

## Deployment

```bash
# Build application
npm run build

# Preview build
npm run preview
```

## Best Practices

1. Code Organization
   - Follow feature-based structure
   - Keep related files together
   - Use proper naming conventions

2. Performance
   - Lazy load routes
   - Optimize images
   - Implement proper caching
   - Monitor bundle size

3. Accessibility
   - Use semantic HTML
   - Implement proper ARIA attributes
   - Test with screen readers
   - Support keyboard navigation

4. Mobile First
   - Design for mobile first
   - Implement responsive layouts
   - Test on various devices
   - Optimize touch interactions