import * as React from "react";
import { Heading } from "../Heading";

export const Overlay = () => {
  return (
    <div
      className={[
        "absolute",
        "inset-0",
        "h-full",
        "w-full",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "bg-black/30",
        "text-white",
        "font-[Josefin_Sans]",
      ].join(" ")}
    >
      <div>
        <Heading level={1} textCenter>
          <span className="text-6xl">Shane McFadden</span>
        </Heading>
        <Heading level={2} textCenter>
          <span className="text-3xl">Collaborative Pianist</span>
        </Heading>
      </div>
    </div>
  );
};
