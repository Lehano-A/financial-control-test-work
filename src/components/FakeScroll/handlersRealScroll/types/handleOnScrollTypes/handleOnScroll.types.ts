import { Dispatch, RefObject } from 'react';

export interface HandleOnScroll {
  isDragging: boolean;
  typeScroll: string;
  mainBoxWithRealScrollRef: RefObject<HTMLDivElement>;
  fakeTrackRef: RefObject<HTMLDivElement>;
  setXCoordFakeScroll: Dispatch<number>;
  setYCoordFakeScroll: Dispatch<number>;
}
