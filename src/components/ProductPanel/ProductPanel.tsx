import { styled } from '@mui/material';

import ControlDataActions from './ControlDataActions/ControlDataActions';
import ButtonExport from './TargetSelection/ButtonExport/ButtonExport';
import ButtonForming from './TargetSelection/ButtonForming/ButtonForming';
import TargetSelection from './TargetSelection/TargetSelection';
import TitleSection from './TitleSection/TitleSection';
import { ProductPanelProps } from './types/productPanelProps.types';

const Header = styled('header')(() => ({
  display: 'flex',
  alignItems: 'center',
  margin: '23px 0px 18px',
}));

const BoxProductInfo = styled('div')(() => ({
  '& > dl': {
    marginBottom: '7px',
  },

  '& > :not(:last-child)': {
    marginRight: '5px',
  },
}));

const BoxActions = styled('div')(() => ({
  margin: '21px 0',
}));

function ProductPanel({ ...rest }: ProductPanelProps) {
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
        <ControlDataActions {...rest} />
      </BoxActions>
    </section>
  );
}

export default ProductPanel;
