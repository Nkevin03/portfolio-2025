import { Project } from '@/types/project';
import matter from 'gray-matter';
import path from 'path';
import { promises as fs } from 'fs';

const projectsDirectory = path.join(process.cwd(), 'src/content/progetti');

export async function getAllProjects(): Promise<Project[]> {
  const files = await fs.readdir(projectsDirectory);
  const projects = await Promise.all(
    files
      .filter(file => file.endsWith('.mdx'))
      .map(async (file) => {
        const filePath = path.join(projectsDirectory, file);
        const content = await fs.readFile(filePath, 'utf8');
        const { data } = matter(content);
        return data as Project;
      })
  );
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(projectsDirectory, `${slug}.mdx`);
    const content = await fs.readFile(filePath, 'utf8');
    const { data, content: mdxContent } = matter(content);
    return { ...data, content: mdxContent } as Project & { content: string };
  } catch {
    return null;
  }
} 