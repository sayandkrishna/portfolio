import React from 'react';
import { Brain, Database, Code, Users, Trophy, Target } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { SectionTitle } from '../ui/SectionTitle';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Expertise in deep learning, computer vision, and NLP with hands-on project experience.',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Proficient in data analysis, feature engineering, and building predictive models.',
    },
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Strong programming skills in Python, R, SQL with modern ML frameworks.',
    },
    {
      icon: Users,
      title: 'Problem Solving',
      description: 'Passionate about applying AI solutions to solve real-world healthcare and accessibility challenges.',
    },
    {
      icon: Trophy,
      title: 'Academic Excellence',
      description: 'B.Tech graduate with strong academic foundation and practical project experience.',
    },
    {
      icon: Target,
      title: 'Innovation Focus',
      description: 'Committed to developing intelligent solutions that make a meaningful impact.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            title="About Me"
            subtitle="Passionate AI & Data Science engineer dedicated to creating intelligent solutions"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white">
                Building the Future with Artificial Intelligence
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <motion.p variants={itemVariants}>
                  I'm a B.Tech graduate in Artificial Intelligence and Data Science from Vimal Jyothi Engineering College 
                  with a strong foundation in machine learning, computer vision, and chatbot development. My journey in AI 
                  began with curiosity about how intelligent systems can solve complex real-world problems.
                </motion.p>
                
                <motion.p variants={itemVariants}>
                  Through academic and self-driven projects, I've gained hands-on experience in developing AI solutions 
                  for healthcare, accessibility, and information retrieval. I specialize in deep learning, natural language 
                  processing, and computer vision, with a keen interest in applying these technologies to create meaningful impact.
                </motion.p>
                
                <motion.p variants={itemVariants}>
                  My goal is to leverage my academic knowledge and practical experience to develop intelligent solutions 
                  that address real-world challenges, particularly in healthcare and human-computer interaction domains.
                </motion.p>
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
              variants={containerVariants}
            >
              {[
                { label: 'Projects Completed', value: '6+', color: 'text-secondary-400' },
                { label: 'Technologies Mastered', value: '15+', color: 'text-accent-400' },
                { label: 'CGPA', value: '7.9', color: 'text-primary-400' },
                { label: 'Certifications', value: '4+', color: 'text-green-400' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-dark-800/30 backdrop-blur-sm rounded-lg border border-dark-700/30"
                >
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <GlassCard className="p-6 hover:bg-dark-800/40 transition-all duration-300 group">
                  <div className="space-y-4">
                    <motion.div 
                      className="p-3 bg-gradient-to-r from-secondary-500/20 to-accent-500/20 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <feature.icon className="w-6 h-6 text-secondary-400" />
                    </motion.div>
                    
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};