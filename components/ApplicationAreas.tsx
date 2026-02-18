
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface TechnicalDossier {
  id: string;
  name: string;
  tagline: string;
  description: string;
  advantages: string[];
  specs: { label: string; value: string }[];
  application: { title: string; steps: string[] }[];
  packaging: { size: string; pallet: string; item: string }[];
  consumption?: string;
}

const dossiers: Record<string, TechnicalDossier> = {
  'tok-melt-n2': {
    id: 'tok-melt-n2',
    name: 'TOK®-Melt N2',
    tagline: 'Hot-Poured Bituminous Sealing Compound',
    description: 'Hot-applied, bituminous sealing compound in accordance with DIN EN 14188-1, type N2, for sealing of joints in asphalt or concrete. Maximum change in joint gap width absorption up to 25%.',
    advantages: [
      'Fulfils requirements of DIN EN 14188-1 type N2',
      'Suitable for traffic surfaces (concrete and asphalt)',
      'Fulfils current ZTV Fug-StB requirements',
      'Economical thanks to targeted portioning'
    ],
    specs: [
      { label: 'Standard', value: 'DIN EN 14188-1' },
      { label: 'Density', value: 'Approx. 1.1 g/cm³' },
      { label: 'Melt Temp', value: '160 to 180 °C (320 to 356 °F)' },
      { label: 'Primer', value: 'CORRISOL® -K required' }
    ],
    application: [
      { title: 'Joint Prep', steps: ['Joint must be clean and dry.', 'Apply CORRISOL-K primer for optimum bonding.', 'Wait for primer to bind dust/dirt.'] },
      { title: 'Processing', steps: ['Melt in indirectly heated mixing kettle.', 'Do not heat above 180°C.', 'Pour into joint using suitable equipment.'] }
    ],
    packaging: [
      { size: '4 x 5 kg in a carton', pallet: '25 cartons (500kg)', item: '10275202' },
      { size: '25 kg in carton', pallet: '24 cartons (600kg)', item: '10275200' }
    ],
    consumption: 'Joint length (m) x width (mm) x depth (mm) x 1.1 = grams'
  },
  'tok-rep': {
    id: 'tok-rep',
    name: 'TOK®-Rep',
    tagline: 'Two-Component Cold-Worked Repair Compound',
    description: 'Innovative repair compound for surface damage, scoring after tyre blowouts, and conventional asphalt wearing courses. Rapid hardening allows for quick road re-opening.',
    advantages: [
      'Rapid working and material hardening',
      'Excellent mechanical abrasion resistance',
      'Superior compound adhesion to asphalt',
      'Ideal pack size for small repairs'
    ],
    specs: [
      { label: 'Density', value: '1.45 kg/l (Hardened)' },
      { label: 'Mixing Ratio', value: '4:1 (A:B parts by weight)' },
      { label: 'Pot Life', value: '4–6 minutes at 23°C' },
      { label: 'Traffic Ready', value: 'Approx. 60 minutes' }
    ],
    application: [
      { title: 'Mixing', steps: ['Stir Component A separately first.', 'Add Component B and mix for 1-2 mins.', 'Rotation speed max 500 rpm.'] },
      { title: 'Finishing', steps: ['Cast material immediately after mixing.', 'Sprinkle with excess grit (0/5 size).', 'Protect from moisture until hardened.'] }
    ],
    packaging: [
      { size: '2.0 l (A+B components)', pallet: '96 litres (48 sets)', item: '102 02 739' }
    ]
  }
};

const ApplicationAreas: React.FC = () => {
  const { t } = useLanguage();
  const [activeSectorId, setActiveSectorId] = useState('industrial');
  const [selectedDossier, setSelectedDossier] = useState<TechnicalDossier | null>(null);

  const sectors = [
    {
      id: 'industrial',
      name: t('Industri', 'Industrial'),
      items: [t('Gudang Logistik', 'Logistics Warehouse'), t('Pabrik Manufaktur', 'Manufacturing Plant')],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      caseStudy: {
        project: t('Pusat Logistik Global', 'Global Logistics Hub'),
        problem: t('Lantai beton berdebu dan menyerap tumpahan oli.', 'Dusty concrete floors absorbing oil spills.'),
        solution: 'Microseal Industrial Sealer',
        result: '100% dust-proof, 40% cost reduction.'
      },
      products: []
    },
    {
      id: 'infrastructure',
      name: t('Infrastruktur', 'Infrastructure'),
      items: [t('Jembatan & Flyover', 'Bridges & Flyovers'), t('Area Parkir', 'Parking Areas')],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
      caseStudy: {
        project: t('Silo Parkir Metro', 'Metro Parking Silo'),
        problem: t('Retak rambut pada struktur akibat panas matahari.', 'Hairline cracks on the structure due to solar heat.'),
        solution: 'Microseal Structural Seal',
        result: 'Thermal crack prevention + waterproof integrity.'
      },
      products: ['tok-melt-n2', 'tok-rep']
    }
  ];

  const activeSector = sectors.find(s => s.id === activeSectorId)!;

  return (
    <section id="applications" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t('Sektor', 'Application')} <span className="text-sky-500">{t('Aplikasi', 'Sectors')}</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sectors.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSectorId(s.id)}
              className={`px-8 py-3 rounded-full font-bold transition-all text-sm border ${
                activeSectorId === s.id ? 'bg-sky-500 border-sky-500 text-slate-950' : 'bg-transparent border-white/10 text-slate-400 hover:border-white/30'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="rounded-[48px] overflow-hidden border border-white/10 aspect-[4/3] shadow-2xl relative group">
              <img src={activeSector.image} alt={activeSector.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-10 left-10">
                <h4 className="text-3xl font-bold text-white mb-2">{activeSector.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {activeSector.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-xs font-bold text-white border border-white/10">{item}</span>
                  ))}
                </div>
              </div>
            </div>

            {activeSector.products.length > 0 && (
              <div className="p-8 bg-slate-900 border border-white/5 rounded-[40px] space-y-6">
                <h5 className="text-[10px] text-sky-500 font-black uppercase tracking-[0.2em]">{t('Sistem Terintegrasi', 'Verified Technical Systems')}</h5>
                <div className="grid gap-4">
                  {activeSector.products.map((productId) => (
                    <div 
                      key={productId} 
                      onClick={() => setSelectedDossier(dossiers[productId])}
                      className="p-4 bg-slate-950 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-sky-500/50 transition-all cursor-pointer group"
                    >
                      <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center text-xl group-hover:bg-sky-500 group-hover:text-slate-950 transition-all">📄</div>
                      <div className="flex-1">
                        <div className="text-white font-bold text-sm uppercase tracking-tight">{dossiers[productId].name}</div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{dossiers[productId].tagline}</div>
                      </div>
                      <div className="text-sky-500 opacity-0 group-hover:opacity-100 transition-all text-xs font-black uppercase tracking-widest">{t('Review Spec', 'View Spec')}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-10 bg-slate-900 border border-white/5 rounded-[40px] h-full">
            <div className="inline-block px-4 py-1.5 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-black uppercase mb-8 tracking-widest rounded-full">Case Study</div>
            <h4 className="text-2xl font-bold text-white mb-6">"{activeSector.caseStudy.project}"</h4>
            <div className="space-y-6">
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Problem</div>
                <div className="text-slate-300">{activeSector.caseStudy.problem}</div>
              </div>
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                <div className="text-[10px] text-emerald-500 uppercase font-black tracking-widest mb-1">Result</div>
                <div className="text-emerald-400 font-bold">{activeSector.caseStudy.result}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Dossier Viewer Modal */}
      {selectedDossier && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 sm:p-12">
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl" onClick={() => setSelectedDossier(null)}></div>
          <div className="relative w-full max-w-5xl max-h-full bg-slate-900 border border-white/10 rounded-[48px] overflow-hidden flex flex-col animate-in zoom-in duration-300">
            {/* Header */}
            <div className="px-8 py-6 bg-slate-950 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center font-black text-slate-950">M</div>
                <div>
                  <h3 className="text-white font-black text-xl italic">{selectedDossier.name}</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">{selectedDossier.tagline}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedDossier(null)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-8 sm:p-12 space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <section>
                    <h5 className="text-[10px] text-sky-500 font-black uppercase tracking-[0.3em] mb-4">Dossier Overview</h5>
                    <p className="text-slate-300 leading-relaxed font-medium">{selectedDossier.description}</p>
                  </section>
                  <section>
                    <h5 className="text-[10px] text-sky-500 font-black uppercase tracking-[0.3em] mb-4">Technical Advantages</h5>
                    <div className="grid gap-3">
                      {selectedDossier.advantages.map((adv, i) => (
                        <div key={i} className="flex gap-3 text-sm text-slate-400">
                          <span className="text-sky-500 font-bold">✓</span>
                          {adv}
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="p-8 bg-slate-950 rounded-[32px] border border-white/5">
                  <h5 className="text-[10px] text-white font-black uppercase tracking-[0.3em] mb-6">Material Properties</h5>
                  <div className="space-y-4">
                    {selectedDossier.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                        <span className="text-xs text-slate-500 font-bold uppercase">{spec.label}</span>
                        <span className="text-sm text-white font-bold mono">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  {selectedDossier.consumption && (
                    <div className="mt-8 p-4 bg-sky-500/10 border border-sky-500/20 rounded-2xl">
                      <div className="text-[9px] text-sky-500 font-black uppercase mb-1">Consumption Formula</div>
                      <div className="text-xs text-sky-300 font-bold mono">{selectedDossier.consumption}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {selectedDossier.application.map((app, i) => (
                  <div key={i} className="p-8 bg-slate-900 border border-white/5 rounded-[32px]">
                    <h5 className="text-[10px] text-sky-500 font-black uppercase tracking-[0.3em] mb-6">{app.title}</h5>
                    <ul className="space-y-3">
                      {app.steps.map((step, si) => (
                        <li key={si} className="flex gap-4 text-xs text-slate-400">
                          <span className="text-slate-700 font-black">{si + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <section>
                <h5 className="text-[10px] text-sky-500 font-black uppercase tracking-[0.3em] mb-6">Delivery & Packaging</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="text-slate-500 font-black uppercase tracking-widest border-b border-white/5">
                        <th className="pb-4 px-4">Delivery Form</th>
                        <th className="pb-4 px-4">Pallet Config</th>
                        <th className="pb-4 px-4">Item ID</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      {selectedDossier.packaging.map((pkg, i) => (
                        <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                          <td className="py-4 px-4 font-bold">{pkg.size}</td>
                          <td className="py-4 px-4">{pkg.pallet}</td>
                          <td className="py-4 px-4 mono text-sky-500">{pkg.item}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="px-12 py-6 bg-slate-950 border-t border-white/5 flex items-center justify-between text-[8px] font-black text-slate-600 uppercase tracking-[0.4em]">
              <span>Microseal Verified Documentation Hub</span>
              <span>ASTM/ISO STANDARD VALIDATED</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ApplicationAreas;
