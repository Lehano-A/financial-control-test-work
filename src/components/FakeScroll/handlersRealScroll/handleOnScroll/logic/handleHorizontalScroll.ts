import { defaultFakeThumbParams } from '../../../contstants/constants';
import { HandleHorizontalScroll } from './types/handleHorizontalScroll.types';

function handleHorizontalScroll({
  mainBoxWithRealScrollRef: refMainBoxWithRealScroll,
  refFakeTrack,
  setXCoordFakeScroll,
}: HandleHorizontalScroll) {
  const fakeTrackRef = refFakeTrack.current;
  const mainBoxWithRealScrollRef = refMainBoxWithRealScroll.current;

  if (mainBoxWithRealScrollRef && fakeTrackRef) {
    const { scrollWidth, offsetWidth, clientWidth } = mainBoxWithRealScrollRef;

    const targetWidthAsPercentage =
      (fakeTrackRef.offsetWidth / mainBoxWithRealScrollRef.offsetWidth) * 100;

    const widthFakeTrack = (offsetWidth / 100) * targetWidthAsPercentage;
    const minWidthThumb =
      offsetWidth - clientWidth || defaultFakeThumbParams.width; // ширина минимального фейкового "большого пальца"
    const emptySpace = scrollWidth - offsetWidth; // пустое пространство, которое нужно преодолеть для полной прокрутки контента

    const speedRatio =
      emptySpace > widthFakeTrack - minWidthThumb
        ? emptySpace / (widthFakeTrack - minWidthThumb)
        : 1;

    const newX = mainBoxWithRealScrollRef.scrollLeft / speedRatio;

    setXCoordFakeScroll(newX > 0 ? newX : 0);
  }
}

export default handleHorizontalScroll;
