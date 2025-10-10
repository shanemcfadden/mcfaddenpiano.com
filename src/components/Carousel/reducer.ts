import { CAROUSEL_IMAGES } from "./images";
import { Position } from "./types";

export const reducer = (state: Position[], action: Action): Position[] => {
  switch (action.type) {
    case "NEXT": {
      const currentCenterIndex = state.indexOf("center");
      const nextCenterIndex = getNextSlideIndex(currentCenterIndex);
      return calculateSlidePositions(nextCenterIndex);
    }
  }
};

type Action = {
  type: "NEXT";
};

export const calculateSlidePositions = (centerIndex: number): Position[] => {
  return Array.from({ length: CAROUSEL_IMAGES.length }, (_, i) => {
    if (i === getPreviousSlideIndex(centerIndex)) {
      return "left";
    }
    if (i === centerIndex) {
      return "center";
    }
    if (i === getNextSlideIndex(centerIndex)) {
      return "right";
    }
    return "hidden";
  });
};

const getNextIndex = (length: number) => (currentIndex: number) =>
  (currentIndex + 1) % length;
const getPreviousIndex = (length: number) => (currentIndex: number) =>
  (currentIndex - 1 + length) % length;

const getNextSlideIndex = getNextIndex(CAROUSEL_IMAGES.length);
const getPreviousSlideIndex = getPreviousIndex(CAROUSEL_IMAGES.length);
