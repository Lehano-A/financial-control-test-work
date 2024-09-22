import { HandleMouseMove } from '../types/handleOnMouseMoveTypes/handleMouseMove.types';
import { HandleScrollMovement } from '../types/handleOnMouseMoveTypes/handleScrollMovement.types';
import calcKeys from './logic/calcKeys';
import calcParams from './logic/calcParams';
import handleMovementAlongAxis from './logic/handleMovementAlongAxis';

function handleOnMouseMove({
  e,
  typeScroll,
  isDragging,
  fakeTrackRef: refFakeTrack,
  fakeThumbRef: refFakeThumb,
  mainBoxWithRealScrollRef: refMainBoxWithRealScroll,
  setXCoordFakeScroll,
  setYCoordFakeScroll,
}: HandleMouseMove) {
  if (!isDragging) return;

  handleScrollMovement({
    e,
    typeScroll,
    refMainBoxWithRealScroll,
    refFakeTrack,
    refFakeThumb,
    setXCoordFakeScroll,
    setYCoordFakeScroll,
  });
}

function handleScrollMovement({
  e,
  typeScroll,
  refMainBoxWithRealScroll,
  refFakeTrack,
  refFakeThumb,
  setXCoordFakeScroll,
  setYCoordFakeScroll,
}: HandleScrollMovement) {
  const {
    paramSize,
    sideDirection,
    defaultMinSizeFakeThumb,
    offsetDimension,
    clientDimension,
    clientAxis,
    scrollDimension,
    scrollDirection,
  } = calcKeys(typeScroll);

  const params = calcParams({
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
  });

  if (params) {
    const {
      newCoordFakeThumb,
      maxCoordFakeThumb,
      maxCoordRealThumb,
      speedRatio,
    } = params;

    handleMovementAlongAxis({
      refMainBoxWithRealScroll,
      typeScroll,
      newCoordFakeThumb,
      setXCoordFakeScroll,
      setYCoordFakeScroll,
      scrollDirection,
      maxCoordFakeThumb,
      maxCoordRealThumb,
      speedRatio,
    });
  }
}

export default handleOnMouseMove;
