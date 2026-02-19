
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left"
      >
        <span className="text-lg font-bold text-white">{question}</span>
        <span className={`text-sky-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t("Berapa lama daya tahan Microseal?", "How long does Microseal durability last?"),
      answer: t(
        "Daya tahan Microseal bervariasi tergantung jenis material dan kondisi lingkungan, namun rata-rata perlindungan optimal bertahan antara 5 hingga 10 tahun sebelum memerlukan aplikasi ulang.",
        "Microseal durability varies based on material type and environmental conditions, but on average, optimal protection lasts between 5 to 10 years before needing re-application."
      )
    },
    {
      question: t("Apakah aman untuk lingkungan?", "Is it safe for the environment?"),
      answer: t(
        "Sangat aman. Microseal diformulasikan agar ramah lingkungan, bebas VOC (Volatile Organic Compounds), dan tidak beracun setelah mengering sempurna.",
        "Extremely safe. Microseal is formulated to be eco-friendly, VOC-free (Volatile Organic Compounds), and non-toxic once fully cured."
      )
    },
    {
      question: t("Bisa digunakan untuk material apa saja?", "What materials can it be used on?"),
      answer: t(
        "Microseal sangat efektif pada material berpori seperti beton, batu bata, batu alam, kayu, semen, dan beberapa jenis logam tertentu yang memerlukan perlindungan korosi.",
        "Microseal is highly effective on porous materials such as concrete, bricks, natural stone, wood, cement, and certain types of metal that require corrosion protection."
      )
    },
    {
      question: t("Bagaimana proses aplikasinya?", "What is the application process?"),
      answer: t(
        "Prosesnya sangat efisien. Permukaan dibersihkan terlebih dahulu, kemudian Microseal diaplikasikan menggunakan spray bertekanan rendah atau roller. Produk ini cepat kering dan permukaan bisa digunakan kembali dalam hitungan jam.",
        "The process is very efficient. The surface is cleaned first, then Microseal is applied using a low-pressure spray or roller. The product dries quickly, and the surface can be used again within hours."
      )
    }
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">{t('Pertanyaan Umum', 'Common Objections')}</h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
