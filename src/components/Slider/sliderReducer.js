export default function reducer(state, action) {
  switch (action.type) {
    case 'browserWidth':
      console.log('action: browserWidth');
      return { ...state, browserWidth: action.value };
    case 'goToSlide':
      console.log('action: goToSlide', action.newSlideIndex);
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
      console.log('action: smoothTransition');
      console.log(state);
      return {
        ...state,
        transition: 0,
        translate:
          Math.floor((action.slides.length - 1) / 2) * state.browserWidth,
        loadedSlides: loadedSlides(action.slides, state.activeSlideIndex),
      };
    case 'transition':
      console.log('action: transition');
      return { ...state, transition: action.value };
    case 'translate':
      console.log('action: translate');
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
  const activeRealIndex = Math.floor((loadedSlidesLength - 1) / 2);
  const modProofNewSlideIndex =
    newSlideIndex < activeSlideIndex
      ? newSlideIndex + loadedSlidesLength
      : newSlideIndex;
  const newRealIndex =
    (modProofNewSlideIndex - activeSlideIndex + activeRealIndex) %
    loadedSlidesLength;
  return newRealIndex - activeRealIndex;
}