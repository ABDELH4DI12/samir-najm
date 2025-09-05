import React, { useState } from 'react'
import { motion } from 'framer-motion'

const WorkCard = ({ work, index, convertDriveLink }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1
      }
    }
  }

  const imageVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.4,
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

  const handlePreviewClick = (e) => {
    e.preventDefault()
    setShowPreview(true)
  }

  const handleViewProject = () => {
    window.open(work.driveLink, '_blank')
  }

  return (
    <>
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        initial="initial"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            variants={imageVariants}
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to gradient placeholder if image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 hidden items-center justify-center text-white font-bold text-2xl">
            {work.title.split(' ').map(word => word[0]).join('')}
          </div>
          
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
          >
            <div className="flex gap-4">
              <motion.button
                onClick={handlePreviewClick}
                className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Quick Preview
              </motion.button>
              <motion.button
                onClick={handleViewProject}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
              </motion.button>
            </div>
          </motion.div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold capitalize">
              {work.category}
            </span>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {work.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <motion.h3 
            className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300"
            animate={{
              x: isHovered ? 5 : 0
            }}
            transition={{ duration: 0.2 }}
          >
            {work.title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 text-sm mb-4 leading-relaxed"
            animate={{
              x: isHovered ? 5 : 0
            }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            {work.description}
          </motion.p>

          <motion.div 
            className="flex items-center justify-between"
            animate={{
              x: isHovered ? 5 : 0
            }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <span className="text-sm text-gray-500 font-medium">
              Client: {work.client}
            </span>
            <motion.div
              animate={{
                x: isHovered ? 5 : 0
              }}
              transition={{ duration: 0.2 }}
              className="text-purple-500 font-semibold text-sm"
            >
              View Details →
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            opacity: isHovered ? [0.5, 1, 0.5] : 0.3
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* PDF Preview Modal */}
      {showPreview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowPreview(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{work.title}</h3>
                <p className="text-gray-600">{work.client} • {work.year}</p>
              </div>
              <div className="flex gap-3">
                <motion.button
                  onClick={handleViewProject}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Open Full View
                </motion.button>
                <motion.button
                  onClick={() => setShowPreview(false)}
                  className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </div>

            {/* PDF Embed */}
            <div className="h-full p-6">
              <iframe
                src={convertDriveLink(work.driveLink)}
                className="w-full h-full rounded-lg border border-gray-200"
                title={work.title}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default WorkCard
