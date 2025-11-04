'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { VirtualTour } from '@/types/tour'
import PanoramaViewer from './PanoramaViewer'
import { FaTimes, FaMapMarkerAlt, FaTag, FaInfoCircle } from 'react-icons/fa'

interface VirtualTourModalProps {
  tour: VirtualTour
  onClose: () => void
}

export default function VirtualTourModal({ tour, onClose }: VirtualTourModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-7xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 group"
            aria-label="Close modal"
          >
            <FaTimes className="text-gray-700 group-hover:text-red-600 transition-colors" />
          </button>

          {/* Content */}
          <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
            {/* Panorama Viewer */}
            <div className="flex-1 relative min-h-[400px] lg:min-h-[600px] bg-gray-900">
              <PanoramaViewer imageUrl={tour.imageUrl} />
            </div>

            {/* Sidebar Info */}
            <div className="w-full lg:w-96 bg-white p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-start mb-4">
                  <FaInfoCircle className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-gray-900">{tour.title}</h2>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tour.description}
                </p>

                {tour.location && (
                  <div className="mb-6">
                    <div className="flex items-center text-gray-700 mb-2">
                      <FaMapMarkerAlt className="text-primary-500 mr-2" />
                      <span className="font-semibold">Location</span>
                    </div>
                    <p className="text-gray-600 pl-6">{tour.location}</p>
                  </div>
                )}

                {tour.tags && tour.tags.length > 0 && (
                  <div>
                    <div className="flex items-center text-gray-700 mb-3">
                      <FaTag className="text-primary-500 mr-2" />
                      <span className="font-semibold">Tags</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-6">
                      {tour.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Instructions */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Tip:</strong> Click and drag to rotate the view, or use mouse wheel to zoom in/out.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

