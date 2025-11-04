'use client'

import { useEffect, useRef, useState } from 'react'

interface PanoramaViewerProps {
  imageUrl: string
  hideNavbar?: boolean
  autoRotate?: boolean
  autoRotateSpeedRpm?: number
}

// Type for the Viewer instance (photo-sphere-viewer has built-in types)
type ViewerInstance = {
  destroy: () => void
  [key: string]: any
}

export default function PanoramaViewer({ imageUrl, hideNavbar = false, autoRotate = false, autoRotateSpeedRpm = 0.5 }: PanoramaViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const viewerRef = useRef<ViewerInstance | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!containerRef.current) return

    let viewer: ViewerInstance | null = null

    // Dynamically import photo-sphere-viewer to avoid SSR issues
    const loadViewer = async () => {
      try {
        const photoSphereViewer = await import('@photo-sphere-viewer/core')
        const { AutorotatePlugin } = await import('@photo-sphere-viewer/autorotate-plugin')
        const { Viewer } = photoSphereViewer

        // Initialize Photo Sphere Viewer
        viewer = new Viewer({
          container: containerRef.current!,
          panorama: imageUrl,
          caption: '360° Panoramic View',
          navbar: hideNavbar ? [] : [
            'zoom',
            'move',
            'caption',
            'fullscreen',
          ],
          defaultZoomLvl: 50,
          minFov: 30,
          maxFov: 90,
          sphereCorrection: { pan: 0, tilt: 0, roll: 0 },
          plugins: [
            [AutorotatePlugin, { autorotatePitch: 0, autorotateSpeed: `${autoRotateSpeedRpm}rpm` } as any],
          ],
        } as any)

        viewerRef.current = viewer
        if (autoRotate) {
          try {
            const plugin = (viewer as any).getPlugin(AutorotatePlugin)
            plugin?.start()
          } catch {}
        }
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading panorama viewer:', error)
        setIsLoading(false)
      }
    }

    loadViewer()

    // Cleanup
    return () => {
      if (viewerRef.current) {
        try {
          viewerRef.current.destroy()
        } catch (error) {
          console.error('Error destroying viewer:', error)
        }
        viewerRef.current = null
      }
    }
  }, [imageUrl])

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>Loading 360° view...</p>
          </div>
        </div>
      )}
      <div
        ref={containerRef}
        className="w-full h-full"
        style={{ minHeight: '400px' }}
      />
    </div>
  )
}

