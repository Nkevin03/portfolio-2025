import { getAllProjects } from "@/lib/projects";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const Project = await import(`@/content/projects/${slug}.mdx`);
  const projects = await getAllProjects();
  const project = projects.find((project) => project.slug === slug);
  console.log(project);

  return (
    <section className="container mx-auto md:py-16">
      <div className="pt-10">
        <h1 className="text-2xl font-bold">{project?.title}</h1>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return [{ slug: "cocktails" }, { slug: "portfolio-2024" }];
}

export const dynamicParams = false;
