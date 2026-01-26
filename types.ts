
export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description?: string;
  technologies?: string[];
  responsibilities: string[];
}

export interface Project {
  title: string;
  year: string;
  category: string;
  description: string;
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  website: string;
  instagram?: string;
  medium?: string;
}

export interface Achievement {
  name: string;
  link: string;
}
