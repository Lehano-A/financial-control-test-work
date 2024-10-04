import { styled, TableCell } from '@mui/material';

import getBorderStyleTableCell from '../../../../../helpers/getBorderStyleTableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => {
  const border = getBorderStyleTableCell(theme.palette.common.white);

  return {
    fontSize: '10px',
    textAlign: 'left',
    verticalAlign: 'center',
    borderBottom: border,
    borderRight: border,
  };
});

export default StyledTableCell;
