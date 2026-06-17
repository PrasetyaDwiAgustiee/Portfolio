import { motion } from 'framer-motion';
import { MapPin, Briefcase, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Button } from '../ui/Button';

export default function Hero() {
  const { profile } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="relative pt-24 pb-20 md:pt-36 md:pb-32 bg-white overflow-hidden border-b border-border">
      {/* Dots pattern overlay - extremely subtle */}
      <div className="absolute inset-0 bg-dots opacity-[0.4] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content (Left Column on Desktop) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status tag */}
            <motion.div variants={itemVariants} className="flex items-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-success/20 bg-success/5 text-section-label uppercase font-medium tracking-wide text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                {profile.availability}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-hero-mobile sm:text-hero-tablet md:text-hero-desktop font-extrabold text-primary"
            >
              {profile.headline}
            </motion.h1>

            {/* Subheadline description */}
            <motion.p 
              variants={itemVariants}
              className="text-hero-desc-mobile sm:text-hero-desc-desktop text-body max-w-xl font-normal"
            >
              {profile.subheadline}
            </motion.p>

            {/* Metadata Rows */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 text-metadata font-semibold uppercase tracking-wider text-secondary mt-2"
            >
              <div className="flex items-center gap-2 bg-bg-alt border border-border px-3.5 py-2 rounded-lg shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-bg-alt border border-border px-3.5 py-2 rounded-lg shadow-sm">
                <Briefcase className="h-3.5 w-3.5 text-accent" />
                <span>{profile.yearsExperience} Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-bg-alt border border-border px-3.5 py-2 rounded-lg shadow-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                <span>{profile.systemsSupported}</span>
              </div>
            </motion.div>

            {/* CTA Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-4">
              <Button as="a" href="#contact">
                Contact Me
              </Button>
              <Button as="a" href={`/${profile.cv}`} className="border border-border bg-white text-body hover:bg-bg-alt transition-all" target="_blank" rel="noopener noreferrer">
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Portrait Photo Wrapper (Right Column on Desktop - 40% area) */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="relative w-full max-w-[340px] md:max-w-[360px] lg:max-w-full aspect-[4/5] rounded-xl border border-border bg-bg-alt overflow-hidden shadow-elegant">
              <img 
                src={profile.image} 
                alt={`Portrait photo of ${profile.name}`} 
                className="w-full h-full object-cover contrast-[1.05] hover:opacity-90 transition-all duration-300 ease-in-out"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = profile.fallbackImage;
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
