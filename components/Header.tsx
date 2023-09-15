import { useEffect, useState } from "react";
import { Navbar, Dropdown } from "flowbite-react";
import { HiChevronDown } from "react-icons/hi2";
import Link from "next/link";
import { useRouter } from "next/router";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

const Header = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const scrollPosition = useScrollPosition();
  const route = useRouter();
  return (
    <Navbar
      className={classNames(
        scrollPosition > 0
          ? "bg-emerald-700 bg-opacity-0 py-4"
          : "bg-opacity-0 py-6",
        "fixed w-full top-0 z-10 transition-all ease-in-out duration-500"
      )}
    >
      <Navbar.Brand className="text-white font-black">ZenLab</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link
          className="group text-white font-black text-base transition duration-300"
          href="/"
        >
          Home
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-white"></span>
        </Link>
        <div className="group">
          <p className="text-white font-black text-base transition duration-300 cursor-pointer">
            Products <HiChevronDown className="inline-block" />
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-white"></span>
          </p>
          <ul className="absolute invisible opacity-0 translate-y-7 transition-all ease-in-out duration-700 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:ease-in mt-1 py-2 text-sm text-black bg-white rounded-lg shadow w-44">
            <li>
              <Link href="#" className="block px-4 py-2 hover:text-emerald-500">
                Hosting
              </Link>
            </li>
            <li>
              <Link
                href="/products/websites"
                className="block px-4 py-2 hover:text-emerald-500"
              >
                Website Template & Service
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:text-emerald-500">
                Another Software
              </Link>
            </li>
          </ul>
        </div>
        <div className="group">
          <p className="text-white font-black text-base transition duration-300 cursor-pointer">
            Contact <HiChevronDown className="inline-block" />
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] bg-white"></span>
          </p>
          <ul className="absolute invisible opacity-0 translate-y-7 transition-all ease-in-out duration-700 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:ease-in mt-1 py-2 text-sm text-black bg-white rounded-lg shadow w-44">
            <li>
              <Link href="#" className="block px-4 py-2 hover:text-emerald-500">
                Discord
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:text-emerald-500">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

{
  /* ; */
}
