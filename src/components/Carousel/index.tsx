import * as React from "react";
import { CAROUSEL_IMAGES } from "./images";
import { calculateSlidePositions, reducer } from "./reducer";
import { Slide } from "./Slide";
import { Overlay } from "./Overlay";
import { useEffect } from "react";

type CarouselProps = {
  showOverlay?: boolean;
};

export const Carousel = ({ showOverlay }: CarouselProps) => {
  const [positionState, dispatch] = React.useReducer(
    reducer,
    0,
    calculateSlidePositions,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "NEXT" });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="aspect-video relative overflow-hidden">
      {positionState.map((position, i) => (
        <Slide key={i} position={position}>
          {CAROUSEL_IMAGES[i]}
        </Slide>
      ))}
      {showOverlay && <Overlay />}
    </div>
  );
};
