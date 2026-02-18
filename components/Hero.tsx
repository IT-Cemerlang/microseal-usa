
import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            {t('Teknologi Nano Masa Depan', 'Next-Gen Nano-Technology')}
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Microseal™ — <br />
            <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              {t('Proteksi Permukaan', 'Advanced Surface')}
            </span> <br />
            {t('Canggih', 'Protection')}
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
            {t(
              'Perlindungan cerdas berbasis nano-technology untuk daya tahan maksimal, efisiensi jangka panjang, dan performa superior pada setiap permukaan.',
              'Smart nano-technology protection for maximum durability, long-term efficiency, and superior performance on every surface.'
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#consultation" 
              onClick={(e) => scrollToSection(e, 'consultation')}
              className="px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl transition-all text-center shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:scale-105"
            >
              {t('Minta Konsultasi', 'Request Consultation')}
            </a>
            <a 
              href="#certifications"
              onClick={(e) => scrollToSection(e, 'certifications')}
              className="px-8 py-4 bg-slate-900 border border-white/10 hover:border-white/30 text-white font-semibold rounded-xl transition-all text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              {t('Unduh Data Teknis', 'Download Technical Sheet')}
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative w-full aspect-square max-w-[500px]">
            <div className="absolute inset-0 border-[1px] border-sky-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-20 bg-slate-900/40 backdrop-blur-3xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
              <div className="relative w-full h-full p-8 flex flex-col justify-center gap-4">
                <div className="text-xs mono text-sky-400/60 uppercase tracking-tighter">{t('Analisis Molekuler', 'Molecular Analysis')}</div>
                <div className="h-px w-full bg-gradient-to-r from-sky-500/50 to-transparent"></div>
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-square bg-sky-500/5 border border-sky-500/10 rounded-lg animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
