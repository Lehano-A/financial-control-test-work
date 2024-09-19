import { HandleOnScroll } from '../../../types/handleOnScrollTypes/handleOnScroll.types';

export interface HandleVerticalScroll {
  mainBoxWithRealScrollRef: HandleOnScroll['mainBoxWithRealScrollRef'];
  refFakeTrack: HandleOnScroll['fakeTrackRef'];
  setYCoordFakeScroll: HandleOnScroll['setYCoordFakeScroll'];
}
