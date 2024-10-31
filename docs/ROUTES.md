# Phuket Guru - Route Documentation

## Route Structure

```
/                   # Redirect to /onboarding or /home
├── /onboarding     # First-time user flow
├── /home           # Main application page
├── /direction      # Direction-related routes
│   ├── /:slug      # Direction details
│   └── /:directionSlug/location/:locationSlug  # Location details
└── *              # 404 Not Found
```

## Route Components

### Onboarding (`/onboarding`)
- First-time user experience
- App introduction
- Theme selection
- Language selection

### Home (`/home`)
- Weather widget
- Directions list
- Categories
- Featured content
- Search functionality

### Direction (`/direction/:slug`)
- Direction overview
- Location list
- Weather information
- Transportation options
- Popular times

### Location (`/direction/:directionSlug/location/:locationSlug`)
- Location details
- Points of interest
- Weather conditions
- Photos and media
- Related content

## Route Guards

- First visit check
- Authentication (future)
- Permission checks (future)

## Navigation

- Browser history support
- Deep linking
- Back/forward navigation
- Scroll restoration

## URL Parameters

### Direction Routes
- `slug`: Direction identifier

### Location Routes
- `directionSlug`: Parent direction
- `locationSlug`: Location identifier

## Error Handling

- 404 page for invalid routes
- Error boundaries for component crashes
- Loading states
- Error states