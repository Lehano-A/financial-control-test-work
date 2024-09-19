import { HandleOnScroll } from '../types/handleOnScrollTypes/handleOnScroll.types';
import handleHorizontalScroll from './logic/handleHorizontalScroll';
import handleVerticalScroll from './logic/handleVerticalScroll';

function handleOnScroll({
  isDragging,
  typeScroll,
  setXCoordFakeScroll,
  setYCoordFakeScroll,
  mainBoxWithRealScrollRef,
  fakeTrackRef: refFakeTrack,
}: HandleOnScroll) {
  if (isDragging) return;

  if (typeScroll === 'horizontal') {
    handleHorizontalScroll({
      mainBoxWithRealScrollRef,
      refFakeTrack,
      setXCoordFakeScroll,
    });
  }

  if (typeScroll === 'vertical') {
    handleVerticalScroll({
      mainBoxWithRealScrollRef,
      refFakeTrack,
      setYCoordFakeScroll,
    });
  }
}

export default handleOnScroll;
