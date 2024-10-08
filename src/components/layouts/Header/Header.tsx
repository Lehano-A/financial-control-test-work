import { styled } from '@mui/material';

import { HeaderProps } from './types/header.types';

const StyledHeader = styled('header')(() => ({
  maxWidth: '750px',
}));

function Header({ children }: HeaderProps) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default Header;
