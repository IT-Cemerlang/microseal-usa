
import React, { useState, useMemo } from 'react';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, 
  CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell 
} from 'recharts';
import { useLanguage } from '../context/LanguageContext.tsx';

const ROICalculator: React.FC = () => {
  const { t } = useLanguage();
  // Values converted to typical USD per m2 rates
  const [area, setArea] = useState(1000);
  const [tradCost, setTradCost] = useState(4.5); // Approx $4.5/m2
  const [microCost, setMicroCost] = useState(12.0); // Approx $12.0/m2
  const [activeTab, setActiveTab] = useState<'projection' | 'savings'>('projection');

  const data = useMemo(() => {
    const chartData = [];
    let cumulativeTrad = 0;
    let cumulativeMicro = area * microCost;

    for (let year = 0; year <= 10; year++) {
      let annualTradCost = 0;
      let annualMicroCost = 0;

      if (year % 2 === 0 && year !== 0) {
        annualTradCost = area * tradCost;
      } else if (year === 0) {
        annualTradCost = area * tradCost;
      }
      
      const maintenanceTrad = (area * tradCost) * 0.15;
      const maintenanceMicro = year > 0 ? (area * microCost) * 0.02 : 0;
      
      annualTradCost += maintenanceTrad;
      annualMicroCost += maintenanceMicro;

      cumulativeTrad += annualTradCost;
      cumulativeMicro += (year === 0 ? 0 : annualMicroCost);

      chartData.push({
        year: `Y${year}`,
        Traditional: Math.round(cumulativeTrad),
        Microseal: Math.round(cumulativeMicro),
        Savings: Math.max(0, Math.round(cumulativeTrad - cumulativeMicro))
      });
    }
    return chartData;
  }, [area, tradCost, microCost]);

  const totalSavings = (data[10].Traditional - data[10].Microseal);

  return (
    <section id="roi" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t('Analitik', 'Investment')} <span className="text-sky-500">{t('Investasi', 'Analytics')}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t(
              'Interaktif ROI Dashboard: Hitung penghematan biaya operasional secara real-time berdasarkan skala proyek Anda.',
              'Interactive ROI Dashboard: Calculate operational cost savings in real-time based on your project scale.'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="p-8 bg-slate-900 border border-white/5 rounded-[32px] space-y-8">
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">
                  {t('Luas Proyek', 'Project Area')}: <span className="text-sky-400 text-lg">{area.toLocaleString()} m²</span>
                </label>
                <input 
                  type="range" min="100" max="10000" step="100" 
                  value={area} onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
              </div>

              <div className="pt-6 border-t border-white/5">
                <div className="p-6 bg-sky-500/10 border border-sky-500/20 rounded-2xl relative overflow-hidden group">
                  <div className="text-[10px] text-sky-500 font-black uppercase tracking-[0.2em] mb-2">{t('Tabungan Net 10 Tahun', '10-Year Net Savings')}</div>
                  <div className="text-3xl font-black text-white">USD ${totalSavings.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col p-8 bg-slate-900 border border-white/5 rounded-[32px]">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <h4 className="text-lg font-bold text-white">{t('Model Finansial Teknis', 'Technical Financial Model')}</h4>
              <div className="flex bg-slate-950 p-1 rounded-xl border border-white/5">
                <button 
                  onClick={() => setActiveTab('projection')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'projection' ? 'bg-sky-500 text-slate-950' : 'text-slate-500 hover:text-white'}`}
                >
                  {t('Biaya Kumulatif', 'Cumulative Cost')}
                </button>
                <button 
                  onClick={() => setActiveTab('savings')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === 'savings' ? 'bg-sky-500 text-slate-950' : 'text-slate-500 hover:text-white'}`}
                >
                  {t('Tabungan Tahunan', 'Yearly Savings')}
                </button>
              </div>
            </div>

            <div className="flex-1 min-h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                {activeTab === 'projection' ? (
                  <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                    <XAxis dataKey="year" stroke="#475569" fontSize={11} tickLine={false} axisLine={false} dy={10} />
                    <YAxis stroke="#475569" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val.toLocaleString()}`} />
                    <Tooltip 
                      formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', color: '#fff', fontSize: '12px' }}
                    />
                    <Legend iconType="circle" wrapperStyle={{ paddingTop: '30px', fontSize: '12px' }} />
                    <Line type="monotone" dataKey="Traditional" name={t("Pelapisan Tradisional", "Traditional Coating")} stroke="#ef4444" strokeWidth={3} dot={{ r: 4, fill: '#ef4444' }} />
                    <Line type="monotone" dataKey="Microseal" name="Microseal™ System" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 4, fill: '#0ea5e9' }} />
                  </LineChart>
                ) : (
                  <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                    <XAxis dataKey="year" stroke="#475569" fontSize={11} tickLine={false} axisLine={false} dy={10} />
                    <YAxis stroke="#475569" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val.toLocaleString()}`} />
                    <Tooltip 
                      formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', color: '#fff', fontSize: '12px' }} 
                    />
                    <Bar dataKey="Savings" name={t("Tabungan Bersih", "Net Savings")} radius={[6, 6, 0, 0]}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#1e293b' : '#0ea5e9'} fillOpacity={0.8} />
                      ))}
                    </Bar>
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
            
            <div className="mt-8 flex items-center gap-3 p-4 bg-slate-950/50 rounded-2xl border border-white/5">
              <p className="text-[10px] text-slate-500 font-medium leading-relaxed uppercase tracking-wider">
                {t(
                  'Asumsi: Re-aplikasi konvensional setiap 2 tahun + biaya maintenance 15% vs 2% (Microseal).',
                  'Assumptions: Conventional re-application every 2 years + 15% maintenance cost vs 2% (Microseal).'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
