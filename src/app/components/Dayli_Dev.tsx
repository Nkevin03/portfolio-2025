import React from "@assets/stack/react.svg";
import Typescript from "@assets/stack/typescript.svg";
import Nextjs from "@assets/stack/nextjs.svg";
import postgres from "@assets/stack/postgresql.svg";
import Prisma from "@assets/stack/prisma.svg";
import Tailwind from "@assets/stack/tailwindcss.svg";
import Supabase from "@assets/stack/supabase.svg";
import code from "@assets/code.svg";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import gsap from "@assets/stack/gsap.svg";
import astro from "@assets/stack/astro_dark.svg";
import wordpress from "@assets/stack/wordpress.svg";
import php from "@assets/stack/php.svg";


const stack = [
  {
    name: "React",
    icon: React,
  },
  {
    name: "Nextjs",
    icon: Nextjs,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "Prisma",
    icon: Prisma,
  },
  {
    name: "Tailwind",
    icon: Tailwind,
  },
  {
    name: "Typescript",
    icon: Typescript,
  },
  {
    name: "Supabase",
    icon: Supabase,
  },
  {
    name: "GSAP",
    icon: gsap,
  },
  {
    name: "Astro",
    icon: astro,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "PHP",
    icon: php,
  },
];

const firstRow = stack.slice(0, stack.length / 2);
const secondRow = stack.slice(stack.length / 2);

const StackCard = ({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-auto cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image src={icon} alt={name} width={30} style={{
          width: '30px',
          height: 'auto'
        }} />
        {/* <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div> */}
      </div>
    </figure>
  );
};

const Dayli_Dev = () => {
  return (
    <div className="mt-10 pt-10 border-t border-neutral-700">
      <div className="flex flex-row items-center gap-2">
        <Image src={code} alt="code" width={20} style={{
          width: '20px',
          height: 'auto'
        }} />
        <h2 className="text-2xl font-bold uppercase">My Daily Stack</h2>
      </div>
      <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl mt-5">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <StackCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <StackCard key={review.name} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
};

export default Dayli_Dev;
