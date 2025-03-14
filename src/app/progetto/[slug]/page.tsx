import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import Image from "next/image";
import { MDXWrapper } from '@/app/progetto/components/wrapper'
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useMDXComponents } from '@mdx-components';
import { MDXRemote } from 'next-mdx-remote/rsc';
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const project = await getProjectBySlug(slug);
  const components = useMDXComponents({});

  return (
    <section className="container mx-auto px-5 md:px-0 pb-10 pt-24 md:py-16">
      <div className="md:pt-14">
        <div className="md:mb-10 flex justify-center mb-5 ">
          <ShimmerButton className="text-2xl font-bold">{project?.title}</ShimmerButton>
        </div>
        {/* <div className="py-5">
          <Image
            src={project?.image || ''}
            alt={project?.title || ''}
            width={1000}
            height={1000}
            className="rounded-[20px] p-4 w-full h-auto"
          />
        </div> */}

        <div className="w-full mt-10">
          <div className="prose">
            <MDXWrapper>
              <MDXRemote source={project?.content || ''} components={components} />
            </MDXWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

export function generateStaticParams() {
  return [{ slug: "cocktails" }, { slug: "gestionale" }];
}

export const dynamicParams = false;
