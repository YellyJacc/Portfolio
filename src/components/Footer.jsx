import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-sky-100 bg-white/50 backdrop-blur-xs">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-base font-bold text-slate-900 tracking-tight">
            {personalInfo.name}
          </span>
          <span className="text-xs text-slate-500 mt-0.5">
            {personalInfo.title} • {personalInfo.program}
          </span>
          <p className="text-[11px] text-slate-400 font-mono mt-2">
            © {new Date().getFullYear()} All rights reserved. Academic &amp; Technical Portfolio.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-500 hidden sm:inline">
            Built with React, Tailwind CSS &amp; Framer Motion
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="p-2.5 rounded-xl bg-white border border-sky-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 shadow-xs transition-all cursor-pointer"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
