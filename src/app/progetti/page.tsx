import { getAllProjects } from '@/lib/projects';
import ProjectCard from '@/app/progetti/components/ProjectCard';
import ProjectFilter from '@/app/progetti/components/ProjectFilter';
import { ShimmerButton } from '@/components/ui/shimmer-button';

type Props = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export default async function ProjectsPage({ searchParams }: Props) {
  const projects = await getAllProjects();
  const params = await searchParams;
  const category = params.category;
  
  const filteredProjects = category
    ? projects.filter(project => project.category === category)
    : projects;

    
  return (
    <div className="container mx-auto py-16 md:py-16">
      <div className="pt-10">
        <div className="flex justify-center">
          <ShimmerButton className="text-2xl font-bold">Progetti</ShimmerButton>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 px-5">
            <ProjectFilter />
          </div>
          <div className="px-5 w-full md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
              {filteredProjects.length === 0 ? (
                <div className="col-span-2 text-3xl text-center text-white">
                  Progetti in arrivoooooo...
                </div>
              ) : (
                filteredProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  