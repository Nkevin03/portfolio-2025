import { getAllProjects } from "@/lib/projects";
import Image from "next/image";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const projects = await getAllProjects();
  const project = projects.find((project) => project.slug === slug);
  console.log(project);

  return (
    <section className="container mx-auto md:py-16">
      <div className="flex flex-col md:flex-row pt-10">
        <div className="md:w-5/12">
          <Image
            src={project?.image || ""}
            alt={project?.title || ""}
            width={1000}
            height={1000}
            className="rounded-3xl w-full h-auto"
          />
        </div>
        <div className="md:w-7/12">
          <h1 className="text-2xl font-bold">{project?.title}</h1>
          <p>{project?.description}</p>
          <div className="flex  gap-2">
          </div>
        </div>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return [{ slug: "cocktails" }, { slug: "gestionale" }];
}

export const dynamicParams = false;
