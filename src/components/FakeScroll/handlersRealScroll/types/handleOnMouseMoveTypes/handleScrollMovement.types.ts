import { HandleMouseMove } from './handleMouseMove.types';

export interface HandleScrollMovement {
  e: MouseEvent;
  typeScroll: string;
  refMainBoxWithRealScroll: HandleMouseMove['mainBoxWithRealScrollRef'];
  refFakeTrack: HandleMouseMove['fakeTrackRef'];
  refFakeThumb: HandleMouseMove['fakeThumbRef'];
  setXCoordFakeScroll: HandleMouseMove['setXCoordFakeScroll'];
  setYCoordFakeScroll: HandleMouseMove['setYCoordFakeScroll'];
}
