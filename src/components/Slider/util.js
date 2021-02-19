export function getLoadedSlides(slidesArr, activeIndex) {
  const loaded = [];
  const numberOfSlides = slidesArr.length;
  let i = (activeIndex + Math.floor(numberOfSlides / 2) + 1) % numberOfSlides;
  while (loaded.length < numberOfSlides) {
    if (i === numberOfSlides) i = 0;
    loaded.push(slidesArr[i++]);
  }
  return loaded;
}

export function getTranslateFactor(
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

export function getVisibleSlideIndex(slidesLength) {
  return Math.floor((slidesLength - 1) / 2);
}
