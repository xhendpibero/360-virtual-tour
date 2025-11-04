"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VirtualTourGallery from "@/components/VirtualTourGallery";
import VirtualTourModal from "@/components/VirtualTourModal";
import Footer from "@/components/Footer";
import { VirtualTour } from "@/types/tour";
import dynamic from "next/dynamic";

// Lazy-load the panorama viewer for SSR safety
const PanoramaViewer = dynamic(() => import("@/components/PanoramaViewer"), {
  ssr: false,
});

export default function Home() {
  const [selectedTour, setSelectedTour] = useState<VirtualTour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTourSelect = (tour: VirtualTour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
    document.body.style.overflow = "auto";
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden text-white"
      >
        {/* 360° Hero Background */}
        <div className="absolute inset-0">
          <PanoramaViewer
            imageUrl={"/images-360/VISTA at night (Pano-VT version).jpg"}
            hideNavbar
            autoRotate
            autoRotateSpeedRpm={0.3}
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 content-center"
          style={{ height: 800 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4"
          >
            360° Interactive Virtual Tour
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl text-center text-primary-100 max-w-3xl mx-auto"
          >
            Explore stunning panoramic views with immersive 360° interactive
            experiences
          </motion.p>
        </div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <VirtualTourGallery onTourSelect={handleTourSelect} />
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedTour && (
          <VirtualTourModal tour={selectedTour} onClose={handleCloseModal} />
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </main>
  );
}
