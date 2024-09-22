import { Box, styled } from '@mui/material';
import React, { useCallback, useEffect, useRef } from 'react';

import { defaultFakeThumbParams } from './contstants/constants';
import handleOnMouseMove from './handlersRealScroll/handleOnMouseMove/handleOnMouseMove';
import handleOnScroll from './handlersRealScroll/handleOnScroll/handleOnScroll';
import { CalcedParamsFakeTrack } from './types/calcedParamsFakeTrack.types';
import { FakeScrollProps } from './types/fakeScrollProps.types';
import { ThumbProps } from './types/thumbPropsTypes.types';
import { TrackProps } from './types/trackProps.types';
import getNumFromString from './utils/getNumFromString';

const calcedParamsFakeTrack: CalcedParamsFakeTrack = {
  width: 0,
  height: 0,
};

const Track = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== 'style' &&
    prop !== 'typeScroll' &&
    prop !== 'mainBoxWithRealScrollRef',
})<TrackProps>(({ style, typeScroll, mainBoxWithRealScrollRef }) => {
  const { width: incomingWidth, height: incomingHeight } = style.track.size;

  if (mainBoxWithRealScrollRef?.current) {
    const { offsetWidth, offsetHeight } = mainBoxWithRealScrollRef.current;

    const targetWidth = getNumFromString(incomingWidth);
    const targetHeight = getNumFromString(incomingHeight);

    if (typeScroll === 'horizontal') {
      const widthFakeTrack = (offsetWidth / 100) * targetWidth;
      calcedParamsFakeTrack.width = widthFakeTrack;
      calcedParamsFakeTrack.height = targetHeight;
    }

    if (typeScroll === 'vertical') {
      const heightFakeTrack = (offsetHeight / 100) * targetHeight;
      calcedParamsFakeTrack.width = targetWidth;
      calcedParamsFakeTrack.height = heightFakeTrack;
    }
  }

  return {
    display: 'flex',
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
    prop !== 'mainBoxWithRealScrollRef' &&
    prop !== 'typeScroll' &&
    prop !== 'xCoordFakeScroll' &&
    prop !== 'yCoordFakeScroll',
})<ThumbProps>(({
  style,
  mainBoxWithRealScrollRef,
  typeScroll,
  xCoordFakeScroll,
  yCoordFakeScroll,
}) => {
  if (mainBoxWithRealScrollRef?.current) {
    const calcedParamsFakeThumb: CalcedParamsFakeTrack = {
      width: 0,
      height: 0,
      speedRatio: 0,
    };
    const { width: incomingWidth, height: incomingHeight } = style.thumb.size;

    const {
      scrollWidth,
      offsetWidth,
      clientWidth,
      scrollHeight,
      offsetHeight,
      clientHeight,
    } = mainBoxWithRealScrollRef.current;

    if (typeScroll === 'horizontal') {
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
  typeScroll = 'vertical',
  style,
  mainBoxWithRealScrollRef, // контейнер содержащий контент со скроллом
  setIsDraggingFakeScroll, // сеттер состояния текущей активности фэйк-скролла (необязательно)
}: FakeScrollProps) {
  const fakeTrackRef = useRef<HTMLDivElement>(null);
  const fakeThumbRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = React.useState(false);
  const [xCoordFakeScroll, setXCoordFakeScroll] = React.useState(0);
  const [yCoordFakeScroll, setYCoordFakeScroll] = React.useState(0);

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

  useEffect(() => {
    const refMainBoxWithRealScroll = mainBoxWithRealScrollRef.current;

    if (refMainBoxWithRealScroll) {
      refMainBoxWithRealScroll.addEventListener('scroll', scrollHandler); // Добавляем слушатель события scroll
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

  return (
    <Track
      ref={fakeTrackRef}
      style={style}
      typeScroll={typeScroll}
      mainBoxWithRealScrollRef={mainBoxWithRealScrollRef}
    >
      <Thumb
        ref={fakeThumbRef}
        style={style}
        typeScroll={typeScroll}
        xCoordFakeScroll={xCoordFakeScroll}
        yCoordFakeScroll={yCoordFakeScroll}
        mainBoxWithRealScrollRef={mainBoxWithRealScrollRef}
        onMouseDown={handleMouseDown}
      />
    </Track>
  );
}

export default FakeScroll;
