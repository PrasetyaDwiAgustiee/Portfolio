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

export default function TechStack() {
  const { techStack } = portfolioData;

  return (
    <section id="tech-stack" className="py-24 md:py-36 bg-bg-alt border-b border-border">
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
          <p className="text-section-label uppercase font-medium tracking-wide text-accent mb-3">
            Technologies &amp; Frameworks
          </p>
          <h2 className="text-section-title-mobile sm:text-section-title-tablet md:text-section-title-desktop font-extrabold text-primary mb-4">
            {techStack.title}
          </h2>
          <p className="text-body-lg text-secondary max-w-2xl">
            {techStack.subtitle}
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.groups.map((group, i) => (
            <motion.div
              key={group.category}
              className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-borderAlt transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ y: -3 }}
            >
              {/* Group Category */}
              <h3 className="text-category-title font-bold text-primary uppercase mb-4 border-b border-border pb-2">
                {group.category}
              </h3>

              {/* Items List */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-2.5 py-1 rounded-lg text-tech-tag font-medium tracking-wide bg-bg-alt border border-border text-secondary"
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