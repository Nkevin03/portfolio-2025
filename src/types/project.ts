export type ProjectCategory = 'webapp' | 'shadcn' | 'typescript' | 'design';

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