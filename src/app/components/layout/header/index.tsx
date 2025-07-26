"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HeaderLink from "./Navigation/HeaderLink";
import { headerData } from "./Navigation/Menudata";
import Logo from "./Logo";
import MobileHeader from "./Navigation/MobileHeader";
import ThemeToggler from "./ThemeToggle";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 z-50 w-full`}>
        <div className="container p-3">
          <nav
            className={`flex items-center py-3 px-4 justify-between ${
              sticky
                ? " rounded-full shadow-sm bg-white dark:bg-dark_black"
                : null
            } `}
          >
            <div className="flex items-center">
              <Logo />
            </div>
            <div className="hidden lg:flex bg-dark_black/5 dark:bg-white/5 rounded-3xl py-3 px-1">
              <ul className="flex gap-0 2xl:gap-1.5">
                {headerData.map((item, index) => (
                  <HeaderLink key={index} item={item} />
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-1 xl:gap-4">
              <>
                <Link
                  href="/contact"
                  className=" group hidden md:flex
                              items-center gap-2 px-5 py-2 rounded-full 
              text-black border border-black 
              dark:text-white dark:border-white
                font-semibold shadow-md transition duration-300 
              hover:bg-black hover:text-white 
                focus:outline-none"
                  style={{ minWidth: 120, justifyContent: "center" }}
                >
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    Contact Us
                  </span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-200 group-hover:translate-x-1 border dark:border-white rounded-full"
                  >
                    <rect
                      width="22"
                      height="22"
                      rx="11"
                      className="fill-white group-hover:fill-black dark:group-hover:fill-white transition-colors duration-200"
                    />
                    <path
                      d="M8 11h6M14 11l-2-2m2 2l-2 2"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-colors duration-200 group-hover:stroke-white dark:group-hover:stroke-black"
                    />
                  </svg>
                </Link>
                <ThemeToggler />
                <div className="hidden max-lg:flex">
                  <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                        d="M4.5 12h15m-15 5.77h15M4.5 6.23h15"
                      />
                    </svg>
                  </button>
                </div>
              </>
            </div>
          </nav>
        </div>
        {sidebarOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-dark_black shadow-lg transform transition-transform duration-300 max-w-xs ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold">Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Close mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <ul className="flex flex-col">
              {headerData.map((item, index) => (
                <MobileHeader key={index} item={item} />
              ))}
              <div className="flex flex-col items-center gap-3 px-2 mt-2">
                <>
                  <Link
                    href="/contact"
                    className="group flex items-center gap-2 px-5 py-2 rounded-full 
              text-black border border-black 
              dark:text-white dark:border-white
                font-semibold shadow-md transition duration-300 
              hover:bg-black hover:text-white 
                focus:outline-none"
                    style={{ minWidth: 120, justifyContent: "center" }}
                  >
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      Contact Us
                    </span>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-200 group-hover:translate-x-1 border dark:border-white rounded-full"
                    >
                      <rect
                        width="22"
                        height="22"
                        rx="11"
                        className="fill-white group-hover:fill-black dark:group-hover:fill-white transition-colors duration-200"
                      />
                      <path
                        d="M8 11h6M14 11l-2-2m2 2l-2 2"
                        stroke="#000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-colors duration-200 group-hover:stroke-white dark:group-hover:stroke-black"
                      />
                    </svg>
                  </Link>
                </>
              </div>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
