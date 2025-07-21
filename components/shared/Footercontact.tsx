import React from "react";
import { Typography } from "@/components/ui/typography";
import { socialData } from "@/lib/data";

const FooterContact: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-8 mt-4">
      <div className="flex flex-col gap-y-2  ">
        <div>
          <Typography variant="h4" className="text-white font-bold ">
            CONTACT ME
          </Typography>
        </div>

        <div>
          <Typography variant="p" className="text-white font-bold">
            Email:{" "}
            <a href="mailto:sayoadegoroye@gmail.com" className="font-normal">
              adegoroyesayo@gmail.com
            </a>
          </Typography>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 ">
        <div>
          <Typography variant="h4" className="text-white font-bold">
            FOLLOW US
          </Typography>
        </div>

        <div className="flex flex-row gap-x-2 items-center">
          <div className=" rounded-sm p-1">
            <div className="flex flex-row gap-x-2 items-center text-white">
              {socialData.map((item, index) => {
                return (
                  <div
                    className=" rounded-sm p-1 fill-white stroke-white"
                    key={index}
                  >
                    <a href={item.href} target="_blank">
                      {React.createElement(item.icon)}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
