import { FakeScrollProps } from './fakeScrollProps.types';
import { ParamsMainBoxWithScroll } from './paramsMainBoxWithScroll.types';

export interface ThumbProps {
  style: FakeScrollProps['style'];
  typeScroll?: FakeScrollProps['typeScroll'];
  xCoordFakeScroll: number;
  yCoordFakeScroll: number;
  paramsMainBoxWithScroll: ParamsMainBoxWithScroll;
}
