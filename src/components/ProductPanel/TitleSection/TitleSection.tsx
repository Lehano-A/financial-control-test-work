import DescriptionIcon from '@mui/icons-material/Description';
import { Button as MuiButton, styled } from '@mui/material';

import buttonActionMixin from '../../../mixins/buttonActionMixin';

const Title = styled('h1')(({ theme }) => ({
  fontSize: '28px',
  fontWeight: 400,
  letterSpacing: '-1.05px',
  color: theme.palette.text.primary,
  marginRight: '18px',
}));

const ButtonInstruction = styled(MuiButton)(({ theme }) => ({
  ...buttonActionMixin({ svgFontSize: '1.4rem' }),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '31px',
  width: '109px',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  padding: '0',
  lineHeight: 'normal',
}));

function TitleSection() {
  return (
    <>
      <Title>Остатки сформированы на 01.04.2023 г.</Title>
      <ButtonInstruction>
        <DescriptionIcon /> Инструкции
      </ButtonInstruction>
    </>
  );
}

export default TitleSection;
