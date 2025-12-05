import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'pt' | 'es';

export interface Principle {
  title: string;
  description: string;
  iconName: string;
}

export interface Reference {
  name: string;
  description: string;
}

export interface CurriculumArea {
  title: string;
  points: string[];
  iconName: string;
  color: string;
}

export interface ProjectSection {
  title: string;
  points: string[];
}

export interface EvaluationSection {
  title: string;
  points: string[];
}

export interface Content {
  hero: {
    title: string;
    subtitle: string;
  };
  principles: {
    sectionTitle: string;
    intro: string;
    items: Principle[];
  };
  references: {
    sectionTitle: string;
    items: Reference[];
  };
  curriculum: {
    sectionTitle: string;
    intro: string;
    areas: CurriculumArea[];
  };
  projects: {
    sectionTitle: string;
    items: ProjectSection;
  };
  evaluation: {
    sectionTitle: string;
    items: EvaluationSection;
  };
  footer: {
    contact: string;
    rights: string;
  };
}