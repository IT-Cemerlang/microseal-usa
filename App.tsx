
import React from 'react';
import { LanguageProvider } from './context/LanguageContext.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ProblemAwareness from './components/ProblemAwareness.tsx';
import SolutionIntro from './components/SolutionIntro.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import Benefits from './components/Benefits.tsx';
import ApplicationAreas from './components/ApplicationAreas.tsx';
import ROICalculator from './components/ROICalculator.tsx';
import TrainingModule from './components/TrainingModule.tsx';
import Certifications from './components/Certifications.tsx';
import Comparison from './components/Comparison.tsx';
import Trust from './components/Trust.tsx';
import CTA from './components/CTA.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';
import GeminiAssistant from './components/GeminiAssistant.tsx';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 selection:bg-sky-500/30 overflow-x-hidden text-slate-200">
        <Navbar />
        <main>
          <Hero />
          <ProblemAwareness />
          <SolutionIntro />
          <HowItWorks />
          <ROICalculator />
          <Benefits />
          <Certifications />
          <TrainingModule />
          <ApplicationAreas />
          <Comparison />
          <Trust />
          <FAQ />
          <CTA />
        </main>
        <Footer />
        <GeminiAssistant />
      </div>
    </LanguageProvider>
  );
};

export default App;
