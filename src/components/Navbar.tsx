import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (hero) {
        // Keep navbar 100% transparent throughout the entire 600vh scroll animation!
        // Only show subtle blurred bar when entering the subsequent content sections.
        const heroBottom = hero.offsetTop + hero.offsetHeight - window.innerHeight * 0.8;
        setScrolled(window.scrollY >= heroBottom);
      } else {
        setScrolled(window.scrollY > window.innerHeight * 5);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['profile', 'capabilities', 'work', 'stack', 'contact'];
    const handleObserver = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.3;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            return;
          }
        }
      }
      if (window.scrollY < window.innerHeight * 0.5) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleObserver);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const navItems = [
    { label: 'PROFILE', href: '#profile', id: 'profile' },
    { label: 'CAPABILITIES', href: '#capabilities', id: 'capabilities' },
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'STACK', href: '#stack', id: 'stack' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[90] flex items-center justify-between px-[clamp(20px,4vw,48px)] transition-all duration-500 pointer-events-none ${
          scrolled
            ? 'py-3.5 bg-[#080706]/90 backdrop-blur-md border-b border-line'
            : 'py-6 bg-transparent border-b border-transparent backdrop-blur-none'
        }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="pointer-events-auto font-mono text-xs tracking-[0.28em] text-ink transition-colors hover:text-white"
        >
          DARKXLUFICER<span className="text-ember font-bold">.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-[clamp(16px,2.4vw,34px)]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative py-1 font-mono text-[11px] tracking-[0.18em] transition-colors duration-300 ${
                  isActive ? 'text-ink' : 'text-mut hover:text-ink'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-0 h-[1px] w-full bg-ember transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}

          <a
            href="https://github.com/DarkxLucifer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] text-ember hover:text-ember2 transition-colors ml-2"
          >
            GITHUB
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3 transition-transform hover:translate-x-0.5 hover:-translate-y-0.5"
            >
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="pointer-events-auto md:hidden flex items-center justify-center w-10 h-10 border border-line2 text-ink hover:border-ember transition-colors"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[85] bg-[#080706]/98 backdrop-blur-lg flex flex-col justify-center px-[9vw] transition-all duration-400 md:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-4">
          {navItems.map((item, i) => (
            <a
              key={item.id}
              href={item.href}
              onClick={closeMenu}
              className="font-disp text-[clamp(1.7rem,7vw,2.8rem)] font-bold text-ink hover:text-ember transition-colors flex items-center"
            >
              <span className="font-mono text-xs text-ember mr-4 tracking-widest">
                {String(i + 1).padStart(2, '0')}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-[8vh] flex flex-wrap gap-6 font-mono text-xs tracking-widest text-mut border-t border-line pt-6">
          <a
            href="https://github.com/DarkxLucifer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ember"
          >
            GITHUB ↗
          </a>
          <a
            href="https://t.me/DarkxLucifer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ember"
          >
            TELEGRAM ↗
          </a>
          <a href="mailto:yashrajghadage9898@gmail.com" className="hover:text-ember">
            EMAIL ↗
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
