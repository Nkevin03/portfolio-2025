import { Project } from '@/types/project';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/progetto/${project.slug}`}>
      <article className="group relative rounded-lg overflow-hidden border border-gray-200 hover:shadow-md hover:shadow-primary_green transition-colors h-full flex flex-col justify-between">
        <div>
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover aspect-video"
            style={{ width: "100%", height: "auto" }}
          />
          <div className=" p-4">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4 group-hover:text-white transition-colors">
              {project.description}
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-primary/10 rounded-full text-sm">
              {project.category}
            </span>
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-primary_green/10 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
} 