import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedText } from '../ui/AnimatedText';
import { motion } from 'framer-motion';
import profileImage from './profile.png';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Main Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              <motion.div 
                className="text-secondary-400 font-mono text-sm tracking-wider uppercase"
                variants={itemVariants}
              >
                AI & Data Science Engineer
              </motion.div>
              
              <AnimatedText
                text="Sayand Krishna"
                className="text-5xl lg:text-7xl font-bold leading-tight"
                gradient="from-white via-secondary-200 to-accent-300"
              />
              
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed max-w-xl"
                variants={itemVariants}
              >
                B.Tech graduate in Artificial Intelligence and Data Science, passionate about developing 
                intelligent solutions using machine learning, computer vision, and NLP to solve real-world problems.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <a 
                href="#contact" 
                className="px-8 py-4 bg-gradient-to-r from-secondary-500 to-accent-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-secondary-500/25 hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-8 py-4 bg-dark-800/50 backdrop-blur-sm border border-dark-700/30 text-white font-semibold rounded-lg hover:bg-dark-800/70 hover:border-secondary-500/30 hover:scale-105 transition-all duration-300"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center space-x-6"
              variants={itemVariants}
            >
              <a href="https://github.com/sayandkrishna" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-800/50 backdrop-blur-sm border border-dark-700/30 rounded-lg text-gray-400 hover:text-secondary-400 hover:border-secondary-500/30 hover:bg-secondary-500/10 transition-all duration-300 group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://linkedin.com/in/sayandkrishna" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-800/50 backdrop-blur-sm border border-dark-700/30 rounded-lg text-gray-400 hover:text-secondary-400 hover:border-secondary-500/30 hover:bg-secondary-500/10 transition-all duration-300 group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="mailto:sayandkrishna242003@gmail.com" className="p-3 bg-dark-800/50 backdrop-blur-sm border border-dark-700/30 rounded-lg text-gray-400 hover:text-secondary-400 hover:border-secondary-500/30 hover:bg-secondary-500/10 transition-all duration-300 group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="p-3 bg-dark-800/50 backdrop-blur-sm border border-dark-700/30 rounded-lg text-gray-400 hover:text-secondary-400 hover:border-secondary-500/30 hover:bg-secondary-500/10 transition-all duration-300 group">
                <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Card */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <GlassCard className="p-8 max-w-md w-full">
              <motion.div 
                className="text-center space-y-6"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Profile Image Placeholder */}
                <div className="relative mx-auto">
                  <motion.div 
                    className="w-48 h-48 mx-auto bg-gradient-to-br from-secondary-500/20 to-accent-500/20 rounded-full flex items-center justify-center border border-secondary-500/30 backdrop-blur-sm overflow-hidden"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(99, 102, 241, 0.4)",
                        "0 0 0 20px rgba(99, 102, 241, 0)",
                        "0 0 0 0 rgba(99, 102, 241, 0.4)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    <motion.img
                      src={profileImage}
                      alt="Sayand Krishna"
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{ scale: 1.1 }}
                    />
                  </motion.div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-secondary-500/20 to-accent-500/20 rounded-full blur-xl animate-pulse-slow"></div>
                </div>

                <motion.div 
                  className="space-y-2"
                  variants={itemVariants}
                >
                  <h3 className="text-2xl font-bold text-white">AI & Data Science Engineer</h3>
                  <p className="text-secondary-400 font-mono text-sm">Kerala, India</p>
                  <p className="text-gray-400 text-sm">B.Tech Graduate • CGPA: 7.9/10</p>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-3 gap-4 text-center"
                  variants={itemVariants}
                >
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-secondary-400">6+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-accent-400">4+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Certifications</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary-400">AI/ML</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Specialist</div>
                  </div>
                </motion.div>
              </motion.div>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <button 
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-gray-400 hover:text-secondary-400 transition-colors duration-300 group"
          >
            <span className="text-sm font-mono tracking-wider uppercase">Scroll</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};