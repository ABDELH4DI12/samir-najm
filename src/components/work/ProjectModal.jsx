import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  if (!project || !isOpen) return null;

  const handlePrevContent = () => {
    setCurrentContentIndex((prev) => 
      prev === 0 ? project.content.length - 1 : prev - 1
    );
  };

  const handleNextContent = () => {
    setCurrentContentIndex((prev) => 
      prev === project.content.length - 1 ? 0 : prev + 1
    );
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderContent = (contentItem) => {
    if (contentItem.type === 'pdf') {
      return (
        <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-600 mb-4">{contentItem.name}</p>
            <a 
              href={contentItem.src} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Open PDF
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <img 
          src={contentItem.src} 
          alt={contentItem.name}
          className="w-full h-96 object-contain rounded-lg bg-gray-100"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
      );
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999] p-4"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
                <p className="text-gray-600 mt-1">{project.description}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {project.content && project.content.length > 0 ? (
              <div>
                {/* Content Navigation */}
                {project.content.length > 1 && (
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={handlePrevContent}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous
                    </button>
                    
                    <span className="text-gray-600">
                      {currentContentIndex + 1} of {project.content.length}
                    </span>
                    
                    <button
                      onClick={handleNextContent}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      Next
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}

                {/* Current Content */}
                <div className="mb-6">
                  {renderContent(project.content[currentContentIndex])}
                  {/* Fallback error display */}
                  <div className="w-full h-96 bg-gray-100 rounded-lg items-center justify-center hidden">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-600">Unable to load content</p>
                    </div>
                  </div>
                </div>

                {/* Content Indicators */}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <img 
                    src={project.coverImage} 
                    alt={project.title}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
                <p className="text-gray-600">
                  This project showcases {project.title.toLowerCase()} work. Contact me to see more details and examples.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
