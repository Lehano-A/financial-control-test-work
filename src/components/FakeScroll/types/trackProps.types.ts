import { FakeScrollProps } from './fakeScrollProps.types';
import { ParamsMainBoxWithScroll } from './paramsMainBoxWithScroll.types';

export interface TrackProps {
  style: FakeScrollProps['style'];
  typeScroll?: FakeScrollProps['typeScroll'];
  mainBoxWithRealScrollRef?: FakeScrollProps['mainBoxWithRealScrollRef'];
  paramsMainBoxWithScroll: ParamsMainBoxWithScroll;
}
