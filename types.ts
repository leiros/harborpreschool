import React from 'react';

export enum Language {
  EN = 'EN',
  PT = 'PT'
}

export interface ContentSection {
  title: string;
  description?: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: string;
}

export interface Reference {
  name: string;
  description: string;
}

export interface CurriculumArea {
  title: string;
  icon: React.ElementType; // Lucide Icon
  color: string;
  points: string[];
}

export interface ProjectInfo {
  points: string[];
}

export interface ContentData {
  nav: {
    home: string;
    principles: string;
    references: string;
    curriculum: string;
    projects: string;
    assessment: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  principles: {
    sectionTitle: string;
    intro: string;
    items: Pillar[];
  };
  references: {
    sectionTitle: string;
    items: Reference[];
  };
  curriculum: {
    sectionTitle: string;
    intro: string;
    items: CurriculumArea[];
  };
  projects: {
    sectionTitle: string;
    items: string[];
  };
  assessment: {
    sectionTitle: string;
    items: string[];
  };
  footer: {
    text: string;
  };
}