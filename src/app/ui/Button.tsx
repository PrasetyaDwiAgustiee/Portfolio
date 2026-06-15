import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
};

export const Button = ({
  as = 'button',
  className,
  children,
  ...props
}: ButtonProps) => {
  const Cmp = as as any;
  
  const isPrimary = className?.includes('bg-accent') || (!className?.includes('border') && !className?.includes('bg-transparent') && !className?.includes('bg-white'));
  
  return (
    <motion.div 
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Cmp
        className={cn(
          "inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all rounded-lg border focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
          isPrimary
            ? "bg-accent hover:bg-accent-light text-white border-accent shadow-sm"
            : "bg-white hover:bg-bg-alt border-border text-primary hover:text-accent shadow-sm",
          className
        )}
        {...props}
      >
        {children}
      </Cmp>
    </motion.div>
  );
};
