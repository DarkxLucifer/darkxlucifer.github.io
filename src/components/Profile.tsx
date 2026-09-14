import React from 'react';

export const Profile: React.FC = () => {
  const profileDetails = [
    { label: 'NAME', value: 'Darkxluficer (Yashraj Ghadage)' },
    { label: 'ROLE', value: 'AI Engineer & Builder' },
    { label: 'FOCUS', value: 'AI · ML · DL · Generative AI · Agentic AI' },
    { label: 'INTERESTS', value: 'AI applications, AI agents, automation, real-world problem solving, cybersecurity' },
    { label: 'APPROACH', value: 'Fundamentals first — then build, break, improve.' },
  ];

  const loopNodes = [
    { num: '01', title: 'LEARN FUNDAMENTALS' },
    { num: '02', title: 'EXPERIMENT' },
    { num: '03', title: 'BUILD' },
    { num: '04', title: 'DEBUG' },
    { num: '05', title: 'IMPROVE' },
  ];

  return (
    <section id="profile" className="sec-border">
      <div className="wrap-container">
        {/* Section Header */}
        <header className="mb-[clamp(40px,7vh,72px)]">
          <p className="kicker">01 / PROFILE DATA</p>
          <h2 className="sec-title">
            <span className="block">BUILT FROM</span>
            <span className="block ol">FUNDAMENTALS</span>
          </h2>
        </header>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-[clamp(40px,6vw,90px)]">
          {/* Left Lead Copy */}
          <div>
            <p className="font-sans font-light text-[clamp(1.35rem,2.6vw,1.9rem)] leading-[1.5] text-ink">
              I don't just call AI APIs —{' '}
              <em className="not-italic text-ember">I build the intelligence behind them.</em>
            </p>
            <p className="mt-[22px] max-w-[56ch] text-[16.5px] leading-[1.7] text-body">
              My path runs from classical machine learning into deep learning, reinforcement learning,
              generative AI, RAG and agentic systems. I implement the concepts myself — forward
              passes, backpropagation, Q-tables, retrievers, agents — because fundamentals are the
              part that never goes obsolete.
            </p>
            <p className="mt-[18px] max-w-[56ch] text-[16.5px] leading-[1.7] text-body">
              When something breaks, I debug it down to the math. Then I rebuild it better.
            </p>
          </div>

          {/* Right Data List */}
          <dl className="border-t border-line">
            {profileDetails.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[118px_1fr] gap-4 py-[15px] border-b border-line"
              >
                <dt className="font-mono text-[10px] tracking-[0.22em] text-mut pt-1">
                  {item.label}
                </dt>
                <dd className="text-[14.5px] text-body">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Operating Loop */}
        <div className="mt-[clamp(56px,9vh,90px)] border-t border-line pt-[26px]">
          <p className="font-mono text-[10px] tracking-[0.3em] text-mut uppercase">
            OPERATING LOOP
          </p>

          <div className="relative mt-8">
            {/* Horizontal Track Line */}
            <div className="hidden sm:block absolute top-[-16px] left-0 right-0 h-[1px] bg-line2" />

            {/* Glowing Traveling Ember */}
            <div
              aria-hidden="true"
              className="hidden sm:block absolute top-[-20px] left-0 w-[7px] h-[7px] rounded-full bg-ember2 shadow-[0_0_12px_3px_rgba(255,90,31,0.55)] animate-loop-ember"
            />

            {/* Node Items */}
            <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-3">
              {loopNodes.map((node) => (
                <div key={node.num} className="relative font-mono text-[clamp(10px,1.2vw,11.5px)] tracking-[0.16em] text-body pl-6 sm:pl-0">
                  {/* Dot */}
                  <span className="absolute left-0 top-1.5 sm:top-[-19px] w-[5px] h-[5px] rounded-full bg-mut" />
                  <b className="font-normal text-ember mr-2">{node.num}</b>
                  <span>{node.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
