import { useEffect, useRef, useState } from 'react';
import { BookOpen, FileText, ExternalLink } from 'lucide-react';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: 'journal' | 'conference';
  doi?: string;
}

const publications: Publication[] = [
  {
    title: 'Multitask and transfer learning approach for joint classification and severity estimation of dysphonia',
    authors: 'D. Aziz and S. Dávid',
    venue: 'IEEE Journal of Translational Engineering in Health and Medicine',
    year: '2024',
    type: 'journal',
    doi: '10.1109/JTEHM.2023.3340345',
  },
  {
    title: 'Automatic cross-and multi-lingual recognition of dysphonia by ensemble classification using deep speaker embedding models',
    authors: 'D. Aziz and D. Sztahó',
    venue: 'Expert Systems',
    year: '2024',
    type: 'journal',
  },
  {
    title: 'Dysphonia detection using a fully convolutional neural network adapted to dynamic speech lengths',
    authors: 'D. Aziz and D. Sztahó',
    venue: '2nd Workshop on Intelligent Infocommunication Networks, Systems and Services (WI2NS2)',
    year: '2024',
    type: 'conference',
  },
  {
    title: 'Binary and multiclass classification of dysphonia using whisper encoder and one-dimensional convolutional neural network',
    authors: 'D. Aziz and D. Sztahó',
    venue: 'International Conference on Speech and Computer (SPECOM), Springer',
    year: '2024',
    type: 'conference',
  },
  {
    title: 'Dysphonia diagnosis using self-supervised speech models in mono and cross-lingual settings',
    authors: 'D. Aziz and D. Sztahó',
    venue: 'International Conference on Text, Speech, and Dialogue (TSD), Springer',
    year: '2024',
    type: 'conference',
  },
  {
    title: 'Cross-lingual dysphonic speech detection using pre-trained speaker embeddings',
    authors: 'D. Aziz and D. Sztahó',
    venue: 'XIX. Magyar Számítógépes Nyelvészeti Konferencia (MSZNY)',
    year: '2023',
    type: 'conference',
  },
];

const Publications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
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
  
  const journalPubs = publications.filter(p => p.type === 'journal');
  const conferencePubs = publications.filter(p => p.type === 'conference');
  
  return (
    <section 
      id="publications" 
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
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
            Publications
          </h2>
          <p className="text-lg text-dark/60 max-w-2xl mx-auto">
            Research contributions to AI and speech processing
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>
        
        {/* Journal Articles */}
        <div className="mb-12">
          <div 
            className="flex items-center gap-3 mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            }}
          >
            <BookOpen className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold text-dark">Journal Articles</h3>
          </div>
          
          <div className="space-y-4">
            {journalPubs.map((pub, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + index * 0.15}s`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className={`relative bg-white rounded-xl p-5 sm:p-6 shadow-soft transition-all duration-300 ${
                    hoveredIndex === index ? 'shadow-medium -translate-y-1' : ''
                  }`}
                >
                  {/* Animated Border */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, #3898ec, #6366f1, #8b5cf6, #3898ec)',
                      backgroundSize: '100% 200%',
                      animation: 'border-flow 4s linear infinite',
                    }}
                  />
                  
                  <div className="pl-4">
                    {/* Title */}
                    <h4 className="text-base sm:text-lg font-semibold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                      {pub.title}
                    </h4>
                    
                    {/* Authors & Venue */}
                    <p className="text-sm text-dark/60 mb-1">
                      {pub.authors}
                    </p>
                    <p className="text-sm text-dark/50">
                      <span className="italic">{pub.venue}</span>, {pub.year}
                    </p>
                    
                    {/* DOI Link */}
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary hover:underline"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>DOI: {pub.doi}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Conference Proceedings */}
        <div>
          <div 
            className="flex items-center gap-3 mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
            }}
          >
            <FileText className="w-5 h-5 text-accent" />
            <h3 className="text-xl font-bold text-dark">Conference Proceedings</h3>
          </div>
          
          <div className="space-y-4">
            {conferencePubs.map((pub, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.6 + index * 0.15}s`,
                }}
                onMouseEnter={() => setHoveredIndex(index + journalPubs.length)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className={`relative bg-white rounded-xl p-5 sm:p-6 shadow-soft transition-all duration-300 ${
                    hoveredIndex === index + journalPubs.length ? 'shadow-medium -translate-y-1' : ''
                  }`}
                >
                  {/* Animated Border */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, #6366f1, #8b5cf6, #3898ec, #6366f1)',
                      backgroundSize: '100% 200%',
                      animation: 'border-flow 4s linear infinite',
                    }}
                  />
                  
                  <div className="pl-4">
                    {/* Title */}
                    <h4 className="text-base sm:text-lg font-semibold text-dark mb-2 group-hover:text-accent transition-colors duration-300">
                      {pub.title}
                    </h4>
                    
                    {/* Authors & Venue */}
                    <p className="text-sm text-dark/60 mb-1">
                      {pub.authors}
                    </p>
                    <p className="text-sm text-dark/50">
                      <span className="italic">{pub.venue}</span>, {pub.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
