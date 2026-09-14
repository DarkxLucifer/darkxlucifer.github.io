import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const copyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const email = 'yashrajghadage9898@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      showToast('EMAIL COPIED TO CLIPBOARD');
    } catch {
      showToast('COPY FAILED - PLEASE SELECT MANUALLY');
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3400);
  };

  return (
    <section id="contact" className="sec-border">
      <div className="wrap-container">
        {/* Section Header */}
        <header className="mb-[clamp(40px,7vh,72px)]">
          <p className="kicker">05 / CONTACT</p>
          <h2 className="sec-title">
            <span className="block">LET'S BUILD</span>
            <span className="block ol">SOMETHING REAL.</span>
          </h2>
          <p className="mt-[18px] max-w-[540px] text-mut text-[15px] leading-[1.7]">
            Open to collaboration, AI projects, automation work — or a long conversation about
            agents and security. Pick a channel.
          </p>
        </header>

        {/* Transmission Channels */}
        <div className="border-t border-line">
          
          {/* 01 GITHUB */}
          <a
            href="https://github.com/DarkxLucifer"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-[clamp(14px,2.5vw,28px)] py-[clamp(22px,4vh,34px)] px-1 border-b border-line flex-wrap transition-colors duration-300 hover:text-ink"
          >
            <span className="font-mono text-[11px] text-ember">01</span>
            
            <span className="w-[26px] flex text-mut group-hover:text-ember transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.659.242 2.87.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </span>

            <span className="font-disp font-bold text-[clamp(1.15rem,3vw,1.9rem)] text-ink group-hover:translate-x-3 transition-transform duration-300">
              GITHUB
            </span>

            <span className="ml-auto font-mono text-[10.5px] tracking-[0.12em] text-mut truncate max-w-[200px] sm:max-w-none">
              github.com/DarkxLucifer
            </span>

            <span className="text-mut group-hover:text-ember group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M7 17 17 7" /><path d="M8 7h9v9" />
              </svg>
            </span>

            <span className="absolute left-0 bottom-[-1px] w-full h-[1px] bg-ember scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
          </a>

          {/* 02 LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/yashraj-ghadage/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-[clamp(14px,2.5vw,28px)] py-[clamp(22px,4vh,34px)] px-1 border-b border-line flex-wrap transition-colors duration-300 hover:text-ink"
          >
            <span className="font-mono text-[11px] text-ember">02</span>
            
            <span className="w-[26px] flex text-mut group-hover:text-ember transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </span>

            <span className="font-disp font-bold text-[clamp(1.15rem,3vw,1.9rem)] text-ink group-hover:translate-x-3 transition-transform duration-300">
              LINKEDIN
            </span>

            <span className="ml-auto font-mono text-[10.5px] tracking-[0.12em] text-mut truncate max-w-[200px] sm:max-w-none">
              in/yashraj-ghadage
            </span>

            <span className="text-mut group-hover:text-ember group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M7 17 17 7" /><path d="M8 7h9v9" />
              </svg>
            </span>

            <span className="absolute left-0 bottom-[-1px] w-full h-[1px] bg-ember scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
          </a>

          {/* 03 EMAIL */}
          <div className="group relative flex items-center gap-[clamp(14px,2.5vw,28px)] py-[clamp(22px,4vh,34px)] px-1 border-b border-line flex-wrap transition-colors duration-300 hover:text-ink">
            <a
              href="mailto:yashrajghadage9898@gmail.com"
              className="flex items-center gap-[clamp(14px,2.5vw,28px)] flex-1 min-w-0"
            >
              <span className="font-mono text-[11px] text-ember">03</span>
              
              <span className="w-[26px] flex text-mut group-hover:text-ember transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                  <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
                </svg>
              </span>

              <span className="font-disp font-bold text-[clamp(1.15rem,3vw,1.9rem)] text-ink group-hover:translate-x-3 transition-transform duration-300">
                EMAIL
              </span>

              <span className="ml-auto font-mono text-[10.5px] tracking-[0.12em] text-mut truncate max-w-[200px] sm:max-w-none">
                yashrajghadage9898@gmail.com
              </span>

              <span className="text-mut group-hover:text-ember group-hover:translate-x-1 group-hover:-translate-y-1 transition-all mr-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M7 17 17 7" /><path d="M8 7h9v9" />
                </svg>
              </span>
            </a>

            {/* Copy Button */}
            <button
              onClick={copyEmail}
              aria-label="Copy email address"
              className="w-10 h-10 border border-line2 flex items-center justify-center text-mut hover:text-ember hover:border-ember transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>

            <span className="absolute left-0 bottom-[-1px] w-full h-[1px] bg-ember scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
          </div>

          {/* 04 TELEGRAM */}
          <a
            href="https://t.me/DarkxLucifer"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-[clamp(14px,2.5vw,28px)] py-[clamp(22px,4vh,34px)] px-1 border-b border-line flex-wrap transition-colors duration-300 hover:text-ink"
          >
            <span className="font-mono text-[11px] text-ember">04</span>
            
            <span className="w-[26px] flex text-mut group-hover:text-ember transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                <path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 22-7z" />
              </svg>
            </span>

            <span className="font-disp font-bold text-[clamp(1.15rem,3vw,1.9rem)] text-ink group-hover:translate-x-3 transition-transform duration-300">
              TELEGRAM
            </span>

            <span className="ml-auto font-mono text-[10.5px] tracking-[0.12em] text-mut truncate max-w-[200px] sm:max-w-none">
              @DarkxLucifer
            </span>

            <span className="text-mut group-hover:text-ember group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M7 17 17 7" /><path d="M8 7h9v9" />
              </svg>
            </span>

            <span className="absolute left-0 bottom-[-1px] w-full h-[1px] bg-ember scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
          </a>

        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed left-1/2 bottom-8 -translate-x-1/2 z-[99] bg-[#141210] border border-line2 border-l-2 border-l-ember px-6 py-3 font-mono text-xs tracking-[0.18em] text-ink shadow-2xl animate-fade-in"
        >
          {toastMessage}
        </div>
      )}
    </section>
  );
};

export default Contact;
