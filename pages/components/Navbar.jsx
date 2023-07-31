import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);
  const active = useRouter();
  return (
    <div>
      <nav>
        <div
          className={
            toggle
              ? `sm:h-[60%] fixed w-full sm:bg-black  bg-black/50 text-white flex justify-between items-center mx-0 my-auto h-[80px] top-0 left-0 z-[1000]`
              : "fixed w-full sm:bg-black  bg-black/50 text-white flex justify-between items-center mx-0 my-auto h-[80px] top-0 left-0 z-[1000]"
          }
        >
          <Link href="/">
            <h1 className="text-4xl font-extrabold mx-8 sm:mx-0 sm:absolute sm:top-[16px] sm:left-[20px]">Navbar</h1>
          </Link>

          <div className="flex justify-between items-center">
            <ul
              onClick={toggleMenu}
              className={
                toggle
                  ? "sm:absolute sm:top-[80px] sm:left-0 sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center text-2xl gap-10 font-bold flex justify-between items-center"
                  : "flex justify-between items-center text-2xl gap-10 font-bold sm:hidden"
              }
            
            
            >
              <li className="sm:my-[5px]">
                <Link
                  href="/"
                  className={active.pathname == "/" ? " text-bgblack" : " text-white"}
                >
                  Home
                </Link>
              </li>
              <li className="sm:my-[5px]">
                <Link
                  href="/Men"
                  className={active.pathname == "/Men" ? " text-bgblack" : "text-white"}
                >
                  Men's
                </Link>
              </li>
              <li className="sm:my-[5px]">
                <Link
                  href="/Women"
                  className={active.pathname == "/Women" ? " text-bgblack" : "text-white"}
                >
                  Women's
                </Link>
              </li>
              <li className="mr-8 sm:mr-0 sm:my-[5px] ">
                <Link
                  href="/Jewelry"
                  className={active.pathname == "/Jewelry" ? " text-bgblack" : "text-white"}
                >
                  Jewelry
                </Link>
              </li>
            </ul>
            <div className=" hidden sm:block sm:absolute sm:top-[27px] sm:right-[20px] sm:mx-0    text-2xl mx-8" onClick={toggleMenu}>
              {toggle ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
