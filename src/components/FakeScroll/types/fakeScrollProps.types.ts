import { Dispatch, RefObject } from 'react';

export interface FakeScrollProps {
  style: {
    thumb: {
      size: { [key: string]: string };
      custom?: { [key: string]: string | number | FakeScrollProps };
    };
    track: {
      size: { [key: string]: string };
      custom?: { [key: string]: string | number | FakeScrollProps };
    };
  };
  mainBoxWithRealScrollRef: RefObject<HTMLDivElement>;
  forceUpdate?: any;
  typeScroll?: string;
  setIsDraggingFakeScroll?: Dispatch<boolean>;
}
