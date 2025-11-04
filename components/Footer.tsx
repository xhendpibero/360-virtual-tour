'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaPhone, FaInfoCircle } from 'react-icons/fa'
import AboutModal from './AboutModal'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold mb-4 text-primary-400"
            >
              360° Virtual Tour
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 leading-relaxed"
            >
              Explore stunning panoramic views with immersive 360° interactive experiences. 
              Built with Next.js and Photo Sphere Viewer.
            </motion.p>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold mb-4 text-primary-400"
            >
              Quick Links
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2 text-gray-400"
            >
              <li>
                <a 
                  href="#top" 
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsAboutModalOpen(true)}
                  className="hover:text-primary-400 transition-colors duration-200 text-left"
                >
                  About Creator
                </button>
              </li>
              <li>
                <a 
                  href="https://github.com/xhendpibero" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  GitHub Projects
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/dendysaptoadi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  Connect on LinkedIn
                </a>
              </li>
            </motion.ul>
          </div>

          {/* Contact Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold mb-4 text-primary-400"
            >
              Connect
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="flex space-x-4">
                <a
                  href="https://github.com/xhendpibero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="GitHub"
                  title="View GitHub Profile"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://linkedin.com/in/dendysaptoadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="LinkedIn"
                  title="Connect on LinkedIn"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="mailto:dendysaptoadi160@gmail.com"
                  className="w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Email"
                  title="Send Email"
                >
                  <FaEnvelope className="text-lg" />
                </a>
                <a
                  href="tel:+6289602589896"
                  className="w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Phone"
                  title="Call Now"
                >
                  <FaPhone className="text-lg" />
                </a>
              </div>
              <button
                onClick={() => setIsAboutModalOpen(true)}
                className="w-full flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <FaInfoCircle />
                <span>Learn More About Me</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-gray-400 text-sm">
            © {currentYear} 360° Virtual Tour. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Created with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>by</span>
            <button
              onClick={() => setIsAboutModalOpen(true)}
              className="font-semibold text-primary-400 hover:text-primary-300 transition-colors cursor-pointer hover:underline"
            >
              Dendy Sapto Adi
            </button>
          </div>

          <div className="text-gray-400 text-sm">
            Built with Next.js & React
          </div>
        </motion.div>
      </div>

      {/* About Modal */}
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </footer>
  )
}

