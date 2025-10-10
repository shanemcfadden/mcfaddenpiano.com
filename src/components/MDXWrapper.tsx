import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Paragraph } from "./Paragraph";

const MDX_COMPONENTS = {
  p: Paragraph,
};

export const MDXWrapper = ({ children }: React.PropsWithChildren) => {
  return <MDXProvider components={MDX_COMPONENTS}>{children}</MDXProvider>;
};
