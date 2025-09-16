import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('design')

  const skillCategories = {
    design: {
      title: 'Design Tools',
      skills: [
        { name: 'Photoshop', level: 75, color: 'from-blue-500 to-blue-600' },
        { name: 'Illustrator', level: 97, color: 'from-orange-500 to-orange-600' },
        { name: 'InDesign', level: 70, color: 'from-pink-500 to-pink-600' },
        { name: 'Alight motion', level: 50, color: 'from-purple-500 to-purple-600' },
        { name: 'Blender', level: 40, color: 'from-yellow-500 to-yellow-600' },
        { name: 'META', level: 90, color: 'from-indigo-500 to-indigo-600' }
      ] 
    },
    soft: {
      title: 'Soft Skills',
      skills: [
        { name: 'Communication efficace', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'Leadership', level: 85, color: 'from-purple-500 to-purple-600' },
        { name: 'Résolution de problème', level: 88, color: 'from-green-500 to-green-600' },
        { name: 'Organisation et rigueur', level: 92, color: 'from-orange-500 to-orange-600' },
        { name: 'Gestion du stress', level: 87, color: 'from-pink-500 to-pink-600' }
      ]
    },
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

  const skillVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    })
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  }

  return (
    <section className="skills-section py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full"
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="container mx-auto max-w-6xl relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"
          />
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my design capabilities and technical expertise developed over years of creative work.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Content */}
        <motion.div variants={itemVariants}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100"
            >
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {skillCategories[activeTab].title}
              </motion.h3>
              
              <div className="grid gap-6 sm:gap-8">
                {skillCategories[activeTab].skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    custom={index}
                    variants={skillVariants}
                    initial="hidden"
                    animate="visible"
                    className="skill-item"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-gray-800 text-sm sm:text-base">
                        {skill.name}
                      </span>
                      <motion.span 
                        className="text-gray-600 font-bold text-sm sm:text-base"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
                        <motion.div 
                          custom={skill.level}
                          variants={progressVariants}
                          initial="hidden"
                          animate="visible"
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                      </div>
                      
                      {/* Skill level indicator */}
                      <motion.div 
                        className="absolute top-0 h-2 sm:h-3 w-1 bg-white rounded-full shadow-md"
                        initial={{ left: '0%' }}
                        animate={{ left: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: index * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                        style={{ transform: 'translateX(-50%)' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
