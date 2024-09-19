import { Dispatch, RefObject } from 'react';

export interface HandleMouseMove {
  isDragging: boolean;
  typeScroll: string;
  fakeTrackRef: RefObject<HTMLDivElement>;
  fakeThumbRef: RefObject<HTMLDivElement>;
  mainBoxWithRealScrollRef: RefObject<HTMLDivElement>;
  setXCoordFakeScroll: Dispatch<number>;
  setYCoordFakeScroll: Dispatch<number>;
  e: MouseEvent;
}
