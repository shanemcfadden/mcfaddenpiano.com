import {
  getLoadedSlides,
  getTranslateFactor,
  getVisibleSlideIndex,
} from './util';
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
        activeSlideIndex: action.newSlideIndex,
        prevActiveSlideIndex: state.activeSlideIndex,
      };
    // case 'smoothTransition':
    //   return {
    //     ...state,
    //     transition: 0,
    //     translate:
    //       getVisibleSlideIndex(action.slides.length) * state.browserWidth,
    //     loadedSlides: getLoadedSlides(action.slides, state.activeSlideIndex),
    //   };
    // case 'transition':
    //   return { ...state, transition: action.value };
    // case 'translate':
    //   return { ...state, translate: action.value };
    default:
      throw new Error('Invalid action type');
  }
}
