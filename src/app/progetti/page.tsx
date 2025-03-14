import { getAllProjects } from '@/lib/projects'
import ProjectCard from '@/app/progetti/components/ProjectCard'
import ProjectFilter from '@/app/progetti/components/ProjectFilter'
import { ShimmerButton } from '@/components/ui/shimmer-button'

type Props = {
  searchParams: Promise<{ category?: string | string[] }>
}

export default async function ProjectsPage({ searchParams }: Props) {
  const projects = await getAllProjects()
  const params = await searchParams
  const category = params.category

  const filteredProjects = category
    ? projects.filter((project) => project.category === category)
    : projects

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
                <div className="col-span-2 flex items-center justify-center h-64 bg-primary_green/10 border-2 border-white rounded-lg shadow-lg">
                  <div className="text-center text-white">
                    <h2 className="text-4xl font-bold mb-4 animate-pulse">
                      🚧 Progetti in Arrivo 🚧
                    </h2>
                    <div className="md:w-72 w-48 h-6 bg-white rounded-full mb-2 animate-pulse"></div>
                    <div className="md:w-48 w-36 h-6 bg-white rounded-full animate-pulse"></div>
                  </div>
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
  )
}
