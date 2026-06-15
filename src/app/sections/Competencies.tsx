import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Competencies() {
  const { competencies } = portfolioData;

  return (
    <section id="competencies" className="py-24 md:py-36 bg-white border-b border-border">
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
            Capability Matrix
          </p>
          <h2 className="text-section-title font-bold text-primary">
            Core Competencies
          </h2>
        </motion.div>

        {/* Grid: 4 Desktop, 2 Tablet, 1 Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {competencies.map((competency, i) => (
            <motion.div
              key={competency.category}
              className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-borderAlt transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ y: -3 }}
            >
              {/* Category header */}
              <div className="mb-4">
                <h3 className="text-xs font-bold text-primary uppercase tracking-wider">
                  {competency.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-1.5">
                {competency.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-2 py-0.5 rounded-lg text-xs font-semibold bg-bg-alt border border-border text-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}