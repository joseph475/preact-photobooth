# ImageLoader Component

A flexible and reusable image loading component for Preact applications that handles loading states, errors, and provides a smooth transition effect.

## Features

- Shows a placeholder during image loading
- Smooth fade-in transition when the image loads
- Error handling with fallback UI
- Support for custom placeholders
- Passes through additional props to the image element
- Supports event callbacks for load and error events

## Installation

The component is already part of your project. Simply import it from the components directory:

```jsx
import ImageLoader from '../components/ImageLoader';
```

## Basic Usage

```jsx
<ImageLoader 
  src="/path/to/image.jpg" 
  alt="Description of the image" 
  className="w-full h-64 object-cover"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | required | The source URL of the image to load |
| `alt` | string | `''` | Alternative text for the image |
| `className` | string | `''` | CSS classes to apply to the image |
| `placeholderSrc` | string | `/src/assets/placeholder.svg` | Source URL for the placeholder image |
| `imgProps` | object | `{}` | Additional props to pass to the img element |
| `onLoad` | function | `() => {}` | Callback function when the image loads successfully |
| `onError` | function | `() => {}` | Callback function when the image fails to load |
| `...rest` | any | - | Additional props are passed to both the placeholder and actual image |

## Examples

### Basic Usage

```jsx
<ImageLoader 
  src="/public/images/1.jpeg" 
  alt="Example image" 
/>
```

### With Custom Placeholder

```jsx
<ImageLoader 
  src="/public/images/2.jpeg" 
  alt="Custom placeholder example" 
  placeholderSrc="/public/images/logo.png"
/>
```

### With Event Handlers

```jsx
<ImageLoader 
  src="/public/images/3.jpeg" 
  alt="Event handlers example" 
  onLoad={() => console.log('Image loaded successfully')}
  onError={() => console.error('Failed to load image')}
/>
```

### With Additional Image Props

```jsx
<ImageLoader 
  src="/public/images/4.jpeg" 
  alt="Additional props example" 
  imgProps={{
    style: { objectPosition: 'top' },
    loading: 'lazy'
  }}
/>
```

### Custom Styling

```jsx
<ImageLoader 
  src="/public/images/5.jpeg" 
  alt="Custom styling example" 
  className="rounded-full object-cover"
  style={{ border: '4px solid #3B82F6' }}
/>
```

## Full Example Component

For a complete demonstration of all features, see the `ImageLoaderExample.jsx` file in the examples directory.

## Implementation Details

The ImageLoader component uses the following techniques:

1. Preloads the image using JavaScript's Image constructor
2. Manages loading and error states with Preact hooks
3. Uses CSS transitions for smooth fade effects
4. Positions elements with absolute positioning for the overlay effect
5. Handles cleanup in the useEffect hook to prevent memory leaks

## Best Practices

- Always provide an `alt` attribute for accessibility
- Use appropriate image dimensions and aspect ratios
- Consider using the `loading="lazy"` attribute for images below the fold
- Use the `onError` callback to handle image loading failures gracefully
