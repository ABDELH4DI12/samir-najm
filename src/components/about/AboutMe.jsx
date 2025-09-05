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
          <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative mx-auto lg:mx-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-20" />
              <img 
                src="/assets/Logo.jpeg" 
                alt="Samir - Graphic Designer" 
                className="w-full h-full object-cover"
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
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 order-1 lg:order-2">
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
                Hello! I'm <span className="font-bold text-purple-600">Samir</span>, a passionate graphic designer with over 5 years of experience in creating visual stories that captivate and inspire. My journey began with a simple love for colors and shapes, which has evolved into a professional career dedicated to bringing brands to life.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg text-gray-700 leading-relaxed px-4 lg:px-0"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                I believe that great design is not just about making things look beautiful—it's about creating meaningful connections between brands and their audiences. Every project I undertake is an opportunity to solve problems creatively and deliver results that exceed expectations.
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
                  5+
                </motion.div>
                <div className="text-gray-600 text-xs sm:text-sm">Years Experience</div>
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
                  200+
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
                  50+
                </motion.div>
                <div className="text-gray-600 text-xs sm:text-sm">Happy Clients</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe
