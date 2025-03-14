import Image from "next/image";
import avatar from "@assets/avatar.webp";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import linkedin from "@assets/linkedin.svg";
import github from "@assets/github-dark.svg";
import mestesso from "@assets/me.jpeg";
const Left_Bar = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-16 md:pt-16">
      <div className="w-full flex justify-center">
        <div className="relative mb-5 flex flex-col group/pic w-fit rounded-full border-2 duration-700 border-white group/pic ">
          <div className="flex items-center justify-center hover:shadow-[0_0px_35px]  hover:shadow-primary_green transition-all duration-300  rounded-full">
            <Image
              src={mestesso}
              alt="avatar"
              width={200}
              height={200}
              className="object-cover rounded-full  duration-500 bg-white"
            />
          </div>
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover/pic:opacity-100 duration-500">
            <div className="flex items-center justify-center">
              <Image
                src={mestesso}
                alt="avatar"
                width={200}
                height={200}
                className="object-cover rounded-full  duration-500 bg-white"
              />
            </div>
          </div> */}
        </div>
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-center lg:text-left">
          Ciao! <br /> Sono Kevin
        </h1>
        <div className="my-4">
          <p className="md:text-lg text-center lg:text-left">
            <span className="text-primary_green">Web Developer</span> con 3 anni
            di esperienza nello <br className="block md:hidden" /> sviluppo di <br className="hidden md:block lg:hidden"/> siti e applicazioni web.
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center my-10 justify-center md:justify-center lg:justify-start">
          <Link
            href="https://www.linkedin.com/in/kevin-nezosi-b9a15b1ab/"
            className="cursor-pointer"
          >
            <Image
              src={linkedin}
              alt="linkedin"
              width={40}
              height={50}
              className="p-2 duration-300 border-2 rounded-lg hover:text-black hover:bg-lime-400  hover:border-lime-400 bg-neutral-900"
            />
          </Link>
          <Link href="https://github.com/Nkevin03" className="cursor-pointer">
            <Image
              src={github}
              alt="github"
              width={40}
              height={50}
              className="p-2 duration-300 border-2 rounded-lg hover:text-black hover:bg-lime-400  hover:border-lime-400 bg-neutral-900"
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
