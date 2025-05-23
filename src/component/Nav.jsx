import { useState } from "react";
import logo from "../assets/logo.png";
import hamburger1 from "../assets/hamburger1.png";
import search from "../assets/search.png";
import i18n from "../assets/i18n.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="m-6  lg:pr-[100px] lg:pb-[28px] lg:pl-[100px] relative ">
      <div className=" flex justify-between w-full h-[57px]  mt-[40px] lg:items-center lg:justify-between  ">
        <img
          src={hamburger1}
          className="w-[32px] h-[32px] lg:hidden"
          onClick={toggleNav}
        />
        <img src={logo} className="w-[91.58px] h-[21.47px]" />
        <img
          src={search}
          className="w-[23px] h-[23px] lg:hidden"
          alt="search-icon"
        />

        <ul className="hidden lg:flex lg:gap-8 text-gray-700 lg:font-medium">
          <li>
            <a href="">Home</a>{" "}
          </li>
          <li>
            <a href="">Category</a>{" "}
          </li>
          <li>
            <a href="">About</a>{" "}
          </li>
          <li>
            <a href="">Contact</a>{" "}
          </li>
        </ul>

        <div className="hidden lg:flex lg:items-center relative">
          <img
            src={search}
            className="absolute -left-[30px]"
            alt="search-icon"
          />
          <input
            type="text"
            placeholder="search something here"
            className="focus:outline-none caret-[#003459] "
          />
        </div>

        <div className="hidden lg:flex">
          <button className=" lg:bg-[#003459] lg:w-[203px] lg:h-[44px]  pt-[14px] pr-[28px] pb-[10px] pl-[28px] rounded-[57px]  items-center justify-center gap-[10px] text-white font-medium text-sm ">
            Join the Community
          </button>

          <img src={i18n} className="" />
        </div>
      </div>

      <div className="lg:hidden">
        {isOpen && (
          <div className="absolute w-full top-[0px] h-80 bg-white border-2 border-gray-200 shadow-xl rounded-lg z-50 animate-slide-in ">
            <button className="pl-8 " onClick={toggleNav}>
              <p className="text-3xl font-bold">x</p>
            </button>
            <ul className="text-center leading-10 pt-4 font-semibold">
              <li>
                <a href="">Home</a>{" "}
              </li>
              <li>
                <a href="">Category</a>{" "}
              </li>
              <li>
                <a href="">About</a>{" "}
              </li>
              <li>
                <a href="">Contact</a>{" "}
              </li>
            </ul>

            <div className="mt-6">
              <button className="bg-[#003459] w-[203px] h-[44px] pt-[14px] pr-[28px] pb-[10px] pl-[28px] rounded-[57px] flex items-center justify-center gap-[10px] text-white font-medium text-sm mx-auto">
                Join the Community
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Nav;
