import React from 'react';
import PanelMenu from '../PanelMenu/PanelMenu';
import TechnicalSupport from '../TechnicalSupport/TechnicalSupport';
import ButtonCommunication from '../ButtonCommunication/ButtonCommunication';
import { styled } from '@mui/material';

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
    <Aside>
      <PanelMenu />
      <TechnicalSupport />
      <ButtonCommunication />
    </Aside>
  );
}

export default App;
