import * as React from "react";
import { navigate, HeadFC, PageProps } from "gatsby";
import { useEffect } from "react";

const NotFoundPage: React.FC<PageProps> = () => {
  useEffect(() => {
    navigate("/");
  }, []);

  return <main />;
};

export default NotFoundPage;

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <body className="bg-dark text-white font-[Mukta]" />
    <title>Not found</title>
    <meta name="theme-color" content="#111111" />
  </>
);
