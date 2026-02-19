
import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      step: '01',
      title: t('Nano Penetrasi', 'Nano Penetration'),
      desc: t('Molekul Microseal meresap ke dalam kapiler dan pori-pori permukaan material hingga kedalaman maksimal.', 'Microseal molecules penetrate deep into the material\'s capillaries and pores.'),
      color: 'bg-sky-500'
    },
    {
      step: '02',
      title: t('Ikatan Molekuler', 'Molecular Bonding'),
      desc: t('Aktivasi katalis menciptakan ikatan kimia permanen antara partikel pelindung dan struktur material.', 'Catalyst activation creates a permanent chemical bond between protective particles and the material structure.'),
      color: 'bg-blue-600'
    },
    {
      step: '03',
      title: t('Perisai Tak Terlihat', 'Invisible Shield'),
      desc: t('Terbentuknya lapisan pelindung ultra-tipis yang menolak air, minyak, dan kontaminan eksternal lainnya.', 'Formation of an ultra-thin protective layer that repels water, oil, and other external contaminants.'),
      color: 'bg-indigo-600'
    }
  ];

  return (
    <section id="technology" className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight italic">
            {t('Dirancang pada Skala Molekuler', 'Engineered at Molecular Scale')}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t('Proses aktivasi Microseal melalui 3 tahap kritikal untuk menjamin durabilitas maksimal.', 'Microseal activation process through 3 critical stages to ensure maximum durability.')}
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center text-slate-950 font-black text-2xl mb-8 shadow-[0_0_30px_rgba(14,165,233,0.3)]`}>
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed max-w-[280px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-sky-500/5 border border-sky-500/20 flex flex-col md:flex-row items-center gap-10">
           <div className="flex-1">
              <h5 className="text-xl font-bold text-sky-400 mb-4 tracking-tight">{t('Performa Penampang', 'Cross-Section Performance')}</h5>
              <div className="space-y-6">
                 <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-2 font-bold uppercase tracking-widest">
                       <span>{t('Breathability (Pori Terbuka)', 'Breathability (Pore Openness)')}</span>
                       <span>98%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full w-[98%] bg-sky-500"></div>
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-2 font-bold uppercase tracking-widest">
                       <span>{t('Sudut Kontak Hidrofobik', 'Hydrophobic Contact Angle')}</span>
                       <span>120°</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full w-[85%] bg-sky-500"></div>
                    </div>
                 </div>
              </div>
           </div>
           <div className="w-full md:w-1/3 aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/micro/800/600')] opacity-20 grayscale"></div>
              <div className="relative z-10 flex flex-col gap-1 items-center">
                <div className="w-24 h-4 bg-sky-500/40 rounded-full blur-sm"></div>
                <div className="text-[10px] text-sky-300 font-bold tracking-tighter uppercase">{t('Lapisan Nano-Barrier', 'Nano-Barrier Layer')}</div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
