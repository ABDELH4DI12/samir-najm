import React, { useState } from 'react'
import { motion } from 'framer-motion'
import WorkCard from './WorkCard'

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Convert Google Drive share link to embeddable format
  const convertDriveLink = (shareUrl) => {
    const fileId = shareUrl.match(/\/d\/(.+?)\//)?.[1]
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : shareUrl
  }

  const workItems = [
    {
      id: 1,
      title: "Brand Identity Project",
      category: "branding",
      image: "/assets/work-1.jpg",
      driveLink: "https://drive.google.com/file/d/1law9FKKQwXX4-GF3rBW8WMYJBv6RtTFD/view?usp=drive_link",
      description: "Complete brand identity design including logo, business cards, and brand guidelines.",
      year: "2024",
      client: "Tech Startup"
    },
    {
      id: 2,
      title: "Marketing Campaign Design",
      category: "print",
      image: "/assets/work-2.jpg",
      driveLink: "https://drive.google.com/file/d/1law9FKKQwXX4-GF3rBW8WMYJBv6RtTFD/view?usp=drive_link",
      description: "Print marketing materials including brochures, flyers, and promotional posters.",
      year: "2024",
      client: "Local Business"
    },
    {
      id: 3,
      title: "Digital Illustration Series",
      category: "illustration",
      image: "/assets/work-3.jpg",
      driveLink: "https://drive.google.com/file/d/1law9FKKQwXX4-GF3rBW8WMYJBv6RtTFD/view?usp=drive_link",
      description: "Custom digital illustrations for web and mobile applications.",
      year: "2024",
      client: "Mobile App"
    },
    {
      id: 4,
      title: "Event Poster Collection",
      category: "poster",
      image: "/assets/work-4.jpg",
      driveLink: "https://drive.google.com/file/d/1law9FKKQwXX4-GF3rBW8WMYJBv6RtTFD/view?usp=drive_link",
      description: "Creative poster designs for music events and cultural festivals.",
      year: "2023",
      client: "Event Organizer"
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "digital",
      image: "/assets/work-5.jpg",
      driveLink: "https://drive.google.com/file/d/1law9FKKQwXX4-GF3rBW8WMYJBv6RtTFD/view?usp=drive_link",
      description: "Social media graphics and templates for Instagram and Facebook campaigns.",
      year: "2024",
      client: "Fashion Brand"
    },
    {
      id: 6,
      title: "Package Design Project",
      category: "packaging",
      image: "/assets/work-6.jpg",
      driveLink: "https://drive.google.com/file/d/1law9FKKQwXX4-GF3rBW8WMYJBv6RtTFD/view?usp=drive_link",
      description: "Innovative packaging design for consumer products with sustainable materials.",
      year: "2023",
      client: "Eco Brand"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Work', count: workItems.length },
    { id: 'branding', name: 'Branding', count: workItems.filter(item => item.category === 'branding').length },
    { id: 'print', name: 'Print Design', count: workItems.filter(item => item.category === 'print').length },
    { id: 'illustration', name: 'Illustration', count: workItems.filter(item => item.category === 'illustration').length },
    { id: 'poster', name: 'Posters', count: workItems.filter(item => item.category === 'poster').length },
    { id: 'digital', name: 'Digital', count: workItems.filter(item => item.category === 'digital').length },
    { id: 'packaging', name: 'Packaging', count: workItems.filter(item => item.category === 'packaging').length }
  ]

  const filteredWork = selectedCategory === 'all' 
    ? workItems 
    : workItems.filter(item => item.category === selectedCategory)

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

  const filterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="work-section py-20 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-10"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-10"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={titleVariants}
            className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6"
          >
            Latest Work
          </motion.h2>
          <motion.div
            variants={titleVariants}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"
          />
          <motion.p 
            variants={titleVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore my recent projects and creative solutions. Each piece represents a unique challenge solved through innovative design and strategic thinking.
          </motion.p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={filterVariants}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:text-gray-800 hover:shadow-md border border-gray-200'
              }`}
              whileHover={{ scale: selectedCategory === category.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
              <span className={`ml-2 text-sm ${
                selectedCategory === category.id ? 'text-white/80' : 'text-gray-400'
              }`}>
                ({category.count})
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Work Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredWork.map((work, index) => (
            <WorkCard 
              key={work.id}
              work={work}
              index={index}
              convertDriveLink={convertDriveLink}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredWork.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No work found</h3>
            <p className="text-gray-600">Try selecting a different category to see more projects.</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
            <motion.h3 
              className="text-3xl font-bold text-gray-800 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Like What You See?
            </motion.h3>
            <motion.p 
              className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              Ready to bring your vision to life? Let's collaborate and create something amazing together.
            </motion.p>
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Work
