import React from 'react';
import { styled, Button, Divider as MuiDivider } from '@mui/material';
import buttonActionMixin from '../../../mixins/buttonActionMixin';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import RuleFolderIcon from '@mui/icons-material/RuleFolder';
import ClearIcon from '@mui/icons-material/Clear';
import { ButtonActionProps } from './buttonActionProps.types';

const BoxButtonActions = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  borderTop: `1px solid ${theme.palette.shades.grey[600]}`,
  borderBottom: `1px solid ${theme.palette.shades.grey[600]}`,
  borderRadius: 0,
}));

const ButtonAction = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'svgFontSize' && prop !== 'iconMargin',
})<ButtonActionProps>(({ theme, iconMargin, svgFontSize }) => ({
  ...buttonActionMixin({
    iconMargin: iconMargin ? iconMargin : '0 5px 0 0',
    gapBetween: '17px',
    svgFontSize,
  }),
  fontSize: '13px',
  fontWeight: 500,
  letterSpacing: '-0.5px',
  borderRadius: '0',

  '&:nth-child(1n)': {
    paddingTop: '7px',
    paddingBottom: '7px',
  },

  '&:hover': {
    background: 'none',
    color: theme.palette.primary.shades[500],
  },
}));

const BoxLastButton = styled('div')(() => ({
  display: 'flex',
}));

const ButtonClear = styled(ButtonAction)(({ theme }) => ({
  lineHeight: 0,
  fontWeight: 400,
}));

const Divider = styled(MuiDivider)(() => ({
  marginRight: '35px',
  opacity: '0.7',
}));

function ControlDataActions() {
  return (
    <BoxButtonActions>
      <div>
        <ButtonAction disableRipple>
          <DriveFileMoveIcon />
          Загрузить данные из csv
        </ButtonAction>

        <ButtonAction disableRipple>
          <RuleFolderIcon />
          Изменить данные
        </ButtonAction>
      </div>

      <BoxLastButton>
        <Divider
          orientation='vertical'
          variant='middle'
          flexItem
        />
        <ButtonClear
          iconMargin='0 0 0 5px'
          svgFontSize='1.3rem'
          disableRipple
        >
          Очистить <ClearIcon />
        </ButtonClear>
      </BoxLastButton>
    </BoxButtonActions>
  );
}

export default ControlDataActions;