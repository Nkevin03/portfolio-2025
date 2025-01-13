import Left_Bar from "./components/Left_Bar";


export default function Home() {
  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="px-10 py-10">
        <Left_Bar />
      </div>
      <div className=" border-neutral-700 border-x px-10 py-10">
        <h1>Hello World</h1>
      </div>
      <div className="px-10 py-10">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}
