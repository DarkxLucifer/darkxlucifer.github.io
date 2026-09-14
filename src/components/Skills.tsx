import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import { Cpu, Search } from 'lucide-react';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = skillCategories.filter((cat) => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return false;
    }
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const matchesCategory =
      cat.name.toLowerCase().includes(query) || cat.description.toLowerCase().includes(query);
    const matchesSkill = cat.skills.some(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        (s.type && s.type.toLowerCase().includes(query))
    );
    return matchesCategory || matchesSkill;
  });

  return (
    <section id="skills" className="py-28 relative border-t border-white/[0.08] bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase font-semibold px-2.5 py-1 bg-accent-cyan/10 border border-accent-cyan/30 rounded">
              DARKXLUCIFER / 04
            </span>
            <div className="h-px w-10 bg-white/20" />
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white uppercase">
              TECHNICAL ARSENAL
            </h2>
          </div>
          <div className="font-mono text-xs text-white/40 tracking-widest flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
            <span>08 ENGINEERING DOMAINS</span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-white text-[#050507] font-bold shadow-md'
                  : 'bg-white/[0.03] border border-white/[0.08] text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              ALL SYSTEMS
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-white text-[#050507] font-bold shadow-md'
                    : 'bg-white/[0.03] border border-white/[0.08] text-white/60 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.code} {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Filter skill (e.g. PyTorch, RAG)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#08080c] border border-white/10 rounded text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-accent-cyan/60 transition-colors"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-[#08080c] border border-white/[0.08] p-5 rounded-lg flex flex-col justify-between hover:border-accent-cyan/40 hover:bg-[#0c0c12] transition-all group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-2">
                  <span className="text-accent-cyan/80 font-bold">{category.code}</span>
                  <Cpu className="w-3.5 h-3.5 text-white/40 group-hover:text-accent-cyan transition-colors" />
                </div>

                <h3 className="text-base font-display font-bold text-white mb-1 tracking-tight">
                  {category.name}
                </h3>
                <p className="text-xs text-white/50 font-light leading-relaxed mb-4">
                  {category.description}
                </p>

                <div className="space-y-1.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2 bg-black/50 border border-white/[0.06] rounded flex items-center justify-between group/item hover:border-white/20 transition-colors"
                    >
                      <span className="text-xs font-mono font-medium text-white/90 group-hover/item:text-accent-cyan transition-colors">
                        {skill.name}
                      </span>
                      {skill.type && (
                        <span className="text-[10px] font-mono text-white/40">
                          {skill.type}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-white/30">
                <span>STATUS: VERIFIED</span>
                <span className="text-accent-cyan">ACTIVE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
