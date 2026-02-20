import { useEffect, useRef, useState } from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  highlight?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'Nokia',
    role: 'Machine Learning Developer Intern',
    period: 'Aug 2025 – Present',
    location: 'Budapest, Hungary',
    description: [
      'Develop Generative AI and LLM-based automation systems integrating LangChain, LangGraph, and vector stores for enterprise-scale intelligent agents.',
      'Design agentic RAG architectures enabling contextual reasoning, dynamic tool orchestration, and insight generation from structured and unstructured data.',
      'Build modular GenAI pipelines with API interfaces and tool-calling frameworks, improving workflow automation and analysis accuracy.',
    ],
    highlight: 'Outstanding GoBeyond AI Solution Developer Award',
  },
  {
    company: 'Budapest University of Technology and Economics',
    role: 'PhD Candidate',
    period: 'Sep 2022 – Present',
    location: 'Budapest, Hungary',
    description: [
      'Develop deep learning architectures (CNNs, RNNs, Transformers) for speech-signal analysis in multilingual and clinical contexts.',
      'Implement distributed training pipelines (PyTorch DDP, Docker, HPC), cutting model training time by 60% while maintaining accuracy.',
      'Research focuses on cross-lingual speech pathology detection, contributing to robust AI models for healthcare and assistive technology.',
      'Mentor MSc students on applied machine learning and AI system deployment best practices.',
    ],
  },
  {
    company: 'ScaleAI',
    role: 'AI Trainer (LLM Evaluation & Optimization)',
    period: 'Oct 2024 – June 2025',
    location: 'Budapest, Hungary',
    description: [
      'Improved LLM reliability and accuracy by identifying model failure modes through adversarial prompting and systematic testing.',
      'Applied advanced prompting techniques (Chain-of-Thought, ReAct, few-shot learning) to guide model outputs toward more reliable responses.',
      'Evaluated and corrected AI-generated code for correctness, performance, security vulnerabilities, and adherence to best practices.',
    ],
  },
  {
    company: 'Eötvös Loránd University',
    role: 'Assistant Researcher',
    period: 'Sep 2021 – Sep 2022',
    location: 'Budapest, Hungary',
    description: [
      'Investigated advanced ML and DL algorithms for knowledge graph and ontology processing.',
      'Supervised and mentored MSc students in Data Science project labs, guiding them through data ingestion, ETL processes, model building, and best practices for results reporting.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Software Developer',
    period: 'Jan 2015 – Present',
    location: 'Remote',
    description: [
      'Develop custom web and desktop solutions (PHP, C#, SQL) for diverse clients, delivering on time and under budget.',
      'Collaborate with stakeholders to gather requirements, design architectures, and create testable, maintainable products across multiple industries.',
    ],
  },
];

const Experience = () => {
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
      id="experience" 
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/50"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            My journey through AI research and industry
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-accent-purple mx-auto rounded-full mt-4 animate-gradient-shift"
            style={{ backgroundSize: '200% 200%' }}
          />
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-accent-purple"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1s ease 0.3s',
            }}
          />
          
          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-12 sm:pl-20"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + index * 0.15}s`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-2 sm:left-6 w-4 h-4 rounded-full border-4 border-background shadow-glow transition-all duration-300 ${
                    hoveredIndex === index ? 'bg-accent scale-125 shadow-glow-lg' : 'bg-primary'
                  }`}
                  style={{ top: '1.5rem' }}
                />
                
                {/* Card */}
                <div
                  className={`bg-card rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-glow hover:-translate-y-2 border border-border hover:border-primary/50 transition-all duration-300 ${
                    hoveredIndex === index ? 'shadow-glow -translate-y-2 border-primary/50' : ''
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-sm text-foreground/60">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Highlight Badge */}
                  {exp.highlight && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-4">
                      <span className="text-sm font-semibold text-gradient">{exp.highlight}</span>
                    </div>
                  )}
                  
                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-foreground/70 text-sm sm:text-base"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
