import React from 'react';
import TopProgressBar from './components/TopProgressBar';
import SmokeEngine from './components/SmokeEngine';
import CustomCursor from './components/CustomCursor';
import ClickToCopyOrange from './components/ClickToCopyOrange';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Capabilities from './components/Capabilities';
import Work from './components/Work';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#080706] text-body overflow-x-clip selection:bg-ember selection:text-[#0a0603]">
      {/* Click-to-Orange Flash & Copy To Clipboard Engine */}
      <ClickToCopyOrange />
      {/* Warm Ambient Ember Background Glow */}
      <div className="ember-glow-bg" />

      {/* Interactive Continuous Smoke Engine Canvas */}
      <SmokeEngine />

      {/* Cinematic Perimeter Dark Vignette */}
      <div className="vignette-frame" />

      {/* Subtle Analog Film Grain Overlay */}
      <div className="film-grain" />

      {/* Fixed Top 2px Ember Progress Bar */}
      <TopProgressBar />

      {/* Custom Responsive Cursor (Ember Dot & Ring) */}
      <CustomCursor />

      {/* Minimalist Editorial Header */}
      <Navbar />

      {/* Main Flow */}
      <main id="top" className="relative z-10">
        {/* 
          HERO STAGE:
          Full HD 1080p AI-Upscaled 48-Frame Canvas Animation +
          Editorial Typography & Live Telemetry
        */}
        <Hero />

        {/* 01: PROFILE DATA (Built from Fundamentals & Operating Loop) */}
        <Profile />

        {/* 02: CAPABILITIES (Fields of Operation Interactive Ledger) */}
        <Capabilities />

        {/* 03: PROOF OF WORK (5 Deep AI Projects with Architecture Pipelines) */}
        <Work />

        {/* 04: TECH STACK (Continuous Infinite Marquee Bands & Cyber Box) */}
        <Stack />

        {/* 05: CONTACT (Transmission Uplinks & Copy Toast) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
