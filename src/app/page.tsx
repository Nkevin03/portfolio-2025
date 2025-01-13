import Left_Bar from "./components/Left_Bar";
import Center_Bar from "./components/Center_Bar";
import Right_Bar from "./components/Right_Bar";
export default function Home() {
  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="px-5 py-10">
        <Left_Bar />
      </div>
      <div className=" border-neutral-700 border-x px-5 py-10">
        <Center_Bar />
      </div>
      <div className="px-10 py-10">
        <Right_Bar />
      </div>
    </div>
  );
}
