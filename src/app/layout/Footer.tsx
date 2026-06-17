import { Linkedin, Mail, MapPin, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { profile } = portfolioData;

  return (
    <footer className="bg-bg-alt border-t border-border py-16 text-body-sm font-medium tracking-normal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Info */}
          <div className="text-center md:text-left">
            <p className="font-bold text-primary text-body-lg">
              {profile.name}
            </p>
            <p className="text-secondary mt-1 font-normal normal-case text-body-md">
              {profile.role}
            </p>
          </div>

          {/* Links & Socials */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <a 
              href={`mailto:${profile.email}`} 
              className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
              aria-label="Email Prasetya Dwi Agustie"
            >
              <Mail className="h-4 w-4" />
              <span className="normal-case font-normal text-body-md">{profile.email}</span>
            </a>
            
            <a 
              href={profile.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
              aria-label="Prasetya Dwi Agustie's LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
              <span className="text-body-md">LinkedIn</span>
            </a>

            <span className="flex items-center gap-2 text-secondary">
              <MapPin className="h-4 w-4" />
              <span className="text-body-md">{profile.location}</span>
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-secondary/60">
          <p className="normal-case font-sans text-metadata font-normal">&copy; {new Date().getFullYear()} {profile.brand}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1.5">
              <Github className="h-3.5 w-3.5" />
              <span className="text-metadata font-medium">GitHub</span>
            </a>
            <a href={`/${profile.cv}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <span className="text-metadata font-medium">Resume CV</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
