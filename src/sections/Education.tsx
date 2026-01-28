import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award, ChevronDown } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
}

const education: EducationItem[] = [
  {
    degree: 'Ph.D. in Computer Engineering',
    institution: 'Budapest University of Technology and Economics',
    location: 'Budapest, Hungary',
    period: '2022 – Ongoing',
    details: [
      'Research Focus: Speech-signal processing and deep learning algorithms for disease detection.',
      'Relevant Coursework: Intelligent data analysis, Software verification and validation, Statistical Modelling.',
    ],
  },
  {
    degree: 'MSc in Advanced Computer Science',
    institution: 'University of Leicester',
    location: 'Leicester, United Kingdom',
    period: '2013 – 2015',
    details: [
      'Dissertation: Designed and implemented a web-based ontology editing and development platform using Java and jQuery Mobile.',
      'Key Modules: Cloud Computing, Advanced Web Technologies, Financial Information Systems, Advanced Programming.',
    ],
  },
  {
    degree: 'BSc in Mathematics and Computer Science',
    institution: 'University of Sulaimani',
    location: 'Kurdistan, Iraq',
    period: '2007 – 2011',
    details: [
      'Emphasized strong foundational coursework in mathematics, algorithms, and programming concepts.',
      'Notable Modules: Advanced Calculus, Data Structures, Object-Oriented Programming, Database Fundamentals.',
    ],
  },
];

const certificates = [
  { name: 'Large Language Model Operations (LLMOps)', provider: 'Coursera' },
  { name: 'AI and Machine Learning in Healthcare', provider: 'Cambridge Centre for AI in Medicine' },
  { name: 'Generative Adversarial Networks (GANs) Specialization', provider: 'Coursera' },
  { name: 'Mathematics for Machine Learning and Data Science', provider: 'Coursera' },
  { name: 'Deep Learning Specialization', provider: 'Coursera' },
  { name: 'Machine Learning Specialization', provider: 'Coursera' },
];

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showCertificates, setShowCertificates] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-neutral-light/50"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div 
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Education
          </h2>
          <p className="text-lg text-dark/60 max-w-2xl mx-auto">
            Academic foundation in computer science and AI
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>
        
        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group perspective-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) rotateX(0deg)' : 'translateY(100px) rotateX(30deg)',
                transition: `all 0.7s cubic-bezier(0.68, -0.15, 0.265, 1.15) ${0.2 + index * 0.2}s`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`relative h-full bg-white rounded-2xl overflow-hidden shadow-soft transition-all duration-300 preserve-3d ${
                  hoveredIndex === index ? 'shadow-large' : ''
                }`}
              >
                {/* Header Layer */}
                <div 
                  className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 transition-transform duration-300"
                  style={{
                    transform: hoveredIndex === index ? 'translateZ(6px)' : 'translateZ(0)',
                  }}
                >
                  <GraduationCap className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-lg font-bold text-dark leading-tight">
                    {edu.degree}
                  </h3>
                </div>
                
                {/* Institution Layer */}
                <div 
                  className="px-6 py-4 border-b border-neutral-light transition-transform duration-300"
                  style={{
                    transform: hoveredIndex === index ? 'translateZ(4px)' : 'translateZ(0)',
                  }}
                >
                  <p className="font-semibold text-primary text-sm">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-dark/60">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                  </div>
                </div>
                
                {/* Details Layer */}
                <div 
                  className="p-6 transition-transform duration-300"
                  style={{
                    transform: hoveredIndex === index ? 'translateZ(2px)' : 'translateZ(0)',
                  }}
                >
                  <ul className="space-y-2">
                    {edu.details.map((detail, detailIndex) => (
                      <li 
                        key={detailIndex}
                        className="text-sm text-dark/70 flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Certificates Section */}
        <div 
          className="mt-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
          }}
        >
          <button
            onClick={() => setShowCertificates(!showCertificates)}
            className="w-full flex items-center justify-between p-5 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              <span className="font-semibold text-dark">Professional Certificates</span>
              <span className="px-2 py-0.5 bg-primary/10 rounded-full text-xs font-medium text-primary">
                {certificates.length}
              </span>
            </div>
            <ChevronDown 
              className={`w-5 h-5 text-dark/60 transition-transform duration-300 ${showCertificates ? 'rotate-180' : ''}`} 
            />
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-500 ${
              showCertificates ? 'max-h-96 mt-4' : 'max-h-0'
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-3">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300"
                  style={{
                    opacity: showCertificates ? 1 : 0,
                    transform: showCertificates ? 'translateY(0)' : 'translateY(-10px)',
                    transition: `all 0.4s ease ${index * 0.05}s`,
                  }}
                >
                  <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-dark text-sm">{cert.name}</p>
                    <p className="text-xs text-dark/50">{cert.provider}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
