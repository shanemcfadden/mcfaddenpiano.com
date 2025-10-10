import * as React from "react";
import BiographyMDX from "../data/biography.mdx";
import { MDXWrapper } from "../components/MDXWrapper";
import { Heading } from "../components/Heading";
import { StaticImage } from "gatsby-plugin-image";

export const Biography = () => {
  return (
    <div>
      <Heading level={2} textCenter>
        Biography
      </Heading>
      <div className="sm:float-right sm:w-1/2 sm:ml-4 sm:mb-4">
        <StaticImage src="../images/HSPTL.jpg" alt="Shane McFadden headshot" />
      </div>
      <MDXWrapper>
        <BiographyMDX />
      </MDXWrapper>
    </div>
  );
};
