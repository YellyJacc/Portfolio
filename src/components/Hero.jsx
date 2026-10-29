import { motion } from 'framer-motion';
import { Terminal, Download, ArrowRight, MapPin, Brain, Server } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { fadeInUp } from '../utils/animations';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Ambient Ice Blue Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-300/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl">
        {/* Status Badge with Live Pulsing Indicator */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-800 mb-6 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>{personalInfo.ojtStatus.badgeText}</span>
          <span className="text-slate-300">•</span>
          <span className="font-mono text-sky-700 font-bold">{personalInfo.ojtStatus.requiredHours} Required</span>
        </div>

        {/* Main Title & Subtitle */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Backend Architecture &amp; <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
            AI Engineering Solutions.
          </span>
        </h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mb-8">
          Hi, I am <span className="font-bold text-slate-900">{personalInfo.name}</span>. A Computer Science student specializing in backend development, AI model training and evaluation, and computational logic. Seeking a <span className="font-semibold text-blue-700">500-hour On-the-Job Training (OJT)</span> placement.
        </p>

        {/* Program & Specialization Details */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-600 mb-10">
          <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-sky-100 shadow-xs">
            <Terminal size={14} className="text-blue-600" />
            <span>{personalInfo.program}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-sky-100 shadow-xs">
            <Brain size={14} className="text-sky-600" />
            <span>AI Model Training &amp; Evaluation</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-sky-100 shadow-xs">
            <Server size={14} className="text-blue-600" />
            <span>Backend Development &amp; Logic</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-sky-100 shadow-xs">
            <MapPin size={14} className="text-slate-400" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 items-center">
          <a href="#projects" className="btn-primary">
            <span>Explore Projects</span>
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-secondary">
            <span>Contact Information</span>
          </a>
          <a
            href={personalInfo.resumeUrl}
            onClick={(e) => {
              if (personalInfo.resumeUrl === '#') {
                e.preventDefault();
                alert(`Resume / Curriculum Vitae for ${personalInfo.name} is available upon request. Please send an inquiry through the contact section!`);
              }
            }}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 px-4 py-3 rounded-xl transition-colors cursor-pointer"
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>
        </div>
      </motion.div>

      {/* Quick Stats Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {personalInfo.stats.map((stat, i) => (
          <div
            key={i}
            className="card p-4 text-center border-sky-100 bg-white/80"
          >
            <p className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-1">
              {stat.label}
            </p>
            <p className="text-sm md:text-base font-bold text-slate-900">
              {stat.value}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
