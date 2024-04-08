import React from "react";
//data import
import { socialData } from "@/lib/data";

const Socials: React.FC = () => {
  return (
    <div className="flex gap-x-[10px]">
      {socialData.map((item, index) => {
        return (
          <a
            className="border  border-white/20 rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all"
            href={item.href}
            key={index}
          >
            {React.createElement(item.icon)}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
