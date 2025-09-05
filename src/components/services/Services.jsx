import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Brand Identity Design",
      description: "Create compelling brand identities that resonate with your target audience and stand out in the market.",
      image: "/assets/brand-identity.png",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Logo Design & Branding",
      description: "Craft memorable logos and comprehensive branding solutions that tell your unique story.",
      image: "/assets/logo-design.png", 
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Print Design",
      description: "Design stunning print materials including brochures, flyers, business cards, and marketing collateral.",
      image: "/assets/print-design.png",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Digital Design",
      description: "Create engaging digital designs for web, social media, and online marketing campaigns.",
      image: "/assets/digital-design.png",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Packaging Design",
      description: "Design innovative packaging solutions that protect your product and attract customers.",
      image: "/assets/packaging-design.png",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Illustration & Graphics",
      description: "Custom illustrations and graphic elements to enhance your brand's visual communication.",
      image: "/assets/illustration.png",
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

  return (
    <div className='services_section container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative'>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20"
        />
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
          className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-15"
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="text-center mb-12 sm:mb-16"
      >
        <motion.h1 
          variants={itemVariants}
          className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4 sm:mb-6'
        >
          Creative Services
        </motion.h1>
        <motion.div
          variants={itemVariants}
          className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 sm:mb-8"
        />
        <motion.p 
          variants={itemVariants}
          className='text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4'
        >
          Transform your vision into stunning visual experiences with our comprehensive design services
        </motion.p>
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className='grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      >
        {services.map((service, index) => (
          <Card key={service.id} service={service} index={index} />
        ))}
      </motion.div>
    </div>
  )
}

export default Services