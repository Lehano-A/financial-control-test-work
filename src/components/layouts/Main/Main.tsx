import { styled } from '@mui/material';

import { MainProps } from './Main.types';

const StyledMain = styled('main')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
