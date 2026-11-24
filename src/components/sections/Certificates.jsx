import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { certificatesData } from '../../data/certificates';
import { Award, ExternalLink, Eye, X, Calendar, ShieldCheck } from 'lucide-react';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 lg:py-28 relative scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Certificates & Achievements"
          title="Verified Learning & Skills"
          subtitle="Dokumentasi sertifikasi, kursus teknis, dan pencapaian pembelajaran terstruktur yang saya ikuti untuk memperkuat fondasi keahlian software engineering."
        />

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between h-full group border border-theme hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div>
                {/* Visual Certificate Header - Dark contrast in both Dark & Light modes */}
                <div className="p-5 bg-[#0e1424] border-b border-white/5 relative flex flex-col justify-between h-36">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-indigo-500/30 bg-indigo-500/15 text-indigo-300 backdrop-blur-md">
                      {cert.category}
                    </span>
                    <Award className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                      {cert.credentialId}
                    </span>
                    <h3 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 space-y-3">
                  <div>
                    <h4 className="text-xs font-semibold text-text-primary">
                      {cert.issuer}
                    </h4>
                    <p className="text-[11px] text-text-secondary flex items-center gap-1 mt-0.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {cert.issueDate}
                    </p>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-secondary/80 text-text-secondary border border-theme font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons with comfortable padding & no line collision */}
              <div className="px-5 py-4 border-t border-theme/60 mt-4 bg-secondary/10 flex items-center justify-between gap-2.5">
                <button
                  onClick={() => setSelectedCert(cert)}
                  type="button"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-600/20 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-theme bg-card hover:bg-card-hover text-text-secondary hover:text-indigo-400 transition-colors"
                    title="View Credential URL"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Preview Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-card border border-theme rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-theme bg-card/95">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-sm text-text-primary">
                  Certificate Preview & Verification
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                type="button"
                className="p-1.5 rounded-lg border border-theme text-text-secondary hover:text-text-primary cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Certificate Visual Replica Canvas */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              <div className="p-8 rounded-2xl bg-[#0d1322] border-2 border-dashed border-indigo-400/40 text-center space-y-4 text-white relative">
                <Award className="w-12 h-12 mx-auto text-amber-300 animate-bounce" />
                <div>
                  <span className="text-xs uppercase tracking-widest text-indigo-300 font-semibold">
                    Certificate of Competency
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold mt-1 text-white">
                    {selectedCert.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Presented to <span className="font-bold text-white">Mohammad Ilham Putra Irawan</span> by{' '}
                  <span className="font-semibold text-indigo-300">{selectedCert.issuer}</span>
                </p>
                <div className="pt-2 flex items-center justify-center gap-4 text-xs font-mono text-slate-400">
                  <span>ID: {selectedCert.credentialId}</span>
                  <span>•</span>
                  <span>Issued: {selectedCert.issueDate}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-text-secondary">
                <h4 className="font-bold text-text-primary">Certification Scope:</h4>
                <p>{selectedCert.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {selectedCert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-theme bg-secondary/50 flex items-center justify-between">
              <span className="text-xs text-text-secondary italic">
                * Upload certificate image to replace placeholder anytime
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                type="button"
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
