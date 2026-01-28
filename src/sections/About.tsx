import { useEffect, useRef, useState } from 'react';
import { Award, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, publications: 0, projects: 0 });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Counter animation
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;
    
    const targets = { years: 10, publications: 6, projects: 5 };
    let step = 0;
    
    const counterInterval = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCounters({
        years: Math.round(targets.years * easeOut),
        publications: Math.round(targets.publications * easeOut),
        projects: Math.round(targets.projects * easeOut),
      });
      
      if (step >= steps) {
        clearInterval(counterInterval);
      }
    }, interval);
    
    return () => clearInterval(counterInterval);
  }, [isVisible]);
  
  const stats = [
    { icon: Briefcase, value: counters.years, suffix: '+', label: 'Years Experience' },
    { icon: BookOpen, value: counters.publications, suffix: '+', label: 'Publications' },
    { icon: Award, value: counters.projects, suffix: '+', label: 'AI Projects' },
  ];
  
  const skillTags = [
    'PyTorch', 'TensorFlow', 'LangChain', 'LangGraph', 
    'Transformers', 'NLP', 'AgenticRAG', 'VectorDB'
  ];
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p 
              className="text-xl sm:text-2xl font-semibold text-dark leading-relaxed"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
              }}
            >
              Machine Learning/ AI Engineer and PhD Researcher specializing in{' '}
              <span className="text-gradient">deep learning</span>,{' '}
              <span className="text-gradient">Generative AI</span>, and{' '}
              <span className="text-gradient">Voice Biomarkers</span>.
            </p>
            
            <p 
              className="text-base sm:text-lg text-dark/70 leading-relaxed"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
              }}
            >
              Currently contributing to Nokia's AI initiatives, designing agentic RAG architectures 
              and autonomous workflows leveraging LangChain, LangGraph, and vector databases. My 
              research focuses on language dependent/independent speech pathology detection using AI models
              for healthcare applications.
            </p>
            
            <p 
              className="text-base sm:text-lg text-dark/70 leading-relaxed"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
              }}
            >
              Recognized with the <span className="font-semibold text-primary">Outstanding GoBeyond AI Solution Developer</span> award 
              for delivering a fully functional AI application integrating LangGraph workflows and 
              large language models for complex supply chain data analysis in a short period of time.
            </p>
            
            {/* Stats */}
            <div 
              className="grid grid-cols-3 gap-4 pt-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.7s',
              }}
            >
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-2xl bg-white shadow-soft hover:shadow-medium transition-shadow duration-300"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs sm:text-sm text-dark/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Image with Morphing Shape */}
          <div 
            className="relative flex justify-center lg:justify-end"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            }}
          >
            {/* Morphing Shape Container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Animated blob background */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 animate-morph"
                style={{ filter: 'blur(40px)' }}
              />
              
              {/* Profile Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-large animate-morph">
                <img
                  src="/profile.jpg"
                  alt="Dosti Aziz"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Skill Tags */}
              {skillTags.map((tag, index) => {
                const angle = (index / skillTags.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 160;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <span
                    key={tag}
                    className="absolute px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-full shadow-soft text-dark/80 whitespace-nowrap"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      opacity: isVisible ? 1 : 0,
                      transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.9 + index * 0.1}s`,
                      animation: isVisible ? `float ${4 + index * 0.5}s ease-in-out infinite ${index * 0.3}s` : 'none',
                    }}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
