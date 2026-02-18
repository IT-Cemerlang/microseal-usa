
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface Standard {
  id: string;
  shortTitle: string;
  tagline: string;
  detail: string;
  icon: string;
}

const Trust: React.FC = () => {
  const { t } = useLanguage();
  const [activeStandard, setActiveStandard] = useState<string | null>(null);

  const standards: Standard[] = [
    {
      id: 'iso',
      shortTitle: t('ISO 9001', 'ISO 9001'),
      tagline: t('Penjaminan Mutu', 'Quality Assurance'),
      detail: t(
        'Sistem manajemen kualitas produksi yang terstandarisasi secara internasional untuk menjamin konsistensi formula di setiap batch.',
        'Internationally standardized production quality management system ensuring formula consistency across every batch.'
      ),
      icon: '🏆'
    },
    {
      id: 'astm',
      shortTitle: t('ASTM Lab', 'ASTM Lab'),
      tagline: t('Validasi Performa', 'Performance Validation'),
      detail: t(
        'Pengujian laboratorium independen mencakup ketahanan abrasi, UV, dan daya rekat molekuler sesuai standar global ASTM.',
        'Independent laboratory testing covering abrasion, UV, and molecular adhesion resistance according to global ASTM standards.'
      ),
      icon: '🔬'
    },
    {
      id: 'eco',
      shortTitle: t('Eco Safe', 'Eco Safe'),
      tagline: t('Ramah Ekologi', 'Eco-Friendly'),
      detail: t(
        'Formula bebas VOC dan non-toksik yang aman bagi aplikator, penghuni gedung, dan tidak mencemari ekosistem air.',
        'VOC-free and non-toxic formula safe for applicators, building occupants, and does not contaminate water ecosystems.'
      ),
      icon: '🌱'
    }
  ];

  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="p-1 gap-12 bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 rounded-[48px] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            
            {/* Left Content */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
                {t('Standar Industri Global', 'Global Industry Standards')}
              </div>
              <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                {t('Rekayasa Tanpa Kompromi', 'Engineering Without Compromise')}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-10 text-lg">
                {t(
                  'Setiap aplikasi Microseal™ didukung oleh validasi teknis yang ketat untuk menjamin aset Anda terlindungi secara permanen.',
                  'Every Microseal™ application is backed by rigorous technical validation to ensure your assets are permanently protected.'
                )}
              </p>

              {/* Interaction Menu */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {standards.map((std) => (
                  <button
                    key={std.id}
                    onClick={() => setActiveStandard(activeStandard === std.id ? null : std.id)}
                    className={`p-6 rounded-3xl border transition-all duration-300 text-center group flex flex-col items-center gap-3 ${
                      activeStandard === std.id 
                        ? 'bg-sky-500 border-sky-500 shadow-[0_0_30px_rgba(14,165,233,0.3)]' 
                        : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/[0.08]'
                    }`}
                  >
                    <span className="text-2xl mb-1">{std.icon}</span>
                    <span className={`text-sm font-black uppercase tracking-wider ${activeStandard === std.id ? 'text-slate-950' : 'text-white'}`}>
                      {std.shortTitle}
                    </span>
                    <div className={`text-[10px] font-bold uppercase tracking-tighter transition-colors ${activeStandard === std.id ? 'text-slate-900' : 'text-slate-500 group-hover:text-sky-400'}`}>
                      {t('Lihat Detail', 'View Details')}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Display / Details Panel */}
            <div className="relative bg-slate-900/50 border-l border-white/5 flex items-center justify-center p-12 min-h-[400px]">
              {activeStandard ? (
                <div className="animate-in fade-in slide-in-from-right-8 duration-500 text-center max-w-sm">
                  <div className="w-20 h-20 bg-sky-500/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-8 border border-sky-500/30">
                    {standards.find(s => s.id === activeStandard)?.icon}
                  </div>
                  <h4 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tighter">
                    {standards.find(s => s.id === activeStandard)?.shortTitle}
                  </h4>
                  <div className="text-sky-500 text-xs font-black uppercase tracking-[0.2em] mb-6">
                    {standards.find(s => s.id === activeStandard)?.tagline}
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed font-medium">
                    {standards.find(s => s.id === activeStandard)?.detail}
                  </p>
                  <button 
                    onClick={() => setActiveStandard(null)}
                    className="mt-10 text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest flex items-center gap-2 mx-auto transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    {t('Tutup Panel', 'Close Panel')}
                  </button>
                </div>
              ) : (
                <div className="text-center opacity-40 group cursor-default" onClick={() => setActiveStandard('iso')}>
                  <div className="text-6xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">🛡️</div>
                  <h4 className="text-slate-500 font-black uppercase tracking-[0.3em] text-xs">
                    {t('Pilih Standar untuk Detail', 'Select Standard for Details')}
                  </h4>
                  <div className="mt-8 flex justify-center gap-6 opacity-20 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full border border-white/20"></div>
                    <div className="w-12 h-12 rounded-full border border-white/20"></div>
                    <div className="w-12 h-12 rounded-full border border-white/20"></div>
                  </div>
                </div>
              )}
              
              {/* Background Decor */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            </div>

          </div>
        </div>

        {/* Brand Logos Bar */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-20 grayscale hover:opacity-60 transition-all duration-1000">
           <div className="text-xl font-black text-white italic tracking-tighter uppercase">INDUSTRIAL_CORP</div>
           <div className="text-xl font-black text-white italic tracking-tighter uppercase">BUILD_TECH</div>
           <div className="text-xl font-black text-white italic tracking-tighter uppercase">NANO_LABS</div>
           <div className="text-xl font-black text-white italic tracking-tighter uppercase">STRUCT_ENG</div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
