import { styled } from '@mui/material';
import { useEffect, useState } from 'react';

import api from '../../../api/api';
import ProductPanel from '../../ProductPanel/ProductPanel';
import TableProducts from '../../TableProducts/TableProducts';
import { Data } from '../../TableProducts/types/data.types';

const StyledMain = styled('main')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  // alignItems: 'center'
}));

function Main() {
  return (
    <StyledMain>
      <ProductPanel />
      <TableProducts />
    </StyledMain>
  );
}

export default Main;
