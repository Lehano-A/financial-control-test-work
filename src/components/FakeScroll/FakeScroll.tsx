import { Box, styled } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { defaultFakeThumbParams } from './contstants/constants';
import handleOnMouseMove from './handlersRealScroll/handleOnMouseMove/handleOnMouseMove';
import handleOnScroll from './handlersRealScroll/handleOnScroll/handleOnScroll';
import checkForRealScroll from './helpers/checkForRealScroll';
import getDependences from './helpers/getDependences';
import getNumFromString from './helpers/getNumFromString';
import { CalcedParamsFakeTrack } from './types/calcedParamsFakeTrack.types';
import { FakeScrollProps } from './types/fakeScrollProps.types';
import { ParamsMainBoxWithScroll } from './types/paramsMainBoxWithScroll.types';
import { ThumbProps } from './types/thumbPropsTypes.types';
import { TrackProps } from './types/trackProps.types';

const calcedParamsFakeTrack: CalcedParamsFakeTrack = {
  width: 0,
  height: 0,
  display: 'none',
};

const Track = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== 'style' &&
    prop !== 'typeScroll' &&
    prop !== 'paramsMainBoxWithScroll',
})<TrackProps>(({ style, typeScroll, paramsMainBoxWithScroll }) => {
  const { width: incomingWidth, height: incomingHeight } = style.track.size;

  let hasRealScroll;
  const customWidth = getNumFromString(incomingWidth);
  const customHeight = getNumFromString(incomingHeight);

  if (typeScroll === 'horizontal') {
    const { scrollWidth, offsetWidth } = paramsMainBoxWithScroll;

    if (scrollWidth && offsetWidth) {
      const widthFakeTrack = (offsetWidth / 100) * customWidth;
      hasRealScroll = checkForRealScroll(scrollWidth, offsetWidth);

      calcedParamsFakeTrack.width = widthFakeTrack;
      calcedParamsFakeTrack.height = customHeight;
    }
  }

  if (typeScroll === 'vertical') {
    const { scrollHeight, offsetHeight } = paramsMainBoxWithScroll;

    if (scrollHeight && offsetHeight) {
      const heightFakeTrack = (offsetHeight / 100) * customHeight;
      hasRealScroll = checkForRealScroll(scrollHeight, offsetHeight);

      calcedParamsFakeTrack.width = customWidth;
      calcedParamsFakeTrack.height = heightFakeTrack;
    }
  }

  calcedParamsFakeTrack.display = hasRealScroll ? 'flex' : 'none';

  return {
    display: calcedParamsFakeTrack.display,
    width: `${calcedParamsFakeTrack.width}px`,
    height: `${calcedParamsFakeTrack.height}px`,
    backgroundColor: 'black',
    zIndex: 9999999999,

    ...style.track.custom,
  };
});

const Thumb = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== 'style' &&
    prop !== 'typeScroll' &&
    prop !== 'xCoordFakeScroll' &&
    prop !== 'yCoordFakeScroll' &&
    prop !== 'paramsMainBoxWithScroll',
})<ThumbProps>(({
  style,
  paramsMainBoxWithScroll,
  typeScroll,
  xCoordFakeScroll,
  yCoordFakeScroll,
}) => {
  if (paramsMainBoxWithScroll) {
    const calcedParamsFakeThumb: CalcedParamsFakeTrack = {
      width: 0,
      height: 0,
      speedRatio: 0,
    };
    const { width: incomingWidth, height: incomingHeight } = style.thumb.size;

    if (typeScroll === 'horizontal') {
      const { scrollWidth, offsetWidth, clientWidth } = paramsMainBoxWithScroll;

      const widthFakeTrack = calcedParamsFakeTrack.width;
      const minWidthThumb =
        offsetWidth - clientWidth || defaultFakeThumbParams.width; // ширина минимального фейкового "большого пальца"
      const emptySpaceHorizontal = scrollWidth - offsetWidth; // пустое пространство, которое нужно преодолеть для полной прокрутки контента

      // если пустого пространства > ширины фейкового трека за минусом минимального "большого пальца"
      if (emptySpaceHorizontal > widthFakeTrack - minWidthThumb) {
        calcedParamsFakeThumb.width = minWidthThumb;
        calcedParamsFakeThumb.speedRatio =
          emptySpaceHorizontal / (widthFakeTrack - minWidthThumb);
      } else {
        calcedParamsFakeThumb.width =
          widthFakeTrack - minWidthThumb - emptySpaceHorizontal;
      }
      calcedParamsFakeThumb.height = getNumFromString(incomingHeight as string);
    }

    if (typeScroll === 'vertical') {
      const { scrollHeight, offsetHeight, clientHeight } =
        paramsMainBoxWithScroll;

      const heightFakeTrack = calcedParamsFakeTrack.height;
      const minHeightThumb =
        offsetHeight - clientHeight || defaultFakeThumbParams.height; // высота минимального фейкового "большого пальца"
      const emptySpaceVertical = scrollHeight - offsetHeight; // пустое пространство, которое нужно преодолеть для полной прокрутки контента

      // если пустое пространство > высоты фейкового трека за минусом минимального "большого пальца"
      if (emptySpaceVertical > heightFakeTrack - minHeightThumb) {
        calcedParamsFakeThumb.height = minHeightThumb;
        calcedParamsFakeThumb.speedRatio =
          emptySpaceVertical / (heightFakeTrack - minHeightThumb);
      } else {
        calcedParamsFakeThumb.height =
          heightFakeTrack - minHeightThumb - emptySpaceVertical;
      }
      calcedParamsFakeThumb.width = getNumFromString(incomingWidth as string);
    }

    return {
      width: `${calcedParamsFakeThumb.width}px`,
      height: `${calcedParamsFakeThumb.height}px`,
      transform:
        typeScroll === 'horizontal'
          ? `translateX(${xCoordFakeScroll}px)`
          : `translateY(${yCoordFakeScroll}px)`,
      backgroundColor: 'tomato',

      ...style.thumb.custom,
    };
  }
});

function FakeScroll({
  style,
  mainBoxWithRealScrollRef, // контейнер содержащий контент со скроллом
  setIsDraggingFakeScroll, // сеттер состояния текущей активности фэйк-скролла
  typeScroll = 'vertical',
  forceUpdate = null, // массив состояний, которые запустят принудительный ререндер (необязательно)
}: FakeScrollProps) {
  const fakeTrackRef = useRef<HTMLDivElement>(null);
  const fakeThumbRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [xCoordFakeScroll, setXCoordFakeScroll] = useState(0);
  const [yCoordFakeScroll, setYCoordFakeScroll] = useState(0);
  const [paramsMainBoxWithScroll, setParamsMainBoxWithScroll] =
    useState<ParamsMainBoxWithScroll>({
      scrollWidth: 0,
      offsetWidth: 0,
      clientWidth: 0,
      scrollHeight: 0,
      offsetHeight: 0,
      clientHeight: 0,
    });

  useEffect(() => {
    if (mainBoxWithRealScrollRef.current) {
      const {
        scrollWidth,
        offsetWidth,
        clientWidth,
        scrollHeight,
        offsetHeight,
        clientHeight,
      } = mainBoxWithRealScrollRef.current;

      setParamsMainBoxWithScroll({
        scrollWidth,
        offsetWidth,
        clientWidth,
        scrollHeight,
        offsetHeight,
        clientHeight,
      });
    }
  }, [...getDependences(forceUpdate)]);

  useEffect(() => {
    const refMainBoxWithRealScroll = mainBoxWithRealScrollRef.current;

    if (refMainBoxWithRealScroll) {
      refMainBoxWithRealScroll.addEventListener('scroll', scrollHandler); // добавляем слушатель события scroll
    }
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      if (refMainBoxWithRealScroll) {
        refMainBoxWithRealScroll.removeEventListener('scroll', scrollHandler);
      }
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const scrollHandler = useCallback(() => {
    handleOnScroll({
      isDragging,
      fakeTrackRef,
      mainBoxWithRealScrollRef,
      typeScroll,
      setXCoordFakeScroll,
      setYCoordFakeScroll,
    });
  }, [isDragging]);

  const mouseMoveHandler = useCallback(
    (e: MouseEvent) => {
      handleOnMouseMove({
        e,
        isDragging,
        fakeTrackRef,
        fakeThumbRef,
        mainBoxWithRealScrollRef,
        typeScroll,
        setXCoordFakeScroll,
        setYCoordFakeScroll,
      });
    },
    [isDragging],
  );

  function handleMouseDown() {
    setIsDragging(true);
    if (setIsDraggingFakeScroll) setIsDraggingFakeScroll(true);
  }

  function handleMouseUp() {
    setIsDragging(false);
    if (setIsDraggingFakeScroll) setIsDraggingFakeScroll(false);
  }

  return (
    <Track
      paramsMainBoxWithScroll={paramsMainBoxWithScroll}
      ref={fakeTrackRef}
      style={style}
      typeScroll={typeScroll}
    >
      <Thumb
        paramsMainBoxWithScroll={paramsMainBoxWithScroll}
        ref={fakeThumbRef}
        style={style}
        typeScroll={typeScroll}
        xCoordFakeScroll={xCoordFakeScroll}
        yCoordFakeScroll={yCoordFakeScroll}
        onMouseDown={handleMouseDown}
      />
    </Track>
  );
}

export default FakeScroll;
