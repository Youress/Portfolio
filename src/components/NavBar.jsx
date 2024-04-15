import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

function NavBar() {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <>
      <nav className="text-3xl w-full h-auto py-10 px-11 flex items-center justify-between bg-white fixed top-0 left-0 z-20 shadow-1xl sm:py-10 sm:px-12 ">
        <h3 onClick={pageUp} className="cursor-pointer text-[#2d2e32] font-bold">
          Youssef.E
        </h3>
        <ul className="flex list-none gap-8">
          {navlinks.map((item) => (
            <li key={item.name}>
              <a href={item.link} className="text-[#2d2e32] transition-all duration-200 font-semibold hover:text-[#147efb] xmd:hidden  ">{item.name}</a>
            </li>
          ))}
          <li onClick={() => hamburgerMenu()}>
            <IconMenu2 className="text-[2.3rem] cursor-pointer hidden transition-all duration-300  hover:text-[#147efb] xmd:flex" width={30} height={30} />
          </li>
        </ul>
      </nav>

      {/* mobile nav */}
      <div className={`flex w-full h-[100vh] z-30 bg-white fixed top-0  items-center text-center justify-center transition-all duration-300 ease-in-out ${hamburger ? "left-0" : "-left-full"}`}>
        <span onClick={() => hamburgerMenu()} className="text-5xl absolute top-5 right-10 cursor-pointer">
          <IconX width={30} height={30} />
        </span>

        <ul className="flex flex-col gap-10 text-xl list-none">
          {navlinks.map((item) => (
            <li key={item.name} onClick={() => hamburgerMenu()}>
              <a href={item.link} className="text-black font-medium transition-all duration-300 hover:text-[#147efb]  text-4xl">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
