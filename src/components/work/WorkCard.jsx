import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WorkCard = ({ work }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleViewProject = () => {
    if (work.link) {
      window.open(work.link, '_blank')
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  }

  return (
    <>
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        initial="initial"
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        onClick={openModal}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <motion.img 
            src={work.image} 
            alt={work.title}
            className="w-full h-48 sm:h-56 object-cover"
            variants={imageVariants}
          />
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-t ${work.color} opacity-20`}
            variants={overlayVariants}
          />
          
          {/* Overlay content */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            variants={overlayVariants}
          >
            <motion.div 
              className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-gray-800 font-medium text-sm">View Details</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <motion.div 
          className="p-4 sm:p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="flex items-start justify-between mb-3">
            <motion.h3 
              className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-200"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {work.title}
            </motion.h3>
            <motion.span 
              className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${work.color} text-white`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {work.category}
            </motion.span>
          </div>
          
          <motion.p 
            className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {work.description}
          </motion.p>
          
          {/* Tags */}
          {work.tags && work.tags.length > 0 && (
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              {work.tags.map((tag, index) => (
                <motion.span 
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <motion.div 
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative">
                <motion.img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-64 sm:h-80 object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Modal Content */}
              <motion.div 
                className="p-6 sm:p-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.h2 
                    className="text-2xl sm:text-3xl font-bold text-gray-800"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    {work.title}
                  </motion.h2>
                  <motion.span 
                    className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${work.color} text-white`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.3, type: "spring" }}
                  >
                    {work.category}
                  </motion.span>
                </div>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  {work.description}
                </motion.p>
                
                {/* Tags */}
                {work.tags && work.tags.length > 0 && (
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    {work.tags.map((tag, index) => (
                      <motion.span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
                
                {/* Action Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <motion.button 
                    onClick={handleViewProject}
                    className={`flex-1 bg-gradient-to-r ${work.color} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.button>
                  <motion.button 
                    onClick={closeModal}
                    className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default WorkCard
