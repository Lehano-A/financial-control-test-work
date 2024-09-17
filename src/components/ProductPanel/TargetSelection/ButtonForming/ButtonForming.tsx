import React from 'react';
import { Button as MuiButton, styled } from '@mui/material';
import buttonActionMixin from '../../../../mixins/buttonActionMixin';

const Button = styled(MuiButton)(({ theme }) => ({
  ...buttonActionMixin({ gapBetween: '4px' }),
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  padding: '10px 12px',
}));

function ButtonForming() {
  return <Button>Сформировать</Button>;
}

export default ButtonForming;
