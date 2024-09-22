import { Box, styled } from '@mui/material';

import ButtonCommunication from '../Menu/ButtonCommunication/ButtonCommunication';
import Menu from '../Menu/Menu';
import ProductPanel from '../ProductPanel/ProductPanel';
import TableProducts from '../TableProducts/TableProducts';
import TechnicalSupport from '../TechnicalSupport/TechnicalSupport';
import UserInfo from '../UserInfo/UserInfo';
import Header from '../layouts/Header/Header';
import Main from '../layouts/Main/Main';

const Aside = styled('aside')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '293px',

  '& > :nth-child(1n):not(:last-child)': {
    marginBottom: '4px',
  },
}));

const Wrapper = styled(Box)(() => ({
  marginLeft: '40px',
}));
function App() {
  return (
    <>
      <Aside>
        <Menu />
        <TechnicalSupport />
        <ButtonCommunication />
      </Aside>

      <Wrapper>
        <Header>
          <UserInfo />
        </Header>

        <Main>
          <ProductPanel />
          <TableProducts />
        </Main>
      </Wrapper>
    </>
  );
}

export default App;
