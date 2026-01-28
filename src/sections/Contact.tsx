import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import GoogleScholarIcon from '../icons/GoogleScholar';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };
  
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'dosti.hamasalih@gmail.com', href: 'mailto:dosti.hamasalih@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Budapest, Hungary', href: null },
    { icon: Phone, label: 'Phone', value: '+36 707925300', href: 'tel:+36707925300' },
  ];
  
  const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/DostiAziz' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/DostiAziz' },
  { icon: GoogleScholarIcon, label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=kJwocnMAAAAJ&hl=en' },
];


  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
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
            Get In Touch
          </h2>
          <p className="text-lg text-dark/60 max-w-2xl mx-auto">
            Let's discuss AI, research, or collaboration opportunities
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div 
            className="lg:col-span-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="relative">
                <label 
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'name' || formData.name
                      ? 'top-1 text-xs text-primary font-medium'
                      : 'top-4 text-dark/50'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 pt-6 pb-3 bg-white rounded-xl border-2 border-neutral-medium focus:border-primary outline-none transition-colors duration-200"
                  required
                />
              </div>
              
              {/* Email Field */}
              <div className="relative">
                <label 
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'email' || formData.email
                      ? 'top-1 text-xs text-primary font-medium'
                      : 'top-4 text-dark/50'
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 pt-6 pb-3 bg-white rounded-xl border-2 border-neutral-medium focus:border-primary outline-none transition-colors duration-200"
                  required
                />
              </div>
              
              {/* Message Field */}
              <div className="relative">
                <label 
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'message' || formData.message
                      ? 'top-1 text-xs text-primary font-medium'
                      : 'top-4 text-dark/50'
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className="w-full px-4 pt-6 pb-3 bg-white rounded-xl border-2 border-neutral-medium focus:border-primary outline-none transition-colors duration-200 resize-none"
                  required
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-success'
                    : 'bg-primary hover:bg-dark shadow-glow hover:shadow-glow-lg hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div 
            className="lg:col-span-2 space-y-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
            }}
          >
            {/* Contact Cards */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="group"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                    transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + index * 0.1}s`,
                  }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-dark/50">{item.label}</p>
                        <p className="font-medium text-dark text-sm">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-dark/50">{item.label}</p>
                        <p className="font-medium text-dark text-sm">{item.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div 
              className="pt-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease 0.7s',
              }}
            >
              <p className="text-sm text-dark/50 mb-3">Connect on social media</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 group"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'scale(1)' : 'scale(0)',
                      transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.8 + index * 0.1}s`,
                    }}
                  >
                    <social.icon className="w-5 h-5 text-dark group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
