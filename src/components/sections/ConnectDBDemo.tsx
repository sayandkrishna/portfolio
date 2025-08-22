import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

//==============================================================================
// SVG ICONS
//==============================================================================

const ApiLogo: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 text-white"><path d="M4 7V17M12 7V17M8 4L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 12L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const DatabaseIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const AddIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const SendIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const CodeIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const ExpandIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const CloseIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const ArrowLeftIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5m0 0l7 7m-7-7l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const ArrowRightIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m0 0l-7 7m7-7l-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

//==============================================================================
// DEMO DATA & CONFIGURATION
//==============================================================================

const demoSteps = [
  {
    title: 'Welcome to ConnectDB',
    description: 'This is an interactive tour. See how you can use natural language to query your databases in seconds.',
  },
  {
    title: 'Connect Your Database',
    description: 'Securely connect to any SQL database. We provide a simple interface to add your credentials.',
  },
  {
    title: 'Ask a Question',
    description: 'Once connected, just type your question. No need to write complicated SQL queries.',
  },
  {
    title: 'Get Instant Results',
    description: 'Our AI translates your question into SQL, runs it, and shows you the results in a clean table.',
  },
  {
    title: 'Explore Your Data',
    description: 'You can view the full dataset, sort, search, and even download the results as a CSV file.',
  },
];

const sampleQuery = 'Show me the most recent 5 users';

//==============================================================================
// PROJECT DEMO COMPONENT
//==============================================================================

interface ProjectDemoProps {
  onClose: () => void;
}

export const ConnectDBDemo: React.FC<ProjectDemoProps> = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [typedQuery, setTypedQuery] = useState('');

  useEffect(() => {
    if (step >= 2) {
      let i = 0;
      setTypedQuery('');
      const interval = setInterval(() => {
        setTypedQuery(sampleQuery.slice(0, i));
        i++;
        if (i > sampleQuery.length) {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [step]);

  const nextStep = () => setStep((currentStep) => Math.min(currentStep + 1, demoSteps.length - 1));
  const prevStep = () => setStep((currentStep) => Math.max(currentStep - 1, 0));

  const renderDemoContent = () => {
    const isVisible = (s: number) => step >= s;

    return (
      <div className="flex-1 flex flex-col bg-black/10 max-h-full overflow-hidden">
        <header className="bg-black/20 p-4 flex items-center z-10 flex-shrink-0 h-16">
          <h1 className="text-xl font-bold text-white">Chat with your Data</h1>
        </header>

        <div className="flex-grow p-4 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            <AnimatePresence>
              {!isVisible(2) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center h-full text-center text-gray-400 py-16"
                >
                  <div className="bg-white/10 p-4 rounded-full mb-4"><ApiLogo /></div>
                  <h2 className="text-2xl font-semibold text-white">How can I help you today?</h2>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isVisible(2) && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-end">
                  <div className="bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white rounded-2xl rounded-br-lg p-3.5 max-w-2xl">
                    <p>{sampleQuery}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isVisible(3) && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                  <div className="bg-gray-900/50 border border-white/10 rounded-2xl rounded-bl-lg p-4 max-w-2xl w-full space-y-4">
                    <p>I found <strong>5</strong> results from the <code className="bg-black/30 text-purple-300 px-1.5 py-1 rounded-md mx-1 font-mono text-xs">users</code> table.</p>
                    <div>
                      <h4 className="text-sm font-semibold flex items-center space-x-2 mb-2 text-gray-400"><CodeIcon /><span>Generated SQL</span></h4>
                      <pre className="bg-black/50 p-3 rounded-lg text-xs text-gray-300 overflow-x-auto font-mono"><code>SELECT * FROM users ORDER BY created_at DESC LIMIT 5;</code></pre>
                    </div>
                    <div className="w-full overflow-hidden border border-white/10 rounded-lg">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-white/5"><tr><th className="p-2 font-semibold">id</th><th className="p-2 font-semibold">name</th><th className="p-2 font-semibold">status</th></tr></thead>
                        <tbody>
                          <tr className="border-t border-white/10">
                            <td className="p-2">106</td><td>Fiona Glenanne</td><td>active</td>
                          </tr>
                          <tr className="border-t border-white/10">
                            <td className="p-2">104</td><td>Diana Prince</td><td>active</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <AnimatePresence>
                      {isVisible(4) && (
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="flex justify-end pt-2">
                          <div className="text-xs font-semibold text-purple-400 flex items-center space-x-1 ring-2 ring-purple-500 rounded-full p-2 shadow-lg shadow-purple-500/50">
                            <ExpandIcon /><span>View Full Table</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="p-4 bg-black/20 flex-shrink-0">
          <div className={`max-w-4xl mx-auto flex items-center space-x-3 transition-all duration-300 ${step === 2 ? 'ring-2 ring-purple-500 rounded-full shadow-lg shadow-purple-500/50' : ''}`}>
            <div className="flex-grow bg-gray-900/50 border border-white/10 text-white text-sm rounded-full w-full p-3.5 px-6 placeholder-gray-500 relative">
              <span>{typedQuery}</span>
              <span className="animate-ping">|</span>
            </div>
            <button className="bg-purple-600 text-white p-3 rounded-full"><SendIcon /></button>
          </div>
        </div>
      </div>
    );
  };

  const modal = (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[9999] p-4 font-sans"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        className="bg-gradient-to-b from-[#050011] to-[#140034] border border-white/10 rounded-3xl w-full max-w-6xl h-[90vh] shadow-2xl shadow-purple-500/20 flex flex-col md:flex-row overflow-hidden"
      >
        <div className="w-full md:w-2/3 flex flex-col text-gray-300 relative">
          <aside className="bg-black/20 border-r border-white/5 flex-shrink-0 flex flex-col absolute left-0 top-0 h-full w-64 z-10">
            <div className="p-4 flex items-center space-x-4 h-16"><ApiLogo /><span className="font-semibold text-lg text-white">ConnectDB</span></div>
            <div className="p-4 flex-grow">
              <div className="mb-4 flex items-center space-x-3"><DatabaseIcon /><h2 className="text-xl font-bold text-white">Databases</h2></div>
              <div className="space-y-2">
                <div className="bg-white/5 p-3 rounded-2xl flex items-center space-x-3">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.5)]"></div>
                  <div><h3 className="font-semibold text-white">Production DB</h3></div>
                </div>
              </div>
            </div>
            <div className={`p-4 transition-all duration-300 ${step === 1 ? 'ring-2 ring-purple-500 rounded-3xl shadow-lg shadow-purple-500/50' : ''}`}>
              <button className="w-full flex items-center justify-center text-sm font-semibold rounded-full px-4 py-3 text-white bg-white/10 space-x-3">
                <AddIcon /><span>Connect Database</span>
              </button>
            </div>
          </aside>
          <main className="flex-1 flex flex-col h-full ml-64">
            {renderDemoContent()}
          </main>
        </div>

        <div className="w-full md:w-1/3 bg-black/30 p-8 flex flex-col justify-between text-white">
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Project Demo</h2>
              <motion.button whileTap={{scale: 0.9}} onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"><CloseIcon /></motion.button>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              {demoSteps.map((_, i) => (
                <div key={i} className={`h-1.5 flex-1 rounded-full ${step >= i ? 'bg-purple-500' : 'bg-white/20'}`}></div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-2">{demoSteps[step].title}</h3>
                <p className="text-gray-400">{demoSteps[step].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between">
            <motion.button onClick={prevStep} disabled={step === 0} className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
              <ArrowLeftIcon />
              <span>Back</span>
            </motion.button>
            <motion.button onClick={nextStep} disabled={step === demoSteps.length - 1} className="flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
              <span>Next</span>
              <ArrowRightIcon />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return createPortal(modal, document.body);
};


