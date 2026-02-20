import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, MessageSquare, BookOpen, ShoppingCart, Pill, Network, Fuel } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ElementType;
  githubUrl?: string;
  demoUrl?: string;
  color: string;
}

const projects: Project[] = [
  {
    title: 'Analytics ChatBot',
    description: 'An intelligent chatbot application that enables users to ask questions and connect with an agent to perform advanced analytics based on their query. Supports local LLMs through HuggingFace.',
    technologies: ['Python', 'LangChain', 'Agents', 'HuggingFace', 'Chroma DB', 'Streamlit'],
    icon: MessageSquare,
    color: 'from-primary to-blue-500',
  },
  {
    title: 'arXiv Research Navigator',
    description: 'A research paper collection and analysis tool that allows users to collect papers and build a vector knowledge base. Supports both local LLMs via HuggingFace and paid LLM APIs.',
    technologies: ['Python', 'LangChain', 'Chroma DB', 'Streamlit'],
    icon: BookOpen,
    color: 'from-accent to-indigo-500',
  },
  {
    title: 'Online Inventory Management',
    description: 'A comprehensive PHP/MySQL web application supporting both cash and loan transaction modes, designed to improve overall inventory tracking and management efficiency.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    icon: ShoppingCart,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Pharmacy System',
    description: 'A robust C# and SQL Server-based desktop solution designed to streamline product ordering and sales in pharmacies, significantly reducing manual workload.',
    technologies: ['C#', 'SQL Server', '.NET Framework'],
    icon: Pill,
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'OntoMobile',
    description: 'A Java and jQuery Mobile-based application for creating and editing knowledge representation with ontologies, enabling user-friendly ontology management for domain experts.',
    technologies: ['Java', 'jQuery Mobile', 'OWL', 'RDF'],
    icon: Network,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Petrol Station Management',
    description: 'A PHP/MySQL system for logging sales, purchases, and inventory at petrol stations, enhancing transaction accuracy and record-keeping efficiency.',
    technologies: ['PHP', 'MySQL', 'JavaScript'],
    icon: Fuel,
    color: 'from-yellow-500 to-orange-500',
  },
];

const Projects = () => {
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
  
  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div 
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            AI systems and applications I've built
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-accent-purple mx-auto rounded-full mt-4 animate-gradient-shift"
            style={{ backgroundSize: '200% 200%' }}
          />
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'rotateX(0deg) translateY(0)' : 'rotateX(30deg) translateY(30px)',
                transition: `all 0.7s cubic-bezier(0.68, -0.15, 0.265, 1.15) ${0.2 + index * 0.15}s`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative h-full bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow hover:-translate-y-3 hover:scale-[1.02] border border-border hover:border-primary/50 transition-all duration-300 ${
                  hoveredIndex === index ? 'shadow-glow -translate-y-3 scale-[1.02]' : ''
                }`}
              >
                {/* Holographic Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-15 transition-opacity duration-500`}
                />
                
                {/* Shine Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)',
                    transform: hoveredIndex === index ? 'translateX(100%)' : 'translateX(-100%)',
                    transition: 'transform 0.6s ease',
                  }}
                />
                
                {/* Content */}
                <div className="relative p-6 sm:p-8">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-5 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    style={{
                      transform: hoveredIndex === index ? 'perspective(1000px) rotateY(10deg)' : 'perspective(1000px) rotateY(0deg)',
                    }}
                  >
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground/70 mb-5 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-muted rounded-full text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-foreground/60 hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-foreground/60 hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
