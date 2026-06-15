export interface Profile {
  brand: string;
  name: string;
  role: string;
  headline: string;
  subheadline: string;
  availability: string;
  location: string;
  yearsExperience: string;
  systemsSupported: string;
  email: string;
  phone: string;
  phoneHref: string;
  linkedin: string;
  github: string;
  image: string;
  fallbackImage: string;
  cv: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface ExecutiveSummary {
  narrative: string[];
  stats: {
    value: string;
    label: string;
  }[];
}

export interface Achievement {
  metric: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  impact: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Competency {
  category: string;
  level: number;
  items: string[];
}

export interface CaseStudy {
  title: string;
  situation: string;
  challenge: string;
  actions: string[];
  outcome: string;
  businessValue: string;
}

export interface TechStackGroup {
  category: string;
  items: string[];
}

export interface TechStack {
  title: string;
  subtitle: string;
  groups: TechStackGroup[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  highlight?: boolean;
}

export interface PortfolioData {
  profile: Profile;
  navigation: NavigationItem[];
  executiveSummary: ExecutiveSummary;
  achievements: Achievement[];
  experience: ExperienceItem[];
  competencies: Competency[];
  caseStudies: CaseStudy[];
  techStack: TechStack;
  certifications: Certification[];
  contact: {
    heading: string;
    body: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
}