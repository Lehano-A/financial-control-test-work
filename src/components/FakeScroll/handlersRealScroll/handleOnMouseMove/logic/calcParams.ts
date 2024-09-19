import { CalcParams } from '../../types/handleOnMouseMoveTypes/calcParams.types';

function calcParams({
  e,
  typeScroll,
  refMainBoxWithRealScroll,
  refFakeTrack,
  refFakeThumb,
  paramSize,
  sideDirection,
  defaultMinSizeFakeThumb,
  offsetDimension,
  clientDimension,
  scrollDimension,
  clientAxis,
}: CalcParams) {
  const mainBoxWithRealScrollRef = refMainBoxWithRealScroll.current;
  const fakeTrackRef = refFakeTrack.current;
  const fakeThumbRef = refFakeThumb.current;

  if (mainBoxWithRealScrollRef && fakeTrackRef && fakeThumbRef) {
    const targetWidthAsPercentage =
      (fakeTrackRef[offsetDimension] /
        mainBoxWithRealScrollRef[offsetDimension]) *
      100;
    const lengthFakeTrack =
      (mainBoxWithRealScrollRef[offsetDimension] / 100) *
      targetWidthAsPercentage;
    const minLengthFakeThumb =
      mainBoxWithRealScrollRef[offsetDimension] -
        mainBoxWithRealScrollRef[clientDimension] || defaultMinSizeFakeThumb; // минимальная ширина  фэйкового "большого пальца"
    const emptySpaceContent =
      typeScroll === 'horizontal'
        ? mainBoxWithRealScrollRef[scrollDimension] -
          mainBoxWithRealScrollRef.offsetWidth
        : mainBoxWithRealScrollRef[scrollDimension] -
          mainBoxWithRealScrollRef.clientHeight; // пустое пространство, которое нужно преодолеть для полной прокрутки контента

    const speedRatio =
      emptySpaceContent > lengthFakeTrack - minLengthFakeThumb
        ? emptySpaceContent / (lengthFakeTrack - minLengthFakeThumb)
        : 1; // коэффициент скорости для реального "большого пальца"

    const fakeTrackRect = fakeTrackRef.getBoundingClientRect();
    const fakeThumbRect = fakeThumbRef.getBoundingClientRect();

    const newCoordFakeThumb =
      e[clientAxis] -
      fakeTrackRect[sideDirection] -
      fakeThumbRect[paramSize] / 2;
    const maxCoordFakeThumb =
      fakeTrackRect[paramSize] - fakeThumbRect[paramSize]; // граница справа, до которой можно подвинуть фэйковый "большой палец"
    const maxCoordRealThumb = emptySpaceContent + minLengthFakeThumb; // граница справа, до которой можно подвинуть реальный "большой палец"

    return {
      newCoordFakeThumb,
      maxCoordFakeThumb,
      maxCoordRealThumb,
      speedRatio,
    };
  }
}

export default calcParams;
