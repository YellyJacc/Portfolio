import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink, Terminal, Users, CheckCircle, X, Sparkles, BookOpen } from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/portfolioData';
import { fadeInUp } from '../utils/animations';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleLinkClick = (e, project, type) => {
    e.preventDefault();
    setSelectedProject({ ...project, clickedType: type });
  };

  return (
    <section id="projects" className="section-padding border-t border-sky-100/80">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
          <Code2 size={16} />
          <span>Curated Work &amp; Evidence</span>
        </div>
        <h2 className="section-heading">Featured Projects</h2>
        <p className="text-slate-600 max-w-2xl -mt-6 mb-12 text-base">
          Academic thesis research and startup application engineering demonstrating model training, evaluation, and production backend architecture.
        </p>
      </motion.div>

      {/* Projects Grid: 2 High-Fidelity Deep-Dive Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="card group flex flex-col justify-between border-sky-150 hover:border-blue-400 transition-all duration-300"
          >
            <div>
              {/* Evidence / Screenshot Mockup Frame */}
              <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 text-slate-200 mb-5 font-mono text-xs shadow-inner">
                {/* Window Chrome Header */}
                <div className="bg-slate-950 px-3 py-2 flex items-center justify-between border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="text-[11px] text-slate-400 truncate max-w-[220px]">
                    {project.title.toLowerCase().replace(/\s+/g, '-')}.evidence
                  </span>
                  <Terminal size={12} className="text-slate-500" />
                </div>
                {/* Simulated Terminal / Evidence Code Snippet */}
                <div className="p-3.5 bg-slate-900 overflow-x-auto min-h-[100px] flex items-center text-sky-300 text-[11px] leading-relaxed select-none">
                  <pre className="whitespace-pre-wrap">{project.evidenceSnippet}</pre>
                </div>
              </div>

              {/* Badges Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="badge-ice">
                  {project.badge}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {project.category}
                </span>
              </div>

              {/* Title & Role */}
              <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-3">
                <Users size={14} />
                <span>Role: {project.role}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 font-mono font-normal">{project.teamSize}</span>
              </div>

              {/* Full Title (if academic / competition) */}
              {project.fullTitle && (
                <div className="flex items-start gap-1.5 text-xs text-slate-500 bg-sky-50/70 p-2.5 rounded-lg border border-sky-100 mb-4 font-mono leading-relaxed">
                  <BookOpen size={14} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>{project.fullTitle}</span>
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Key Contributions Checklist */}
              <div className="space-y-2 mb-5 bg-sky-50/40 p-3.5 rounded-xl border border-sky-100">
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Key Deliverables &amp; Responsibilities:
                </p>
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                    <CheckCircle size={14} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer with Tools & Links */}
            <div>
              {/* External Acknowledgments */}
              {project.acknowledgments && (
                <p className="text-[11px] text-slate-400 italic mb-4">
                  Note: {project.acknowledgments}
                </p>
              )}

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2 py-0.5 bg-white text-slate-700 rounded-md border border-sky-100 shadow-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-sky-100">
                <button
                  type="button"
                  onClick={(e) => handleLinkClick(e, project, 'github')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <Github size={16} />
                  <span>Repository</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => handleLinkClick(e, project, 'demo')}
                  className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-sky-100 hover:bg-blue-600 hover:text-white text-blue-700 transition-all cursor-pointer shadow-xs"
                >
                  <span>View Details &amp; Evidence</span>
                  <ExternalLink size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Project Evidence Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 border border-sky-200 shadow-2xl relative"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-semibold mb-2">
                <Sparkles size={16} />
                <span>Project Verification &amp; Evidence</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-slate-600 mb-4">
                {selectedProject.description}
              </p>

              <div className="bg-sky-50 p-3.5 rounded-xl border border-sky-100 mb-4 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Role:</span>
                  <span className="font-mono text-blue-600">{selectedProject.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Team / Structure:</span>
                  <span className="font-mono text-slate-500">{selectedProject.teamSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Category:</span>
                  <span className="font-mono text-slate-500">{selectedProject.category}</span>
                </div>
              </div>

              <div className="bg-slate-900 text-sky-300 p-3.5 rounded-xl font-mono text-xs mb-5 overflow-x-auto">
                <p className="text-[10px] text-slate-400 mb-1">// Verified Benchmark &amp; Telemetry</p>
                <pre className="whitespace-pre-wrap">{selectedProject.evidenceSnippet}</pre>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="btn-secondary text-xs py-2 px-4"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="btn-primary text-xs py-2 px-4"
                >
                  Contact About Project
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
