import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center fixed top-5 left-4 lg:left-auto bg-black border-2 border-white rounded-xl px-10 md:px-10 py-2 z-50">
      <ul className="flex items-center gap-5 md:gap-10">
        <div className="text-xl font-bold">
          <span className="text-primary_green text-3xl">
            <Link href="/">KN</Link>
          </span>
        </div>
        <Link href="/">Home</Link>
        <Link href="/progetti">Progetti</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
