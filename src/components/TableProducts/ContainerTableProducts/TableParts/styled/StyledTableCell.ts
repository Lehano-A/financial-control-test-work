import { styled, TableCell } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => {
  const border = `2px solid ${theme.palette.common.white}`;
  return {
    fontSize: '10px',
    textAlign: 'left',
    verticalAlign: 'center',
    borderBottom: border,
    borderRight: border,
  };
});

export default StyledTableCell;
