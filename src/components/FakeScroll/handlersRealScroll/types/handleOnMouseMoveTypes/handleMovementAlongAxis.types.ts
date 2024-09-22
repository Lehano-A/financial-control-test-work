import { Dispatch } from 'react';

import { HandleMouseMove } from './handleMouseMove.types';

export interface HandleMovementAlongAxis {
  refMainBoxWithRealScroll: HandleMouseMove['mainBoxWithRealScrollRef'];
  typeScroll: string;
  newCoordFakeThumb: number;
  setXCoordFakeScroll: Dispatch<number>;
  setYCoordFakeScroll: Dispatch<number>;
  scrollDirection: 'scrollLeft' | 'scrollTop';
  maxCoordFakeThumb: number;
  maxCoordRealThumb: number;
  speedRatio: number;
}
