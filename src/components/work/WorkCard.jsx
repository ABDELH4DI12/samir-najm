import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectModal from './ProjectModal'

const WorkCard = ({ work }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
        whileHover={!isMobile ? "hover" : undefined}
        initial="initial"
        className="group relative bg-white rounded-2xl overflow-hidden shadow-xl md:hover:shadow-2xl transition-shadow duration-300 md:cursor-pointer"
        onClick={!isMobile ? openModal : undefined}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <motion.img 
            src={work.coverImage || work.image} 
            alt={work.title}
            className="w-full h-48 sm:h-56 object-contain"
            variants={imageVariants}
          />
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-t ${work.color} opacity-20 hidden md:block`}
            variants={overlayVariants}
          />
          
          {/* Overlay content - only on desktop */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center hidden md:flex"
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
              className="text-lg sm:text-xl font-bold text-gray-800 md:group-hover:text-purple-600 transition-colors duration-200"
              whileHover={!isMobile ? { x: 5 } : undefined}
              transition={{ duration: 0.2 }}
            >
              {work.title}
            </motion.h3>
            <motion.span 
              className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${work.color} text-white`}
              whileHover={!isMobile ? { scale: 1.1 } : undefined}
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
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              {work.tags.map((tag, index) => (
                <motion.span 
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium md:hover:bg-gray-200 transition-colors duration-200"
                  whileHover={!isMobile ? { scale: 1.05, y: -2 } : undefined}
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

          {/* Mobile View Details Button */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation()
              openModal()
            }}
            className={`md:hidden w-full bg-gradient-to-r ${work.color} text-white px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-md`}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
View Details
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal 
        project={work}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}

export default WorkCard
