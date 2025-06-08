import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      title: 'OpenCV Computer Vision',
      issuer: 'OpenCV',
      date: '2024',
      link: 'https://courses.opencv.org/certificates/275686be15474c3b9c7f5b8af882bcc4',
      description: 'Comprehensive computer vision and image processing certification'
    },
    {
      title: 'Power BI Data Analytics',
      issuer: 'PwC Switzerland',
      date: '2024',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_gN2rWy7uX2GH45jg4_1721071256501_completion_certificate.pdf',
      description: 'Data visualization and business intelligence certification'
    },
    {
      title: 'Introduction to Machine Learning',
      issuer: 'Kaggle',
      date: '2024',
      link: 'https://www.kaggle.com/learn/certification/sayandkrishna24/intro-to-machine-learning',
      description: 'Fundamentals of machine learning and data science'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications and achievements in various domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <FaCertificate className="text-blue-600 text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{cert.title}</h3>
              </div>
              <p className="text-gray-600 mb-2">{cert.issuer}</p>
              <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
              <p className="text-gray-700 mb-4">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                View Certificate
                <FaExternalLinkAlt className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 