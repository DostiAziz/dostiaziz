import { useEffect, useRef, useState } from 'react';
import { 
  Brain, Database, Code2, BarChart3, 
  Server, Cloud, GitBranch, Terminal 
} from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Core AI & ML',
    icon: Brain,
    skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Transformers', 'NLP', 'LangChain', 'LangGraph', 'AgenticRAG', 'VectorDB', 'Predictive Analytics', 'LLMOps'],
    color: 'from-primary to-blue-400',
  },
  {
    name: 'Data Engineering',
    icon: Database,
    skills: ['Docker', 'FastAPI', 'GitHub Actions', 'CI/CD', 'FAISS', 'Chroma', 'REST APIs', 'Linux', 'HPC', 'AWS', 'Azure', 'ETL'],
    color: 'from-accent to-indigo-400',
  },
  {
    name: 'Programming',
    icon: Code2,
    skills: ['Python', 'Java', 'JavaScript', 'SQL', 'C#'],
    color: 'from-purple-500 to-purple-400',
  },
  {
    name: 'Visualization',
    icon: BarChart3,
    skills: ['Matplotlib', 'Seaborn', 'Streamlit'],
    color: 'from-pink-500 to-pink-400',
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
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
  
  const currentCategory = skillCategories[activeCategory];
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
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
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-accent-purple mx-auto rounded-full mt-4 animate-gradient-shift"
            style={{ backgroundSize: '200% 200%' }}
          />
        </div>
        
        {/* Category Tabs */}
        <div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}
        >
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-primary text-white shadow-glow scale-110'
                  : 'bg-card text-foreground/70 shadow-soft hover:shadow-medium hover:scale-105 hover:text-foreground'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="text-sm">{category.name}</span>
            </button>
          ))}
        </div>
        
        {/* Skills Display */}
        <div 
          className="relative"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.95)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
          }}
        >
          {/* Central Hub */}
          <div className="flex flex-col items-center mb-10">
            <div
              className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${currentCategory.color} flex items-center justify-center shadow-glow animate-pulse-glow transition-all duration-500`}
            >
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin" style={{ animationDuration: '8s' }} />
              <currentCategory.icon className="w-10 h-10 text-white relative z-10" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-foreground">{currentCategory.name}</h3>
          </div>
          
          {/* Skills Grid */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {currentCategory.skills.map((skill, index) => (
              <div
                key={skill}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  hoveredSkill === skill ? 'scale-110' : ''
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div
                  className={`px-5 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                    hoveredSkill === skill
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-glow'
                      : 'bg-card text-foreground/80 shadow-soft hover:shadow-medium border border-border hover:border-primary/50'
                  }`}
                >
                  {skill}
                </div>

                {/* Glow effect on hover */}
                {hoveredSkill === skill && (
                  <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl -z-10 animate-pulse" />
                )}
              </div>
            ))}
          </div>
          
          {/* Connection Lines (decorative) */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none -z-10"
            style={{ opacity: 0.1 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3898ec" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Additional Info */}
        <div 
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
          }}
        >
          {[
            { icon: Server, label: 'MLOps', desc: 'Docker, CI/CD' },
            { icon: Cloud, label: 'Cloud', desc: 'AWS, Azure' },
            { icon: GitBranch, label: 'Version Control', desc: 'Git, GitHub' },
            { icon: Terminal, label: 'Systems', desc: 'Linux, HPC' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center p-4 rounded-xl bg-card shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              <item.icon className="w-6 h-6 text-primary mb-2" />
              <span className="font-semibold text-foreground text-sm">{item.label}</span>
              <span className="text-xs text-foreground/60">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
