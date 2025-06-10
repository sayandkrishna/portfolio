import React from 'react';
import { Calendar, MapPin, ExternalLink, Award } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { SectionTitle } from '../ui/SectionTitle';
import { motion } from 'framer-motion';
import Certificates from './Certificates';

export const Experience: React.FC = () => {
  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence and Data Science',
      school: 'Vimal Jyothi Engineering College',
      location: 'Kerala, India',
      period: '2021 - 2025',
      cgpa: '7.9/10',
      description: 'Comprehensive program covering machine learning, deep learning, data science, and AI applications with hands-on project experience.',
      achievements: [
        'Strong foundation in AI/ML algorithms and data structures',
        'Hands-on experience with real-world AI projects',
        'Proficiency in multiple programming languages and frameworks',
        'Focus on practical applications of AI in healthcare and accessibility'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const certifications = [
    {
      title: 'Prompt Design in Vertex AI Skill Badge',
      issuer: 'Google Cloud',
      year: '2024',
      description: 'Demonstrated expertise in designing effective prompts for AI models using Google Cloud\'s Vertex AI platform.',
      skills: ['Vertex AI', 'Prompt Engineering', 'AI/ML', 'Google Cloud'],
      link: 'https://www.credly.com/badges/622841ff-e979-4f5a-9973-f63872d6da73/public_url'
    },
    
    {
      title: 'BCG Data Science Job Simulation',
      issuer: 'Forage',
      year: '2024',
      description: 'Completed comprehensive data science simulation covering business problem solving, data analysis, and machine learning model development.',
      skills: ['Data Analysis', 'Business Intelligence', 'Machine Learning', 'Problem Solving'],
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/BCG%20/Tcz8gTtprzAS4xSoK_BCG_gN2rWy7uX2GH45jg4_1720886973811_completion_certificate.pdf'
    },
    {
      title: 'PwC Switzerland Power BI Job Simulation',
      issuer: 'Forage',
      year: '2024',
      description: 'Gained expertise in business intelligence and data visualization using Power BI for enterprise-level analytics.',
      skills: ['Power BI', 'Data Visualization', 'Business Analytics', 'Dashboard Design'],
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_gN2rWy7uX2GH45jg4_1721071256501_completion_certificate.pdf'
    },
    {
      title: 'Intro to Machine Learning',
      issuer: 'Kaggle',
      year: '2024',
      description: 'Comprehensive introduction to machine learning concepts, algorithms, and practical implementation.',
      skills: ['Machine Learning', 'Python', 'Data Science', 'Model Evaluation'],
      link: 'https://www.kaggle.com/learn/certification/sayandkrishna24/intro-to-machine-learning'
    },
    {
      title: 'MATLAB Onramp',
      issuer: 'MathWorks',
      year: '2024',
      description: 'Fundamental MATLAB programming skills for technical computing and data analysis.',
      skills: ['MATLAB', 'Technical Computing', 'Data Analysis', 'Programming'],
      link: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=a4d7d9ea-4d88-4767-935a-73c1409c7a64'
    },
    {
      title: 'OpenCV Bootcamp',
      issuer: 'OpenCV University',
      year: '2024',
      description: 'Intensive training in computer vision and image processing using OpenCV library.',
      skills: ['Computer Vision', 'OpenCV', 'Image Processing', 'Python'],
      link: 'https://courses.opencv.org/certificates/275686be15474c3b9c7f5b8af882bcc4'
    },
    {
      title: 'TensorFlow Keras Bootcamp',
      issuer: 'OpenCV University',
      year: '2025',
      description: 'Intensive training in deep learning with TensorFlow and Keras.',
      skills: ['TensorFlow', 'Keras', 'Deep Learning', 'Python'],
      link: 'https://courses.opencv.org/certificates/51fb542d8191424dbe288f51bdaa18c6'
    }
  ];

  const publications = [
    {
      title: 'Designing a Deep Learning Tool for Disease Detection',
      journal: 'International Journal of Scientific Research in Engineering & Management (IJSREM)',
      volume: 'Volume 09',
      issue: 'Issue 04',
      date: 'April 2025',
      doi: '10.55041/IJSREM45680',
      author: 'Sayand Krishna',
      paperLink: 'https://ijsrem.com/download/designing-a-deep-learning-tool-for-disease-detection/',
      certificateLink: 'https://drive.google.com/file/d/1F2ay7MHG6tbR2b1cg2gX9ZACz-V8WAez/view?usp=drive_link',
      description: 'Published a research paper detailing the design and implementation of a deep learning tool for disease detection, including CNN architecture, dataset handling, preprocessing, and evaluation.',
      skills: ['Deep Learning', 'CNN', 'Disease Detection', 'Medical Imaging', 'TensorFlow', 'Research Writing']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and achievements
          </p>
        </motion.div>

        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Certifications */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl font-bold text-white flex items-center gap-3"
              variants={itemVariants}
            >
              <motion.div 
                className="w-8 h-8 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="w-5 h-5 text-white" />
              </motion.div>
              Certifications
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <GlassCard className="p-6 hover:bg-dark-800/40 transition-all duration-300 group">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <motion.h4 
                            className="text-lg font-bold text-white group-hover:text-secondary-400 transition-colors duration-300"
                            whileHover={{ x: 5 }}
                          >
                            {cert.title}
                          </motion.h4>
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                          >
                            <Award className="text-sm" />
                            View Certificate
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <span className="font-semibold">{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.year}</span>
                        </div>
                      </div>

                      <motion.p 
                        className="text-gray-300 text-sm leading-relaxed"
                        variants={itemVariants}
                      >
                        {cert.description}
                      </motion.p>

                      <motion.div 
                        className="flex flex-wrap gap-2"
                        variants={itemVariants}
                      >
                        {cert.skills.map((skill, index) => (
                          <motion.span
                            key={index}
                            className="px-3 py-1 bg-dark-800/50 text-secondary-400 text-sm rounded-full border border-secondary-500/30"
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Publications */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl font-bold text-white flex items-center gap-3"
              variants={itemVariants}
            >
              <motion.div 
                className="w-8 h-8 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </motion.div>
              Publications
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <GlassCard className="p-6 hover:bg-dark-800/40 transition-all duration-300 group">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <motion.h4 
                            className="text-lg font-bold text-white group-hover:text-secondary-400 transition-colors duration-300"
                            whileHover={{ x: 5 }}
                          >
                            {pub.title}
                          </motion.h4>
                          <div className="flex gap-3">
                            <a
                              href={pub.paperLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                            >
                              <ExternalLink className="text-sm" />
                              View Paper
                            </a>
                            <a
                              href={pub.certificateLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                            >
                              <Award className="text-sm" />
                              View Certificate
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <span className="font-semibold">{pub.journal}</span>
                          <span>•</span>
                          <span>{pub.date}</span>
                        </div>
                      </div>

                      <motion.p 
                        className="text-gray-300 text-sm leading-relaxed"
                        variants={itemVariants}
                      >
                        {pub.description}
                      </motion.p>

                      <motion.div 
                        className="flex flex-wrap gap-2"
                        variants={itemVariants}
                      >
                        {pub.skills.map((skill, index) => (
                          <motion.span
                            key={index}
                            className="px-3 py-1 bg-dark-800/50 text-secondary-400 text-sm rounded-full border border-secondary-500/30"
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Add Certificates component */}
        <Certificates />
      </div>
    </section>
  );
};