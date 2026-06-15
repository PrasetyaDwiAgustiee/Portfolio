import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function CaseStudies() {
  const { caseStudies } = portfolioData;

  return (
    <section id="case-studies" className="py-24 md:py-36 bg-bg-alt border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            Consulting-Style Formats
          </p>
          <h2 className="text-section-title font-bold text-primary">
            Operational Case Studies
          </h2>
        </motion.div>

        {/* Case Studies Grid: 2 columns desktop, 1 column mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              className="bg-white border border-border rounded-xl p-8 shadow-sm hover:shadow-md hover:border-borderAlt transition-all duration-300 flex flex-col justify-between"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i + 1}
            >
              <div>
                <h3 className="text-xl font-bold text-primary mb-6 tracking-tight">
                  {cs.title}
                </h3>

                {/* Situation & Challenge Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-bg-alt border border-border rounded-lg p-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Situation
                    </span>
                    <p className="text-xs text-body leading-relaxed">
                      {cs.situation}
                    </p>
                  </div>

                  <div className="bg-bg-alt border border-border rounded-lg p-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
                      <AlertCircle className="h-3.5 w-3.5 text-warning" /> Challenge
                    </span>
                    <p className="text-xs text-body leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>
                </div>

                {/* Action Items list */}
                <div className="mb-6">
                  <span className="block text-xs font-bold uppercase tracking-wider text-secondary mb-3">
                    Approach
                  </span>
                  <ul className="space-y-2.5">
                    {cs.actions.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-body">
                        <span className="h-5 w-5 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span className="pt-0.5">{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Outcome & Business Value Footer */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
                  <div className="flex-1">
                    <span className="block text-xs font-bold uppercase tracking-wider text-secondary mb-1">
                      Outcome
                    </span>
                    <p className="text-sm font-semibold text-primary">
                      {cs.outcome}
                    </p>
                  </div>
                  <div className="flex-1 bg-success/5 border border-success/15 rounded-lg p-3 w-full sm:w-auto">
                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-success mb-1">
                      <TrendingUp className="h-3 w-3" /> Operational Impact
                    </span>
                    <p className="text-xs font-medium text-body">
                      {cs.businessValue}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}