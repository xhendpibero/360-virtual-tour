# Setup Instructions

## Quick Start

1. **Navigate to the project directory:**
   ```bash
   cd 360-virtual-tour
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## What's Included

✅ **Complete Next.js project structure**  
✅ **Three 360° panorama images** (already in `public/images-360/`)  
✅ **Gallery view with smooth animations**  
✅ **Popup modal for immersive viewing**  
✅ **Responsive design**  
✅ **TypeScript support**  
✅ **Tailwind CSS styling**  

## Project Structure

```
360-virtual-tour/
├── app/                    # Next.js pages
├── components/             # React components
├── data/                   # Tour data
├── types/                  # TypeScript types
├── public/images-360/      # Your panorama images (already copied!)
└── package.json            # Dependencies
```

## Features

- 🎥 **360° Interactive Viewing** - Click and drag to explore
- 🖼️ **Beautiful Gallery** - Grid layout with hover effects
- 🔍 **Fullscreen Modal** - Immersive viewing experience
- 📱 **Responsive** - Works on all devices
- ⚡ **Smooth Animations** - Powered by Framer Motion
- 🎨 **Modern UI** - Clean, professional design

## Next Steps

1. **Customize tours** - Edit `data/tours.ts` to modify tour information
2. **Add more images** - Place new panoramas in `public/images-360/`
3. **Customize styling** - Modify `app/globals.css` or Tailwind config
4. **Deploy** - Build and deploy to Vercel, Netlify, or your preferred platform

## Troubleshooting

### Images not loading?
- Ensure images are in `public/images-360/`
- Check image paths in `data/tours.ts`
- Verify image URLs start with `/images-360/`

### Viewer not working?
- Make sure `photo-sphere-viewer` is installed
- Check browser console for errors
- Ensure images are proper 360° panoramas (equirectangular)

### Build errors?
- Run `npm install` again
- Delete `node_modules` and `.next` folder, then reinstall
- Check Node.js version (requires 18+)

## Production Build

```bash
npm run build
npm start
```

Enjoy your 360° virtual tour! 🌐

