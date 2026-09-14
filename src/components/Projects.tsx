import React, { useRef, useState } from 'react';
import { projects, ProjectItem } from '../data/projects';
import { ArrowUpRight, Activity } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-28 relative border-t border-white/[0.08] bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase font-semibold px-2.5 py-1 bg-accent-cyan/10 border border-accent-cyan/30 rounded">
              DARKXLUCIFER / 03
            </span>
            <div className="h-px w-10 bg-white/20" />
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white uppercase">
              3D PROJECT SHOWCASE
            </h2>
          </div>
          <div className="font-mono text-xs text-white/40 tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            <span>CONFIRMED REPOSITORIES // 05 SYSTEMS</span>
          </div>
        </div>

        {/* 3D Project Panels List */}
        <div className="space-y-10">
          {projects.map((project: ProjectItem) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 3.5;
    const rotY = ((x - centerX) / centerX) * 3.5;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-200 ease-out"
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      }}
    >
      <div
        className={`relative bg-[#08080c] border rounded-lg p-6 sm:p-8 transition-all duration-300 shadow-xl ${
          isHovered
            ? 'border-accent-cyan/60 shadow-accent-cyan/10 bg-[#0c0c12]'
            : 'border-white/[0.08] shadow-black/80'
        }`}
      >
        {/* Header Telemetry Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-white/[0.08] font-mono text-xs">
          <div className="flex items-center gap-3.5">
            <span className="text-3xl sm:text-4xl font-display font-black text-white/30">
              {project.num}
            </span>
            <div>
              <span className="px-2 py-0.5 bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-[10px] tracking-wider uppercase font-semibold rounded">
                {project.badge}
              </span>
              <span className="text-white/40 ml-2.5 uppercase tracking-wide text-[11px]">
                {project.category}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-white/40 text-[11px] hidden sm:inline">
              TAG // <strong className="text-white/80">{project.accentTag}</strong>
            </span>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-[#050507] hover:bg-accent-cyan font-mono text-xs font-bold tracking-wider rounded transition-colors"
            >
              <span>VIEW REPO</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Title, Description, Math & Stack */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
              {project.title}
            </h3>

            <p className="text-sm text-white/70 font-light leading-relaxed">
              {project.description}
            </p>

            {/* Core Mathematical Formulation */}
            {project.mathFormula && (
              <div className="p-3 bg-black/50 border border-white/[0.08] rounded font-mono text-xs text-accent-cyan">
                <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">
                  CORE UPDATE FORMULA
                </div>
                <code>{project.mathFormula}</code>
              </div>
            )}

            {/* Technologies */}
            <div>
              <div className="text-[11px] font-mono text-white/40 uppercase tracking-wider mb-2">
                TECHNOLOGY STACK
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-white/[0.03] border border-white/[0.08] text-white/80 font-mono text-xs rounded hover:border-accent-cyan/40 hover:text-accent-cyan transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Stats & Pipeline Execution */}
          <div className="lg:col-span-5 space-y-4">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {project.stats.map((s) => (
                <div key={s.label} className="p-3 bg-black/60 border border-white/[0.06] rounded">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                    {s.label}
                  </div>
                  <div className="text-xs font-mono font-medium text-white mt-0.5 truncate">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Pipeline Flow */}
            {(project.pipeline || project.architecture) && (
              <div className="p-3.5 bg-black/40 border border-white/[0.06] rounded">
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Activity className="w-3 h-3 text-accent-cyan" />
                  <span>EXECUTION FLOW</span>
                </div>
                <div className="space-y-1 font-mono text-[11px] text-white/70">
                  {(project.pipeline || project.architecture)?.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-accent-cyan text-[10px]">0{idx + 1}</span>
                      <span className="text-white/20">&rarr;</span>
                      <span className="truncate">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Projects;
