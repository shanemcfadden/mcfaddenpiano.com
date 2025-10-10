import * as React from "react";

type PageBreakProps = { size?: PageBreakSize };

export const PageBreak = ({ size = "medium" }: PageBreakProps) => {
  return (
    <hr
      className={[
        PAGE_BREAK_SIZE_TO_CLASS[size],
        "border-t border-gray-300",
      ].join(" ")}
    />
  );
};

type PageBreakSize = "small" | "medium" | "large";

const PAGE_BREAK_SIZE_TO_CLASS: Record<PageBreakSize, string> = {
  small: "my-2",
  medium: "my-4",
  large: "my-6",
};
