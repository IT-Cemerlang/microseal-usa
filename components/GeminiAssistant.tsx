
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { useLanguage } from '../context/LanguageContext.tsx';

const GeminiAssistant: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { 
      role: 'ai', 
      text: t(
        'Halo! Saya Micro-AI Assistant. Ada yang bisa saya bantu terkait teknologi perlindungan Microseal™?',
        'Hello! I am Micro-AI Assistant. How can I help you regarding Microseal™ protection technology?'
      ) 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    const updatedMessages = [...messages, { role: 'user' as const, text: userMsg }];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const contents = updatedMessages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));

      // Fixed to English instructions as requested
      const sysInstruction = `You are a professional technical expert for Microseal™, a smart surface protection technology. Respond ONLY in English. Focus on nano-tech: molecular bonding, 5-10 years longevity. Be authoritative, helpful, and technically precise.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents,
        config: {
          systemInstruction: sysInstruction,
          temperature: 0.7,
        }
      });

      const aiText = response.text || t("Maaf, kendala teknis.", "Sorry, technical issue.");
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error('Gemini API Error:', error);
      setMessages(prev => [...prev, { role: 'ai', text: t("Terjadi kesalahan.", "An error occurred.") }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-sky-500 text-slate-950 rounded-full shadow-[0_0_20px_rgba(14,165,233,0.5)] flex items-center justify-center hover:scale-110 transition-transform"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-8 z-[100] w-[350px] md:w-[400px] h-[500px] bg-slate-900 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl">
          <div className="p-4 bg-sky-500 text-slate-950 flex items-center gap-3">
             <div className="w-8 h-8 bg-slate-950 rounded-lg flex items-center justify-center text-xs font-black">AI</div>
             <div>
               <h4 className="font-bold text-sm">Microseal AI Assistant</h4>
               <div className="text-[10px] uppercase font-bold tracking-tighter opacity-70">
                 {t('Pakar Teknis Online', 'Technical Expert Online')}
               </div>
             </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' ? 'bg-sky-500 text-slate-950 font-medium' : 'bg-white/5 text-slate-300'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-2xl flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-slate-950/50 border-t border-white/5 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t("Tanyakan sesuatu...", "Ask something...")}
              className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
            />
            <button 
              onClick={handleSend}
              className="p-2 bg-sky-500 text-slate-950 rounded-xl hover:bg-sky-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiAssistant;
