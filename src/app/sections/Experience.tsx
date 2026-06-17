import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.08, duration: 0.45, ease: 'easeOut' },
  }),
};

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 md:py-36 bg-bg border-b border-border">
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
          <p className="text-section-label uppercase font-medium tracking-wide text-accent mb-4">
            History
          </p>
          <h2 className="text-section-title-mobile sm:text-section-title-tablet md:text-section-title-desktop font-extrabold text-primary">
            Professional Experience
          </h2>
        </motion.div>

        {/* Clean Timeline */}
        <div className="relative border-l border-border pl-6 md:pl-10 ml-2">
          <div className="space-y-16 md:space-y-20">
            {experience.map((item, i) => (
              <motion.div
                key={`${item.company}-${item.position}-${item.period}`}
                className="relative group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                custom={i + 1}
              >
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-bg border-2 border-border group-hover:border-accent transition-colors duration-300" />

                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-job-title font-bold text-primary">
                      {item.position}
                    </h3>
                    <p className="text-company font-semibold text-accent mt-1">
                      {item.company}
                    </p>
                  </div>
                  <span className="text-metadata font-medium uppercase tracking-wide text-secondary whitespace-nowrap">
                    {item.period}
                  </span>
                </div>

                <p className="text-body-md font-normal text-primary mb-4 border-l-2 border-accent pl-4 py-0.5 font-sans">
                  {item.impact}
                </p>

                <ul className="space-y-3 mb-6 list-none">
                  {item.responsibilities.map((resp) => (
                    <li key={resp} className="flex items-start gap-3 text-body-md text-secondary font-normal">
                      <span className="text-accent mt-0.5 flex-shrink-0 text-body-md select-none">→</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-tech-tag font-medium tracking-wide uppercase bg-bg border border-border text-secondary rounded-sm hover:text-primary hover:border-borderAlt transition-all duration-200"
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
