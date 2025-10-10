import * as React from "react";
import { Heading } from "../components/Heading";
import { Carousel } from "../components/Carousel";
import { Container } from "../components/Container";

export const Header = () => {
  return (
    <header>
      <div className="sm:hidden">
        <Container>
          <Heading level={1} textCenter>
            Shane McFadden - Collaborative Pianist
          </Heading>
        </Container>
      </div>
      <div className="sm:hidden">
        <Carousel />
      </div>
      <div className="hidden sm:block">
        <Carousel showOverlay />
      </div>
    </header>
  );
};
