import { NativeSelect, styled } from '@mui/material';

const DescriptionList = styled('dl')(() => ({
  display: 'flex',
}));

const BoxKeyValue = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.common.white,
  height: '55px',
  padding: '0 10px 0 12px',
  borderRadius: '15px',

  '&:nth-of-type(1n):not(:last-child)': {
    marginRight: '5px',
  },
}));

const Key = styled('dt')(({ theme }) => ({
  fontSize: '1.2rem',
  marginRight: '10px',
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

const Value = styled('dd')(({ theme }) => ({
  fontSize: '1.2rem',
  padding: '12px 15px',
  borderRadius: '15px',
  color: theme.palette.shades.grey[700],
  backgroundColor: theme.palette.shades.grey[300],
}));

const BoxKeyValueDropDown = styled(BoxKeyValue)(() => ({
  minWidth: '95px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '6px 11px',
}));

const KeyDropDown = styled(Key)(({ theme }) => ({
  margin: 0,
  color: theme.palette.shades.grey[800],
}));

const ValueDropDown = styled(Value)(({ theme }) => ({
  width: 'max-content',
  margin: 0,
  padding: 0,
  background: 'none',

  '.MuiNativeSelect-root': {
    fontSize: '12px',
    fontWeight: 600,
    color: theme.palette.text.primary,
  },

  '.MuiNativeSelect-select.MuiInputBase-input.MuiInput-input': {
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: '15px',

    '&:hover': { borderBottom: 'none', animation: 'none' },
  },

  '.MuiInputBase-root.MuiInput-root': {
    '&:hover::before': {
      borderBottom: 'none',
    },

    '&::before': {
      content: '""',
      borderBottom: 'none',
    },

    '&::after': {
      content: '""',
      borderBottom: 'none',
    },
  },
}));

function TargetSelection() {
  return (
    <DescriptionList>
      <BoxKeyValue>
        <Key>Баркод</Key>
        <Value>5643242134323099</Value>
      </BoxKeyValue>

      <BoxKeyValue>
        <Key>Артикул</Key>
        <Value>ДжЖСинМом0823</Value>
      </BoxKeyValue>

      <BoxKeyValue>
        <Key>Размер</Key>
        <Value>44</Value>
      </BoxKeyValue>

      <BoxKeyValueDropDown>
        <KeyDropDown>Категория</KeyDropDown>
        <ValueDropDown>
          <NativeSelect
            defaultValue='jeanse'
            inputProps={{
              name: 'product',
              id: 'uncontrolled-native',
            }}
          >
            <option value='jeanse'>Джинсы</option>
            <option value='shirts'>Рубашки</option>
            <option value='baseballСaps'>Бейсболки</option>
          </NativeSelect>
        </ValueDropDown>
      </BoxKeyValueDropDown>
    </DescriptionList>
  );
}

export default TargetSelection;
