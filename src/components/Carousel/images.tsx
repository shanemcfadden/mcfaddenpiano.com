import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

/**
 * Gatsby's StaticImage components are easier to work with/render than the dynamic GatsbyImage component. One limitation to StaticImage is its image sources cannot be dynamically injected (e.g. in a reusable React Component), so we have to make an explicit component for each image. */

const Image0 = () => (
  <StaticImage
    src="../../images/carousel/slide0.jpg"
    alt="Shane McFadden at piano with singer"
    layout="fullWidth"
  />
);

const Image1 = () => (
  <StaticImage
    src="../../images/carousel/slide1.jpg"
    alt="Shane McFadden at piano with singer"
    layout="fullWidth"
  />
);

const Image2 = () => (
  <StaticImage
    src="../../images/carousel/slide2.jpg"
    alt="Shane McFadden at piano with violinist"
    layout="fullWidth"
  />
);

const Image3 = () => (
  <StaticImage
    src="../../images/carousel/slide3.jpg"
    alt="Shane McFadden at piano with singer"
    layout="fullWidth"
  />
);

const Image4 = () => (
  <StaticImage
    src="../../images/carousel/slide4.jpg"
    alt="Shane McFadden at piano with French horn soloist"
    layout="fullWidth"
  />
);

export const CAROUSEL_IMAGES = [
  <Image0 />,
  <Image1 />,
  <Image2 />,
  <Image3 />,
  <Image4 />,
];
