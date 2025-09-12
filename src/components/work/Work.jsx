import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WorkCard from './WorkCard'
import { loadProjectsData, getCategoriesFromProjects } from '../../utils/projectLoader'

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  // Load dynamic project data from assets folder
  const workItems = loadProjectsData()
  const categories = getCategoriesFromProjects(workItems)

  const filteredWork = activeCategory === 'all' 
    ? workItems 
    : workItems.filter(item => item.category === activeCategory)

  const handlePrevCard = () => {
    setCurrentCardIndex((prev) => 
      prev === 0 ? filteredWork.length - 1 : prev - 1
    )
  }

  const handleNextCard = () => {
    setCurrentCardIndex((prev) => 
      prev === filteredWork.length - 1 ? 0 : prev + 1
    )
  }

  // Reset card index when category changes
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    setCurrentCardIndex(0)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
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

  return (
    <section className="work-section py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-200 to-orange-200 rounded-full opacity-15"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4 sm:mb-6 px-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
My Latest Work
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 sm:mb-8"
            />
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            >
Explore my portfolio of creative projects spanning branding, web design, mobile interfaces, and more. Each project represents a unique challenge and creative solution.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-purple-300'
                }`}
              >
{category.name}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Work Grid */}
          <div className="relative">
            {/* Navigation buttons removed as per user request */}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={gridVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4"
              >
                {filteredWork.map((work, index) => (
                  <motion.div
                    key={work.id}
                    variants={cardVariants}
                    custom={index}
                    layout
                    className={`${index === currentCardIndex ? 'ring-purple-500 ring-opacity-50' : ''}`}
                  >
                    <WorkCard work={work} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16 sm:mt-20"
          >
            <motion.div 
              className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 sm:p-10 shadow-lg max-w-2xl mx-auto"
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
Like What You See?
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-6 leading-relaxed"
                variants={itemVariants}
              >
I'm always excited to work on new projects and bring creative ideas to life. Let's discuss how we can collaborate on your next design challenge.
              </motion.p>
              <motion.button 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
              >
Start a Project
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Work
