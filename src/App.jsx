import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Clock, ArrowRight, ArrowDown, CheckCircle2, Award, 
  ShieldCheck, Target, FileText, BarChart3, BookOpen, 
  MessageSquare, ChevronDown, ChevronUp, Star, Menu, X,
  Dna, Cpu, GraduationCap, Lock, Check, Globe, MapPin,
  Sparkles, Layers, Shield, PenTool
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  // Service data
  const services = [
    {
      id: 1,
      category: 'writing',
      badge: 'Writing & Structuring',
      badgeColor: 'text-[#611b45] bg-pink-50',
      title: 'Full Manuscript Development',
      image: '/assets/images/manuscript-writing.jpg',
      description: 'Comprehensive support from research concept to a publication-ready manuscript, structuring your core data, algorithms, and findings.',
      features: [
        'Structure & novelty formulation',
        'Rigorous technical & mathematical writing',
        'High-clarity figures, tables & schematics'
      ],
      tier: 'Q1–Q3 Indexed Scope'
    },
    {
      id: 2,
      category: 'writing',
      badge: 'Literature Synthesis',
      badgeColor: 'text-[#ea580c] bg-orange-50',
      title: 'Review Article Development',
      image: '/assets/images/review-article.jpg',
      description: 'Well-researched, high-citation systematic review articles based on a verified literature base with PRISMA protocol and meta-analysis.',
      features: [
        'Literature search & indexing databases',
        'Comparative taxonomy & synthesis tables',
        'Critical research gaps & future agenda'
      ],
      tier: 'High Citation Impact'
    },
    {
      id: 3,
      category: 'editing',
      badge: 'Editing & Formatting',
      badgeColor: 'text-[#611b45] bg-pink-50',
      title: 'Technical Editing & Improvement',
      image: '/assets/images/technical-editing.jpg',
      description: 'Enhance your existing manuscript for clarity, academic tone, grammar, and compliance with strict journal author guidelines.',
      features: [
        'Native English polishing & flow',
        'Technical accuracy & logical progression',
        'LaTeX / Overleaf & Word styling'
      ],
      tier: 'Camera-Ready Standard'
    },
    {
      id: 4,
      category: 'data',
      badge: 'Quantitative Rigor',
      badgeColor: 'text-[#ea580c] bg-orange-50',
      title: 'Data Analysis & Interpretation',
      image: '/assets/images/research-analytics.jpg',
      description: 'Statistical computation, machine learning modelling, publication-grade data visualizations, and result discussion drafting.',
      features: [
        'Statistical tools: SPSS, R, Python, MATLAB',
        '300+ DPI vector plots & heatmaps',
        'Quantitative results discussion'
      ],
      tier: 'Custom Code Included'
    },
    {
      id: 5,
      category: 'submission',
      badge: 'Journal Strategy',
      badgeColor: 'text-[#611b45] bg-pink-50',
      title: 'Journal Selection & Submission',
      image: '/assets/images/peer-review-mentorship.jpg',
      description: 'Identify ideal Q1-Q4 journals matching your research scope, avoiding predatory publishers, with complete submission portal handling.',
      features: [
        'Scopus & SCI indexing verification',
        'Cover letter & Highlights drafting',
        'ScholarOne / Editorial Manager portal'
      ],
      tier: 'Zero Predatory Risk'
    },
    {
      id: 6,
      category: 'submission',
      badge: 'Rebuttal & Revisions',
      badgeColor: 'text-[#ea580c] bg-orange-50',
      title: 'Reviewer Response & Revision Support',
      image: '/assets/images/hero-research.jpg',
      description: 'Professional point-by-point rebuttal letters and manuscript revision with tracked changes to satisfy peer-reviewer queries.',
      features: [
        'Point-by-point response matrix',
        'Tracked changes manuscript updating',
        'Additional experiments guidance'
      ],
      tier: 'Highest Acceptance Rate'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  const faqs = [
    {
      q: 'What is the typical turnaround time for manuscript development?',
      a: 'Full manuscript drafting typically requires 3 to 5 weeks depending on domain complexity, data availability, and required statistical simulations. Fast-track options (10-14 business days) are available for urgent university deadlines.'
    },
    {
      q: 'How do you guarantee research integrity and plagiarism compliance?',
      a: 'We operate under a strict zero-plagiarism mandate. Every manuscript includes a verified Turnitin or iThenticate similarity report (<10% similarity score) and full source reproducibility code.'
    },
    {
      q: 'Do you guarantee publication in Q1 or Q2 journals?',
      a: 'While final acceptance is determined by peer-reviewers and journal editors, our rigorous methodology, journal alignment, and pre-submission mock reviews achieve an industry-leading 98.4% first-round or revision acceptance rate.'
    },
    {
      q: 'How do milestone payments work?',
      a: 'Projects are structured in 3 clear milestones: (1) Initial research outline & methodology approval, (2) Draft manuscript & data visualization delivery, and (3) Final camera-ready submission with Turnitin certificate.'
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Excellent support in converting my research into a high-quality manuscript. The team's subject knowledge and professionalism are outstanding.",
      name: "Dr. Ananya S.",
      role: "PhD Scholar, XXX (Delhi)",
      image: "/assets/images/client-ananya.jpg",
      badge: "Q1 IEEE Published"
    },
    {
      id: 2,
      quote: "Their data analysis and writing support significantly improved the quality of my paper. I highly recommend their services.",
      name: "Prof. R. Kumar",
      role: "Associate Professor, XXX",
      image: "/assets/images/client-kumar.jpg",
      badge: "Elsevier Published"
    },
    {
      id: 3,
      quote: "Professional, responsive and reliable. The manuscript was well-structured and submission-ready. Great experience!",
      name: "Dr. Meeta T.",
      role: "Faculty, XXX",
      image: "/assets/images/client-meeta.jpg",
      badge: "Springer Nature"
    },
    {
      id: 4,
      quote: "The point-by-point rebuttal strategy addressed every difficult query from peer reviewers. The manuscript was accepted within four months.",
      name: "Dr. Priya Nair",
      role: "Assistant Professor, NIT",
      image: "/assets/images/client-ananya.jpg",
      badge: "Scopus Q1 Indexed"
    },
    {
      id: 5,
      quote: "Rigorous statistical analysis using Python & SPSS with publication-grade figures. Exceptional attention to scientific detail.",
      name: "Dr. S. Venkatesh",
      role: "Postdoctoral Researcher, IISc",
      image: "/assets/images/client-kumar.jpg",
      badge: "SCI Impact Factor 4.8"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans">
      
      {/* ==========================================
          TOPBAR (Exact Rubrixx Dark Slate Theme)
      =========================================== */}
      <div className="bg-[#0b1325] border-b border-[#17253d] text-xs py-2 text-stone-300 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <ul className="flex items-center space-x-7">
            <li className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-[#ffcc00]" />
              <a href="tel:+918087579068" className="font-medium hover:text-[#ffcc00] transition">+918087579068</a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-[#ffcc00]" />
              <a href="mailto:info@rubrixx.com" className="font-medium hover:text-[#ffcc00] transition">info@rubrixx.com</a>
            </li>
            <li className="flex items-center space-x-2 text-stone-400">
              <Clock className="w-3.5 h-3.5 text-[#ffcc00]" />
              <span>Hours:9:00 AM - 6:00 PM</span>
            </li>
          </ul>

          <div className="flex items-center space-x-4 text-stone-300">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition"><i className="fab fa-facebook-f text-xs"></i></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition"><i className="fab fa-twitter text-xs"></i></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition"><i className="fab fa-instagram text-xs"></i></a>
          </div>
        </div>
      </div>

      {/* ==========================================
          NAVBAR (Exact Rubrixx Navy Blue Theme)
      =========================================== */}
      <header className="bg-gradient-to-r from-[#0c1c38] via-[#102447] to-[#0c1c38] border-b border-[#1b345f] sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Rubrixx Brand Logo - Using actual logo image */}
          <a href="https://www.rubrixx.com/" className="flex items-center group">
            <img 
              src="/assets/images/rubrixx-logo.png" 
              alt="Rubrixx IT Solutions" 
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links matching attached image */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-bold text-white uppercase tracking-wider">
            <a href="https://www.rubrixx.com/" className="hover:text-[#ffcc00] transition">Home</a>
            <a href="#services" className="hover:text-[#ffcc00] transition">Services</a>
            <a href="#pricing" className="hover:text-[#ffcc00] transition">Pricing</a>
            <a href="#packages" className="hover:text-[#ffcc00] transition">Packages</a>
            <a href="#process" className="hover:text-[#ffcc00] transition">Process</a>
            <a href="#testimonials" className="hover:text-[#ffcc00] transition">Testimonials</a>
            <a href="#contact" className="hover:text-[#ffcc00] transition">Contact</a>
          </nav>

          {/* Exact Rubrixx "Get A Quote" Yellow Rectangle Button */}
          <div className="hidden sm:block">
            <a 
              href="#contact" 
              className="bg-[#ffcc00] hover:bg-[#e6b800] text-black font-extrabold text-xs uppercase px-5 py-2.5 rounded-md shadow transition tracking-wider inline-flex items-center"
            >
              Get A Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 rounded-lg text-white hover:bg-[#1a3560] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0c1c38] border-b border-[#1b345f] px-4 py-4 space-y-3 text-xs font-bold text-white uppercase"
            >
              <a href="https://www.rubrixx.com/" className="block py-1 hover:text-[#ffcc00]">Home</a>
              <a href="#services" className="block py-1 hover:text-[#ffcc00]">Services</a>
              <a href="#pricing" className="block py-1 hover:text-[#ffcc00]">Pricing</a>
              <a href="#packages" className="block py-1 hover:text-[#ffcc00]">Packages</a>
              <a href="#process" className="block py-1 hover:text-[#ffcc00]">Process</a>
              <a href="#testimonials" className="block py-1 hover:text-[#ffcc00]">Testimonials</a>
              <a href="#contact" className="block py-1 hover:text-[#ffcc00]">Contact</a>
              <div className="pt-2">
                <a href="#contact" className="bg-[#ffcc00] text-black w-full text-center py-2.5 rounded-md block font-extrabold">
                  Get A Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ==========================================
          SIGNATURE RUBRIXX HERO BANNER
          (Exact Deep Blue Glossy Style from all 5 screenshots)
      =========================================== */}
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-[#19396e]" style={{ backgroundImage: `url('/assets/images/banner-bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0a1931]/80 pointer-events-none">
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Giant Bold White Rubrixx Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Research Support Services
            </h1>
            <p className="text-stone-300 text-sm sm:text-base mt-3 max-w-2xl font-normal leading-relaxed">
              Professional manuscript development, statistical data modeling, LaTeX formatting, and publication assistance in reputed Q1–Q4 Scopus, SCI, and IEEE journals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          SECTION: OVERVIEW & 4 VALUE PILLARS
          (Clean white background matching Rubrixx body)
      =========================================== */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              Turn Your Research into Published Impact
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Rubrixx IT Solutions is the dedicated technology and scientific consulting partner helping PhD scholars, research fellows, and faculty members worldwide publish with academic integrity, methodological rigor, and zero-plagiarism compliance.
            </p>
          </div>

          {/* 4 Pillars - Replaced cheap blue box logos with modern Rubrixx-themed cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-lg bg-orange-50 text-[#ea580c] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1.5">Quality Research Support</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Methodological rigor, structural coherence, and alignment with target journal aim and scope.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-[#611b45] flex items-center space-x-1">
                <span>Q1–Q4 Benchmarked</span>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-lg bg-amber-50 text-[#f59e0b] flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1.5">Subject Matter Expertise</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  PhD-level mentors and journal peer-reviewers across Computer Science, AI, Engineering, and Healthcare.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-[#611b45] flex items-center space-x-1">
                <span>45+ Specialized Domains</span>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1.5">Ethical & Transparent</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Strict zero-plagiarism protocol. Verified Turnitin/iThenticate similarity reports (&lt;10%) included.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-emerald-600 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                <span>100% Originality Report</span>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-lg bg-pink-50 text-[#611b45] flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1.5">On-Time Delivery</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Structured milestone stages with weekly review syncs, meeting your university and conference deadlines.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-[#611b45] flex items-center space-x-1">
                <span>Milestone Tracking</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================
          OFFICIAL ACADEMIC INDEXING & PUBLISHER LOGOS BAR
      =========================================== */}
      <div className="bg-[#fcfaf7] border-y border-stone-200/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5">
            <span className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest">
              Indexed & Published Across Leading Global Scientific Databases
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3.5 items-center justify-center">
            
            {/* Scopus */}
            <div className="brand-badge-card group">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded bg-[#ea580c] text-white flex items-center justify-center font-black text-xs">S</div>
                <div className="text-left">
                  <span className="text-xs font-black tracking-tight text-gray-800 group-hover:text-[#ea580c] transition block leading-none">Scopus</span>
                  <span className="text-[9px] font-semibold text-gray-400">Elsevier</span>
                </div>
              </div>
            </div>

            {/* Web of Science */}
            <div className="brand-badge-card group">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded bg-[#2563eb] text-white flex items-center justify-center text-xs">
                  <i className="fa-solid fa-atom"></i>
                </div>
                <div className="text-left">
                  <span className="text-xs font-black tracking-tight text-gray-800 group-hover:text-[#2563eb] transition block leading-none">Web of Science</span>
                  <span className="text-[9px] font-semibold text-gray-400">Clarivate</span>
                </div>
              </div>
            </div>

            {/* IEEE Xplore */}
            <div className="brand-badge-card group">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded bg-[#0284c7] text-white flex items-center justify-center text-xs">
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <div className="text-left">
                  <span className="text-xs font-black tracking-wide text-gray-800 group-hover:text-[#0284c7] transition block leading-none">IEEE Xplore</span>
                  <span className="text-[9px] font-semibold text-gray-400">Digital Library</span>
                </div>
              </div>
            </div>

            {/* Springer Nature */}
            <div className="brand-badge-card group">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded bg-[#d97706] text-white flex items-center justify-center text-xs">
                  <i className="fa-solid fa-compass"></i>
                </div>
                <div className="text-left">
                  <span className="text-xs font-black tracking-tight text-gray-800 group-hover:text-[#d97706] transition block leading-none">Springer</span>
                  <span className="text-[9px] font-semibold text-gray-400">Nature Series</span>
                </div>
              </div>
            </div>

            {/* Elsevier */}
            <div className="brand-badge-card group">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded bg-[#c2410c] text-white flex items-center justify-center text-xs">
                  <i className="fa-solid fa-tree"></i>
                </div>
                <div className="text-left">
                  <span className="text-xs font-black tracking-tight text-gray-800 group-hover:text-[#c2410c] transition block leading-none">Elsevier</span>
                  <span className="text-[9px] font-semibold text-gray-400">ScienceDirect</span>
                </div>
              </div>
            </div>

            {/* PubMed */}
            <div className="brand-badge-card group">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded bg-[#0d9488] text-white flex items-center justify-center text-xs">
                  <Dna className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-black tracking-tight text-gray-800 group-hover:text-[#0d9488] transition block leading-none">PubMed</span>
                  <span className="text-[9px] font-semibold text-gray-400">NLM / NIH</span>
                </div>
              </div>
            </div>

            {/* UGC-CARE */}
            <div className="brand-badge-card group">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded bg-[#7c3aed] text-white flex items-center justify-center text-xs">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-black tracking-tight text-gray-800 group-hover:text-[#7c3aed] transition block leading-none">UGC-CARE</span>
                  <span className="text-[9px] font-semibold text-gray-400">Group I & II</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ==========================================
          VISUAL CAPABILITIES SHOWCASE
          (Real high-res photography matching 'About Us' cards)
      =========================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] mb-1 block">
              Academic Excellence Hub
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Scientific Precision at Every Stage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Showcase 1: Research Analytics */}
            <motion.div whileHover={{ y: -5 }} className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white group">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src="/assets/images/research-analytics.jpg" 
                  alt="Computational Data Analytics Laboratory" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#ea580c] px-2.5 py-1 rounded text-white inline-block mb-1">
                    Data Analytics & AI
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    Advanced Statistical Analysis & Machine Learning Modeling
                  </h3>
                </div>
              </div>
              <div className="p-6 text-xs text-gray-600 leading-relaxed">
                Empirical justification, hypothesis testing, ANOVA, SEM, and 300+ DPI publication plots using SPSS, R, Python, and MATLAB with full source scripts included.
              </div>
            </motion.div>

            {/* Showcase 2: Peer-Review Mentorship */}
            <motion.div whileHover={{ y: -5 }} className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white group">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src="/assets/images/peer-review-mentorship.jpg" 
                  alt="Editorial Mentorship and Peer Review" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#611b45] px-2.5 py-1 rounded text-white inline-block mb-1">
                    Editorial Desk
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    Peer-Review Mentorship & LaTeX Precision
                  </h3>
                </div>
              </div>
              <div className="p-6 text-xs text-gray-600 leading-relaxed">
                Line-by-line editorial scrutiny, native English flow, LaTeX typesetting in IEEE/Springer/Elsevier author styles, and decisive reviewer rebuttal strategies.
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================
          OUR SERVICES SECTION
          (Exact Rubrixx 3-Column Services Card Grid from Screenshot 2!)
      =========================================== */}
      <section id="services" className="py-16 bg-[#fcfaf7] border-t border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Our Research Services
              </h2>
              <p className="text-gray-500 text-xs mt-1">End-to-end guidance tailored precisely to your manuscript requirements.</p>
            </div>

            {/* Category Filter Pills (Matching Screenshot 4: Plum & Yellow Pills) */}
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                { key: 'all', label: 'All Services' },
                { key: 'writing', label: 'Research Writing' },
                { key: 'data', label: 'Data Analysis' },
                { key: 'editing', label: 'Editing & Polishing' },
                { key: 'submission', label: 'Submission Support' },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-4 py-2 rounded-full font-bold text-xs transition cursor-pointer ${
                    activeCategory === tab.key 
                      ? 'bg-[#611b45] text-white shadow-sm' 
                      : 'bg-[#ffcc00] hover:bg-[#e6b800] text-black'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Column Grid matching Screenshot 2 'Services' */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map(service => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition flex flex-col justify-between overflow-hidden"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <span className={`absolute top-3 left-3 font-bold text-[10px] uppercase px-3 py-1 rounded-full shadow-sm bg-white/95 ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-extrabold text-gray-900 text-base mb-2">{service.title}</h3>
                      <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="text-xs space-y-1.5 text-gray-600 mb-5">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center">
                            <Check className="w-3.5 h-3.5 text-[#ea580c] mr-2 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-900">{service.tier}</span>
                      {/* Rubrixx signature 'Read More ->' in Plum / Wine color */}
                      <a href="#contact" className="text-xs font-bold text-[#611b45] hover:text-[#ea580c] transition flex items-center space-x-1">
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ==========================================
          JOURNAL QUARTILE PRICING PLANS
      =========================================== */}
      <section id="pricing" className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Journal Quartile Pricing Plans
            </h2>
            <p className="text-gray-500 text-xs mt-1">
              Transparent milestone pricing based on journal quartile scope. (Excludes journal APC).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
            
            {/* Guidance Note */}
            <div className="bg-[#111e38] text-white p-6 rounded-2xl flex flex-col justify-between shadow-sm">
              <div>
                <span className="bg-[#ffcc00] text-black text-[10px] font-black px-2.5 py-0.5 rounded uppercase tracking-wider mb-3 inline-block">
                  Guidance Note
                </span>
                <h3 className="text-lg font-bold mb-2 text-white">Choose the right package</h3>
                <p className="text-xs text-stone-300 leading-relaxed mb-6">
                  Pricing is structured around journal impact factor and the level of expert intervention required.
                </p>
                <div className="space-y-3 border-t border-stone-700/80 pt-4 text-xs">
                  <div className="flex items-center space-x-2 text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#ffcc00]" />
                    <span>Peer-Review Quality</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white">
                    <Lock className="w-4 h-4 text-[#ffcc00]" />
                    <span>100% Confidentiality & NDA</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white">
                    <Clock className="w-4 h-4 text-[#ffcc00]" />
                    <span>Timely Milestones</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-700">
                <a href="tel:+918087579068" className="text-xs text-[#ffcc00] hover:text-white font-bold flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call +91 80875 79068</span>
                </a>
              </div>
            </div>

            {/* Q1 Journals */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
              <div className="bg-[#611b45] text-white p-5 text-center">
                <h4 className="font-extrabold text-base text-white">Q1 Journals</h4>
                <p className="text-[11px] text-pink-200">Top-tier journals with highest impact</p>
              </div>
              <div className="p-5 flex-1 text-xs divide-y divide-gray-100">
                <div className="py-2 flex justify-between"><span className="text-gray-600">Full manuscript</span><span className="font-bold text-gray-900">₹60,000</span></div>
                <div className="py-2 flex justify-between"><span className="text-gray-600">Review article</span><span className="font-bold text-gray-900">₹45,000</span></div>
                <div className="py-2 flex justify-between"><span className="text-gray-600">Technical editing</span><span className="font-bold text-gray-900">₹20,000</span></div>
                <div className="py-2 flex justify-between"><span className="text-gray-600">Data analysis</span><span className="font-bold text-gray-900">₹20,000 – 40k</span></div>
                <div className="py-2 flex justify-between"><span className="text-gray-600">Journal submission</span><span className="font-bold text-gray-900">₹8,000</span></div>
              </div>
              <div className="bg-stone-50 p-5 border-t border-stone-100 mt-auto">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-bold text-gray-900 text-xs">Complete Package</span>
                  <span className="text-lg font-black text-[#ea580c]">₹75,000</span>
                </div>
                <a href="#contact" className="bg-[#ffcc00] hover:bg-[#e6b800] text-black font-extrabold text-xs w-full text-center py-2.5 rounded-md block uppercase tracking-wider">
                  Select Q1
                </a>
              </div>
            </div>

            {/* Q2 Journals (Featured) */}
            <div className="bg-white rounded-2xl border-2 border-[#ea580c] shadow-md flex flex-col overflow-hidden relative">
              <div className="bg-[#ea580c] text-white p-5 text-center">
                <h4 className="font-extrabold text-base text-white">Q2 Journals</h4>
                <p className="text-[11px] text-orange-100">Well-respected journals with strong reputation</p>
              </div>
              <div className="p-5 flex-1 text-xs divide-y divide-gray-100">
                <div className="py-2 flex justify-between"><span className="text-gray-600">Full manuscript</span><span className="font-bold text-gray-900">₹40,000</span></div>
                <div className="py-2 flex justify-between"><span className="text-gray-600">Review article</span><span className="font-bold text-gray-900">₹30,000</span></div>
                <div className="py-2 flex justify-between"><span className="text-gray-600">Technical editing</span><span className="font-bold text-gray-900">₹15,000</span></div>
                <div className="py-2 flex justify-between"><span className="text-gray-600">Data analysis</span><span className="font-bold text-gray-900">₹15,000 – 30k</span></div>
                <div className="py-2 flex justify-between"><span className="text-gray-600">Journal submission</span><span className="font-bold text-gray-900">₹6,000</span></div>
              </div>
              <div className="bg-orange-50/70 p-5 border-t border-orange-100 mt-auto">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-bold text-gray-900 text-xs">Complete Package</span>
                  <span className="text-lg font-black text-[#ea580c]">₹55,000</span>
                </div>
                <a href="#contact" className="bg-[#ffcc00] hover:bg-[#e6b800] text-black font-extrabold text-xs w-full text-center py-2.5 rounded-md block uppercase tracking-wider">
                  Select Q2
                </a>
              </div>
            </div>

            {/* Q3 Journals */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
              <div className="bg-stone-800 text-white p-5 text-center">
                <h4 className="font-extrabold text-base text-white">Q3 Journals</h4>
                <p className="text-[11px] text-stone-300">Reputed journals with good visibility</p>
              </div>
              <div className="p-5 flex-1 text-xs divide-y divide-gray-100">
                <div className="py-2 flex justify-between"><span className="text-gray-600">Full manuscript</span><span className="font-bold text-gray-900">₹25,000</span></div>
                <div className="py-2 flex justify-between"><span className="text-gray-600">Review article</span><span className="font-bold text-gray-900">₹20,000</span></div>
                <div className="py-2 flex justify-between"><span className="text-gray-600">Technical editing</span><span className="font-bold text-gray-900">₹10,000</span></div>
                <div className="py-2 flex justify-between"><span className="text-gray-600">Data analysis</span><span className="font-bold text-gray-900">₹10,000 – 20k</span></div>
                <div className="py-2 flex justify-between"><span className="text-gray-600">Journal submission</span><span className="font-bold text-gray-900">₹4,000</span></div>
              </div>
              <div className="bg-stone-50 p-5 border-t border-stone-100 mt-auto">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-bold text-gray-900 text-xs">Complete Package</span>
                  <span className="text-lg font-black text-stone-900">₹40,000</span>
                </div>
                <a href="#contact" className="bg-[#ffcc00] hover:bg-[#e6b800] text-black font-extrabold text-xs w-full text-center py-2.5 rounded-md block uppercase tracking-wider">
                  Select Q3
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          ADDITIONAL SERVICES & OUR PACKAGES SPLIT
          (Directly from attached reference design)
      =========================================== */}
      <section id="packages" className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Additional Services (On Request) */}
            <div className="lg:col-span-5 bg-white p-7 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-base">
                      Additional Services <span className="text-xs font-normal text-gray-400">(On Request)</span>
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">Available modularly on request</p>
                  </div>
                  <span className="bg-orange-50 text-[#ea580c] text-xs font-bold px-2.5 py-0.5 rounded-md">
                    Add-ons
                  </span>
                </div>

                <div className="divide-y divide-gray-100 text-xs">
                  <div className="py-3.5 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-7 h-7 rounded-lg bg-orange-50 text-[#ea580c] flex items-center justify-center text-xs flex-shrink-0">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700 font-medium">Advanced statistical analysis</span>
                    </div>
                    <span className="font-bold text-gray-900">₹10,000 – 24,000+</span>
                  </div>

                  <div className="py-3.5 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-xs flex-shrink-0">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700 font-medium">Machine learning & AI/ML modelling</span>
                    </div>
                    <span className="font-bold text-gray-900">₹14,000 – 40,000+</span>
                  </div>

                  <div className="py-3.5 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-7 h-7 rounded-lg bg-orange-50 text-[#ea580c] flex items-center justify-center text-xs flex-shrink-0">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700 font-medium">Systematic review & meta-analysis</span>
                    </div>
                    <span className="font-bold text-gray-900">₹14,000 – 25,000+</span>
                  </div>

                  <div className="py-3.5 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-xs flex-shrink-0">
                        <PenTool className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700 font-medium">Graphics, illustrations & figure design</span>
                    </div>
                    <span className="font-bold text-gray-900">₹5,000 – 15,000+</span>
                  </div>

                  <div className="py-3.5 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-7 h-7 rounded-lg bg-pink-50 text-[#611b45] flex items-center justify-center text-xs flex-shrink-0">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700 font-medium">Subject-specific expertise (medical, eng., etc.)</span>
                    </div>
                    <span className="font-bold text-gray-900">₹10,000 – 30,000+</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-gray-400 mt-6 pt-4 border-t border-gray-100">
                Complex projects, large datasets or specialised domains may require custom quotations.
              </p>
            </div>

            {/* Right: Curated Ready Packages */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="mb-4">
                <h3 className="font-extrabold text-gray-900 text-lg">Our Packages</h3>
                <p className="text-xs text-gray-500">Pick a structured bundled package for swift milestone execution.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 items-stretch">
                
                {/* Essential */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:border-amber-300 transition">
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Essential</span>
                    <div className="text-2xl font-extrabold text-gray-900 mt-1 mb-1">₹25,000+</div>
                    <p className="text-[11px] text-gray-400 mb-5 pb-3 border-b border-gray-100">Basic writing & editing support</p>
                    
                    <ul className="text-xs space-y-2.5 text-gray-600">
                      <li className="flex items-start">
                        <Check className="w-3.5 h-3.5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Manuscript development / editing</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-3.5 h-3.5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Formatting assistance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-3.5 h-3.5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>1 round of revisions</span>
                      </li>
                    </ul>
                  </div>
                  <a 
                    href="#contact" 
                    className="mt-8 w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-extrabold text-xs uppercase tracking-wider py-2.5 rounded-lg text-center block shadow transition"
                  >
                    Get Started
                  </a>
                </div>

                {/* Professional */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:border-amber-300 transition">
                  <div>
                    <span className="text-xs font-bold text-[#059669] uppercase tracking-wider block">Professional</span>
                    <div className="text-2xl font-extrabold text-gray-900 mt-1 mb-1">₹40,000+</div>
                    <p className="text-[11px] text-gray-400 mb-5 pb-3 border-b border-gray-100">Comprehensive support</p>
                    
                    <ul className="text-xs space-y-2.5 text-gray-600">
                      <li className="flex items-start">
                        <Check className="w-3.5 h-3.5 text-[#059669] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Writing + editing</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-3.5 h-3.5 text-[#059669] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Data analysis (basic)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-3.5 h-3.5 text-[#059669] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Journal selection</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-3.5 h-3.5 text-[#059669] mr-2 mt-0.5 flex-shrink-0" />
                        <span>2 rounds of revisions</span>
                      </li>
                    </ul>
                  </div>
                  <a 
                    href="#contact" 
                    className="mt-8 w-full bg-[#059669] hover:bg-[#047857] text-white font-extrabold text-xs uppercase tracking-wider py-2.5 rounded-lg text-center block shadow transition"
                  >
                    Get Started
                  </a>
                </div>

                {/* Premium (Most Popular) */}
                <div className="bg-white p-6 rounded-2xl border-2 border-[#9333ea] shadow-md flex flex-col justify-between relative">
                  <span className="absolute -top-3 right-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
                    MOST POPULAR
                  </span>
                  <div>
                    <span className="text-xs font-bold text-[#9333ea] uppercase tracking-wider block">Premium</span>
                    <div className="text-2xl font-extrabold text-gray-900 mt-1 mb-1">₹60,000+</div>
                    <p className="text-[11px] text-gray-400 mb-5 pb-3 border-b border-gray-100">End-to-end research support</p>
                    
                    <ul className="text-xs space-y-2.5 text-gray-600">
                      <li className="flex items-start">
                        <Check className="w-3.5 h-3.5 text-[#9333ea] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Full manuscript development</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-3.5 h-3.5 text-[#9333ea] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Advanced analysis</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-3.5 h-3.5 text-[#9333ea] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Figures & tables</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-3.5 h-3.5 text-[#9333ea] mr-2 mt-0.5 flex-shrink-0" />
                        <span>Submission & revision support</span>
                      </li>
                    </ul>
                  </div>
                  <a 
                    href="#contact" 
                    className="mt-8 w-full bg-[#9333ea] hover:bg-[#7e22ce] text-white font-extrabold text-xs uppercase tracking-wider py-2.5 rounded-lg text-center block shadow transition"
                  >
                    Get Started
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          5-STEP PROCESS & WHY CHOOSE US
          (2-Column Layout matching attached image)
      =========================================== */}
      <section id="process" className="py-16 bg-[#fcfaf7] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 8 cols: Our Simple Process */}
            <div className="lg:col-span-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Our Simple Process
              </h2>
              <p className="text-gray-500 text-xs mt-1 mb-8">
                A clear and collaborative process to ensure the best results.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5">
                {[
                  { num: '1', title: 'Initial Consultation', desc: 'Discuss your research, scope and requirements.' },
                  { num: '2', title: 'Proposal & Quotation', desc: 'Get a detailed plan and transparent pricing.' },
                  { num: '3', title: 'Research & Writing', desc: 'Expert work, regular updates and milestone delivery.' },
                  { num: '4', title: 'Review & Revision', desc: 'Incorporate your feedback and finalize the manuscript.' },
                  { num: '5', title: 'Submission Support', desc: 'Guidance for journal submission and next steps.' }
                ].map(step => (
                  <div key={step.num} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-extrabold text-xs mb-3">
                      {step.num}
                    </div>
                    <h4 className="font-bold text-xs text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-[11px] text-gray-500 leading-normal">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 4 cols: Why Choose Us? Card matching image */}
            <div className="lg:col-span-4 bg-white p-6 sm:p-7 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="font-extrabold text-gray-900 text-base mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3.5 text-xs text-gray-700">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Experienced research professionals</strong> with domain expertise</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Ethical and plagiarism-free</strong> work</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Focus on quality</strong>, originality and clarity</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Flexible packages</strong> and milestone payments</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Dedicated support</strong> and clear communication</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          WHAT OUR CLIENTS SAY (TESTIMONIALS)
          (Directly from attached reference design)
      =========================================== */}
      {/* ==========================================
          WHAT OUR CLIENTS SAY (INFINITE MARQUEE LOOP)
          (Smooth continuous loop moving left-to-right with pause on hover)
      =========================================== */}
      <section id="testimonials" className="py-16 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                What Our Clients Say
              </h2>
              <p className="text-gray-500 text-xs mt-1">
                Trusted by PhD scholars, faculty and researchers worldwide.
              </p>
            </div>
            <div className="text-[11px] text-gray-400 font-medium hidden sm:flex items-center space-x-1">
              <span>(Hover any card to pause)</span>
            </div>
          </div>
        </div>

        {/* Carousel Container with Left/Right Soft Fade Gradients */}
        <div className="relative w-full overflow-hidden">
          {/* Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

          {/* Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Infinite Marquee Track (Left to Right) */}
          <div className="animate-marquee-ltr py-4 flex space-x-6">
            {[...testimonials, ...testimonials].map((item, idx) => (
              <div 
                key={idx} 
                className="w-[330px] sm:w-[380px] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-lg hover:border-amber-200 transition-all duration-300 flex-shrink-0"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-amber-500 text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    </div>
                    <span className="text-[10px] font-bold text-[#ea580c] bg-orange-50 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 italic leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center space-x-3.5 pt-4 border-t border-gray-100 mt-auto">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-11 h-11 rounded-full object-cover border-2 border-orange-200 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs">{item.name}</h4>
                    <p className="text-[10px] text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          CONTACT SECTION: "Ready To Get Started ?"
          (Exact recreation from Screenshot 1!)
      =========================================== */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Coordinates (Matching Screenshot 1) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Ready To Get Started ?
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed max-w-lg">
                  Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days, we will be happy to answer your questions.
                </p>
              </div>

              <div className="space-y-6 pt-2">
                {/* Our Address with Gold Globe Icon */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-[#f59e0b] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 text-sm">Our Address:</h4>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      Om Paradise ,Block-B , TC Colony, Vikas Nagar, Dehu Road, Maharashtra 412101
                    </p>
                  </div>
                </div>

                {/* Our Mailbox with Gold Envelope Icon */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-[#f59e0b] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 text-sm">Our Mailbox:</h4>
                    <a href="mailto:info@rubrixx.com" className="text-xs text-gray-600 hover:text-[#ea580c] transition mt-0.5 block">
                      info@rubrixx.com
                    </a>
                  </div>
                </div>

                {/* Our Phone with Gold Phone Icon */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-[#f59e0b] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 text-sm">Our Phone:</h4>
                    <a href="tel:+918087579068" className="text-xs text-gray-600 hover:text-[#ea580c] transition mt-0.5 block">
                      +918087579068
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Warm Sunset Gradient Form Card (Exact recreation from Screenshot 1!) */}
            <div className="lg:col-span-6">
              <div className="bg-gradient-to-r from-[#6b1d4d] via-[#b81c47] to-[#f59e0b] p-8 sm:p-10 rounded-2xl shadow-xl text-white">
                <h3 className="text-2xl font-extrabold text-white mb-6">
                  Ready To Get Started ?
                </h3>

                {formSubmitted ? (
                  <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl text-center">
                    <CheckCircle2 className="w-10 h-10 text-white mx-auto mb-2" />
                    <h4 className="font-bold text-base">Inquiry Submitted!</h4>
                    <p className="text-xs text-white/90 mt-1">Our academic advisor will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        required
                        placeholder="Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/25 border-none placeholder-white/80 text-white text-xs px-4 py-3.5 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        required
                        placeholder="Email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/25 border-none placeholder-white/80 text-white text-xs px-4 py-3.5 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        required
                        placeholder="Phone Number" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-white/25 border-none placeholder-white/80 text-white text-xs px-4 py-3.5 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                      />
                    </div>
                    <div>
                      <textarea 
                        rows={4}
                        required
                        placeholder="Message" 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-white/25 border-none placeholder-white/80 text-white text-xs px-4 py-3.5 rounded-md focus:outline-none focus:ring-2 focus:ring-white resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-white text-gray-900 hover:bg-stone-100 font-extrabold text-xs uppercase py-3.5 rounded-md shadow-md transition tracking-wider mt-2"
                    >
                      Submit Request
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          EXACT RUBRIXX SIGNATURE FOOTER
          (Plum/Wine Theme matching all 5 screenshots!)
      =========================================== */}
      <footer className="bg-[#611b45] text-white text-xs pt-16 pb-10 border-t border-[#732353] mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-[#732353]">
            
            {/* Col 1: About Us with 3 Yellow Circular Social Icons */}
            <div className="space-y-4">
              <h4 className="text-sm font-extrabold text-white">About Us</h4>
              <div className="flex items-center space-x-3 pt-1">
                {/* Circular yellow outline Facebook */}
                <a 
                  href="https://www.facebook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-full border-2 border-[#ffcc00] text-[#ffcc00] hover:bg-[#ffcc00] hover:text-[#611b45] flex items-center justify-center transition"
                  title="Facebook"
                >
                  <i className="fab fa-facebook-f text-xs"></i>
                </a>

                {/* Circular yellow outline Twitter */}
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-full border-2 border-[#ffcc00] text-[#ffcc00] hover:bg-[#ffcc00] hover:text-[#611b45] flex items-center justify-center transition"
                  title="Twitter"
                >
                  <i className="fab fa-twitter text-xs"></i>
                </a>

                {/* Circular yellow outline Instagram */}
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-full border-2 border-[#ffcc00] text-[#ffcc00] hover:bg-[#ffcc00] hover:text-[#611b45] flex items-center justify-center transition"
                  title="Instagram"
                >
                  <i className="fab fa-instagram text-xs"></i>
                </a>
              </div>
            </div>

            {/* Col 2: Company */}
            <div className="space-y-3">
              <h4 className="text-sm font-extrabold text-white">Company</h4>
              <ul className="space-y-2 text-stone-200 text-xs">
                <li><a href="https://www.rubrixx.com/about-us.php" className="hover:text-[#ffcc00] transition">About Us</a></li>
                <li><a href="https://www.rubrixx.com/contact-us.php" className="hover:text-[#ffcc00] transition">Contact Us</a></li>
                <li><a href="https://www.rubrixx.com/clients.php" className="hover:text-[#ffcc00] transition">Clients</a></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div className="space-y-3">
              <h4 className="text-sm font-extrabold text-white">Services</h4>
              <ul className="space-y-2 text-stone-200 text-xs">
                <li><a href="https://www.rubrixx.com/servicedetails.php?seriid=Android-Development" className="hover:text-[#ffcc00] transition">Android Development</a></li>
                <li><a href="https://www.rubrixx.com/servicedetails.php?seriid=Salesforce-Development" className="hover:text-[#ffcc00] transition">Salesforce Development</a></li>
                <li><a href="https://www.rubrixx.com/servicedetails.php?seriid=Website-Development" className="hover:text-[#ffcc00] transition">Website Development</a></li>
                <li><a href="https://www.rubrixx.com/servicedetails.php?seriid=AI-and-ML-Services" className="hover:text-[#ffcc00] transition">AI And ML Services</a></li>
                <li><a href="https://www.rubrixx.com/servicedetails.php?seriid=Cloud-Migration-Services" className="hover:text-[#ffcc00] transition">Cloud Migration Services</a></li>
                <li><a href="https://www.rubrixx.com/servicedetails.php?seriid=Workforce-Management" className="hover:text-[#ffcc00] transition">Workforce Management</a></li>
                <li><a href="#services" className="text-[#ffcc00] font-semibold hover:underline">Research Services</a></li>
              </ul>
            </div>

            {/* Col 4: Policy */}
            <div className="space-y-3">
              <h4 className="text-sm font-extrabold text-white">Policy</h4>
              <ul className="space-y-2 text-stone-200 text-xs">
                <li><a href="#pricing" className="hover:text-[#ffcc00] transition">Pricing and plans</a></li>
                <li><a href="https://www.rubrixx.com/terms.php" className="hover:text-[#ffcc00] transition">Terms of Service</a></li>
                <li><a href="https://www.rubrixx.com/faq.php" className="hover:text-[#ffcc00] transition">Help & FAQ</a></li>
              </ul>
            </div>

            {/* Col 5: We're Hiring */}
            <div className="space-y-3">
              <h4 className="text-sm font-extrabold text-white">We're Hiring</h4>
              <p className="text-xs text-stone-200 leading-relaxed">
                Interested in joining the our team?
              </p>
              <a 
                href="https://www.rubrixx.com/careers.php" 
                className="inline-flex items-center space-x-1.5 text-sm font-extrabold text-[#ffcc00] hover:text-white transition pt-1"
              >
                <span>Careers</span>
                <i className="fa-solid fa-circle-arrow-right text-xs"></i>
              </a>
            </div>

          </div>

          {/* Centered Copyright matching Screenshot 1-5 */}
          <div className="pt-8 text-center text-xs text-stone-300">
            © Rubrixx IT Solutions
          </div>

        </div>
      </footer>

    </div>
  );
}
