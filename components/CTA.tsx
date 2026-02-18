
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const CTA: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Provide immediate feedback then trigger mailto
    setTimeout(() => {
      const recipient = 'sales@microsealch.com';
      const subject = `[MICROSEAL-WEB] New Inquiry from ${formData.company || formData.name}`;
      
      const body = 
        `--------------------------------------------------\n` +
        `MICROSEAL™ TECHNICAL INQUIRY FORM\n` +
        `--------------------------------------------------\n\n` +
        `SUBMITTED DATA:\n` +
        `• Name      : ${formData.name}\n` +
        `• Company   : ${formData.company}\n` +
        `• Message   : \n\n${formData.description}\n\n` +
        `--------------------------------------------------\n` +
        `This inquiry was generated from the Microseal website.\n` +
        `Please reply directly to this thread to follow up.\n` +
        `--------------------------------------------------`;
      
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Triggering mailto
      window.location.href = mailtoLink;
      
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="consultation" className="py-24 bg-slate-900 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/10 blur-[100px] rounded-full"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              {t('Siap Melindungi Aset Anda dengan Teknologi Cerdas?', 'Ready to Protect Your Assets with Smart Tech?')}
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-lg">
              {t(
                'Konsultasikan kebutuhan spesifik proyek Anda dengan tim teknis ahli kami. Dapatkan solusi proteksi permukaan yang efisien dan tahan lama.',
                'Consult your specific project needs with our expert technical team. Get an efficient and durable surface protection solution.'
              )}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">{t('Inkuiri Penjualan', 'Sales Inquiry')}</div>
                  <div className="text-white text-xl font-bold">sales@microsealch.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-slate-950 border border-white/5 rounded-[48px] shadow-2xl relative overflow-hidden">
            {isSubmitted ? (
              <div className="flex flex-col items-center text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-sky-500/20 text-sky-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{t('Draft Email Siap!', 'Email Draft Ready!')}</h4>
                <p className="text-slate-400 mb-8 max-w-sm mx-auto">
                  {t(
                    'Kami telah menyiapkan draf email dengan semua informasi Anda yang ditujukan ke sales@microsealch.com. Silakan klik "Kirim" pada aplikasi email Anda.',
                    'We have prepared an email draft with all your information addressed to sales@microsealch.com. Please click "Send" in your email application.'
                  )}
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-sky-500 text-slate-950 font-black rounded-xl hover:scale-105 transition-transform"
                >
                  {t('Kembali ke Formulir', 'Back to Form')}
                </button>
              </div>
            ) : (
              <>
                <h4 className="text-2xl font-bold text-white mb-8">{t('Kirim Inkuiri ke sales@microsealch.com', 'Send Inquiry to sales@microsealch.com')}</h4>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('Nama Lengkap', 'Full Name')}</label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-sky-500 transition-colors" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('Perusahaan', 'Company')}</label>
                      <input 
                        required
                        name="company"
                        type="text" 
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-sky-500 transition-colors" 
                        placeholder="Acme Corp" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('Kebutuhan Proyek', 'Project Requirements')}</label>
                    <textarea 
                      required
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-5 py-3 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-sky-500 transition-colors min-h-[120px]" 
                      placeholder={t("Jelaskan detail proyek atau pertanyaan teknis Anda...", "Explain your project details or technical questions...")}
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full py-4 bg-sky-500 hover:bg-sky-400 disabled:bg-slate-700 disabled:cursor-not-allowed text-slate-950 font-black rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                        {t('Menyiapkan Email...', 'Preparing Email...')}
                      </>
                    ) : (
                      <>
                        {t('Buka Aplikasi Email', 'Open Email App')}
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-slate-600 uppercase tracking-widest leading-relaxed">
                    {t(
                      'Formulir ini akan membuka draf email otomatis ke sales@microsealch.com.',
                      'This form will automatically open an email draft to sales@microsealch.com.'
                    )}
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
