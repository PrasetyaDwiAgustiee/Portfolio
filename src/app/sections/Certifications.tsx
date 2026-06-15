import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 md:py-36 bg-white border-b border-border">
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
            Continuous Learning
          </p>
          <h2 className="text-section-title font-bold text-primary">
            Professional Certifications
          </h2>
        </motion.div>

        {/* Certifications Grid: 3 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              className={`group border rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-md hover:border-borderAlt ${
                cert.highlight
                  ? 'bg-accent/5 border-accent/20'
                  : 'bg-white border-border'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2.5 rounded-lg flex-shrink-0 ${
                  cert.highlight 
                    ? 'bg-accent/10 text-accent' 
                    : 'bg-bg-alt text-secondary border border-border'
                }`}>
                  <Award className="h-5 w-5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-primary mb-1.5 line-clamp-2">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-body truncate">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-lg text-[10px] font-semibold tracking-wider uppercase bg-bg-alt text-secondary border border-border">
                      {cert.date}
                    </span>
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
