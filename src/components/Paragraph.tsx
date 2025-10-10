import * as React from "react";

export const Paragraph = ({ children }: React.PropsWithChildren) => (
  <p className="my-4">{children}</p>
);
