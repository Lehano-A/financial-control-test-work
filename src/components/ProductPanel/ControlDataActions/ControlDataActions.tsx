import ClearIcon from '@mui/icons-material/Clear';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import RuleFolderIcon from '@mui/icons-material/RuleFolder';
import { Button, Divider as MuiDivider, styled } from '@mui/material';

import buttonActionMixin from '../../../mixins/buttonActionMixin';
import { ProductPanelProps } from '../types/productPanelProps.types';
import { ButtonActionProps } from './types/buttonActionProps.types';

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

  '&:nth-of-type(1n)': {
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

function ControlDataActions({ setIsButtonLoadPressed }: ProductPanelProps) {
  function handleOnClickButtonLoad() {
    setIsButtonLoadPressed(true);
  }
  return (
    <BoxButtonActions>
      <div>
        <ButtonAction onClick={handleOnClickButtonLoad}>
          <DriveFileMoveIcon />
          Загрузить данные из csv
        </ButtonAction>

        <ButtonAction>
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
        >
          Очистить <ClearIcon />
        </ButtonClear>
      </BoxLastButton>
    </BoxButtonActions>
  );
}

export default ControlDataActions;
