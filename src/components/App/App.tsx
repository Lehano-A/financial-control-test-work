import React from 'react';
import PanelMenu from '../PanelMenu/PanelMenu';
import TechnicalSupport from '../TechnicalSupport/TechnicalSupport';
import ButtonCommunication from '../ButtonCommunication/ButtonCommunication';
import { styled } from '@mui/material';
import UserInfo from '../UserInfo/UserInfo';

const Aside = styled('aside')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '293px',

  '& > :nth-child(1n):not(:last-child)': {
    marginBottom: '4px',
  },
}));

function App() {
  return (
    <>
      <Aside>
        <PanelMenu />
        <TechnicalSupport />
        <ButtonCommunication />
      </Aside>

      <header>
        <UserInfo />
      </header>
    </>
  );
}

export default App;
