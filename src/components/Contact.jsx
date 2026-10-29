import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, MapPin, Briefcase } from 'lucide-react';
import { Github } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { fadeInUp } from '../utils/animations';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.organization || formData.name}`);
    const body = encodeURIComponent(
      `Hello ${personalInfo.name},\n\nName: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding border-t border-sky-100/80">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-blue-600 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <Mail size={16} />
            <span>Communication</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Contact Information
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Whether you have questions regarding my projects, thesis research, or wish to connect, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-2 space-y-6">
            {/* Academic Standing & OJT Notice */}
            <div className="card p-6 border-sky-150">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Briefcase size={17} className="text-blue-600" />
                <span>Academic &amp; Training Details</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Program: <strong className="text-slate-800">{personalInfo.program}</strong>
                <br />
                OJT Requirement: <strong className="text-blue-700 font-mono">{personalInfo.ojtStatus.requiredHours}</strong> (Curriculum)
              </p>
              
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <MapPin size={14} className="text-sky-500 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Email Copy Card */}
            <div className="card p-6 border-sky-150">
              <p className="text-xs font-mono uppercase text-slate-400 mb-1">
                Professional Email Address
              </p>
              <p className="text-sm font-semibold text-slate-900 truncate mb-4 select-all">
                {personalInfo.email}
              </p>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-primary text-xs py-2 px-3 flex-1 cursor-pointer"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? "Copied!" : "Copy Email"}</span>
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-secondary text-xs py-2 px-3 flex-1 cursor-pointer"
                >
                  <Mail size={14} />
                  <span>Open Email</span>
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="card p-6 border-sky-150 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <Github size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">GitHub Profile</h4>
                  <p className="text-xs text-slate-500">Source code &amp; repositories</p>
                </div>
              </div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="btn-secondary text-xs py-1.5 px-3"
              >
                Visit
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="card p-6 border-sky-150 space-y-4"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Leave a message below and it will prepare an email directly addressed to my inbox.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maria Santos"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-sky-50/40 border border-sky-100 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-xs font-medium text-slate-700 mb-1">
                    Company / School / Org
                  </label>
                  <input
                    id="organization"
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. University / Company"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-sky-50/40 border border-sky-100 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">
                  Your Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-sky-50/40 border border-sky-100 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-sky-50/40 border border-sky-100 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3 text-sm cursor-pointer"
              >
                <Send size={16} />
                <span>Send Message via Email</span>
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
