
import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const Benefits: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    { 
      title: t('Waterproofing', 'Waterproofing'), 
      desc: t('Perlindungan total terhadap intrusi air dan kelembapan ekstrem.', 'Total protection against water intrusion and extreme humidity.'), 
      image: 'https://images.unsplash.com/photo-1516912481808-34061f8c634a?auto=format&fit=crop&q=80&w=400' 
    },
    { 
      title: t('Anti-Korosi', 'Anti-Corrosion'), 
      desc: t('Penghalang molekuler untuk mencegah oksidasi pada logam.', 'Molecular barrier to prevent oxidation on metals.'), 
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400' 
    },
    { 
      title: t('Tahan UV', 'UV Resistant'), 
      desc: t('Menjaga integritas warna dan struktur dari radiasi ultraviolet.', 'Maintains color and structural integrity from ultraviolet radiation.'), 
      image: 'https://images.unsplash.com/photo-1506399558188-daf6f8e297ce?auto=format&fit=crop&q=80&w=400' 
    },
    { 
      title: t('Tahan Kimia', 'Chemical Resistant'), 
      desc: t('Tahan terhadap tumpahan oli, bahan bakar, dan zat asam.', 'Resistant to oil spills, fuel, and acidic substances.'), 
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=400' 
    },
    { 
      title: t('Permukaan Breathable', 'Breathable Surface'), 
      desc: t('Membiarkan uap air keluar dari material tanpa merusak struktur.', 'Allows water vapor to escape the material without damaging the structure.'), 
      image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&q=80&w=400' 
    },
    { 
      title: t('Maintenance Rendah', 'Low Maintenance'), 
      desc: t('Permukaan lebih mudah dibersihkan dan jarang butuh renovasi.', 'Easier to clean surfaces and less frequent renovation needs.'), 
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=400' 
    }
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
            <div key={i} className="group p-8 bg-slate-950/40 border border-white/5 rounded-[40px] hover:border-sky-500/40 transition-all hover:-translate-y-2 overflow-hidden">
              <div className="w-full aspect-video rounded-3xl overflow-hidden mb-8 border border-white/5 relative">
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
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
