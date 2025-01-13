import Image from "next/image";
import avatar from "@assets/avatar.webp";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import linkedin from "@assets/linkedin.svg";
import github from "@assets/github-dark.svg";
const Left_Bar = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative mb-5 flex flex-col group/pic w-fit rounded-full border-2 duration-700 border-white group/pic overflow-hidden">
        <Image
          src={avatar}
          alt="avatar"
          width={200}
          height={200}
          className="object-cover rounded-full group-hover/pic:opacity-0 duration-500 bg-white"
        />
      </div>
      <div>
        <h1 className="md:text-4xl font-bold">
          Ciao! <br /> Sono Kevin
        </h1>
        <div className="my-4">
          <p className="md:text-lg">
            <span className="text-primary_green">Web Developer</span> con 3 anni
            di esperienza nello sviluppo di siti e applicazioni web.
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Link
            href="https://www.linkedin.com/in/kevin-nezosi-b9a15b1ab/"
            className="cursor-pointer"
          >
            <Image
              src={linkedin}
              alt="linkedin"
              width={40}
              height={50}
              className="p-2 duration-300 border-2 rounded-sm hover:text-black hover:bg-lime-400  hover:border-lime-400 bg-neutral-900"
            />
          </Link>
          <Link href="https://github.com/Nkevin03" className="cursor-pointer">
            <Image
              src={github}
              alt="github"
              width={40}
              height={50}
              className="p-2 duration-300 border-2 rounded-sm hover:text-black hover:bg-lime-400  hover:border-lime-400 bg-neutral-900"
            />
          </Link>
          <Link href="mailto:knezosi6@gmail.com">
            <Button size="md" variant="default">
              Contattami!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Left_Bar;
