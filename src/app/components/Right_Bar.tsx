import Work from "./Work";
import Fun_Facts from "./Fun_Facts";
import Image from "next/image";

const Right_Bar = () => {
  return (
    <div className="flex flex-col items-start justify-start md:pt-16">
      <h2 className="text-2xl font-bold uppercase">My Work</h2>
      <div>
        <Work />
      </div>
      <div className="mt-10  w-full">
        <Fun_Facts />
      </div>
    </div>
  );
};

export default Right_Bar;