import { motion } from 'framer-motion';
import { GraduationCap, Compass, Target, CheckCircle2, Building, Brain, Server, Trophy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-sky-100/80">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
          <GraduationCap size={16} />
          <span>Background &amp; Profile</span>
        </div>
        <h2 className="section-heading">About Me</h2>
      </motion.div>

      {/* Narrative Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeInUp}
        className="card mb-10 bg-gradient-to-r from-white via-sky-50/50 to-blue-50/20"
      >
        <div className="max-w-4xl">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Computer Science Student Driven by Backend Architecture &amp; AI Engineering
          </h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            {personalInfo.about}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-sm text-slate-700 bg-white/80 px-3.5 py-2 rounded-xl border border-sky-100">
              <Brain size={16} className="text-blue-600 shrink-0" />
              <span><strong>AI Engineering:</strong> Training &amp; evaluating deep learning models</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-700 bg-white/80 px-3.5 py-2 rounded-xl border border-sky-100">
              <Server size={16} className="text-blue-600 shrink-0" />
              <span><strong>Backend Architecture:</strong> REST APIs, schemas &amp; server logic</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Structured Details Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Card 1: Academic Program */}
        <motion.div variants={fadeInUp} className="card flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <GraduationCap size={22} />
            </div>
            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-sky-600 mb-1">
              Degree &amp; Program
            </h4>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {personalInfo.program}
            </h3>
            <div className="space-y-2 text-sm text-slate-600 mb-4">
              <div className="flex items-start gap-2">
                <Building size={16} className="text-slate-400 shrink-0 mt-0.5" />
                <span>{personalInfo.institution}</span>
              </div>
              <div className="flex items-start gap-2">
                <Trophy size={16} className="text-amber-500 shrink-0 mt-0.5" />
                <span>Dean's Honor List (GWA 90+ since 2023)</span>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-sky-100 text-xs font-mono text-slate-500">
            Field: Computer Science / Systems Logic
          </div>
        </motion.div>

        {/* Card 2: Career Interests */}
        <motion.div variants={fadeInUp} className="card flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
              <Target size={22} />
            </div>
            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-sky-600 mb-1">
              Career Interests
            </h4>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Specialized Tracks
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {personalInfo.careerInterests.map((interest, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 border-t border-sky-100 text-xs font-mono text-slate-500">
            Focus: Backend Systems &amp; Deep Learning
          </div>
        </motion.div>

        {/* Card 3: OJT Readiness */}
        <motion.div variants={fadeInUp} className="card flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
              <Compass size={22} />
            </div>
            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-600 mb-1">
              OJT Objective
            </h4>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Ready for Industry Impact
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Seeking to fulfill my required <strong>{personalInfo.ojtStatus.requiredHours}</strong> On-the-Job Training curriculum requirement. Dedicated to applying backend design, model evaluation, and rigorous logic in a collaborative engineering setting.
            </p>
          </div>
          <div className="pt-4 border-t border-sky-100 flex items-center justify-between text-xs font-semibold text-emerald-600">
            <span>Required: 500 Hours</span>
            <span className="font-mono text-slate-500">CS Curriculum</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
