import React from 'react';
import { MainProps } from './Main.types';
import { styled } from '@mui/material';

const StyledMain = styled('main')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
