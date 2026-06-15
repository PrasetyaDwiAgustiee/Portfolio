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

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 md:py-36 bg-bg-alt border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={0}
        >
          <p className="text-xs font-mono uppercase tracking-wider font-semibold text-accent mb-3">
            History
          </p>
          <h2 className="text-section-title font-bold text-primary">
            Professional Experience
          </h2>
        </motion.div>

        {/* Clean Timeline */}
        <div className="relative border-l border-border pl-6 md:pl-10 ml-2">
          <div className="space-y-16 md:space-y-20">
            {experience.map((item, i) => (
              <motion.div
                key={`${item.company}-${item.position}`}
                className="relative group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                custom={i}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-bg border-2 border-border group-hover:border-accent transition-colors duration-300" />

                {/* Position Header */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary tracking-tight">
                      {item.position}
                    </h3>
                    <p className="text-sm font-mono uppercase tracking-wider font-semibold text-accent">
                      {item.company}
                    </p>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold text-secondary whitespace-nowrap">
                    {item.period}
                  </span>
                </div>

                {/* Impact Statement */}
                <p className="text-sm font-medium text-primary mb-4 border-l-2 border-accent pl-4 py-0.5 font-sans">
                  {item.impact}
                </p>

                {/* Key Achievements Bullet list */}
                <ul className="space-y-3 mb-6 list-none">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-3 text-sm text-secondary font-normal">
                      <span className="text-accent mt-0.5 flex-shrink-0 font-mono select-none">→</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase font-semibold bg-bg border border-border text-secondary rounded-sm hover:text-primary hover:border-borderAlt transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}