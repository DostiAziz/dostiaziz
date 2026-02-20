import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, MapPin } from 'lucide-react';
import { useTheme } from 'next-themes';
import GoogleScholarIcon from '../icons/GoogleScholar';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [titleText, setTitleText] = useState('');
  const fullTitle = 'Machine Learning Engineer & Researcher';
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Typewriter effect
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullTitle.length) {
        setTitleText(fullTitle.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);
    
    return () => clearInterval(typeInterval);
  }, []);
  
  // Particle network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];
    
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    const connectionDistance = 120;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 2,
      });
    }
    
    let animationId: number;
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        // Mouse repulsion
        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          particle.vx += (dx / dist) * force * 0.02;
          particle.vy += (dy / dist) * force * 0.02;
        }
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;
        
        // Boundary bounce
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Keep in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = resolvedTheme === 'dark'
          ? 'rgba(56, 152, 236, 0.8)'
          : 'rgba(56, 152, 236, 0.6)';
        ctx.fill();
        
        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx2 = particle.x - other.x;
          const dy2 = particle.y - other.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          
          if (dist2 < connectionDistance) {
            const baseOpacity = resolvedTheme === 'dark' ? 0.4 : 0.3;
            const opacity = (1 - dist2 / connectionDistance) * baseOpacity;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(56, 152, 236, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const nameChars = 'Dosti Aziz'.split('');
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1.5s ease' }}
      />
      
      {/* Gradient Orb */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(56, 152, 236, 0.5) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'float 20s ease-in-out infinite',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Name with 3D character animation */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          {nameChars.map((char, index) => (
            <span
              key={index}
              className="inline-block text-gradient"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'rotateX(0deg) translateZ(0)' : 'rotateX(90deg) translateZ(-100px)',
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${300 + index * 60}ms`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        
        {/* Title with typewriter effect */}
        <div className="h-12 sm:h-14 mb-4">
          <p
            className="text-xl sm:text-2xl md:text-3xl text-foreground/80 font-medium"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease 1s',
            }}
          >
            {titleText}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </p>
        </div>

        {/* Tagline */}
        <p
          className="text-base sm:text-lg text-foreground/60 mb-8 max-w-2xl mx-auto"
          style={{
            opacity: isLoaded ? 1 : 0,
            filter: isLoaded ? 'blur(0)' : 'blur(10px)',
            transition: 'all 0.6s cubic-bezier(0.87, 0, 0.13, 1) 2s',
          }}
        >
          AI/ML Engineer • PhD Researcher (SpeechAI) • Lifelong Learner
        </p>

        {/* Location */}
        <div
          className="flex items-center justify-center gap-2 text-foreground/50 mb-10"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease 2.2s',
          }}
        >
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Budapest, Hungary</span>
        </div>
        
        {/* Social Links */}
        <div 
          className="flex items-center justify-center gap-4 mb-12"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease 2.4s',
          }}
        >
          <a
            href="https://github.com/DostiAziz"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/DostiAziz"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:dosti.hamasalih@gmail.com"
            className="p-3 rounded-full bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
          </a>
          <a href='https://scholar.google.com/citations?user=kJwocnMAAAAJ&hl=en'
             className="p-3 rounded-full bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 group"
             target="_blank"
             rel="noopener noreferrer"
          >
            <GoogleScholarIcon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
        
        {/* CTA Button */}
        <button
          onClick={scrollToAbout}
          className="px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-glow hover:shadow-glow-lg hover:-translate-y-1 transition-all duration-300"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'scale(1)' : 'scale(0)',
            transition: 'all 0.5s cubic-bezier(0.68, -0.15, 0.265, 1.15) 2.4s',
          }}
        >
          Explore My Work
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.4s ease 2.8s',
        }}
      >
        <span className="text-xs text-foreground/40">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
