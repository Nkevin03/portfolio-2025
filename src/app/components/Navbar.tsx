import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center fixed top-5 bg-black border-2 border-white rounded-xl md:px-10 py-2 z-50">
      <ul className="flex items-center md:gap-10">
        <div className="text-xl font-bold">
          <span className="text-primary_green text-3xl">
            <Link href="/">KN</Link>
          </span>
        </div>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
