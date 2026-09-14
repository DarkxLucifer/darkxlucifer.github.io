import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-line py-9 sm:py-11">
      <div className="wrap-container flex flex-col sm:flex-row justify-between items-center gap-5 font-mono text-[10px] tracking-[0.22em] text-mut">
        <p>© 2025 DARKXLUFICER — FUNDAMENTALS FIRST.</p>
        <p className="hidden md:block">SMOKE · SIGNALS · PYTORCH</p>
        <a
          href="#top"
          onClick={scrollToTop}
          className="text-ink hover:text-ember transition-colors"
        >
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
