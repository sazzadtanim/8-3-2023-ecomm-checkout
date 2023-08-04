"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const links: { title: string; url: string }[] = [
    { title: "home", url: "/" },
    { title: "new arrivals", url: "/new_arrivals" },
    { title: "sale", url: "/sale" },
    { title: "contact", url: "/contact" },
  ];

  const path = usePathname();

  return (
    <header className="bg-white sm:py-10 sm:mb-10 py-3">
      <div className="sm:container flex justify-between sm:mx-auto items-center mx-4">
        <Link className="sm:text-xl tracking-tighter font-black" href={"/"}>
          LOGO
        </Link>

        <nav className="hidden md:block">
          <ul
            className="flex gap-10 capitalize font-gerbera font-medium items-center text-console.log();
          "
          >
            {links.map((nav, index) => (
              <>
                <Link href={nav.url}>{nav.title}</Link>
                <div className="w-[5px] h-[5px] bg-black rounded-full last:hidden" />
              </>
            ))}
          </ul>
        </nav>

        <nav className="flex sm:gap-10 justify-center items-center gap-3">
          <div className="relative">
            <Link href={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="sm:w-6 sm:h-6 w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <div className="w-1 h-1 sm:w-2 sm:h-2 bg-red-500 absolute -top-1 -right-1 rounded-full " />

              <div className="w-full h-[1px] bg-black absolute sm:top-16 scale-150 top-8" />
            </Link>
          </div>

          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="sm:w-6 sm:h-6 w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
