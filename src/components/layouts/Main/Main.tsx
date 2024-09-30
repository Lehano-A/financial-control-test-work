import { styled } from '@mui/material';
import { useState } from 'react';

import ProductPanel from '../../ProductPanel/ProductPanel';
import TableProducts from '../../TableProducts/TableProducts';

const StyledMain = styled('main')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

function Main() {
  const [isButtonLoadPressed, setIsButtonLoadPressed] = useState(false);

  return (
    <StyledMain>
      <ProductPanel setIsButtonLoadPressed={setIsButtonLoadPressed} />
      <TableProducts
        isButtonLoadPressed={isButtonLoadPressed}
        setIsButtonLoadPressed={setIsButtonLoadPressed}
      />
    </StyledMain>
  );
}

export default Main;
