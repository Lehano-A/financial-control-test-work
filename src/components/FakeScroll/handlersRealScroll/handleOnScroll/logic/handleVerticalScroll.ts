import { defaultFakeThumbParams } from '../../../contstants/constants';
import { HandleVerticalScroll } from './types/handleVerticalScroll.types';

function handleVerticalScroll({
  mainBoxWithRealScrollRef: refMainBoxWithRealScroll,
  refFakeTrack,
  setYCoordFakeScroll,
}: HandleVerticalScroll) {
  const fakeTrackRef = refFakeTrack.current;
  const mainBoxWithRealScrollRef = refMainBoxWithRealScroll.current;

  if (mainBoxWithRealScrollRef && fakeTrackRef) {
    const { scrollHeight, offsetHeight, clientHeight } =
      mainBoxWithRealScrollRef;

    const targetHeightAsPercentage =
      (fakeTrackRef.offsetHeight / mainBoxWithRealScrollRef.offsetHeight) * 100;

    const heightFakeTrack = (offsetHeight / 100) * targetHeightAsPercentage;
    const minHeightThumb =
      offsetHeight - clientHeight || defaultFakeThumbParams.height; // ширина минимального фейкового "большого пальца"

    const emptySpace = scrollHeight - offsetHeight; // пустое пространство, которое нужно преодолеть для полной прокрутки контента

    const speedRatio =
      emptySpace > heightFakeTrack - minHeightThumb
        ? emptySpace / (heightFakeTrack - minHeightThumb)
        : 1;

    const newY = mainBoxWithRealScrollRef.scrollTop / speedRatio;

    setYCoordFakeScroll(newY > 0 ? newY : 0);
  }
}

export default handleVerticalScroll;
