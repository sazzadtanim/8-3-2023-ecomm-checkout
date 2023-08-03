import Link from "next/link";

function Header() {
  const links = ["home", "new arrivals", "sale", "contact"];
  return (
    <header className="bg-white py-10 mb-10">
      <div className="container flex justify-between mx-auto items-center">
        <span className="text-xl tracking-tighter font-black">LOGO</span>

        <nav>
          <ul
            className="flex gap-10 capitalize font-gerbera font-medium items-center text-console.log();
          "
          >
            {links.map((nav, index) => (
              <>
                <Link href={`/${nav}`}>{nav}</Link>
                <div className="w-[5px] h-[5px] bg-black rounded-full last:hidden" />
              </>
            ))}
          </ul>
        </nav>

        <nav className="flex gap-10 justify-center items-center">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <div className="w-full h-[1px] bg-black absolute top-16 scale-150" />
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
