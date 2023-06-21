import Link from 'next/link';

export const Navbar = (): JSX.Element => {
  return (
    <nav className="bg-gray-800 py-4 fixed top-0 w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-lg">
            Home
          </Link>
          <Link href="/about" className="text-white font-bold text-lg">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};
