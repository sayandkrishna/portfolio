import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Certificate type
interface Certificate {
  name: string;
  image: string;
  link: string;
  description: string;
  skills: string[];
  issuer: string;
  year: string;
}

const certificates: Certificate[] = [
  {
    name: 'Prompt Design in Vertex AI',
    image: '/certificates/prompt-design-in-vertex-ai-skill-badge (2).png',
    link: 'https://www.credly.com/badges/622841ff-e979-4f5a-9973-f63872d6da73/public_url',
    description: 'Demonstrated expertise in designing effective prompts for AI models using Google Cloud\'s Vertex AI platform.',
    skills: ['Vertex AI', 'Prompt Engineering', 'AI/ML', 'Google Cloud'],
    issuer: 'Google Cloud',
    year: '2024',
  },
  {
    name: 'IJSREM Certificate',
    image: '/certificates/e-_Certificate_IJSREM_Sayand_Krishna[1].png',
    link: 'https://ijsrem.com/download/designing-a-deep-learning-tool-for-disease-detection/',
    description: 'International Journal of Scientific Research and Engineering Management publication certificate.',
    skills: ['Research', 'Publication'],
    issuer: 'IJSREM',
    year: '2024',
  },
  {
    name: 'BCG Data Science',
    image: '/certificates/bcgx.png',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/BCG%20/Tcz8gTtprzAS4xSoK_BCG_gN2rWy7uX2GH45jg4_1720886973811_completion_certificate.pdf',
    description: 'Completed comprehensive data science simulation covering business problem solving, data analysis, and machine learning model development.',
    skills: ['Data Analysis', 'Business Intelligence', 'Machine Learning', 'Problem Solving'],
    issuer: 'Forage',
    year: '2024',
  },
  {
    name: 'PwC Power BI',
    image: '/certificates/pwc.png',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_gN2rWy7uX2GH45jg4_1721071256501_completion_certificate.pdf',
    description: 'Gained expertise in business intelligence and data visualization using Power BI for enterprise-level analytics.',
    skills: ['Power BI', 'Data Visualization', 'Business Analytics', 'Dashboard Design'],
    issuer: 'Forage',
    year: '2024',
  },
  {
    name: 'Kaggle ML',
    image: '/certificates/kaggle.png',
    link: 'https://www.kaggle.com/learn/certification/sayandkrishna24/intro-to-machine-learning',
    description: 'Comprehensive introduction to machine learning concepts, algorithms, and practical implementation.',
    skills: ['Machine Learning', 'Python', 'Data Science', 'Model Evaluation'],
    issuer: 'Kaggle',
    year: '2024',
  },
  {
    name: 'MATLAB Onramp',
    image: '/certificates/matlab.png',
    link: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=a4d7d9ea-4d88-4767-935a-73c1409c7a64',
    description: 'Fundamental MATLAB programming skills for technical computing and data analysis.',
    skills: ['MATLAB', 'Technical Computing', 'Data Analysis', 'Programming'],
    issuer: 'MathWorks',
    year: '2024',
  },
  {
    name: 'OpenCV Bootcamp',
    image: '/certificates/ocv.png',
    link: 'https://courses.opencv.org/certificates/275686be15474c3b9c7f5b8af882bcc4',
    description: 'Intensive training in computer vision and image processing using OpenCV library.',
    skills: ['Computer Vision', 'OpenCV', 'Image Processing', 'Python'],
    issuer: 'OpenCV University',
    year: '2024',
  },
  {
    name: 'TensorFlow Keras Bootcamp',
    image: '/certificates/tflow.png',
    link: 'https://courses.opencv.org/certificates/275686be15474c3b9c7f5b8af882bcc4',
    description: 'Intensive training in deep learning with TensorFlow and Keras.',
    skills: ['TensorFlow', 'Keras', 'Deep Learning', 'Python'],
    issuer: 'OpenCV University',
    year: '2025',
  },
];

const Certificates: React.FC = () => {
  const [focused, setFocused] = useState<number>(0);
  const [modal, setModal] = useState<Certificate | null>(null);

  // Constants for card dimensions and spacing (adjust as needed for desired layout)
  const CARD_WIDTH = 500;
  const CARD_HEIGHT = 350;
  const CARD_SPACING = -15;

  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      setFocused((prev) => (prev + 1) % certificates.length);
      if ('vibrate' in navigator) navigator.vibrate(10); // Subtle haptic feedback
    }
    if (e.key === 'ArrowLeft') {
      setFocused((prev) => (prev - 1 + certificates.length) % certificates.length);
      if ('vibrate' in navigator) navigator.vibrate(10); // Subtle haptic feedback
    }
  };

  // Adjust focused certificate on window resize to keep it centered
  useEffect(() => {
    const handleResize = () => {
      // You could add more sophisticated logic here if needed,
      // but for now, we just re-center the current focused card.
      setFocused(prev => prev); // Triggers re-render for position recalculation
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section className="py-16 bg-gray-900 overflow-hidden"> {/* Added overflow-hidden to contain cards */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Certificates</h2>
        <div
          className="relative flex items-center justify-center h-[400px] select-none" // Adjust height based on CARD_HEIGHT and scale
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {certificates.map((cert, idx) => {
            const offset = idx - focused;
            const isFocused = idx === focused;

            // Calculate x position based on offset and spacing
            // We use a spring transition for x, scale, and filter
            const xPos = offset * (CARD_WIDTH + CARD_SPACING);

            return (
              <motion.div
                key={cert.name}
                className="absolute cursor-pointer rounded-xl overflow-hidden shadow-2xl bg-gray-800"
                style={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  zIndex: 10 - Math.abs(offset), // Layering for overlap effect
                  pointerEvents: isFocused || Math.abs(offset) < 2 ? 'auto' : 'none', // Allow clicking/hovering on visible cards
                }}
                initial={{ opacity: 0, x: xPos, scale: 0.8 }} // Initial state for cards entering view
                animate={{
                  x: xPos,
                  scale: isFocused ? 1.15 : 0.85, // Slightly larger focused scale
                  filter: isFocused ? 'brightness(1)' : 'brightness(0.7)',
                  y: isFocused ? 0 : 20, // Subtle vertical shift for non-focused
                  opacity: Math.abs(offset) > 2 ? 0 : 1, // Hide cards far away
                  rotateY: offset * 5, // Reduced subtle 3D rotation
                }}
                transition={{
                  type: 'spring',
                  stiffness: 80,
                  damping: 30,
                  mass: 1,
                }}
                onClick={() => {
                  setModal(cert);
                  if ('vibrate' in navigator) navigator.vibrate(50); // Haptic feedback on click
                }}
                onMouseEnter={() => setFocused(idx)} // Focus on hover
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover" // Ensures image fills rectangular container, cropping as needed
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-semibold text-white mb-1">{cert.name}</h3>
                  <p className="text-white text-xs opacity-80">{cert.issuer} &bull; {cert.year}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal for certificate details */}
        <AnimatePresence>
          {modal && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" // Added p-4 for mobile spacing
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModal(null)}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative overflow-y-auto max-h-[90vh]" // Added overflow-y-auto and max-h for long content
                initial={{ scale: 0.8, y: 50, opacity: 0 }} // Slightly less aggressive initial y for smoother pop-up
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 250, damping: 30 }} // Smoother pop-up transition
                onClick={e => e.stopPropagation()} // Prevent modal from closing when clicking inside
              >
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl"
                  onClick={() => setModal(null)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <img src={modal.image} alt={modal.name} className="w-full h-56 object-contain rounded-xl mb-4 bg-gray-100" /> {/* object-contain here to show full certificate in modal */}
                <h3 className="text-2xl font-bold mb-2">{modal.name}</h3>
                <p className="text-gray-700 mb-2">{modal.description}</p>
                <div className="mb-2 text-sm text-gray-500">Issued by <span className="font-semibold">{modal.issuer}</span> &bull; {modal.year}</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {modal.skills.map((skill: string, i: number) => (
                    <span key={i} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">{skill}</span>
                  ))}
                </div>
                {modal.link && (
                  <a
                    href={modal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-blue-600 hover:underline font-semibold"
                  >
                    View Certificate
                  </a>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;