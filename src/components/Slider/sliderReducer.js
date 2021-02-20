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
    default:
      throw new Error('Invalid action type');
  }
}
