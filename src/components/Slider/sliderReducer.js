export default function reducer(state, action) {
  switch (action.type) {
    case 'browserWidth':
      return {
        ...state,
        browserWidth: action.browserWidth,
      };
    case 'goToSlide':
      return {
        ...state,
        translate:
          state.translate +
          getTranslateFactor(
            state.activeSlideIndex,
            action.newSlideIndex,
            action.slides.length
          ) *
            state.browserWidth,
        activeSlideIndex: action.newSlideIndex,
      };
    case 'smoothTransition':
      return {
        ...state,
        transition: 0,
        translate:
          getVisibleSlideIndex(action.slides.length) * state.browserWidth,
        loadedSlides: loadedSlides(action.slides, state.activeSlideIndex),
      };
    case 'transition':
      return { ...state, transition: action.value };
    case 'translate':
      return { ...state, translate: action.value };
    default:
      throw new Error('Invalid action type');
  }
}

function loadedSlides(slidesArr, activeIndex) {
  const loaded = [];
  const numberOfSlides = slidesArr.length;
  let i = (activeIndex + Math.floor(numberOfSlides / 2) + 1) % numberOfSlides;
  while (loaded.length < numberOfSlides) {
    if (i === numberOfSlides) i = 0;
    loaded.push(slidesArr[i++]);
  }
  return loaded;
}

function getTranslateFactor(
  activeSlideIndex,
  newSlideIndex,
  loadedSlidesLength
) {
  const lowestPossibleTranslateFactor =
    -1 * getVisibleSlideIndex(loadedSlidesLength);
  const highestPossibleTranslateFactor = Math.floor(loadedSlidesLength / 2);
  const possibleTranslate = newSlideIndex - activeSlideIndex;

  if (possibleTranslate < lowestPossibleTranslateFactor)
    return possibleTranslate + loadedSlidesLength;
  if (possibleTranslate > highestPossibleTranslateFactor)
    return possibleTranslate - loadedSlidesLength;
  return possibleTranslate;
}

function getVisibleSlideIndex(slidesLength) {
  return Math.floor((slidesLength - 1) / 2);
}
