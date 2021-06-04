import React from 'react';
import Helmet from 'react-helmet';
import { useLocation } from '@reach/router';
import ogImage from '../images/slider/slide0.jpg';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = () => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const { title, description, author, siteUrl } = site.siteMetadata;
  const currentUrl = siteUrl + pathname;
  return (
    <Helmet defaultTitle={title}>
      <html lang="en" />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
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
      <meta name="theme-color" content="#ffffff" />
      {/* end real favicon generator info */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`;
