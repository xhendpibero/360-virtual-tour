'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaBriefcase, FaGraduationCap, FaCertificate, FaCode, FaMobileAlt, FaPalette } from 'react-icons/fa'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 overflow-hidden"
        >
          {/* Modal Content - Full Screen */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
              {/* Header - Fixed at top */}
              <div className="sticky top-0 z-40 bg-gradient-to-r from-primary-600 to-primary-800 p-6 sm:p-8 text-white border-b border-primary-700 shadow-lg">
                <div className="max-w-7xl mx-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold">
                        DA
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Dendy Sapto Adi</h2>
                        <p className="text-primary-100 text-base sm:text-lg">Senior Frontend Engineer</p>
                        <p className="text-primary-200 text-xs sm:text-sm mt-1">7+ Years of Experience in Web & Mobile Development</p>
                      </div>
                    </div>
                    <button
                      onClick={onClose}
                      className="bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition-all duration-200 hover:scale-110 flex-shrink-0"
                      aria-label="Close modal"
                    >
                      <FaTimes className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content - Scrollable */}
              <div className="max-w-7xl mx-auto p-6 sm:p-8">
                {/* Summary */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <FaBriefcase className="mr-2 text-primary-400" />
                    Summary
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    With over 7 years of experience, I specialize in frameworks like NextJS, Angular, and React. 
                    I am passionate about web and mobile design and thrive on improving my skills and solving complex problems. 
                    As a strong communicator, I work effectively with clients and team members, and my fluency in English 
                    ensures clear and effective communication.
                  </p>
                </motion.div>

                {/* Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <FaCode className="mr-2 text-primary-400" />
                    Skills
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h4 className="text-primary-400 font-semibold mb-2 flex items-center">
                        <FaCode className="mr-2" />
                        Web Frontend
                      </h4>
                      <p className="text-gray-300 text-sm">Angular, React, Nuxt, NextJS, SolidJS</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h4 className="text-primary-400 font-semibold mb-2 flex items-center">
                        <FaMobileAlt className="mr-2" />
                        Mobile Frontend
                      </h4>
                      <p className="text-gray-300 text-sm">React Native, Ionic, Flutter</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h4 className="text-primary-400 font-semibold mb-2 flex items-center">
                        <FaPalette className="mr-2" />
                        UI/UX
                      </h4>
                      <p className="text-gray-300 text-sm">Figma, Framer, Web Flow, Adobe XD</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h4 className="text-primary-400 font-semibold mb-2">Languages</h4>
                      <p className="text-gray-300 text-sm">Javascript, Python, PHP, Scala, VB/C#.Net</p>
                    </div>
                  </div>
                </motion.div>

                {/* Current Position */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <FaBriefcase className="mr-2 text-primary-400" />
                    Current Position
                  </h3>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="text-primary-400 font-semibold text-lg mb-1">Product Engineer</h4>
                    <p className="text-white font-medium mb-2">Torre.ai</p>
                    <p className="text-gray-400 text-sm mb-3">Jun 2025 – Present | Remote, California, USA</p>
                    <p className="text-gray-300 text-sm">
                      Developing scalable web applications using Nuxt4, Scala, and Redis. 
                      Focusing on performance optimization, SEO, and user experience improvements.
                    </p>
                  </div>
                </motion.div>

                {/* Education & Certifications */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <FaGraduationCap className="mr-2 text-primary-400" />
                    Education & Certifications
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <p className="text-white font-semibold">SMKN 24 Jakarta</p>
                      <p className="text-gray-400 text-sm">Diploma of Software Engineers (2016-2019)</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <p className="text-white font-semibold">Womanium Quantum Computing</p>
                      <p className="text-gray-400 text-sm">Diploma of Quantum Computing (2023-2024)</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <div className="flex items-center mb-2">
                        <FaCertificate className="text-primary-400 mr-2" />
                        <p className="text-white font-semibold">Quantum Computing Certifications</p>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Classiq, Pennylane, QBronze, QCobalt, QMercury, QZinc, QNickel
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <FaEnvelope className="mr-2 text-primary-400" />
                    Get in Touch
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a
                      href="mailto:dendysaptoadi160@gmail.com"
                      className="flex items-center space-x-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg p-4 border border-gray-700 transition-all duration-200 hover:scale-105"
                    >
                      <FaEnvelope className="text-primary-400 text-xl" />
                      <div>
                        <p className="text-white font-semibold">Email</p>
                        <p className="text-gray-400 text-sm">dendysaptoadi160@gmail.com</p>
                      </div>
                    </a>
                    <a
                      href="tel:+6289602589896"
                      className="flex items-center space-x-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg p-4 border border-gray-700 transition-all duration-200 hover:scale-105"
                    >
                      <FaPhone className="text-primary-400 text-xl" />
                      <div>
                        <p className="text-white font-semibold">Phone</p>
                        <p className="text-gray-400 text-sm">+62 896-0258-9896</p>
                      </div>
                    </a>
                    <a
                      href="https://linkedin.com/in/dendysaptoadi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg p-4 border border-gray-700 transition-all duration-200 hover:scale-105"
                    >
                      <FaLinkedin className="text-primary-400 text-xl" />
                      <div>
                        <p className="text-white font-semibold">LinkedIn</p>
                        <p className="text-gray-400 text-sm">Connect with me</p>
                      </div>
                    </a>
                    <a
                      href="https://github.com/xhendpibero"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg p-4 border border-gray-700 transition-all duration-200 hover:scale-105"
                    >
                      <FaGithub className="text-primary-400 text-xl" />
                      <div>
                        <p className="text-white font-semibold">GitHub</p>
                        <p className="text-gray-400 text-sm">View my projects</p>
                      </div>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

