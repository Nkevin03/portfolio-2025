import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import gestionale from "@assets/work/gestionale.jpeg";
import sanity from "@assets/work/sanity.jpeg";
import kc from "@assets/work/kc.jpeg";
import cocktails from "@assets/work/cocktails.jpeg";

const work = [
  {
    name: "Work 1",
    src: gestionale,
  },
  {
    name: "Work 2",
    src: sanity,
  },
  {
    name: "Work 3",
    src: kc,
  },
  {
    name: "Work 4",
    src: cocktails,
  },
];

const WorkCard = ({ name, src }: { name: string; src: StaticImageData }) => {
  return (
    <figure
      className={cn(
        "relative w-auto cursor-pointer overflow-hidden rounded-xl border mt-5",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center">
        <Image
          src={src}
          alt={name}
          width={300}
          height={200}
          style={{
            width: '200px',
            height: 'auto'
          }}
          className="rounded-lg"
        />
      </div>
    </figure>
  );
};

const firstRow = work.slice(0, work.length / 2);
const secondRow = work.slice(work.length / 2);


const Work = () => {
  return (
    <div className="">
      <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <WorkCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <WorkCard key={review.name} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-2/12 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-2/12 bg-gradient-to-l from-background"></div>
      </div>
      <div className="pt-5">
        <a href="/progetti" className="text-white flex justify-end items-center gap-2">
          Vedi altro <MdOutlineArrowOutward />
        </a>
      </div>
    </div>
  );
};

export default Work;
