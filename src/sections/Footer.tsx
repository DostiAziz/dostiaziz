import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
    
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      ref={footerRef}
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-dark"
    >
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-20"
        style={{
          background: 'linear-gradient(135deg, #3898ec 0%, #6366f1 50%, #8b5cf6 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 20s ease infinite',
        }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center">
          {/* Signature */}
          <div 
            className="mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1s ease',
            }}
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Dosti Aziz
            </h3>
            <p className="text-white/60 text-sm sm:text-base">
              Building intelligent systems for tomorrow
            </p>
          </div>
          
          {/* Tagline */}
          <p 
            className="text-white/40 text-sm mb-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.4s ease 0.8s',
            }}
          >
            Machine Learning Developer • PhD Candidate • AI Researcher
          </p>
          
          {/* Social Links */}
          <div 
            className="flex justify-center gap-4 mb-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.5s ease 1s',
            }}
          >
            {[
              { icon: Github, href: 'https://github.com/DostiAziz', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/DostiAziz', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:dosti.hamasalih@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0)',
                  transition: `all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) ${1 + index * 0.1}s`,
                }}
              >
                <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
          
          {/* Divider */}
          <div 
            className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.5s ease 1.2s',
            }}
          />
          
          {/* Copyright */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.3s ease 1.2s',
            }}
          >
            <p className="text-white/40 text-sm">
              © {currentYear} Dosti Aziz. All rights reserved.
            </p>
            <p className="text-white/40 text-sm flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-error fill-error" /> using React & Tailwind
            </p>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-0 top-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-glow hover:shadow-glow-lg hover:-translate-y-1 transition-all duration-300"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1.4s',
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
