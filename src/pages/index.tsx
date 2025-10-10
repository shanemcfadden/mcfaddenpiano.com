import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { Biography } from "../views/Biography";
import { Listen } from "../views/Listen";
import { Container } from "../components/Container";
import { PageBreak } from "../components/PageBreak";
import { Header } from "../views/Header";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Biography />
          <PageBreak size="large" />
          <Listen />
        </Container>
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC<{
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
    };
  };
}> = ({ location, data }) => {
  const { title, description, siteUrl } = data.site.siteMetadata;

  const currentUrl = siteUrl + location;
  const completeOpenGraphImageUrl = siteUrl + "/og-image.jpg";

  return (
    <>
      <html lang="en" />
      <body className="bg-dark text-white font-[Mukta]" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* real favicon generator info */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#111111" />
      {/* end real favicon generator info */}

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={completeOpenGraphImageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={completeOpenGraphImageUrl} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={completeOpenGraphImageUrl} />
      <link rel="canonical" href={currentUrl} />
    </>
  );
};

export const query = graphql`
  query getSiteMetadata {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
