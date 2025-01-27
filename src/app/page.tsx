import Left_Bar from "./components/Left_Bar";
import Center_Bar from "./components/Center_Bar";
import Right_Bar from "./components/Right_Bar";
export default function Home() {
  return (
    <div className="flex justify-between h-screen">
      <div className="w-3/12 px-5 py-10">
        <Left_Bar />
      </div>
      <div className="w-5/12 border-neutral-700 border-x px-5 py-10">
        <Center_Bar />
      </div>
      <div className="w-4/12 px-5 py-10">
        <Right_Bar />
      </div>
    </div>
  );
}
