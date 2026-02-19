
import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const Comparison: React.FC = () => {
  const { t } = useLanguage();

  const comparisonData = [
    { 
      feature: t('Teknologi Inti', 'Core Technology'), 
      microseal: t('Ikatan Molekuler (Nano)', 'Molecular Bonding (Nano)'), 
      conventional: t('Lapisan Permukaan / Film', 'Surface Layer / Film') 
    },
    { 
      feature: t('Daya Tahan', 'Longevity'), 
      microseal: t('5 - 10 Tahun', '5 - 10 Years'), 
      conventional: t('1 - 2 Tahun', '1 - 2 Years') 
    },
    { 
      feature: t('Breathability', 'Breathability'), 
      microseal: t('98% Breathable', '98% Breathable'), 
      conventional: t('Mengunci Kelembapan (0-10%)', 'Traps Moisture (0-10%)') 
    },
    { 
      feature: t('Tampilan Aplikasi', 'Application Look'), 
      microseal: t('Transparan / Alami', 'Invisible / Natural'), 
      conventional: t('Mengkilap / Efek Plastik', 'Shiny / Plastic Look') 
    },
    { 
      feature: t('Risiko Terkelupas', 'Peeling Risk'), 
      microseal: t('Tidak Ada (Menyatu)', 'Non-existent (Bonded)'), 
      conventional: t('Risiko Tinggi (Mengelupas)', 'High Risk (Flaking)') 
    },
    { 
      feature: t('Bahan Kimia', 'Chemical Base'), 
      microseal: t('Eco-Engineered / Bebas VOC', 'Eco-Engineered / VOC-Free'), 
      conventional: t('Pelarut Kimia Keras', 'Strong Chemical Solvents') 
    },
  ];

  return (
    <section id="comparison" className="py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t('Teruji.', 'Tested.')} {t('Bersertifikat.', 'Certified.')} <span className="text-sky-500">{t('Terbukti.', 'Proven.')}</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('Positioning Microseal sebagai standar emas baru dalam perlindungan permukaan melalui rekayasa molekuler tingkat lanjut.', 'Positioning Microseal as the new gold standard in surface protection through advanced molecular engineering.')}
          </p>
        </div>

        {/* Visual Technology Positioning */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative group">
            <div className="absolute -inset-4 bg-sky-500/10 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 aspect-video shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1532187875605-2fe358511423?auto=format&fit=crop&q=80&w=1200" 
                alt="Nano Technology Analysis" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Molecular Mapping v2.0</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-sky-500"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-sky-500 text-3xl font-black italic">01</span>
                {t('Penetrasi Kedalaman Maksimal', 'Maximum Depth Penetration')}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {t(
                  'Berbeda dengan coating konvensional yang hanya membentuk lapisan film di atas permukaan, Microseal meresap hingga ke dalam kapiler terkecil material (hingga 5mm+ pada beton berpori).',
                  'Unlike conventional coatings that only form a film layer on top, Microseal penetrates into the smallest capillaries of the material (up to 5mm+ in porous concrete).'
                )}
              </p>
            </div>
            <div className="pt-6 border-t border-white/5">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-sky-500 text-3xl font-black italic">02</span>
                {t('Ikatan Kovalen Permanen', 'Permanent Covalent Bonding')}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {t(
                  'Molekul Microseal menciptakan ikatan kimia permanen dengan substrat. Ini memastikan perlindungan tidak akan pernah mengelupas, retak, atau terdegradasi oleh gesekan mekanis berat.',
                  'Microseal molecules create a permanent chemical bond with the substrate. This ensures the protection will never peel, crack, or be degraded by heavy mechanical friction.'
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-900 border-b-2 border-white/10">
                <th className="py-6 px-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500">{t('Parameter Teknis', 'Technical Parameters')}</th>
                <th className="py-6 px-8 text-2xl font-black text-sky-500 tracking-tighter italic bg-sky-500/5">Microseal™</th>
                <th className="py-6 px-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500">{t('Coating Konvensional', 'Conventional Coating')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {comparisonData.map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02] even:bg-white/[0.01] transition-colors group">
                  <td className="py-5 px-8 text-slate-400 font-bold text-sm group-hover:text-white transition-colors border-r border-white/10">
                    {row.feature}
                  </td>
                  <td className="py-5 px-8 bg-sky-500/[0.02] border-r border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,1)]"></div>
                      <span className="text-white font-black text-base md:text-lg tracking-tight">{row.microseal}</span>
                    </div>
                  </td>
                  <td className="py-5 px-8 text-slate-500 text-sm font-semibold italic">
                    {row.conventional}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="p-6 bg-slate-900/50 border-t border-white/10 text-center">
             <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em]">
               {t('VALIDASI DATA: STANDAR LABORATORIUM ASTM 2024', 'DATA VALIDATION: 2024 ASTM LABORATORY STANDARDS')}
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
