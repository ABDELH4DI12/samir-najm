import React from 'react'
import { motion } from 'framer-motion'

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="about-me-section py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-15"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          {/* Left side - Image and decorative elements */}
          <motion.div variants={itemVariants} className="relative order-1 lg:order-1">
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative mx-auto lg:mx-0 w-72 h-72 sm:w-96 sm:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-20" />
              <img 
                src="/assets/Samir.jpg" 
                alt="Samir - Graphic Designer" 
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 ring-4 ring-white ring-opacity-50 rounded-full" />
            </motion.div>
            
            {/* Floating design elements around image */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg"
            >
              🎨
            </motion.div>
            
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 rounded-full shadow-lg"
            >
              ✨
            </motion.div>
          </motion.div>

          {/* Right side - About content */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 order-2 lg:order-2">
            <motion.div variants={itemVariants}>
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-3 sm:mb-4 text-center lg:text-left"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                About Me
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-6 sm:mb-8 mx-auto lg:mx-0"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 text-center lg:text-left">
              <motion.p 
                className="text-base sm:text-lg text-gray-700 leading-relaxed px-4 lg:px-0"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Creative and rigorous graphic designer, graduated from <span className="font-bold text-purple-600">ISAG (Institut Supérieur des Arts Graphiques)</span>, a recognized professional training center. With expert mastery of the Adobe suite (Photoshop, Illustrator, InDesign), I am immediately operational to translate your needs into impactful visual concepts.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg text-gray-700 leading-relaxed px-4 lg:px-0"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                My analytical skills, responsiveness, and solution-oriented approach allow me to quickly integrate into any project requiring consistency, creativity, and efficiency. I am determined to bring concrete added value to your team.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg text-gray-700 leading-relaxed px-4 lg:px-0"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                When I'm not designing, you'll find me exploring new art galleries, experimenting with photography, or sketching ideas in my favorite coffee shop. I'm always seeking inspiration from the world around me to bring fresh perspectives to my work.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8"
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  6
                </motion.div>
                <div className="text-gray-600 text-xs sm:text-sm">Months Experience</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  35+
                </motion.div>
                <div className="text-gray-600 text-xs sm:text-sm">Projects Completed</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  15+
                </motion.div>
                <div className="text-gray-600 text-xs sm:text-sm">Happy Clients</div>
              </motion.div>
            </motion.div>

            {/* Download CV Button */}
            <div className="pt-6 sm:pt-8 text-center lg:text-left">
              <motion.a
                href="/assets/CV.pdf"
                download="Samir_CV.pdf"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe
