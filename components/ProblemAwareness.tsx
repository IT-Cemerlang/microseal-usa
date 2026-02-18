
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../context/LanguageContext.tsx';

const ProblemAwareness: React.FC = () => {
  const { t } = useLanguage();

  const data = [
    { name: 'Year 1', cost: 10, protected: 2 },
    { name: 'Year 2', cost: 25, protected: 2 },
    { name: 'Year 3', cost: 45, protected: 3 },
    { name: 'Year 4', cost: 70, protected: 3 },
    { name: 'Year 5', cost: 100, protected: 5 },
  ];

  const points = [
    { title: t('Korosi & Oksidasi', 'Corrosion & Oxidation'), desc: t('Penurunan integritas logam secara progresif.', 'Progressive decline in metal integrity.') },
    { title: t('Retak Mikro', 'Micro Cracks'), desc: t('Awal dari keruntuhan struktur beton.', 'The beginning of concrete structural failure.') },
    { title: t('Penyerapan Air', 'Water Absorption'), desc: t('Pemicu tumbuhnya lumut dan jamur.', 'Triggers the growth of moss and fungi.') },
    { title: t('Kerusakan UV', 'UV Damage'), desc: t('Pudar dan rapuhnya lapisan material luar.', 'Fading and brittleness of outer material layers.') },
    { title: t('Maintenance Mahal', 'Expensive Maintenance'), desc: t('Biaya restorasi yang jauh lebih tinggi.', 'Much higher restoration costs.') },
    { title: t('Operational Downtime', 'Operational Downtime'), desc: t('Waktu terbuang akibat perbaikan rutin.', 'Time wasted due to routine repairs.') }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            {t('Permukaan Tanpa Perlindungan =', 'Unprotected Surfaces =')} <br />
            <span className="text-red-500">{t('Biaya Berulang', 'Recurring Costs')}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {t(
              'Kerusakan struktural dimulai dari tingkat mikroskopis. Tanpa proteksi yang tepat, aset Anda mengalami depresiasi nilai yang sangat cepat akibat faktor lingkungan.',
              'Structural damage begins at the microscopic level. Without proper protection, your assets experience rapid depreciation due to environmental factors.'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-6">
            {points.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-all group">
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/10 shadow-inner">
            <h4 className="text-lg font-bold text-white mb-2">{t('Biaya Kerusakan Selama 5 Tahun', 'Cost of Damage Over 5 Years')}</h4>
            <p className="text-sm text-slate-500 mb-8">{t('Perbandingan: Tanpa Proteksi vs Dilindungi Microseal (%)', 'Comparison: Unprotected vs Microseal Protected (%)')}</p>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ fontSize: '12px' }}
                  />
                  <Bar dataKey="cost" name={t("Tanpa Proteksi", "Unprotected")} radius={[4, 4, 0, 0]} fill="#ef4444" opacity={0.8} />
                  <Bar dataKey="protected" name="Microseal" radius={[4, 4, 0, 0]} fill="#0ea5e9" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 flex justify-between items-center text-xs font-medium uppercase tracking-wider text-slate-500 bg-slate-950/50 p-4 rounded-xl">
              <span>{t('Hemat Hingga:', 'Savings Up to:')} <span className="text-sky-400 text-base font-bold">90%</span></span>
              <span>{t('Efisiensi Maintenance:', 'Maintenance Efficiency:')} <span className="text-sky-400 text-base font-bold">+40%</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAwareness;
