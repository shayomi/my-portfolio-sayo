import React from "react";
//data import
import { socialData } from "@/lib/data";

const ContactSocials: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-[10px] mt-16 ">
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

export default ContactSocials;
