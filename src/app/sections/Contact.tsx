import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Button } from '../ui/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Contact() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-24 md:py-36 bg-bg-alt relative overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
        >
          <p className="text-section-label uppercase font-medium tracking-wide text-accent mb-3">
            Get In Touch
          </p>
          <h2 className="text-cta-mobile sm:text-cta-desktop font-extrabold text-primary mb-6">
            {contact.heading}
          </h2>
          <p className="text-body-lg text-body max-w-xl mx-auto mb-10 font-normal">
            {contact.body}
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={1}
        >
          <Button
            as="a"
            href={`mailto:${contact.email}`}
            className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-white shadow-sm flex items-center justify-center gap-2 px-8 py-3.5"
          >
            <Mail className="h-5 w-5" />
            <span>Email Me Directly</span>
          </Button>

          <Button
            as="a"
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-border bg-white hover:bg-bg-alt text-primary flex items-center justify-center gap-2 px-8 py-3.5"
          >
            <Linkedin className="h-5 w-5 text-[#0A66C2]" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="h-4 w-4 text-secondary" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}