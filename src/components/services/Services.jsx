import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Brand Identity Design",
      description: "Crafting unique logos and visual identities that communicate your brand's story effectively and memorably.",
      image: "/assets/brand-identity.png",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Print Design",
      description: "Creating stunning brochures, flyers, business cards, and marketing materials that make lasting impressions.",
      image: "/assets/print-design.png",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Digital Illustrations",
      description: "Custom digital artwork and illustrations that bring your concepts to life with artistic flair.",
      image: "/assets/digital-illustration.png",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Poster Design",
      description: "Eye-catching posters for events, promotions, and campaigns that demand attention and drive engagement.",
      image: "/assets/poster-design.png",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Social Media Graphics",
      description: "Engaging visual content for social platforms that boosts your online presence and brand recognition.",
      image: "/assets/social-media.png",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Package Design",
      description: "Innovative packaging solutions that protect your product while creating an unforgettable unboxing experience.",
      image: "/assets/package-design.png",
      color: "from-pink-500 to-rose-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className='services_section container mx-auto px-6 py-20'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.h1 
          variants={titleVariants}
          className='text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6'
        > 
          Creative Services 
        </motion.h1>
        <motion.div
          variants={titleVariants}
          className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"
        />
        <motion.p 
          variants={titleVariants}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        > 
          Transforming ideas into visual masterpieces. I offer comprehensive design solutions that elevate your brand and captivate your audience through innovative creativity and strategic thinking.
        </motion.p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className='grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      >
        {services.map((service, index) => (
          <Card 
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </motion.div>

      {/* Creative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 w-6 h-6 bg-pink-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-40 left-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-20"
        />
      </div>
    </div>
  )
}

export default Services