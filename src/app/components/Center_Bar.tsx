import Image from "next/image";
import Dayli_Dev from "./Dayli_Dev";
import about from "@assets/about.svg";
import MorphingText from "@/components/ui/morph";



const info = [
  {
    name: "21 yo.",
  },
  {
    name: "Frontend",
  },
  {
    name: "Backend",
  },
  {
    name: "Motivated",
  },
];


const texts = [
  "Animazione",
  "Frontend",
  "Backend",
  "Design",
];

const Center_Bar = () => {
  return (
    <div className="">
      <div className="flex items-center gap-3">
        <Image
          src={about}
          alt="about"
          width={20}
          height={20}
          className="fill-primary_green"
        />
        <h2 className="text-xl font-bold uppercase">Chi sono</h2>
      </div>
      <div className="my-4">
        <p className="relative  w-full mt-6 mb-6 text-lg md:mb-0 lg:mt-1">
          Fin da piccolo ho sempre avuto una grande passione per l’informatica.
          All’inizio mi piaceva soprattutto smontare e capire come funzionavano
          i componenti hardware, giocando con dispositivi come Arduino. La
          svolta è arrivata quando mi sono chiesto:{" "}
          <strong>“Ma come è stato creato internet?”</strong>
          <br />
          <br />
          Da lì ho iniziato a fare piccoli progetti con HTML e CSS, scoprendo un
          mondo che mi ha subito conquistato. Ogni nuovo passo mi ha spinto a
          imparare sempre di più e non ho mai smesso di divertirmi.
        </p>

        <div className="flex flex-row gap-2 items-center mt-5">
          {info.map((item, index) => (
            <p
              key={index}
              className="text-xs bg-gray-900 py-1 px-3 rounded-xl font-semibold border border-white"
            >
              {item.name}
            </p>
          ))}
        </div>

        <div>
          <Dayli_Dev />
        </div>
        <div className="mt-10">
          <MorphingText texts={texts} />
        </div>
      </div>
    </div>
  );
};

export default Center_Bar;
