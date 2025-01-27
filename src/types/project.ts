export type ProjectCategory = 'web' | 'mobile' | 'desktop' | 'design' | 'typescript';

export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: ProjectCategory;
  tags: string[];
  image: string;
  featured?: boolean;
  github?: string;
  live?: string;
} 