import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical')

  const technicalSkills = [
    { name: "Adobe Photoshop", level: 95, icon: "🎨", color: "from-blue-500 to-blue-600" },
    { name: "Adobe Illustrator", level: 92, icon: "🖌️", color: "from-orange-500 to-orange-600" },
    { name: "Adobe InDesign", level: 88, icon: "📄", color: "from-pink-500 to-pink-600" },
    { name: "Figma", level: 85, icon: "🎯", color: "from-purple-500 to-purple-600" },
    { name: "Adobe After Effects", level: 78, icon: "🎬", color: "from-red-500 to-red-600" },
    { name: "Sketch", level: 82, icon: "💎", color: "from-yellow-500 to-yellow-600" },
    { name: "Canva", level: 90, icon: "✨", color: "from-green-500 to-green-600" },
    { name: "Blender", level: 70, icon: "🔮", color: "from-indigo-500 to-indigo-600" }
  ]

  const softSkills = [
    { name: "Creative Thinking", level: 95, icon: "💡", color: "from-purple-500 to-pink-500" },
    { name: "Communication", level: 90, icon: "💬", color: "from-blue-500 to-cyan-500" },
    { name: "Problem Solving", level: 88, icon: "🧩", color: "from-green-500 to-teal-500" },
    { name: "Time Management", level: 85, icon: "⏰", color: "from-orange-500 to-red-500" },
    { name: "Team Collaboration", level: 92, icon: "🤝", color: "from-indigo-500 to-purple-500" },
    { name: "Client Relations", level: 87, icon: "🎭", color: "from-pink-500 to-rose-500" },
    { name: "Adaptability", level: 89, icon: "🔄", color: "from-cyan-500 to-blue-500" },
    { name: "Attention to Detail", level: 93, icon: "🔍", color: "from-emerald-500 to-green-500" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const skillVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
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

  const SkillBar = ({ skill, index }) => (
    <motion.div
      variants={skillVariants}
      custom={skill.level}
      className="skill-item mb-6"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <motion.span 
            className="text-2xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
          >
            {skill.icon}
          </motion.span>
          <span className="font-semibold text-gray-800">{skill.name}</span>
        </div>
        <motion.span 
          className="text-sm font-bold text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      
      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          variants={progressVariants}
          custom={skill.level}
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
          style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
        />
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
          className="absolute top-0 left-0 h-full w-8 bg-white opacity-30 rounded-full"
          style={{ filter: 'blur(1px)' }}
        />
      </div>
    </motion.div>
  )

  return (
    <section className="skills-section py-20 px-6 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-6 h-6 bg-purple-300 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-16 w-4 h-4 bg-pink-300 rounded-full opacity-20"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={skillVariants}
            className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6"
          >
            My Skills
          </motion.h2>
          <motion.div
            variants={skillVariants}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"
          />
          <motion.p 
            variants={skillVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive blend of technical expertise and soft skills that enable me to deliver exceptional design solutions and collaborate effectively with clients and teams.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 p-2 rounded-full shadow-inner">
            <motion.button
              onClick={() => setActiveTab('technical')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'technical'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Technical Skills
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('soft')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ml-2 ${
                activeTab === 'soft'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Soft Skills
            </motion.button>
          </div>
        </motion.div>

        {/* Skills Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-6"
          >
            {(activeTab === 'technical' ? technicalSkills : softSkills)
              .slice(0, Math.ceil((activeTab === 'technical' ? technicalSkills : softSkills).length / 2))
              .map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-6"
          >
            {(activeTab === 'technical' ? technicalSkills : softSkills)
              .slice(Math.ceil((activeTab === 'technical' ? technicalSkills : softSkills).length / 2))
              .map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  index={index + Math.ceil((activeTab === 'technical' ? technicalSkills : softSkills).length / 2)} 
                />
              ))}
          </motion.div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
            <motion.h3 
              className="text-2xl font-bold text-gray-800 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              {activeTab === 'technical' ? 'Technical Expertise' : 'Professional Qualities'}
            </motion.h3>
            <motion.p 
              className="text-gray-600 leading-relaxed max-w-2xl mx-auto"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'technical' 
                ? "Proficient in industry-standard design tools and software, with continuous learning to stay updated with the latest design trends and technologies."
                : "Strong interpersonal and professional skills that enable effective collaboration, clear communication, and successful project delivery in diverse team environments."
              }
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
