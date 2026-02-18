
import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const SolutionIntro: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t('Teknologi Mikro Penetrasi', 'Micro Penetration Technology'),
      desc: t('Penetrasi hingga level mikron untuk memastikan ikatan yang tidak bisa dikelupas.', 'Penetration down to micron levels to ensure an unpeelable bond.'),
      icon: '🧬'
    },
    {
      title: t('Perlindungan Jangka Panjang', 'Long-Term Protection'),
      desc: t('Ketahanan struktural hingga 10 tahun dengan performa perlindungan yang konstan.', 'Structural durability up to 10 years with constant protection performance.'),
      icon: '🛡️'
    },
    {
      title: t('Formula Eco-Engineered', 'Eco-Engineered Formula'),
      desc: t('Bebas VOC dan bahan kimia berbahaya, aman untuk aplikasi residensial maupun industri.', 'VOC-free and devoid of harmful chemicals, safe for residential and industrial use.'),
      icon: '🌱'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-sky-500 font-bold mb-4 uppercase tracking-[0.2em] text-sm">{t('Posisi Teknologi', 'Technology Positioning')}</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
              {t('Bukan Sekadar Coating.', 'Not Just a Coating.')} <br />
              {t('Ini Adalah', 'This is a')} <span className="text-sky-500">{t('Sistem Proteksi.', 'Protection System.')}</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              {t(
                'Microseal adalah teknologi pelindung permukaan berbasis micro-molecular sealing system yang menciptakan lapisan proteksi ultra-tipis namun sangat kuat. Teknologi ini bekerja dengan menyatu ke dalam pori-pori material, bukan sekadar menempel di permukaan.',
                'Microseal is a surface protection technology based on a micro-molecular sealing system that creates an ultra-thin yet exceptionally strong protection layer. This technology works by merging into the material pores, not just sitting on the surface.'
              )}
            </p>
            
            <div className="space-y-4">
              {[
                t("Level Ikatan Molekuler", "Molecular Bonding Level"),
                t("Sifat Self-Cleaning", "Self-Cleaning properties"),
                t("Non-Film Forming (Breathable)", "Non-Film Forming (Breathable)"),
                t("Formula Ramah Lingkungan", "Eco-Engineered Formula")
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-8 bg-slate-950 border border-white/5 rounded-3xl hover:border-sky-500/30 transition-all">
                <div className="text-4xl mb-6">{pillar.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">{pillar.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionIntro;
