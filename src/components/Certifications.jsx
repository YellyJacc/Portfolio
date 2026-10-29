import { motion } from 'framer-motion';
import { Award, ShieldCheck, Calendar, CheckCircle2, Trophy, Clock } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding border-t border-sky-100/80">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
          <Award size={16} />
          <span>Recognitions &amp; Credentials</span>
        </div>
        <h2 className="section-heading">Certifications &amp; Achievements</h2>
        <p className="text-slate-600 max-w-2xl -mt-6 mb-12 text-base">
          Cisco Networking Academy certifications, national startup finalist recognitions, and continuous academic honors.
        </p>
      </motion.div>

      {/* Grid of Certifications & Achievements */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {certifications.map((item, index) => {
          const isAchievement = item.type === "Achievement";
          const isInProgress = item.status === "Continuing Course";

          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="card flex flex-col justify-between border-sky-150 hover:border-blue-400 transition-all"
            >
              <div>
                {/* Header with Type & Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    isAchievement
                      ? "bg-amber-50 text-amber-800 border border-amber-200"
                      : isInProgress
                      ? "bg-sky-50 text-sky-800 border border-sky-200"
                      : "bg-blue-50 text-blue-800 border border-blue-200"
                  }`}>
                    {isAchievement ? <Trophy size={13} className="text-amber-600" /> : <ShieldCheck size={13} className="text-blue-600" />}
                    <span>{item.badge}</span>
                  </span>

                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    <Calendar size={13} />
                    <span>{item.date}</span>
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-blue-700 mb-3">
                  {item.issuer}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer with Status */}
              <div className="pt-3 border-t border-sky-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="truncate">Ref: {item.id}</span>
                <span className={`font-sans font-semibold flex items-center gap-1 ${
                  isInProgress ? "text-sky-700" : isAchievement ? "text-amber-700" : "text-emerald-700"
                }`}>
                  {isInProgress ? <Clock size={13} /> : <CheckCircle2 size={13} />}
                  <span>{item.status}</span>
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
