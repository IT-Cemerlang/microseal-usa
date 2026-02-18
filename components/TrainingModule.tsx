
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const TrainingModule: React.FC = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: t('Persiapan Permukaan', 'Surface Preparation'),
      desc: t('Kunci utama durabilitas adalah kebersihan pori-pori permukaan.', 'The key to durability is the cleanliness of surface pores.'),
      detailText: t(
        'Tahap ini adalah fondasi dari seluruh sistem Microseal™. Tanpa persiapan yang sempurna, ikatan molekuler tidak akan terjadi secara maksimal. Fokus utama adalah menghilangkan kontaminan mikroskopis yang menyumbat kapiler material agar cairan nano dapat berpenetrasi secara mendalam.',
        'This stage is the foundation of the entire Microseal™ system. Without perfect preparation, molecular bonding will not occur optimally. The main focus is removing microscopic contaminants that clog material capillaries so the nano-liquid can penetrate deeply.'
      ),
      items: [
        t('Bersihkan debu, oli, dan kontaminan.', 'Clean dust, oil, and contaminants.'),
        t('Pastikan permukaan benar-benar kering (Moisture < 5%).', 'Ensure surface is completely dry (Moisture < 5%).'),
        t('Lakukan perbaikan retak struktural jika ada.', 'Repair structural cracks if any.')
      ],
      proTip: t('Gunakan pressure washer berkekuatan minimal 2000 PSI untuk area industrial.', 'Use a pressure washer with at least 2000 PSI for industrial areas.'),
      icon: '🧹'
    },
    {
      id: 2,
      title: t('Aplikasi Presisi', 'Precise Application'),
      desc: t('Teknik aplikasi menentukan penetrasi molekuler yang merata.', 'Application technique determines even molecular penetration.'),
      detailText: t(
        'Aplikasi harus dilakukan dengan presisi tinggi menggunakan alat spray tekanan rendah. Cairan harus diaplikasikan secara jenuh (saturated) namun tidak sampai menggenang. Teknik "Wet-on-Wet" sangat disarankan untuk memastikan distribusi partikel nano yang homogen ke seluruh struktur permukaan.',
        'Application must be performed with high precision using low-pressure spray tools. The liquid must be applied saturatedly but without pooling. The "Wet-on-Wet" technique is highly recommended to ensure a homogeneous distribution of nano-particles throughout the surface structure.'
      ),
      items: [
        t('Gunakan Low-Pressure HVLP sprayer atau Nano-Roller.', 'Use Low-Pressure HVLP sprayer or Nano-Roller.'),
        t('Aplikasikan dengan metode "Wet-on-Wet".', 'Apply using the "Wet-on-Wet" method.'),
        t('Hindari aplikasi di bawah sinar matahari langsung yang ekstrem.', 'Avoid application under extreme direct sunlight.')
      ],
      proTip: t('Gerakan overlapping 50% menjamin perlindungan tanpa celah (holidays).', '50% overlapping motion ensures gap-free protection (holidays).'),
      icon: '🔫'
    },
    {
      id: 3,
      title: t('Aktivasi & Curing', 'Activation & Curing'),
      desc: t('Biarkan sistem molecular bonding bekerja tanpa gangguan.', 'Let the molecular bonding system work undisturbed.'),
      detailText: t(
        'Setelah aplikasi, proses penguapan carrier liquid akan memicu reaksi kimia molekuler. Dalam periode ini, partikel nano akan mulai mengeras dan menyatu dengan struktur internal material. Sangat krusial untuk menjaga area tetap bersih dari gangguan fisik atau paparan cairan lain selama 24 jam pertama.',
        'After application, the evaporation of the carrier liquid will trigger a molecular chemical reaction. During this period, the nano-particles will begin to harden and fuse with the internal structure of the material. It is crucial to keep the area clear of physical disturbance or exposure to other liquids for the first 24 hours.'
      ),
      items: [
        t('Waktu kering sentuh: 30-60 menit.', 'Touch-dry time: 30-60 minutes.'),
        t('Aktivasi penuh (Curing): 24 jam.', 'Full activation (Curing): 24 hours.'),
        t('Hindari paparan air selama periode curing awal.', 'Avoid water exposure during the initial curing period.')
      ],
      proTip: t('Sirkulasi udara yang baik mempercepat proses penguapan carrier nano-liquid.', 'Good air circulation accelerates the nano-liquid carrier evaporation process.'),
      icon: '⏳'
    }
  ];

  const currentStep = steps[activeStep - 1];

  return (
    <section id="training" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-block px-3 py-1 bg-sky-500 text-slate-950 text-[10px] font-black uppercase tracking-[0.2em] mb-4 rounded">Professional Access</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight italic">{t('Akademi Aplikasi Ahli', 'Expert Application Academy')}</h2>
          </div>
          <p className="text-slate-400 max-w-md">{t('Panduan teknis langkah-demi-langkah untuk menjamin sertifikasi hasil kerja installer profesional.', 'Step-by-step technical guide to ensure certification of professional installer results.')}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-4">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full text-left p-6 rounded-2xl border transition-all flex items-center gap-6 group ${
                  activeStep === step.id 
                  ? 'bg-sky-500 border-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.2)]' 
                  : 'bg-slate-950 border-white/5 hover:border-white/20'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-black ${
                  activeStep === step.id ? 'bg-slate-950 text-white' : 'bg-slate-900 text-slate-500'
                }`}>
                  {step.id}
                </div>
                <div>
                  <h4 className={`font-bold text-sm uppercase tracking-widest ${
                    activeStep === step.id ? 'text-slate-950' : 'text-white'
                  }`}>
                    {step.title}
                  </h4>
                  <div className={`text-[10px] mt-1 ${
                    activeStep === step.id ? 'text-slate-900 font-bold' : 'text-slate-500'
                  }`}>
                    {t('TAHAP TEKNIS', 'TECHNICAL PHASE')} {step.id}/03
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 bg-slate-950 border border-white/5 rounded-[40px] overflow-hidden shadow-2xl flex flex-col">
            <div className="p-10 bg-gradient-to-br from-slate-900 to-slate-950 border-b border-white/5">
              <div className="flex items-start gap-8">
                <div className="w-24 h-24 bg-sky-500/10 rounded-3xl flex items-center justify-center text-5xl border border-sky-500/20 shadow-inner">
                  {currentStep.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-4">{currentStep.title}</h3>
                  <p className="text-lg text-slate-400 leading-relaxed italic">"{currentStep.desc}"</p>
                </div>
              </div>
            </div>

            <div className="p-10 space-y-12">
              <div>
                <h5 className="text-xs font-black text-sky-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  {t('Keterangan Teknis', 'Technical Overview')}
                </h5>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {currentStep.detailText}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10 pt-8 border-t border-white/5">
                <div>
                  <h5 className="text-xs font-black text-sky-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                    {t('Ceklis Installer', 'Installer Checklist')}
                  </h5>
                  <ul className="space-y-4">
                    {currentStep.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-slate-300">
                        <div className="mt-1 w-4 h-4 rounded border border-white/20 flex-shrink-0 flex items-center justify-center">
                           <svg className="w-3 h-3 text-sky-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 bg-slate-900 rounded-[32px] border-l-4 border-sky-500 shadow-xl self-start">
                  <h5 className="text-xs font-black text-white uppercase tracking-widest mb-4">{t('Tips Ahli', 'Expert Pro-Tip')}</h5>
                  <p className="text-sm text-slate-400 leading-relaxed italic">
                    "{currentStep.proTip}"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="px-10 py-6 bg-slate-900/50 flex items-center justify-between border-t border-white/5">
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                {t('Sertifikasi Kode:', 'Certification Code:')} <span className="text-sky-500">MS-PHASE-{activeStep}</span>
              </div>
              <div className="flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                 <span className="text-[10px] text-emerald-500 font-black uppercase tracking-tighter">{t('Dokumentasi Terverifikasi', 'Verified Documentation')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingModule;
