import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Card = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false)

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

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2, 
      rotate: 10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const backgroundVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      initial="initial"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      {/* Background gradient */}
      <motion.div
        variants={backgroundVariants}
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
      />
      
      {/* Card content */}
      <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 h-full shadow-lg group-hover:shadow-2xl transition-all duration-300">
        {/* Image */}
        <motion.div
          variants={iconVariants}
          className="mb-6 flex justify-center"
        >
          <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a gradient placeholder if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div 
              className={`w-full h-full bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white font-bold text-lg hidden`}
            >
              {service.title.split(' ').map(word => word[0]).join('')}
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h3 
          className={`text-2xl font-bold mb-4 text-center bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
          animate={{
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.2 }}
        >
          {service.title}
        </motion.h3>

        {/* Description */}
        <motion.p 
          className="text-gray-600 text-center leading-relaxed"
          animate={{
            y: isHovered ? -2 : 0
          }}
          transition={{ duration: 0.2 }}
        >
          {service.description}
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
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
        
        <motion.div
          className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
          animate={{
            scale: isHovered ? [1, 2, 1] : 1,
            opacity: isHovered ? [0.3, 0.8, 0.3] : 0.2
          }}
          transition={{
            duration: 3,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Hover effect border */}
        <motion.div
          className={`absolute inset-0 rounded-2xl border-2 border-gradient-to-r ${service.color} opacity-0 group-hover:opacity-50`}
          animate={{
            opacity: isHovered ? 0.3 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

export default Card