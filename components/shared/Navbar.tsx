import React from "react";
//data import
import { navData } from "@/lib/data";

const Nav = () => {
  return (
    <nav className="w-full h-full">
      <ul className=" h-full flex flex-col justify-center items-center gap-y-6">
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a
                className="text-xl capitalize text-black italic hover:text-default transition-all duration-300"
                href={item.name}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
