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
  typeScroll?: string;
  mainBoxWithRealScrollRef: RefObject<HTMLDivElement>;
  setIsDraggingFakeScroll?: Dispatch<boolean>;
}
