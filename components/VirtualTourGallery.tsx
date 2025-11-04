'use client'

import { motion, type Variants } from 'framer-motion'
import { VirtualTour } from '@/types/tour'
import { virtualTours } from '@/data/tours'
import { FaMapMarkerAlt, FaEye, FaTag } from 'react-icons/fa'
import Image from 'next/image'

interface VirtualTourGalleryProps {
  onTourSelect: (tour: VirtualTour) => void
}

export default function VirtualTourGallery({ onTourSelect }: VirtualTourGalleryProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <div className="w-full">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center"
      >
        Explore Our Virtual Tours
      </motion.h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Click on any tour to experience immersive 360° panoramic views
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {virtualTours.map((tour) => (
          <motion.div
            key={tour.id}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl"
            onClick={() => onTourSelect(tour)}
          >
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden bg-gray-200">
              <Image
                src={tour.imageUrl}
                alt={tour.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* View Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <FaEye className="text-primary-600 text-2xl" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {tour.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {tour.description}
              </p>

              {/* Location */}
              {tour.location && (
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <FaMapMarkerAlt className="mr-2 text-primary-500" />
                  <span>{tour.location}</span>
                </div>
              )}

              {/* Tags */}
              {tour.tags && tour.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tour.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700"
                    >
                      <FaTag className="mr-1 text-xs" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

