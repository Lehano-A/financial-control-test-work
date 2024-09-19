import { FakeScrollProps } from './fakeScrollProps.types';

export interface ThumbProps {
  style: FakeScrollProps['style'];
  typeScroll?: FakeScrollProps['typeScroll'];
  xCoordFakeScroll: number;
  yCoordFakeScroll: number;
  mainBoxWithRealScrollRef?: FakeScrollProps['mainBoxWithRealScrollRef'];
}
