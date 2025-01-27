import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto py-16">
      <div className=" mx-auto md:pt-10">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <div className="flex gap-2 mb-8">
          <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">
            {project.category}
          </span>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary_green rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote source={project.category} />
        </div>
      </div>
    </article>
  );
} 