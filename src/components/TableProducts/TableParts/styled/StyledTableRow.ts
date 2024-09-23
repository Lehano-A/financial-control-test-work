import { styled, TableRow as MuiTableRow } from '@mui/material';

const StyledTableRow = styled(MuiTableRow)(({ theme }) => ({
  '&:nth-of-type(1n):not(:first-of-type)': {
    color: 'lime',
  },
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.bg.main,
  },

  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.shades.grey[200],
  },
}));

export default StyledTableRow;
