import React from "react";
import { Typography } from "../ui/typography";
import { ContactData } from "@/lib/data";

const ContactMail = () => {
  return (
    <div className=" items-center">
      <div className="flex flex-col  gap-4 sm:gap-6 lg:gap-4 xl:gap-6 mt-12 sm:mt-16">
        {ContactData.map((item, index) => (
          <div
            key={index}
            className="bg-white gray-card-shadow px-2.5 py-5 sm:px-4 sm:py-6 text-center  rounded-lg"
          >
            <a href={item.link}>
              <img
                src={item.icon}
                alt={item.title}
                className="w-7 h-7 mx-auto mb-5"
              />

              <Typography variant="h5" className="mb-3 text-primary ">
                {item.title}
              </Typography>

              <Typography variant="smallText" className="font-normal ">
                {item.description}
              </Typography>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactMail;
