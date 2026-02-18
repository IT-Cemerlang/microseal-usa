import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CaseStudy {
  project: string;
  location: string;
  problem: string;
  solution: string;
  result: string;
}

export interface ApplicationSector {
  id: string;
  name: string;
  items: string[];
  image: string;
  caseStudy: CaseStudy;
}
