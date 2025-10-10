import * as React from "react";
import { Position } from "./types";

export const Slide = ({
  children,
  position,
}: React.PropsWithChildren<{ position: Position }>) => {
  return (
    <div
      className={[
        "absolute",
        "top-0",
        "w-full",
        "h-full",
        "transition-left",
        "duration-750",
        "ease-in-out",
        SLIDE_POSITION_TO_CLASS[position],
      ].join(" ")}
    >
      {children}
    </div>
  );
};

const SLIDE_POSITION_TO_CLASS: Record<Position, string> = {
  left: "-left-full",
  center: "left-0",
  right: "left-full",
  hidden: "hidden",
};
