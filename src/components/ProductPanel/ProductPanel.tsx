import React from 'react';
import { styled } from '@mui/material';
import TargetSelection from './TargetSelection/TargetSelection';
import ButtonForming from './TargetSelection/ButtonForming/ButtonForming';
import ButtonExport from './TargetSelection/ButtonExport/ButtonExport';
import ControlDataActions from './ControlDataActions/ControlDataActions';
import TitleSection from './TitleSection/TitleSection';

const Header = styled('header')(() => ({
  display: 'flex',
  alignItems: 'center',
  margin: '23px 0px 18px',
}));

const BoxProductInfo = styled('div')(() => ({
  marginBottom: '21px',

  '& > :nth-child(1)': {
    marginBottom: '7px',
  },

  '& > button:not(:last-child)': {
    marginRight: '5px',
  },
}));

const BoxActions = styled('div')(() => ({}));

function ProductPanel() {
  return (
    <section>
      <Header>
        <TitleSection />
      </Header>

      <BoxProductInfo>
        <TargetSelection />
        <ButtonForming />
        <ButtonExport />
      </BoxProductInfo>

      <BoxActions>
        <ControlDataActions />
      </BoxActions>
    </section>
  );
}

export default ProductPanel;
