import { HandleMouseMove } from './handleMouseMove.types';

export interface CalcParams {
  e: MouseEvent;
  refMainBoxWithRealScroll: HandleMouseMove['mainBoxWithRealScrollRef'];
  refFakeTrack: HandleMouseMove['fakeTrackRef'];
  refFakeThumb: HandleMouseMove['fakeThumbRef'];
  typeScroll: string;
  paramSize: 'width' | 'height';
  sideDirection: 'left' | 'top';
  defaultMinSizeFakeThumb: number;
  offsetDimension: 'offsetWidth' | 'offsetHeight';
  clientDimension: 'clientWidth' | 'clientHeight';
  scrollDimension: 'scrollWidth' | 'scrollHeight';
  clientAxis: 'clientX' | 'clientY';
}
