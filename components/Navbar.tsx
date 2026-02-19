
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('Teknologi', 'Technology'), id: 'technology' },
    { label: t('ROI', 'ROI'), id: 'roi' },
    { label: t('Sertifikasi', 'Certifications'), id: 'certifications' },
    { label: t('Pelatihan', 'Training'), id: 'training' },
    { label: t('Aplikasi', 'Applications'), id: 'applications' },
    { label: t('Konsultasi', 'Consultation'), id: 'consultation' },
  ];

  const toggleMobileMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-500 ${
        scrolled || isMobileMenuOpen ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a 
            href="#" 
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); closeMobileMenu(); }}
            aria-label="Microseal Home"
          >
            <div className="w-9 h-9 bg-sky-500 rounded-xl flex items-center justify-center font-black text-slate-950 italic transition-transform group-hover:scale-110">M</div>
            <span className="text-xl font-black tracking-tighter text-white uppercase">MICROSEAL<span className="text-sky-500">™</span></span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-sm font-semibold text-slate-400 hover:text-white transition-all hover:translate-y-[-1px] active:translate-y-0"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button 
              type="button"
              className={`p-2 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 relative z-[80] ${
                isMobileMenuOpen ? 'bg-sky-500 text-slate-950' : 'bg-white/5 text-white border border-white/10'
              }`}
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[65] bg-slate-950/98 backdrop-blur-3xl transition-all duration-500 ease-in-out md:hidden flex flex-col ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center flex-1 gap-8 p-6 text-center">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                className="text-4xl font-black text-white hover:text-sky-500 transition-colors uppercase tracking-tighter"
                onClick={(e) => scrollToSection(e, link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <a 
            href="#consultation" 
            className="w-full max-w-[300px] px-8 py-5 bg-sky-500 text-slate-950 text-xl font-black rounded-2xl transition-all shadow-[0_0_40px_rgba(14,165,233,0.3)] hover:scale-105 active:scale-95 uppercase tracking-tight mt-6"
            onClick={(e) => scrollToSection(e, 'consultation')}
          >
            {t('Konsultasi Sekarang', 'Consult Now')}
          </a>
        </div>
        
        {/* Mobile Footer Decor */}
        <div className="p-8 text-center text-[8px] text-slate-700 font-black tracking-[0.3em] uppercase opacity-50">
          MICROSEAL™ TECHNOLOGIES GLOBAL SYSTEM
        </div>
      </div>
    </>
  );
};

export default Navbar;
