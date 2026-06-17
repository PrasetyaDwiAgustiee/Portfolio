import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' },
  }),
};

export default function ExecutiveSummary() {
  const { executiveSummary } = portfolioData;

  return (
    <section id="summary" className="py-24 md:py-36 bg-bg-alt border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={0}
        >
          <p className="text-section-label uppercase font-medium tracking-wide text-accent mb-3">
            Overview
          </p>
          <h2 className="text-section-title-mobile sm:text-section-title-tablet md:text-section-title-desktop font-extrabold text-primary">
            Operational Integrity &amp; Critical Infrastructure
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {executiveSummary.narrative.map((paragraph, i) => (
              <motion.p
                key={i}
                className="text-body-lg text-body font-normal text-justify"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                custom={i + 1}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Right Column: Clean Elegant Statistics (Not cards, pure typography) */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-y-12 gap-x-8 border-l border-border pl-8 md:pl-12">
              {executiveSummary.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  variants={fadeUp}
                  custom={i + 2}
                >
                  <span className="text-5xl font-extrabold text-primary tracking-tightest mb-2">
                    {stat.value}
                  </span>
                  <span className="text-metadata uppercase font-medium tracking-wide text-secondary">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
