'use client';

import { Button } from '@/components/ui/button';
import { ProjectCategory } from '@/types/project';
import { useRouter, useSearchParams } from 'next/navigation';

const categories: ProjectCategory[] = ['webapp', 'shadcn', 'typescript', 'design'];

export default function ProjectFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  const handleCategoryChange = (category: ProjectCategory | 'all') => {
    if (category === 'all') {
      router.push('/projects');
    } else {
      router.push(`/projects?category=${category}`);
    }
  };

  
  return (
    <div className="inline-flex gap-2 flex-wrap pt-8 w-9/12">
      <div className="border-2 border-white rounded-xl  flex flex-col items-start gap-2 md:py-5 md:px-10 w-full">
        <div>
          <h3 className="text-3xl font-bold">Filtri</h3>
        </div>
        <Button
          variant="tertiary"
          onClick={() => handleCategoryChange("all")}
          className={`px-4 py-2 text-lg font-semibold  ${
            !currentCategory
              ? "border-b-2 border-white text-white  px-0"
              : "bg-transparent px-0"
          }`}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            variant="tertiary"
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 text-lg font-semibold   ${
              currentCategory === category
                ? "border-b-2 border-white text-white  px-0"
                : "bg-transparent px-0"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  );
} 