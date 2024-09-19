import { HandleMovementAlongAxis } from '../../types/handleOnMouseMoveTypes/handleMovementAlongAxis.types';

function handleMovementAlongAxis({
  refMainBoxWithRealScroll,
  typeScroll,
  newCoordFakeThumb,
  setXCoordFakeScroll,
  setYCoordFakeScroll,
  scrollDirection,
  maxCoordFakeThumb,
  maxCoordRealThumb,
  speedRatio,
}: HandleMovementAlongAxis) {
  const mainBoxWithRealScrollRef = refMainBoxWithRealScroll.current;

  if (mainBoxWithRealScrollRef) {
    if (newCoordFakeThumb < 0) {
      typeScroll === 'horizontal'
        ? setXCoordFakeScroll(0)
        : setYCoordFakeScroll(0);
      mainBoxWithRealScrollRef[scrollDirection] = 0;
    } else if (newCoordFakeThumb > maxCoordFakeThumb) {
      mainBoxWithRealScrollRef[scrollDirection] = maxCoordRealThumb;
      typeScroll === 'horizontal'
        ? setXCoordFakeScroll(maxCoordFakeThumb)
        : setYCoordFakeScroll(maxCoordFakeThumb);
    } else if (newCoordFakeThumb < maxCoordFakeThumb) {
      mainBoxWithRealScrollRef[scrollDirection] =
        newCoordFakeThumb * speedRatio; // двигаем реальный с увеличенной скоростью
      typeScroll === 'horizontal'
        ? setXCoordFakeScroll(newCoordFakeThumb)
        : setYCoordFakeScroll(newCoordFakeThumb); // двигаем фэйковый согласно передвижению курсора
    }
  }
}

export default handleMovementAlongAxis;
