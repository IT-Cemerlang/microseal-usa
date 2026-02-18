
import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const solutions = [
    { label: t('Lantai Industri', 'Industrial Flooring'), id: 'applications' },
    { label: t('Penyegelan Beton', 'Concrete Sealing'), id: 'technology' },
    { label: t('Proteksi Batu', 'Stone Protection'), id: 'benefits' },
    { label: t('Sistem Anti-Korosi', 'Anti-Corrosion System'), id: 'comparison' },
  ];

  const company = [
    { label: t('Tentang Teknologi', 'About Tech'), id: 'technology' },
    { label: t('Studi Kasus', 'Case Studies'), id: 'applications' },
    { label: t('Kontak Ahli', 'Contact Expert'), id: 'consultation' },
    { label: t('Akademi Pelatihan', 'Training Academy'), id: 'training' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center font-bold text-slate-950 italic">M</div>
              <span className="text-xl font-bold tracking-tighter text-white">MICROSEAL<span className="text-sky-500">™</span></span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
              {t(
                'Pionir teknologi perlindungan permukaan cerdas. Menggabungkan nano-science dan engineering untuk durabilitas aset tanpa kompromi.',
                'Pioneer in smart surface protection technology. Combining nano-science and engineering for uncompromising asset durability.'
              )}
            </p>
            <div className="flex gap-4">
               {['LinkedIn', 'Instagram', 'YouTube'].map(social => (
                 <a 
                   key={social} 
                   href="#" 
                   className="text-slate-600 hover:text-sky-500 transition-colors text-sm font-bold uppercase tracking-widest"
                 >
                   {social}
                 </a>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">{t('Solusi', 'Solutions')}</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              {solutions.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="hover:text-sky-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-sky-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">{t('Perusahaan', 'Company')}</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              {company.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="hover:text-sky-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-sky-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
          <div>© 2024 MICROSEAL TECHNOLOGIES. {t('SELURUH HAK CIPTA DILINDUNGI.', 'ALL RIGHTS RESERVED.')}</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-400 transition-colors">{t('Kebijakan Privasi', 'Privacy Policy')}</a>
            <a href="#" className="hover:text-slate-400 transition-colors">{t('Syarat Ketentuan', 'Terms of Service')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
