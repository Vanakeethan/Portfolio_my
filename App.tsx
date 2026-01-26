
import React, { useState, useEffect, useMemo } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Menu,
  X,
  BookOpen,
  Sun,
  Moon,
  ArrowRight,
  Terminal,
  Cpu,
  Instagram,
  BookText,
  Download
} from 'lucide-react';
import {
  CONTACT,
  SUMMARY,
  EXPERIENCES,
  SKILLS,
  PROJECTS,
  EDUCATION,
  ACHIEVEMENTS,
  CV_URL
} from './constants';

type Tab = 'home' | 'about' | 'experience' | 'skills' | 'projects' | 'contact';

// High-fidelity Unsplash images specifically curated for each project theme
const PROJECT_IMAGES: Record<string, string> = {
  "AI-Driven Financial Market Analysis": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200",
  "Enterprise Reimbursement Platform": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
  "Industrial Boiler Monitoring System": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
  "Scalable Microservices Media Hub": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200"
};

const SKILL_ICON_MAP: Record<string, string> = {
  // Languages
  "Java": "openjdk",
  "Python": "python",
  "C": "c",
  "HTML/CSS": "html5",
  "JavaScript": "javascript",
  "Bash": "gnubash",

  // DevOps Tools
  "Docker": "docker",
  "Jenkins": "jenkins",
  "Kubernetes": "kubernetes",
  "Ansible": "ansible",
  "Terraform": "terraform",
  "Prometheus": "prometheus",
  "Grafana": "grafana",
  "Git": "git",

  // Technologies/ Frameworks
  "Spring Boot": "springboot",
  "React.js": "react",
  "Tailwind": "tailwindcss",
  "Bootstrap": "bootstrap",
  "Material-UI": "mui",

  // Cloud Platform
  "AWS": "amazonaws",
  "Azure": "microsoftazure",
  "Google Cloud": "googlecloud",

  // Database
  "MySQL": "mysql",
  "MongoDB": "mongodb",
  "PostgreSQL": "postgresql",

  // Operating System
  "Windows": "windows11",
  "MacOS": "apple",
  "Linux": "linux",

  // Developer Tools
  "GitHub": "github",
  "VS Code": "visualstudiocode",
  "PyCharm": "pycharm",
  "Kaggle": "kaggle",
  "Google Colab": "googlecolab",
  "IntelliJ IDEA": "intellijidea",
  "Postman": "postman"
};

const GITHUB_URL = "https://github.com/vanakeethan";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Copyright protection
  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      setShowCopyToast(true);
      setTimeout(() => setShowCopyToast(false), 3000);
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setShowCopyToast(true);
      setTimeout(() => setShowCopyToast(false), 3000);
    };

    document.addEventListener('copy', handleCopy);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  // Professional background elements - subtle and clean
  const backgroundElements = useMemo(() => (
    <>
      {/* Subtle corner accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-zinc-100/30 via-transparent to-transparent dark:from-zinc-800/20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-zinc-100/30 via-transparent to-transparent dark:from-zinc-800/20 pointer-events-none"></div>

      {/* Minimal geometric accents */}
      <div className="absolute top-[15%] right-[10%] w-1 h-32 bg-gradient-to-b from-transparent via-zinc-300/40 to-transparent dark:via-zinc-700/30 rotate-45"></div>
      <div className="absolute bottom-[20%] left-[15%] w-1 h-24 bg-gradient-to-b from-transparent via-zinc-300/40 to-transparent dark:via-zinc-700/30 -rotate-45"></div>
    </>
  ), []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeTab, isMenuOpen]);

  const navLinks: { name: string, id: Tab }[] = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Technical Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Connect', id: 'contact' },
  ];

  const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="animate-fade-in-up w-full px-4 sm:px-0">
      {children}
    </div>
  );

  const SectionHeading: React.FC<{ title: string; subtitle?: string; onViewAll?: () => void }> = ({ title, subtitle, onViewAll }) => (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-16 gap-6 group">
      <div className="max-w-xl cursor-default text-left">
        <h2 className="text-zinc-400 dark:text-zinc-600 font-bold mb-2 sm:mb-4 uppercase tracking-[0.4em] text-[10px] transform group-hover:translate-x-1 transition-transform">{subtitle}</h2>
        <h3 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 heading-transition">{title}</h3>
      </div>
      {onViewAll && (
        <button
          onClick={onViewAll}
          className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all hover:scale-105 active:scale-95 py-2 cursor-pointer"
        >
          Explore All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  );

  const SkillIcon = ({ name, size = "w-5 h-5" }: { name: string; size?: string }) => {
    const slug = SKILL_ICON_MAP[name];
    if (!slug) return <div className={`${size} bg-zinc-400 rounded-full opacity-30`} />;

    return (
      <img
        src={`https://cdn.simpleicons.org/${slug}`}
        alt={name}
        loading="lazy"
        className={`${size} opacity-60 group-hover:opacity-100 transition-opacity duration-300 dark:brightness-0 dark:invert`}
        onError={(e) => {
          // Fallback to colored version if default fails
          const target = e.target as HTMLImageElement;
          if (!target.src.includes('/000')) {
            target.src = `https://cdn.simpleicons.org/${slug}/000`;
          }
        }}
      />
    );
  };

  const handleTabChange = (id: Tab) => {
    setActiveTab(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden selection:bg-zinc-200 dark:selection:bg-zinc-800">
      {/* Copyright Toast */}
      <div
        className={`fixed top-24 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 rounded-full bg-zinc-900/90 dark:bg-zinc-100/90 backdrop-blur-md text-zinc-50 dark:text-zinc-900 text-xs font-bold uppercase tracking-widest shadow-2xl transition-all duration-300 transform ${showCopyToast ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}
      >
        © Content Copyright Protected
      </div>

      {/* BACKGROUND - Professional & Clean */}
      <div className="fixed inset-0 z-[-1] pointer-events-none" aria-hidden="true">
        {/* Base color */}
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-1000"></div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100/50 via-zinc-50 to-zinc-100/30 dark:from-zinc-900/30 dark:via-zinc-950 dark:to-zinc-900/20"></div>

        {/* Refined grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.03)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>

        {/* Geometric accents */}
        {backgroundElements}
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-[100] bg-zinc-50/70 dark:bg-zinc-950/70 backdrop-blur-2xl border-b border-zinc-200/30 dark:border-zinc-800/30 py-3 lg:py-6 transition-all duration-500">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <button
            onClick={() => handleTabChange('home')}
            className="text-lg font-black tracking-tighter text-zinc-900 dark:text-zinc-50 hover:opacity-70 transition-all flex items-center gap-2 relative z-[110] cursor-pointer"
          >
            VANAKEETHAN<span className="text-zinc-400 font-light">.</span>
          </button>

          <div className="flex items-center gap-3 lg:gap-12">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all rounded-full border border-zinc-200/50 dark:border-zinc-800/50 bg-white/10 dark:bg-black/10 active:scale-90 cursor-pointer relative z-[110]"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleTabChange(link.id)}
                  className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-zinc-900 dark:hover:text-zinc-50 relative group py-2 cursor-pointer ${activeTab === link.id ? 'text-zinc-900 dark:text-zinc-50' : 'text-zinc-400 dark:text-zinc-600'
                    }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-zinc-900 dark:bg-zinc-50 transition-all duration-300 ${activeTab === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>
              ))}
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl"
              >
                <Download size={14} /> CV
              </a>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 text-zinc-900 dark:text-zinc-50 border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl bg-white/10 dark:bg-black/10 transition-all active:scale-90 z-[110] relative cursor-pointer"
              aria-expanded={isMenuOpen}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Improved Mobile & Tablet Full-screen Overlay with Refined Fluidity */}
        <div className={`lg:hidden fixed inset-0 w-full h-screen bg-zinc-100/40 dark:bg-zinc-950/40 backdrop-blur-[40px] transition-all ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden z-[105] flex items-center justify-center ${isMenuOpen ? 'translate-y-0 opacity-100 duration-700' : '-translate-y-full opacity-0 duration-500'}`}>
          {/* Decorative floating shapes for depth inside menu */}
          <div className="absolute top-[10%] left-[20%] w-64 h-64 bg-zinc-300/10 dark:bg-zinc-600/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-[10%] right-[20%] w-64 h-64 bg-zinc-400/10 dark:bg-zinc-500/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div className={`relative flex flex-col items-center justify-center w-full max-w-lg px-8 py-12 rounded-[3rem] bg-white/20 dark:bg-zinc-900/20 border border-white/30 dark:border-white/10 shadow-2xl backdrop-blur-md mx-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? 'scale-100 translate-y-0' : 'scale-90 translate-y-12'}`}>
            <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-4 w-full text-center">
              {navLinks.map((link, idx) => (
                <button
                  key={link.id}
                  onClick={() => handleTabChange(link.id)}
                  style={{
                    transitionDelay: isMenuOpen ? `${idx * 60 + 100}ms` : '0ms',
                    transitionProperty: 'transform, opacity, background-color'
                  }}
                  className={`text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter transition-all duration-500 transform py-4 px-8 w-full cursor-pointer group relative rounded-2xl overflow-hidden flex items-center justify-center ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${activeTab === link.id ? 'text-zinc-950 dark:text-zinc-50 bg-white/40 dark:bg-white/10' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'}`}
                >
                  <span className="relative z-10 flex items-center gap-4">
                    {activeTab === link.id && <div className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-50 animate-pulse"></div>}
                    {link.name}
                  </span>
                  {/* Subtle hover background effect */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
                </button>
              ))}
            </div>

            <div className={`mt-10 pt-10 border-t border-white/20 dark:border-white/5 flex items-center justify-center gap-8 transition-all duration-1000 delay-[400ms] ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 dark:bg-white/5 rounded-full text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all active:scale-90"><Github size={24} /></a>
              <a href={`https://${CONTACT.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 dark:bg-white/5 rounded-full text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all active:scale-90"><Linkedin size={24} /></a>
              <a href={`mailto:${CONTACT.email}`} className="p-3 bg-white/10 dark:bg-white/5 rounded-full text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all active:scale-90"><Mail size={24} /></a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-24 sm:pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-6 md:px-12">

          {/* HOME VIEW */}
          {activeTab === 'home' && (
            <PageTransition>
              <div className="max-w-6xl mx-auto space-y-20 sm:space-y-32 lg:space-y-48">
                {/* Hero - Responsive scaling synchronized for mobile/desktop impact */}
                <div className="min-h-[50vh] sm:min-h-[55vh] lg:min-h-[65vh] flex flex-col justify-center text-center px-4">
                  <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 lg:mb-14 text-[9px] sm:text-[10px] font-black text-zinc-500 bg-zinc-100/50 dark:bg-zinc-900/50 dark:text-zinc-400 rounded-full uppercase tracking-[0.4em] border border-zinc-200 dark:border-zinc-800 w-fit mx-auto animate-float">
                    <Cpu size={14} /> Engineering Scalability
                  </div>
                  <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[11rem] font-black text-zinc-950 dark:text-zinc-50 leading-[0.82] mb-10 lg:mb-20 tracking-tighter cursor-default">
                    DEVOPS <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-500 to-zinc-950 dark:from-zinc-200 dark:to-zinc-600">ENGINEER.</span>
                  </h1>
                  <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-zinc-400 dark:text-zinc-500 max-w-4xl mx-auto font-light leading-snug tracking-tight px-4 sm:px-0 mb-12">
                    Architecting high-availability infrastructure and automated GitOps lifecycles for the modern web.
                  </p>

                  <div className="flex justify-center">
                    <a
                      href={CV_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900/90 dark:bg-zinc-50/90 backdrop-blur-sm text-zinc-50 dark:text-zinc-900 rounded-full font-black uppercase tracking-[0.3em] text-[11px] hover:scale-105 hover:bg-zinc-900 dark:hover:bg-zinc-50 active:scale-95 transition-all shadow-2xl border border-zinc-800 dark:border-zinc-200"
                    >
                      <Download size={18} /> Download CV
                    </a>
                  </div>
                </div>

                {/* About Preview */}
                <section className="pt-16 border-t border-zinc-200 dark:border-zinc-800">
                  <SectionHeading title="About" subtitle="01" onViewAll={() => handleTabChange('about')} />
                  <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-zinc-800 dark:text-zinc-200 font-light leading-snug tracking-tight text-left">
                      {SUMMARY}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-8">
                      <div className="group p-6 lg:p-10 bg-zinc-100/30 dark:bg-zinc-900/30 backdrop-blur-xl rounded-[1.5rem] lg:rounded-[2rem] border border-zinc-200 dark:border-zinc-800 hover:scale-[1.02] transition-all duration-500 text-left">
                        <MapPin size={24} className="text-zinc-900 dark:text-zinc-100 mb-4 lg:mb-6 group-hover:scale-110 transition-transform" />
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-1">Base Operations</p>
                        <p className="text-lg sm:text-xl lg:text-2xl font-black text-zinc-900 dark:text-zinc-50">{CONTACT.location}</p>
                      </div>
                      <div className="group p-6 lg:p-10 bg-zinc-100/30 dark:bg-zinc-900/30 backdrop-blur-xl rounded-[1.5rem] lg:rounded-[2rem] border border-zinc-200 dark:border-zinc-800 hover:scale-[1.02] transition-all duration-500 text-left">
                        <BookOpen size={24} className="text-zinc-900 dark:text-zinc-100 mb-4 lg:mb-6 group-hover:scale-110 transition-transform" />
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-1">Background</p>
                        <p className="text-lg sm:text-xl lg:text-2xl font-black text-zinc-900 dark:text-zinc-50">B.Sc (Hons) IT</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Experience Preview */}
                <section>
                  <SectionHeading title="Experience" subtitle="02" onViewAll={() => handleTabChange('experience')} />
                  <div className="space-y-6">
                    {EXPERIENCES.map((exp, i) => (
                      <div key={i} className="group p-6 sm:p-8 md:p-10 lg:p-12 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-[2rem] lg:rounded-[3rem] border border-zinc-200/50 dark:border-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-700 flex flex-col md:flex-row justify-between gap-6 md:gap-8 items-start md:items-center">
                        <div className="text-left w-full md:w-auto">
                          <p className="text-zinc-400 font-black text-[9px] uppercase tracking-[0.4em] mb-2">{exp.period}</p>
                          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1 tracking-tighter text-zinc-900 dark:text-zinc-50">{exp.company}</h4>
                          <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em]">{exp.role}</p>
                        </div>
                        <div className="max-w-md w-full opacity-60 group-hover:opacity-100 transition-opacity duration-700 text-left">
                          <p className="text-sm sm:text-base lg:text-lg font-light leading-snug tracking-tight text-zinc-600 dark:text-zinc-400 mb-3">
                            {exp.responsibilities[0]}
                          </p>
                          <div className="flex justify-start">
                            <ArrowRight size={20} className="text-zinc-400 transform group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Technical Skills Preview */}
                <section>
                  <SectionHeading title="Skills" subtitle="03" onViewAll={() => handleTabChange('skills')} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                    {SKILLS.slice(0, 4).map((cat, i) => (
                      <div key={i} className="p-6 lg:p-10 bg-zinc-100/20 dark:bg-zinc-900/20 rounded-[1.5rem] lg:rounded-[2.5rem] border border-zinc-200/50 dark:border-zinc-800/50 flex flex-col items-center text-center group hover:bg-white dark:hover:bg-zinc-900 transition-all duration-700">
                        <h4 className="font-black text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300 mb-8 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors leading-tight break-words w-full">{cat.category}</h4>
                        <div className="flex flex-col gap-4 w-full">
                          {cat.skills.slice(0, 3).map(s => (
                            <div key={s} className="flex items-center gap-2.5 justify-center text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-zinc-50 transition-all duration-500">
                              <SkillIcon name={s} size="w-5 h-5 lg:w-6 lg:h-6" />
                              <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.15em] break-words text-left flex-1">{s}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Projects Preview */}
                <section>
                  <SectionHeading title="Projects" subtitle="04" onViewAll={() => handleTabChange('projects')} />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-12">
                    {PROJECTS.slice(0, 2).map((proj, i) => (
                      <div key={i} className="group flex flex-col bg-white/50 dark:bg-zinc-900/50 rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-zinc-950 dark:hover:border-zinc-50 transition-all duration-700 shadow-sm h-full">
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={PROJECT_IMAGES[proj.title] || `https://picsum.photos/seed/${encodeURIComponent(proj.title)}/1200/800`}
                            alt={proj.title}
                            loading="lazy"
                            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1500ms] group-hover:scale-110"
                          />
                        </div>
                        <div className="p-8 lg:p-10 flex flex-col flex-grow text-left">
                          <h4 className="text-xl sm:text-2xl font-black mb-3 tracking-tighter text-zinc-900 dark:text-zinc-50">{proj.title}</h4>
                          <p className="text-sm text-zinc-500 font-light line-clamp-2">{proj.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* CTA */}
                <section className="relative overflow-hidden group py-16 lg:py-24 px-8 lg:px-20 bg-zinc-900 dark:bg-zinc-100 rounded-[2rem] lg:rounded-[3rem] transition-all duration-1000 hover:rounded-xl mx-4 sm:mx-0">
                  <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 max-w-5xl mx-auto">
                    <div className="text-center md:text-left">
                      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tighter text-zinc-50 dark:text-zinc-950">Let's build.</h3>
                      <p className="text-zinc-400 dark:text-zinc-500 max-w-sm font-light text-base md:text-lg">
                        Available for architectural leadership and strategic automation consulting.
                      </p>
                    </div>
                    <button
                      onClick={() => handleTabChange('contact')}
                      className="px-10 lg:px-14 py-4 lg:py-6 bg-white dark:bg-black text-black dark:text-white rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:scale-105 active:scale-95 transition-all shadow-2xl cursor-pointer"
                    >
                      Connect Gateway
                    </button>
                  </div>
                </section>
              </div>
            </PageTransition>
          )}

          {/* ABOUT */}
          {activeTab === 'about' && (
            <PageTransition>
              <div className="max-w-4xl mx-auto py-8 lg:py-12">
                <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-16 lg:mb-24 tracking-tighter heading-transition">About.</h2>
                <p className="text-lg sm:text-2xl lg:text-3xl text-zinc-700 dark:text-zinc-300 font-light leading-snug tracking-tight mb-16 lg:mb-20">
                  {SUMMARY}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-zinc-200 dark:border-zinc-800 pt-16">
                  <div className="space-y-4 group">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">Engineering Philosophy</h4>
                    <p className="text-lg lg:text-2xl font-bold leading-tight text-zinc-950 dark:text-zinc-50 group-hover:text-zinc-500 transition-colors">Infrastructure should be silent, immutable, and version-controlled through high-fidelity code.</p>
                  </div>
                  <div className="space-y-4 group">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">Deployment Strategy</h4>
                    <p className="text-lg lg:text-2xl font-bold leading-tight text-zinc-950 dark:text-zinc-50 group-hover:text-zinc-500 transition-colors">Obsessive focus on engineering velocity without sacrificing system integrity or security.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 mt-24 lg:mt-32">
                  <div className="space-y-12">
                    <h3 className="text-lg font-black border-b border-zinc-200 dark:border-zinc-800 pb-4 uppercase tracking-[0.3em] text-zinc-400">Academic History</h3>
                    <div className="space-y-12">
                      {EDUCATION.map((edu, i) => (
                        <div key={i} className="group text-left">
                          <p className="text-zinc-400 font-black text-[9px] uppercase tracking-[0.4em] mb-3">{edu.period}</p>
                          <h4 className="text-xl sm:text-2xl lg:text-3xl font-black mb-2 text-zinc-900 dark:text-zinc-50">{edu.institution}</h4>
                          <p className="text-zinc-500 font-medium mb-4 text-sm sm:text-base">{edu.degree}</p>
                          <div className="flex flex-wrap gap-2">
                            {edu.details.map((d, di) => (
                              <span key={di} className="text-[8px] px-2.5 py-1 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full text-zinc-500 uppercase font-bold tracking-widest">{d}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-12">
                    <h3 className="text-lg font-black border-b border-zinc-200 dark:border-zinc-800 pb-4 uppercase tracking-[0.3em] text-zinc-400">Certifications</h3>
                    <div className="space-y-4">
                      {ACHIEVEMENTS.map((ach, i) => (
                        <a key={i} href={ach.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group p-6 lg:p-8 bg-white/50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-100 transition-all duration-500 active:scale-95 cursor-pointer">
                          <span className="font-bold text-sm sm:text-base lg:text-lg text-zinc-900 dark:text-zinc-50 group-hover:tracking-wider transition-all">{ach.name}</span>
                          <ExternalLink size={18} className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-all" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PageTransition>
          )}

          {/* EXPERIENCE */}
          {activeTab === 'experience' && (
            <PageTransition>
              <div className="max-w-4xl mx-auto py-8 lg:py-12">
                <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-16 lg:mb-32 tracking-tighter text-center heading-transition">Experience.</h2>
                <div className="space-y-20 sm:space-y-32 lg:space-y-48">
                  {EXPERIENCES.map((exp, i) => (
                    <div key={i} className="relative group/exp flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24">
                      <div className="md:w-1/3">
                        <div className="md:sticky md:top-48 text-left">
                          <p className="text-zinc-400 font-black text-[10px] uppercase tracking-[0.5em] mb-4">{exp.period}</p>
                          <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest opacity-50">{exp.location}</p>
                        </div>
                      </div>
                      <div className="md:w-2/3 text-left">
                        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 leading-[0.85] tracking-tighter text-zinc-900 dark:text-zinc-50 group-hover/exp:tracking-tight transition-all duration-700">{exp.company}</h3>
                        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-zinc-600 dark:text-zinc-400 mb-8 lg:mb-12 tracking-tight">{exp.role}</p>
                        <ul className="space-y-6 lg:space-y-10">
                          {exp.responsibilities.map((res, ri) => (
                            <li key={ri} className="flex gap-4 sm:gap-6 text-base sm:text-lg lg:text-xl text-zinc-500 font-light leading-snug group-hover/exp:text-zinc-900 dark:group-hover/exp:text-zinc-100 transition-colors">
                              <span className="mt-3 w-1.5 h-1.5 bg-zinc-900 dark:bg-zinc-50 rounded-full flex-shrink-0"></span>
                              {res}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PageTransition>
          )}

          {/* SKILLS */}
          {activeTab === 'skills' && (
            <PageTransition>
              <div className="max-w-6xl mx-auto py-8 lg:py-12">
                <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-16 lg:mb-32 tracking-tighter text-left heading-transition">Skills.</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                  {SKILLS.map((cat, i) => (
                    <div key={i} className="flex flex-col p-8 lg:p-14 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-3xl rounded-[2rem] lg:rounded-[3rem] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-100 transition-all duration-700 group text-left">
                      <div className="flex items-center gap-4 mb-10 lg:mb-12 border-b border-zinc-200/50 dark:border-zinc-800 pb-8 min-h-[60px]">
                        <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                          <Terminal size={24} className="text-zinc-900 dark:text-zinc-50" />
                        </div>
                        <h4 className="font-black text-sm sm:text-base lg:text-lg tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight break-words hyphens-auto flex-1" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>{cat.category}</h4>
                      </div>
                      <div className="space-y-4">
                        {cat.skills.map((skill) => (
                          <div key={skill} className="flex items-center gap-4 px-5 py-4 bg-zinc-50/50 dark:bg-zinc-950/50 rounded-xl border border-zinc-100/50 dark:border-zinc-800/50 hover:translate-x-2 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-500 cursor-default group/skill">
                            <SkillIcon name={skill} size="w-6 h-6 flex-shrink-0" />
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] text-zinc-700 dark:text-zinc-300 group-hover/skill:text-zinc-900 dark:group-hover/skill:text-zinc-50 transition-colors break-words leading-tight">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PageTransition>
          )}

          {/* PROJECTS */}
          {activeTab === 'projects' && (
            <PageTransition>
              <div className="max-w-6xl mx-auto py-8 lg:py-12">
                <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-16 lg:mb-32 tracking-tighter text-center heading-transition">Projects.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16">
                  {PROJECTS.map((proj, i) => (
                    <div key={i} className="group flex flex-col h-full bg-white dark:bg-zinc-950 rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 hover:border-zinc-900 dark:hover:border-zinc-100 transition-all duration-1000 shadow-md">
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img
                          src={PROJECT_IMAGES[proj.title] || `https://picsum.photos/seed/${encodeURIComponent(proj.title)}/1200/800`}
                          alt={proj.title}
                          loading="lazy"
                          className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2000ms] scale-110 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 sm:bottom-10 left-8 sm:left-12 group-hover:-translate-y-2 transition-transform duration-700 text-left">
                          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em] mb-2 block">{proj.year}</span>
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tighter leading-none">{proj.title}</h3>
                        </div>
                      </div>
                      <div className="p-8 lg:p-14 flex flex-col flex-grow text-left">
                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em] mb-6 block">{proj.category}</span>
                        <p className="text-base sm:text-lg lg:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-snug tracking-tight mb-12 lg:mb-16 flex-grow">
                          {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-2.5 mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-900">
                          {proj.technologies.map((tech) => (
                            <span key={tech} className="text-[8px] font-black uppercase tracking-widest px-3 py-1 bg-zinc-100/50 dark:bg-zinc-900/50 text-zinc-400 border border-zinc-200/30 dark:border-zinc-800/30 rounded-full group-hover:border-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-all">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PageTransition>
          )}

          {/* CONNECT */}
          {activeTab === 'contact' && (
            <PageTransition>
              <div className="max-w-4xl mx-auto py-8 lg:py-12 text-center">
                <h2 className="text-5xl sm:text-7xl lg:text-[13rem] font-black mb-16 lg:mb-24 tracking-tighter heading-transition">Connect.</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-32">
                  <a href={`mailto:${CONTACT.email}`} className="p-10 lg:p-16 bg-zinc-950 dark:bg-white text-white dark:text-black rounded-[2rem] lg:rounded-[3rem] hover:scale-[1.02] active:scale-95 transition-all flex flex-col items-center gap-8 shadow-2xl group cursor-pointer text-center">
                    <Mail size={45} className="group-hover:rotate-12 transition-transform duration-500" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-4">Reach Me at</p>
                      <p className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight underline decoration-zinc-500 underline-offset-8 break-all">{CONTACT.email}</p>
                    </div>
                  </a>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="p-10 lg:p-16 bg-white dark:bg-zinc-900 text-black dark:text-white rounded-[2rem] lg:rounded-[3rem] hover:scale-[1.02] active:scale-95 transition-all flex flex-col items-center gap-8 border border-zinc-200 dark:border-zinc-800 shadow-lg group cursor-pointer text-center">
                    <Github size={45} className="group-hover:-rotate-12 transition-transform duration-500" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-4">GitHub</p>
                      <p className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight underline decoration-zinc-500 underline-offset-8">/vanakeethan</p>
                    </div>
                  </a>

                  {/* Download CV Card
                  <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="p-10 lg:p-16 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white rounded-[2rem] lg:rounded-[3rem] hover:scale-[1.02] active:scale-95 transition-all flex flex-col items-center gap-8 border border-zinc-200 dark:border-zinc-700 shadow-lg group cursor-pointer text-center">
                    <Download size={48} className="group-hover:translate-y-2 transition-transform duration-500" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-4">Resume</p>
                      <p className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight underline decoration-zinc-500 underline-offset-8">Download CV</p>
                    </div>
                  </a> */}

                  {CONTACT.instagram && (
                    <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="p-10 lg:p-16 bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white rounded-[2rem] lg:rounded-[3rem] hover:scale-[1.02] active:scale-95 transition-all flex flex-col items-center gap-8 border border-zinc-200 dark:border-zinc-700 shadow-lg group cursor-pointer text-center">
                      <Instagram size={45} className="group-hover:scale-110 transition-transform duration-500" />
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-4">Social Media</p>
                        <p className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight underline decoration-zinc-500 underline-offset-8">/vanakeethan__</p>
                      </div>
                    </a>
                  )}
                  {CONTACT.medium && (
                    <a href={CONTACT.medium} target="_blank" rel="noopener noreferrer" className="p-10 lg:p-16 bg-zinc-950 dark:bg-white text-white dark:text-black rounded-[2rem] lg:rounded-[3rem] hover:scale-[1.02] active:scale-95 transition-all flex flex-col items-center gap-8 shadow-2xl group cursor-pointer text-center">
                      <BookText size={45} className="group-hover:-translate-y-2 transition-transform duration-500" />
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-4">Articles</p>
                        <p className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight underline decoration-zinc-500 underline-offset-8 break-all">@shamdeepvk</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </PageTransition>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 lg:py-20 border-t border-zinc-200 dark:border-zinc-900 mt-auto bg-zinc-50/50 dark:bg-zinc-950/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center gap-10">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-all hover:scale-125 active:scale-90 cursor-pointer p-2" title="GitHub"><Github size={24} /></a>
            <a href={`https://${CONTACT.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-all hover:scale-125 active:scale-90 cursor-pointer p-2" title="LinkedIn"><Linkedin size={24} /></a>
            <a href={`mailto:${CONTACT.email}`} className="text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-all hover:scale-125 active:scale-90 cursor-pointer p-2" title="Email"><Mail size={24} /></a>
            {CONTACT.instagram && <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-all hover:scale-125 active:scale-90 cursor-pointer p-2" title="Instagram"><Instagram size={24} /></a>}
            {CONTACT.medium && <a href={CONTACT.medium} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-all hover:scale-125 active:scale-90 cursor-pointer p-2" title="Medium"><BookText size={24} /></a>}
          </div>
          <div className="text-center group cursor-default">
            <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500 transition-all duration-700 group-hover:tracking-[0.6em] heading-transition">
              © {new Date().getFullYear()} E. Vanakeethan — All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
