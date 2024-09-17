import React from 'react';
import Menu from '../Menu/Menu';
import TechnicalSupport from '../TechnicalSupport/TechnicalSupport';
import ButtonCommunication from '../ButtonCommunication/ButtonCommunication';
import { Box, styled } from '@mui/material';
import UserInfo from '../UserInfo/UserInfo';
import ProductPanel from '../ProductPanel/ProductPanel';
import Main from '../layouts/Main/Main';
import Header from '../layouts/Header/Header';

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
        </Main>
      </Wrapper>
    </>
  );
}

export default App;
