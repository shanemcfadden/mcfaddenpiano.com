import * as React from "react";

type HeadingProps = React.PropsWithChildren<{
  level: HeadingLevel;
  textCenter?: boolean;
}>;

export const Heading: React.FC<HeadingProps> = ({
  children,
  level,
  textCenter,
}) => {
  const Tag = HEADING_LEVEL_TO_TAG[level];

  return (
    <Tag
      className={[
        textCenter ? "text-center" : "",
        HEADING_LEVEL_TO_CLASS[level],
        "font-[Josefin_Sans]",
        "font-bold",
      ].join(" ")}
    >
      {children}
    </Tag>
  );
};

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const HEADING_LEVEL_TO_TAG: Record<HeadingLevel, keyof JSX.IntrinsicElements> =
  {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
  };

const HEADING_LEVEL_TO_CLASS: Record<HeadingLevel, string> = {
  1: "text-3xl my-6",
  2: "text-2xl my-4",
  3: "text-lg my-2",
  4: "text-md my-1",
  5: "text-sm my-1",
  6: "text-xs my-1",
};
