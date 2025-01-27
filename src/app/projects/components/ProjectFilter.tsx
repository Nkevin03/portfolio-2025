'use client';

import { Button } from '@/components/ui/button';
import { ProjectCategory } from '@/types/project';
import { useRouter, useSearchParams } from 'next/navigation';

const categories: ProjectCategory[] = ['web', 'mobile', 'desktop', 'design', 'typescript'];

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
    <div className="flex gap-2 flex-wrap pe-10">
      <div className='border-2 border-white rounded-xl md:p-5'>
        <Button
          onClick={() => handleCategoryChange("all")}
          className={`px-4 py-2 rounded-full ${
            !currentCategory ? "bg-primary_green text-white" : "bg-gray-100"
          }`}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full  ${
              currentCategory === category
                ? "bg-primary_green text-white"
                : "bg-gray-100"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  );
} 