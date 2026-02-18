
import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const Benefits: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    { title: t('Waterproofing', 'Waterproofing'), desc: t('Perlindungan total terhadap intrusi air dan kelembapan ekstrem.', 'Total protection against water intrusion and extreme humidity.'), icon: '💧' },
    { title: t('Anti-Korosi', 'Anti-Corrosion'), desc: t('Penghalang molekuler untuk mencegah oksidasi pada logam.', 'Molecular barrier to prevent oxidation on metals.'), icon: '⛓️' },
    { title: t('Tahan UV', 'UV Resistant'), desc: t('Menjaga integritas warna dan struktur dari radiasi ultraviolet.', 'Maintains color and structural integrity from ultraviolet radiation.'), icon: '☀️' },
    { title: t('Tahan Kimia', 'Chemical Resistant'), desc: t('Tahan terhadap tumpahan oli, bahan bakar, dan zat asam.', 'Resistant to oil spills, fuel, and acidic substances.'), icon: '🧪' },
    { title: t('Permukaan Breathable', 'Breathable Surface'), desc: t('Membiarkan uap air keluar dari material tanpa merusak struktur.', 'Allows water vapor to escape the material without damaging the structure.'), icon: '🌬️' },
    { title: t('Maintenance Rendah', 'Low Maintenance'), desc: t('Permukaan lebih mudah dibersihkan dan jarang butuh renovasi.', 'Easier to clean surfaces and less frequent renovation needs.'), icon: '📉' }
  ];

  return (
    <section id="benefits" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">{t('Proposisi Nilai Utama', 'Key Value Propositions')}</h2>
            <p className="text-slate-400 text-lg">{t('Investasi cerdas untuk efisiensi jangka panjang aset berharga Anda.', 'Smart investment for the long-term efficiency of your valuable assets.')}</p>
          </div>
          <div className="px-6 py-4 bg-slate-950 border border-sky-500/20 rounded-2xl text-center">
             <div className="text-sky-400 font-bold text-3xl mb-1">Up to 10Y</div>
             <div className="text-slate-500 text-xs uppercase font-bold tracking-widest">{t('Ekspektasi Usia', 'Life Expectancy')}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="p-10 bg-slate-950/40 border border-white/5 rounded-[40px] hover:border-sky-500/40 transition-all hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-sky-500/10 flex items-center justify-center text-3xl mb-8">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{benefit.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
