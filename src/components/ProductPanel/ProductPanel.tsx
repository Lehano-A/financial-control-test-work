import { styled } from '@mui/material';

import ControlDataActions from './ControlDataActions/ControlDataActions';
import ButtonExport from './TargetSelection/ButtonExport/ButtonExport';
import ButtonForming from './TargetSelection/ButtonForming/ButtonForming';
import TargetSelection from './TargetSelection/TargetSelection';
import TitleSection from './TitleSection/TitleSection';

const Header = styled('header')(() => ({
  display: 'flex',
  alignItems: 'center',
  margin: '23px 0px 18px',
}));

const BoxProductInfo = styled('div')(() => ({
  '& > :nth-of-type(1n)': {
    marginTop: '7px',
  },

  '& > button:not(:last-child)': {
    marginRight: '5px',
  },
}));

const BoxActions = styled('div')(() => ({
  margin: '21px 0',
}));

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
