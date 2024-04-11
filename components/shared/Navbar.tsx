import React from "react";
//data import
import { navData } from "@/lib/data";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full h-full">
      <ul className=" h-full flex flex-col justify-center items-center gap-y-6">
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="text-xl capitalize text-black italic hover:text-default transition-all duration-300"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
