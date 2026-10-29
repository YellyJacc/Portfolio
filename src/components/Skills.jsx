import { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Brain, Network, Database, Check } from 'lucide-react';
import { skills } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categoryIcons = {
    "AI Engineering & Computer Vision": Brain,
    "Backend Development & Logic": Server,
    "Networking & Infrastructure (CCNA)": Network,
    "Databases & Full-Stack Tools": Database,
  };

  const filteredSkills = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding border-t border-sky-100/80">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
          <Server size={16} />
          <span>Competencies</span>
        </div>
        <h2 className="section-heading">Technical Skills &amp; Specialties</h2>
        <p className="text-slate-600 max-w-2xl -mt-6 mb-8 text-base">
          Core technical competencies centered on backend engineering, AI model training and evaluation, Cisco networking, and computational logic.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["All", ...skills.map((s) => s.category)].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30 scale-102"
                  : "bg-white/80 text-slate-600 border border-sky-150 hover:border-sky-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        key={activeCategory}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {filteredSkills.map((skillGroup, index) => {
          const Icon = categoryIcons[skillGroup.category] || Server;
          return (
            <motion.div key={index} variants={fadeInUp} className="card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-blue-600 flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {skillGroup.category}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {skillGroup.description}
                    </p>
                  </div>
                </div>

                {/* Items List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
                  {skillGroup.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100 flex flex-col justify-between hover:border-sky-300 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-slate-800">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white text-sky-700 border border-sky-200/60">
                          {item.level}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 mt-1">
                        {item.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-sky-100 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                <Check size={14} className="text-blue-600" />
                <span>Applied in thesis research &amp; startup applications</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
