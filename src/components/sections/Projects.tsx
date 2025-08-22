import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Brain, Eye, Settings as Lungs, Video, MessageCircle, Search, ArrowRight } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { SectionTitle } from '../ui/SectionTitle';
import { motion } from 'framer-motion';
import { ConnectDBDemo } from './ConnectDBDemo';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isConnectDBDemoOpen, setIsConnectDBDemoOpen] = useState(false);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'computer-vision', label: 'Computer Vision' },
    { id: 'nlp', label: 'NLP & Chatbots' },
    { id: 'healthcare', label: 'Healthcare AI' },
    { id: 'accessibility', label: 'Accessibility' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Volume and Brightness Control Using Hand Gestures',
      description: 'Developed a real-time system using OpenCV and MediaPipe to recognize hand gestures for touchless volume and brightness control, improving accessibility and user interaction.',
      image: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
      category: 'computer-vision',
      featured: false,
      demoUrl: '#',
      githubUrl: 'https://github.com/sayandkrishna',
      highlights: ['Real-time gesture recognition', 'Touchless interaction', 'Accessibility focused', 'Computer vision'],
      icon: Eye
    },
    {
      id: 2,
      title: "Alzheimer's Detection Using MRI Images",
      description: 'Built a CNN-based model using TensorFlow to detect early signs of Alzheimer\'s from MRI scans. Focused on preprocessing and hyperparameter tuning to achieve high classification accuracy.',
      image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Medical Imaging'],
      category: 'healthcare',
      featured: false,
      demoUrl: '#',
      githubUrl: 'https://github.com/sayandkrishna',
      highlights: ['Deep learning', 'Medical diagnosis', 'Image preprocessing', 'High accuracy'],
      icon: Brain
    },
    {
      id: 3,
      title: 'Lung Cancer Detection Using CT Scans',
      description: 'Designed a deep learning pipeline for CT image preprocessing and segmentation to detect lung cancer. Employed convolutional neural networks for accurate classification.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'Image Segmentation', 'CNN'],
      category: 'healthcare',
      featured: false,
      demoUrl: '#',
      githubUrl: 'https://github.com/sayandkrishna',
      highlights: ['Medical imaging', 'Cancer detection', 'Image segmentation', 'Deep learning'],
      icon: Lungs
    },
    {
      id: 4,
      title: 'YouTube Video Summarizer',
      description: 'Created a summarization tool using TextRank and BERT-based NLP models to extract and condense video transcripts. Deployed using Streamlit to enhance user engagement.',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'BERT', 'TextRank', 'Streamlit', 'NLP'],
      category: 'nlp',
      featured: false,
      demoUrl: '#',
      githubUrl: 'https://github.com/sayandkrishna',
      highlights: ['Text summarization', 'BERT integration', 'Web deployment', 'User-friendly interface'],
      icon: Video
    },
    {
      id: 5,
      title: 'Medical Information Chatbot',
      description: 'Implemented a Flask-based chatbot that interprets medication-related queries using natural language processing and a structured medical database.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Flask', 'NLP', 'Medical Database'],
      category: 'nlp',
      featured: false,
      demoUrl: '#',
      githubUrl: 'https://github.com/sayandkrishna',
      highlights: ['Healthcare chatbot', 'NLP processing', 'Database integration', 'Flask deployment'],
      icon: MessageCircle
    },
    {
      id: 6,
      title: 'Disease Query Chatbot with Semantic Search',
      description: 'Engineered an LLM-powered chatbot utilizing vector embeddings and LangChain for retrieval-augmented generation. Delivered semantically relevant answers to health-related questions.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'LangChain', 'Vector Embeddings', 'LLM', 'RAG'],
      category: 'nlp',
      featured: false,
      demoUrl: '#',
      githubUrl: 'https://github.com/sayandkrishna',
      highlights: ['LLM integration', 'Semantic search', 'Vector embeddings', 'Healthcare focus'],
      icon: Search
    },
    {
      id: 7,
      title: 'ConnectDB – Natural Language to SQL API',
      description: 'Engineered a production-grade API with FastAPI that translates natural language into executable SQL. Uses a Redis-backed semantic cache to minimize expensive LLM calls; falls back to LLM for SQL generation when no similar query is found. Supports conversational context across multiple databases and returns results in a clean tabular format.',
      image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['FastAPI', 'Redis', 'PostgreSQL/MySQL', 'LLM', 'Semantic Search'],
      category: 'nlp',
      featured: true,
      demoUrl: '#',
      githubUrl: 'https://github.com/sayandkrishna',
      highlights: ['Redis semantic cache', 'LLM-to-SQL generation', 'Conversational context', 'Multi-DB support'],
      icon: Search
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

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

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-6 bg-dark-900/20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            title="Featured Projects"
            subtitle="Showcasing my best work and technical expertise"
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <GlassCard className="overflow-hidden group">
                <motion.div 
                  className="relative h-48 overflow-hidden"
                  variants={imageVariants}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <div className="p-6 space-y-4">
                  <motion.h3 
                    className="text-xl font-bold text-white group-hover:text-secondary-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p 
                    className="text-gray-300 text-sm leading-relaxed"
                    variants={itemVariants}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={itemVariants}
                  >
                    {project.highlights.map((highlight, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 bg-dark-800/50 text-secondary-400 text-sm rounded-full border border-secondary-500/30"
                        whileHover={{ scale: 1.05 }}
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-4 pt-4"
                    variants={itemVariants}
                  >
                    {project.id === 7 ? (
                      <motion.button
                        onClick={() => setIsConnectDBDemoOpen(true)}
                        className="flex items-center gap-2 text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </motion.button>
                    ) : (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </motion.a>
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/sayandkrishna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary-500 to-accent-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-secondary-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* All Projects */}
        <div className="space-y-8 mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg flex items-center justify-center">
                <Filter className="w-5 h-5 text-white" />
              </div>
              All Projects
            </h3>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-secondary-500 to-accent-500 text-white shadow-lg shadow-secondary-500/25'
                      : 'bg-dark-800/30 text-gray-400 hover:text-secondary-400 hover:bg-dark-700/40 border border-dark-700/30 hover:border-secondary-500/30'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {filteredProjects.map((project) => (
              <GlassCard key={project.id} className="overflow-hidden group hover:bg-dark-800/40 transition-all duration-500">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 p-2 bg-dark-900/80 backdrop-blur-sm rounded-lg">
                    <project.icon className="w-5 h-5 text-secondary-400" />
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-secondary-400 transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-dark-700/50 text-gray-400 text-xs rounded border border-dark-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    {project.id === 7 ? (
                      <button 
                        onClick={() => setIsConnectDBDemoOpen(true)}
                        className="flex items-center gap-2 flex-1 justify-center px-4 py-2 bg-gradient-to-r from-secondary-500 to-accent-500 text-white rounded-lg hover:shadow-lg hover:shadow-secondary-500/25 transition-all duration-300 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View
                      </button>
                    ) : (
                      <a 
                        href={project.demoUrl}
                        className="flex items-center gap-2 flex-1 justify-center px-4 py-2 bg-gradient-to-r from-secondary-500 to-accent-500 text-white rounded-lg hover:shadow-lg hover:shadow-secondary-500/25 transition-all duration-300 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View
                      </a>
                    )}
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 border border-secondary-500/30 text-secondary-400 rounded-lg hover:bg-secondary-500/10 hover:border-secondary-400 transition-all duration-300 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
      {isConnectDBDemoOpen && (
        <ConnectDBDemo onClose={() => setIsConnectDBDemoOpen(false)} />
      )}
    </section>
  );
};