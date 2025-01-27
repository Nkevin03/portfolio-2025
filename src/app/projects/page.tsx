import React from 'react';
import { getAllProjects } from '@/lib/projects';
import ProjectCard from '@/app/projects/components/ProjectCard';
import ProjectFilter from '@/app/projects/components/ProjectFilter';
import { ShimmerButton } from '@/components/ui/shimmer-button';

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const projects = await getAllProjects();
  const filteredProjects = searchParams.category
    ? projects.filter(project => project.category === searchParams.category)
    : projects;

  return (
    <div className="container mx-auto md:py-16">
      <div className="pt-10">
        <div className="flex justify-center">
          <ShimmerButton className="text-2xl font-bold">Projects</ShimmerButton>
        </div>
        <div className='flex'>
          <div className="w-1/3">
            <ProjectFilter />
          </div>
          <div className="w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  