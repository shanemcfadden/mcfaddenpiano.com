import * as React from "react";

export const Container = ({ children }: React.PropsWithChildren) => {
  return <div className="max-w-6xl mx-auto px-4">{children}</div>;
};
