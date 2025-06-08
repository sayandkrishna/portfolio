import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { SectionTitle } from '../ui/SectionTitle';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

export const Skills: React.FC = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'Python', level: 90 },
        { name: 'R', level: 80 },
        { name: 'JavaScript', level: 70 },
        { name: 'C', level: 70 },
        { name: 'Java', level: 65 }
      ]
    },
    {
      category: 'AI & Machine Learning',
      items: [
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 85 },
        { name: 'Scikit-learn', level: 90 },
        { 
          name: 'OpenCV', 
          level: 95,
          certification: 'https://courses.opencv.org/certificates/275686be15474c3b9c7f5b8af882bcc4'
        },
        { 
          name: 'Machine Learning', 
          level: 85,
          certification: 'https://www.kaggle.com/learn/certification/sayandkrishna24/intro-to-machine-learning'
        }
      ]
    },
    {
      category: 'Web Development',
      items: [
        { name: 'HTML/CSS', level: 80 },
        { name: 'Tailwind CSS', level: 80},
        { name: 'Node.js', level: 75 },
        { name: 'React', level: 65 },
        { name: 'Next.js', level: 60 }
       
        
      ]
    },
   ,
    {
      category: 'Tools & Technologies',
      items: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 40 },
        { name: 'AWS', level: 35 },
        { name: 'MongoDB', level: 45 },
        { 
          name: 'Power BI', 
          level: 45,
          certification: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_gN2rWy7uX2GH45jg4_1721071256501_completion_certificate.pdf'
        }
      ]
    }
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section id="skills" className="py-20 px-6 bg-dark-900/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            title="Technical Skills"
            subtitle="Expertise in modern technologies and frameworks"
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <GlassCard className="p-6 hover:bg-dark-800/40 transition-all duration-300">
                <motion.h3 
                  className="text-xl font-bold text-white mb-6"
                  whileHover={{ x: 5 }}
                >
                  {skillGroup.category}
                </motion.h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      className="space-y-2"
                      variants={itemVariants}
                    >
                      <div className="flex justify-between items-center">
                        <motion.span 
                          className="text-gray-300 font-medium"
                          whileHover={{ x: 5 }}
                        >
                          {skill.name}
                        </motion.span>
                        <motion.span 
                          className="text-secondary-400"
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill.level}%
                        </motion.span>
                        {skill.certification && (
                          <a
                            href={skill.certification}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                          >
                            <FaCertificate className="text-sm" />
                            View Certificate
                          </a>
                        )}
                      </div>
                      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full"
                          variants={progressVariants}
                          custom={skill.level}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};