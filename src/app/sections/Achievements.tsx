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

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-24 md:py-36 bg-white border-b border-border">
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
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            Impact
          </p>
          <h2 className="text-section-title font-bold text-primary">
            Selected Achievements
          </h2>
        </motion.div>

        {/* Clean Grid of White Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              className="bg-white border border-border rounded-xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-borderAlt transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              custom={i + 1}
            >
              <div>
                <p className="text-5xl font-extrabold text-accent tracking-tightest mb-4">
                  {achievement.metric}
                </p>
                <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-sm text-body leading-relaxed normal-case mt-4 font-normal">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}