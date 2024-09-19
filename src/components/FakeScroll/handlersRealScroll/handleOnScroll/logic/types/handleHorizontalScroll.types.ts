import { HandleOnScroll } from '../../../types/handleOnScrollTypes/handleOnScroll.types';

export interface HandleHorizontalScroll {
  mainBoxWithRealScrollRef: HandleOnScroll['mainBoxWithRealScrollRef'];
  refFakeTrack: HandleOnScroll['fakeTrackRef'];
  setXCoordFakeScroll: HandleOnScroll['setXCoordFakeScroll'];
}
