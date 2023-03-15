import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            {/* &lt;ALI-D-CODED /&gt; */}
          </p>
        </Link>
        <ul className="list-none hidden tab:flex flex-row gap-10 items-center">
          {navLinks.map((link, i) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[14px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a
                href={`#${link.id}`}
                className="flex justify-center items-center gap-1"
              >
                <span className="text-[#64ffda]">{`0${i + 1}`}.</span>
                {link.title}
              </a>
            </li>
          ))}
          <button className="text-[14px] border rounded-md px-2 py-1 border-[#64ffda]">
            Resume
          </button>
        </ul>

        <div className="tab:hidden flex flex-1 justify-end item-center">
          <img
            src={toggle ? menu : close}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer relative z-20"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "hidden" : "flex"
            } p-6 absolute bg-[#112240] -top-2 right-0  my-2 w-full h-screen z-10 `}
          >
            <ul className="list-none flex justify-center items-center w-full flex-col gap-10 ">
              {navLinks.map((link, i) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(true);
                  }}
                >
                  <a
                    href={`#${link.id}`}
                    className="flex flex-col justify-center items-center gap-1"
                  >
                    <span className="text-[#64ffda]">{`0${i + 1}`}.</span>
                    {link.title}
                  </a>
                </li>
              ))}
              <button className="text-[18px] border rounded-md px-2 py-1 border-[#64ffda]">
                Resume
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
