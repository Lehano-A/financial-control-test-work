import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import { Theme } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';
import ListMenu from './ListMenu/ListMenu';

const Section = styled('section')(({ theme }: { theme: Theme }) => {
  return {
    display: 'flex',
    width: '293px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.customVariables.borderRadiusMain,
    flexDirection: 'column',
    padding: '10px',
  };
});

const Title = styled('h2')(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
  fontSize: '18px',
  lineHeight: '0.9',
  fontWeight: '500',
  margin: '0',

  '& > span': {
    display: 'inline-block',
    padding: '3px',
    marginRight: '4px',
    borderRadius: theme.customVariables.borderRadiusSpan,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const ButtonMenu = styled(Button)(({ theme }: { theme: Theme }) => ({
  textTransform: 'none',
  backgroundColor: theme.palette.primary.light,
  height: '25px',
  borderRadius: '25px',
  lineHeight: 0,
  fontSize: '11px',
  padding: '0',
}));

const IconClear = styled(ClearIcon)(() => ({
  width: '12px',
}));

const Header = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 10px 20px 10px',
}));

function PanelMenu() {
  return (
    <Section>
      <Header>
        <Title>
          <span>ФИН</span> Контроль
        </Title>
        <ButtonMenu
          variant='contained'
          endIcon={<IconClear />}
        >
          Меню
        </ButtonMenu>
      </Header>

      <ListMenu />
    </Section>
  );
}

export default PanelMenu;
