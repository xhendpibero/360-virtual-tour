# 360° Interactive Virtual Tour

A beautiful and immersive 360° interactive virtual tour application built with React, Next.js, and Photo Sphere Viewer.

## Features

- 🎥 **360° Panoramic Viewing** - Explore stunning panoramic images with smooth interactive controls
- 🎨 **Modern UI/UX** - Beautiful, responsive design with smooth animations
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🖼️ **Gallery View** - Browse all available tours in an elegant gallery layout
- 🔍 **Fullscreen Modal** - Immersive fullscreen viewing experience with detailed information
- ⚡ **Smooth Transitions** - Framer Motion animations for seamless user experience
- 🎯 **Easy Navigation** - Intuitive controls for panning, zooming, and exploring

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy your 360° images to the `public/images-360/` directory:
   - The project expects images in `public/images-360/`
   - You can update the image paths in `data/tours.ts`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
360-virtual-tour/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page with gallery
│   └── globals.css         # Global styles
├── components/
│   ├── VirtualTourGallery.tsx  # Gallery component
│   ├── VirtualTourModal.tsx    # Modal for fullscreen viewing
│   └── PanoramaViewer.tsx      # 360° viewer component
├── data/
│   └── tours.ts            # Tour data configuration
├── types/
│   └── tour.ts             # TypeScript types
└── public/
    └── images-360/         # 360° panorama images
```

## Adding New Tours

To add a new virtual tour:

1. Add your panorama image to `public/images-360/`
2. Update `data/tours.ts` with your tour information:

```typescript
{
  id: '4',
  title: 'Your Tour Title',
  description: 'Description of the tour',
  imageUrl: '/images-360/your-image.jpg',
  location: 'Location Name',
  tags: ['Tag1', 'Tag2']
}
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Photo Sphere Viewer** - 360° panorama viewer
- **React Icons** - Icon library

## Controls

- **Click and Drag** - Rotate the view
- **Mouse Wheel** - Zoom in/out
- **Navigation Bar** - Use zoom, move, and fullscreen controls
- **ESC Key** - Close modal

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

