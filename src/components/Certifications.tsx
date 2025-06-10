import React from 'react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  link?: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    // Add your certifications here
    // Example format:
    // {
    //   id: 1,
    //   title: "AWS Certified Solutions Architect",
    //   issuer: "Amazon Web Services",
    //   date: "January 2024",
    //   imageUrl: "/path-to-your-certificate-image.jpg",
    //   link: "https://verify.aws.com/your-certificate"
    // }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Verify Certificate →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 