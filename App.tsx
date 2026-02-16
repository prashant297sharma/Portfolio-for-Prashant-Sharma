
import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
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
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { 
  PROJECTS, 
  SKILL_CATEGORIES, 
  SERVICES, 
  EXPERIENCE,
  EDUCATION,
  COLORS 
} from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const titleEl = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Initialize Typed.js for the hero headline
    // Target duration: 0.5s (500ms). String length is ~75 characters.
    // 500 / 75 = ~6.6ms per character.
    const typed = new Typed(titleEl.current, {
      strings: ['SEO Content Strategist Who Delivers <span class="text-[#2E75B6]">#1 Rankings</span> and Drives Organic Growth'],
      typeSpeed: 6.5,
      startDelay: 0,
      showCursor: true,
      cursorChar: '|',
      loop: false,
      contentType: 'html',
      onComplete: (self) => {
        // Remove cursor after 2 seconds
        setTimeout(() => {
          const cursor = document.querySelector('.typed-cursor');
          if (cursor) (cursor as HTMLElement).style.display = 'none';
        }, 2000);
      }
    });

    return () => {
      typed.destroy();
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

  const RESUME_LINK = "Prashant_Sharma_Resume.pdf";
  const WHATSAPP_LINK = "https://wa.me/918076486081";
  const EMAIL = "prashant29freelancewriter@gmail.com";
  const LINKEDIN = "https://www.linkedin.com/in/prashant-sharma-74319a154/";

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
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-[#2E75B6] transition-colors">Experience</a>
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
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="block py-2 text-lg font-medium">Experience</a>
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
            <Award size={18} className="mr-2" /> 6+ Years of SEO Excellence
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-8 max-w-4xl tracking-tight min-h-[1.2em]" aria-label="SEO Content Strategist Who Delivers #1 Rankings and Drives Organic Growth">
            <span className="hero-title-content" ref={titleEl}></span>
            <span className="hero-title-static">SEO Content Strategist Who Delivers <span className="text-[#2E75B6]">#1 Rankings</span> and Drives Organic Growth</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed font-medium">
            Expert in structured content ecosystems, search intent mapping, and analytics-driven optimization aligned with business growth objectives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start mb-16">
            <a 
              href={RESUME_LINK} 
              target="_blank"
              download
              className="flex items-center justify-center px-10 py-5 bg-[#2C3E50] text-white rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-xl hover:-translate-y-1"
            >
              <FileText size={22} className="mr-3" /> Download Resume
            </a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              className="flex items-center justify-center px-10 py-5 bg-white text-[#2C3E50] border-2 border-[#2C3E50] rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-sm hover:-translate-y-1"
            >
              <MessageCircle size={22} className="mr-3 text-green-500" /> Let's Talk on WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-y-4 gap-x-12 text-gray-600">
            <div className="flex items-center space-x-3 group">
              <CheckCircle2 size={22} className="text-[#27AE60] group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg">6+ years SEO experience</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <CheckCircle2 size={22} className="text-[#27AE60] group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg">Multiple #1 SERP rankings</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <CheckCircle2 size={22} className="text-[#27AE60] group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg">Authority Content Production</span>
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
              <h2 className="text-4xl font-extrabold mb-8">Strategist by Mind, <span className="text-[#2E75B6]">Writer by Heart.</span></h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                I am a Strategic Content Strategist with 6+ years of experience driving SEO-led content growth across finance and multi-industry domains. I specialize in building content architecture that actually converts.
              </p>
              
              <div className="space-y-8">
                <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-[#2E75B6] mb-5 uppercase tracking-wider text-sm">Professional Summary:</h3>
                  <ul className="space-y-4">
                    {[
                      'Expertise in structured content ecosystems and search intent mapping',
                      'Proven record of keyword clustering and analytics-driven optimization',
                      'Experienced in finance, IT, healthcare, real estate, and lifestyle',
                      'Master\'s degree background with focus on audience engagement'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 size={18} className="text-[#27AE60] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative group">
               <div className="absolute inset-0 bg-[#2E75B6] rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
               <div className="relative bg-white p-6 rounded-[3rem] shadow-xl border border-gray-100 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600" alt="Writing Workspace" className="rounded-2xl shadow-lg w-full h-80 object-cover mb-8" />
                  <div className="p-4 border-l-4 border-[#2E75B6] bg-gray-50 rounded-r-xl">
                    <p className="italic text-gray-700 text-lg font-medium leading-relaxed">
                      "Content without strategy is just noise. I build data-driven architectures that ensure your message reaches the right audience at the right time."
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-16">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-[#2E75B6]">
              <Briefcase size={28} />
            </div>
            <h2 className="text-4xl font-extrabold">Professional Experience</h2>
          </div>
          
          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative pl-10 border-l-2 border-blue-100">
                <div className="absolute w-6 h-6 bg-blue-500 rounded-full -left-[13px] top-0 border-4 border-white shadow-sm"></div>
                <div className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#2C3E50]">{exp.role}</h3>
                      <p className="text-xl font-bold text-[#2E75B6]">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end">
                      <span className="px-4 py-1 bg-blue-100 text-[#2E75B6] rounded-full font-bold text-sm mb-2">{exp.period}</span>
                      {exp.location && <span className="text-gray-500 flex items-center text-sm font-semibold"><MapPin size={14} className="mr-1" /> {exp.location}</span>}
                    </div>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start">
                        <Check size={18} className="text-[#27AE60] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
            <p className="text-lg text-gray-600 font-medium">In-depth strategic content pieces that achieved Page 1 rankings and dominated search intent.</p>
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
                      <h4 className="text-xs font-extrabold text-gray-400 uppercase mb-5 tracking-widest">My Strategic Role</h4>
                      <ul className="space-y-3">
                        {project.role.map((r, i) => (
                          <li key={i} className="flex items-start text-base font-semibold text-gray-600">
                            <ChevronRight size={18} className="mt-0.5 mr-2 text-blue-300 flex-shrink-0" /> {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-gray-400 uppercase mb-5 tracking-widest">SEO Impact</h4>
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
                      <span className="block text-gray-400 text-[11px] font-extrabold uppercase mb-2 tracking-widest">Target Keyword</span>
                      <p className="text-xl font-extrabold text-gray-800">"{project.keyword}"</p>
                    </div>
                    <div>
                      <span className="block text-gray-400 text-[11px] font-extrabold uppercase mb-2 tracking-widest">Word Count</span>
                      <p className="text-xl font-extrabold text-gray-800">{project.wordCount}</p>
                    </div>
                    <div>
                      <span className="block text-gray-400 text-[11px] font-extrabold uppercase mb-2 tracking-widest">Client</span>
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

      {/* Education & Technical Tools */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-[#2E75B6]">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-3xl font-extrabold">Education</h2>
            </div>
            <div className="space-y-8">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-extrabold text-[#2C3E50] mb-2">{edu.degree}</h3>
                  <p className="text-lg font-bold text-[#2E75B6] mb-2">{edu.institution}</p>
                  <span className="text-gray-500 font-bold">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-[#2E75B6]">
                <Zap size={28} />
              </div>
              <h2 className="text-3xl font-extrabold">Technical Tools</h2>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs font-extrabold text-gray-400 uppercase mb-4 tracking-widest">Analytics & Search</h4>
                <p className="text-lg font-bold text-gray-700">Google Analytics</p>
                <p className="text-lg font-bold text-gray-700">Google Search Console</p>
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-gray-400 uppercase mb-4 tracking-widest">SEO Research</h4>
                <p className="text-lg font-bold text-gray-700">Ahrefs / SEMrush</p>
                <p className="text-lg font-bold text-gray-700">Surfer SEO</p>
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-gray-400 uppercase mb-4 tracking-widest">CMS & QA</h4>
                <p className="text-lg font-bold text-gray-700">WordPress</p>
                <p className="text-lg font-bold text-gray-700">Grammarly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2C3E50] rounded-[4rem] shadow-2xl overflow-hidden grid md:grid-cols-2">
            <div className="p-12 md:p-20 text-white">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight">Let's Build Content That <span className="text-blue-300">Dominates.</span></h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed font-medium">
                Ready to drive measurable organic growth? Whether you need a strategist who understands SERP dynamics or execution that delivers #1 rankings, let's talk.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Mail className="text-blue-300" size={28} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-extrabold tracking-widest text-white/40 mb-1">Email</span>
                    <a href={`mailto:${EMAIL}`} className="text-2xl font-bold hover:text-blue-300 transition-colors">{EMAIL}</a>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Linkedin className="text-blue-300" size={28} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-extrabold tracking-widest text-white/40 mb-1">LinkedIn</span>
                    <a href={LINKEDIN} target="_blank" className="text-2xl font-bold hover:text-blue-300 transition-colors">Connect on LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 md:p-20 flex flex-col justify-center bg-white">
               <h3 className="text-3xl font-extrabold mb-10 text-[#2C3E50]">Strategic Specializations:</h3>
               <div className="grid grid-cols-1 gap-5 mb-12">
                 {[
                   'Full-funnel SEO content strategy',
                   'Actionable investor intelligence guides',
                   'Technical B2B articles',
                   'Commercial intent keyword clustering',
                   'Ghostwriting for authority brands',
                   'On-page conversion optimization'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center space-x-4 p-5 rounded-2xl bg-gray-50 group">
                     <CheckCircle2 size={24} className="text-[#27AE60] flex-shrink-0 group-hover:scale-110 transition-transform" />
                     <span className="text-gray-800 font-bold text-lg">{item}</span>
                   </div>
                 ))}
               </div>

               <div className="flex flex-col gap-5">
                  <div className="text-center">
                    <a 
                      href={`mailto:${EMAIL}?subject=Project Inquiry from Portfolio`} 
                      className="w-full block py-5 bg-[#2E75B6] text-white rounded-2xl font-extrabold text-xl hover:bg-[#25639b] transition-all text-center shadow-2xl hover:-translate-y-1 mb-3"
                    >
                      Start A Project
                    </a>
                    <a 
                      href={`mailto:${EMAIL}?subject=Project Inquiry from Portfolio`} 
                      className="text-[#2E75B6] font-bold text-base hover:underline decoration-2 underline-offset-4"
                    >
                      {EMAIL}
                    </a>
                  </div>
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
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="hover:text-[#2E75B6] transition-colors">Work</a>
            <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="hover:text-[#2E75B6] transition-colors">Portfolio</a>
          </div>
          <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Prashant Sharma.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
