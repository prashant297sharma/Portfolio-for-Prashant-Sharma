import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Download, 
  MessageCircle, 
  Linkedin, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Trophy, 
  Award, 
  Zap, 
  FileText, 
  TrendingUp, 
  PenTool, 
  Type, 
  FileEdit, 
  Search, 
  Check, 
  CheckCircle,
  GraduationCap
} from 'lucide-react';
import { 
  PROJECTS, 
  SKILL_CATEGORIES, 
  SERVICES, 
  COLORS 
} from './constants';

declare global {
  interface Window {
    Typed: any;
  }
}

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const typedRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Initialize Typed.js with specific 0.5s duration requirements
    // Text: "SEO Content Strategist Who Delivers #1 Rankings and Drives Organic Growth" (~77 chars)
    // Duration: 500ms / 77 chars ≈ 6.5ms per character
    if (window.Typed) {
      typedRef.current = new window.Typed('#typed-title', {
        strings: ['SEO Content Strategist Who Delivers #1 Rankings and Drives Organic Growth'],
        typeSpeed: 6.5,
        startDelay: 0,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
        loop: false,
        onComplete: (self: any) => {
          setTimeout(() => {
            if (self.cursor) {
              self.cursor.style.transition = 'opacity 0.5s';
              self.cursor.style.opacity = '0';
              setTimeout(() => self.cursor.remove(), 500);
            }
          }, 2000);
        }
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const RESUME_LINK = "Prashant_Sharma_Final_Clean_Version.pdf";
  const WHATSAPP_LINK = "https://wa.me/918076486081";
  const EMAIL = "prashant29freelancewriter@gmail.com";
  const LINKEDIN = "https://www.linkedin.com/in/prashant-sharma-74319a154/";

  const FULL_TITLE = "SEO Content Strategist Who Delivers #1 Rankings and Drives Organic Growth";

  return (
    <div className="min-h-screen bg-white text-[#2C3E50]">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#2E75B6] cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            Prashant Sharma
          </div>
          
          <div className="hidden md:flex space-x-8 items-center font-semibold">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[#2E75B6] transition-colors">About</a>
            <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="hover:text-[#2E75B6] transition-colors">Portfolio</a>
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-[#2E75B6] transition-colors">Skills</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="px-5 py-2.5 bg-[#2E75B6] text-white rounded-lg hover:bg-[#25639b] transition-all shadow-sm">
              Let's Talk
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 shadow-lg absolute w-full left-0">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block py-2 text-lg font-medium">About</a>
            <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="block py-2 text-lg font-medium">Portfolio</a>
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="block py-2 text-lg font-medium">Skills</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block py-2 text-lg font-medium text-[#2E75B6]">Let's Talk</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-white to-blue-50/70">
        <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-[0.04] pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-10 rotate-12">
            <PenTool size={420} className="text-[#2E75B6]" />
          </div>
          <div className="absolute bottom-20 left-10 -rotate-12">
            <Type size={360} className="text-[#2E75B6]" />
          </div>
          <div className="absolute top-1/2 left-1/4">
            <FileEdit size={280} className="text-[#2E75B6]" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2E75B6_1.5px,transparent_1.5px)] [background-size:48px_48px] opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left relative">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/60 text-[#2E75B6] font-bold text-sm mb-8 border border-blue-200">
            <Award size={18} className="mr-2" /> 6+ Years SEO Mastery
          </div>
          
          <h1 
            className="text-4xl md:text-7xl font-extrabold leading-tight mb-8 max-w-4xl tracking-tight min-h-[3.5em] sm:min-h-[2.5em] md:min-h-[2em]" 
            aria-label={FULL_TITLE}
          >
            <span id="typed-title" className="inline"></span>
            <span id="fallback-title" className="hidden sr-only motion-reduce:inline motion-reduce:not-sr-only">{FULL_TITLE}</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed font-medium">
            I build SEO content ecosystems through strategic keyword clustering, search intent mapping, and conversion-focused writing that ranks—and converts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start mb-16">
            <a 
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="flex items-center justify-center px-10 py-5 bg-[#2C3E50] text-white rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-xl hover:-translate-y-1"
            >
              About Me <ArrowRight size={22} className="ml-3" />
            </a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              className="flex items-center justify-center px-10 py-5 bg-white text-[#2C3E50] border-2 border-[#2C3E50] rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-sm hover:-translate-y-1"
            >
              <MessageCircle size={22} className="mr-3 text-green-500" /> Let's Talk
            </a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-y-4 gap-x-12 text-gray-600">
            <div className="flex items-center space-x-3 group">
              <CheckCircle size={22} className="text-[#27AE60] group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg">6+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <CheckCircle size={22} className="text-[#27AE60] group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg">#1 Rankings Achieved</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <CheckCircle size={22} className="text-[#27AE60] group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg">Finance Content Expert</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
              <h2 className="text-4xl font-extrabold mb-8">Data-Driven Strategist <span className="text-[#2E75B6]">Rooted in Literature.</span></h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                Combining a Master’s in English with high-level technical SEO expertise, I bridge the gap between human readability and search engine algorithmic demands.
              </p>
              
              <div className="space-y-6">
                <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-[#2E75B6] mb-5 uppercase tracking-wider text-xs">Professional Trajectory:</h3>
                  <div className="space-y-6">
                    <div className="relative pl-8 border-l-2 border-blue-100">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#2E75B6] border-4 border-white"></div>
                      <p className="font-extrabold text-[#2C3E50]">MPPL (Mittal Portfolios Pvt. Ltd.)</p>
                      <p className="text-sm text-[#2E75B6] font-bold">Content Writer | Nov 2024 – Present</p>
                      <p className="text-sm text-gray-600 mt-1">Leading SEO strategy for financial platforms, structuring share pages, and driving organic rankings through keyword clustering.</p>
                    </div>
                    <div className="relative pl-8 border-l-2 border-blue-100">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-300 border-4 border-white"></div>
                      <p className="font-extrabold text-[#2C3E50]">Independent SEO Consultant</p>
                      <p className="text-sm text-[#2E75B6] font-bold">Freelance Developer | Aug 2020 – Present</p>
                      <p className="text-sm text-gray-600 mt-1">Designing SEO-led strategies across Finance, IT, Healthcare, and Real Estate. Built high-converting landing pages and structured blog ecosystems.</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100">
                  <h3 className="text-xl font-bold text-[#2E75B6] mb-4 flex items-center">
                    <GraduationCap className="mr-3" /> Education
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex flex-col">
                      <span className="font-bold text-[#2C3E50]">Master's in English Language & Literature</span>
                      <span className="text-sm text-gray-600">Indira Gandhi National Open University | 2022</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-bold text-[#2C3E50]">B.A. in English Literature</span>
                      <span className="text-sm text-gray-600">Delhi University | 2018</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative group">
               <div className="absolute inset-0 bg-[#2E75B6] rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
               <div className="relative bg-white p-6 rounded-[3rem] shadow-xl border border-gray-100 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600" alt="SEO Analysis" className="rounded-2xl shadow-lg w-full h-80 object-cover mb-8" />
                  <div className="p-4 border-l-4 border-[#2E75B6] bg-gray-50 rounded-r-xl">
                    <p className="italic text-gray-700 text-lg font-medium leading-relaxed">
                      "My methodology centers on structured content ecosystems—mapping search intent precisely to business growth objectives."
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold mb-5">Core Specializations</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">High-impact SEO execution that leverages deep analytical insights to dominate competitive search landscapes.</p>
            </div>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-[#2E75B6] font-extrabold text-lg inline-flex items-center group cursor-pointer border-b-2 border-[#2E75B6]/20 pb-1 hover:border-[#2E75B6] transition-all">
              Start Strategy <ArrowRight size={22} className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center text-[#2E75B6] mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Projects Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold mb-6">Execution Portfolio</h2>
            <p className="text-lg text-gray-600 font-medium">Showcasing high-authority content that delivers Page 1 visibility and sustainable organic traffic.</p>
          </div>

          <div className="space-y-12">
            {PROJECTS.map((project) => (
              <div key={project.id} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-gray-100 grid md:grid-cols-3 gap-12 items-center hover:shadow-xl transition-shadow duration-500">
                <div className="md:col-span-2">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 bg-blue-50 text-[#2E75B6] text-xs font-extrabold uppercase tracking-widest rounded-full">{project.niche}</span>
                    <span className="px-4 py-1.5 bg-gray-100 text-gray-500 text-xs font-extrabold uppercase tracking-widest rounded-full">{project.type}</span>
                    {project.isGhostwritten && (
                      <span className="px-4 py-1.5 bg-orange-50 text-orange-600 text-xs font-extrabold uppercase tracking-widest rounded-full">Ghostwritten</span>
                    )}
                  </div>
                  <h3 className="text-3xl font-extrabold mb-6 text-[#2C3E50]">{project.title}</h3>
                  <div className="grid sm:grid-cols-2 gap-10 mb-10">
                    <div>
                      <h4 className="text-xs font-extrabold text-gray-400 uppercase mb-5 tracking-widest">Strategic Execution</h4>
                      <ul className="space-y-3">
                        {project.role.map((r, i) => (
                          <li key={i} className="flex items-start text-base font-semibold text-gray-600">
                            <ChevronRight size={18} className="mt-0.5 mr-2 text-blue-300 flex-shrink-0" /> {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-gray-400 uppercase mb-5 tracking-widest">Ranking Impact</h4>
                      <ul className="space-y-3">
                        {project.impact.map((imp, i) => (
                          <li key={i} className="flex items-start text-base font-bold text-[#27AE60]">
                            <Zap size={18} className="mt-0.5 mr-2 text-[#FFD700] flex-shrink-0" /> {imp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" className="inline-flex items-center px-8 py-4 bg-[#2E75B6] text-white rounded-2xl font-bold text-lg hover:bg-[#25639b] transition-all shadow-lg">
                      View Live Project <ExternalLink size={20} className="ml-2" />
                    </a>
                  )}
                </div>
                <div className="bg-gray-50 rounded-[2rem] p-8 flex flex-col justify-center border border-gray-100 space-y-6">
                    <div>
                      <span className="block text-gray-400 text-[11px] font-extrabold uppercase mb-2 tracking-widest">Primary Keyword</span>
                      <p className="text-xl font-extrabold text-gray-800">"{project.keyword}"</p>
                    </div>
                    <div>
                      <span className="block text-gray-400 text-[11px] font-extrabold uppercase mb-2 tracking-widest">Word Count</span>
                      <p className="text-xl font-extrabold text-gray-800">{project.wordCount}</p>
                    </div>
                    <div>
                      <span className="block text-gray-400 text-[11px] font-extrabold uppercase mb-2 tracking-widest">Authority Client</span>
                      <p className="text-xl font-extrabold text-[#2E75B6]">{project.client}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold mb-16 text-center">Expertise & Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILL_CATEGORIES.map((cat, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col group hover:bg-white hover:shadow-xl transition-all">
                <h3 className="text-xl font-extrabold mb-8 text-[#2E75B6] border-b-2 border-blue-100 pb-3 group-hover:border-[#2E75B6] transition-colors">{cat.title}</h3>
                <ul className="space-y-4 flex-1">
                  {cat.skills.map((skill, j) => (
                    <li key={j} className="flex items-start text-base font-semibold text-gray-600">
                      <span className="text-[#27AE60] mr-3 font-bold text-lg leading-none">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-gray-100 grid md:grid-cols-2">
            <div className="p-12 md:p-20 bg-[#2C3E50] text-white">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight">Let's Rank Your Content on <span className="text-blue-300">Page 1.</span></h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed font-medium">
                Whether you need a full content audit or an SEO-led growth strategy, I have the proven experience to deliver.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Mail className="text-blue-300" size={28} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-extrabold tracking-widest text-white/40 mb-1">Direct Email</span>
                    <a href={`mailto:${EMAIL}`} className="text-2xl font-bold hover:text-blue-300 transition-colors">{EMAIL}</a>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Linkedin className="text-blue-300" size={28} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-extrabold tracking-widest text-white/40 mb-1">LinkedIn</span>
                    <a href={LINKEDIN} target="_blank" className="text-2xl font-bold hover:text-blue-300 transition-colors">Professional Profile</a>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="text-green-400" size={28} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-extrabold tracking-widest text-white/40 mb-1">WhatsApp Business</span>
                    <a href={WHATSAPP_LINK} target="_blank" className="text-2xl font-bold hover:text-green-400 transition-colors">+91 8076486081</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 flex items-center space-x-4 text-white/60 font-bold">
                 <MapPin size={22} />
                 <span>North Delhi, India | Global Remote Collaboration</span>
              </div>
            </div>

            <div className="p-12 md:p-20 flex flex-col justify-center bg-white">
               <h3 className="text-3xl font-extrabold mb-10">Strategic Specializations:</h3>
               <div className="grid grid-cols-1 gap-5 mb-12">
                 {[
                   'Full-funnel SEO content strategy',
                   'Structured finance blog ecosystems',
                   'Commercial intent keyword clustering',
                   'High-converting transactional copy',
                   'Technical SEO audits for content',
                   'Top-tier domain authority writing'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center space-x-4 p-5 rounded-2xl bg-gray-50 border border-transparent hover:border-gray-100 transition-colors group">
                     <CheckCircle2 size={24} className="text-[#27AE60] flex-shrink-0 group-hover:scale-110 transition-transform" />
                     <span className="text-gray-800 font-bold text-lg">{item}</span>
                   </div>
                 ))}
               </div>
               
               <div className="text-center">
                  <a 
                    href={RESUME_LINK} 
                    target="_blank"
                    download={RESUME_LINK}
                    className="w-full flex items-center justify-center py-5 bg-[#2E75B6] text-white rounded-2xl font-extrabold text-xl hover:bg-[#25639b] transition-all shadow-2xl hover:-translate-y-1"
                  >
                    <Download className="mr-3" /> Get My Full CV
                  </a>
                  <p className="mt-4 text-gray-400 font-extrabold uppercase text-xs tracking-widest flex items-center justify-center space-x-2">
                    <Clock size={16} /> <span>Strategic Response within 24 Hours</span>
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-extrabold text-[#2E75B6] cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            Prashant Sharma
          </div>
          <div className="flex space-x-10 text-gray-500 font-bold text-sm uppercase tracking-widest">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[#2E75B6] transition-colors">About</a>
            <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="hover:text-[#2E75B6] transition-colors">Work</a>
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-[#2E75B6] transition-colors">Skills</a>
          </div>
          <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Prashant Sharma. SEO Content Strategy.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;