import { styled, TableCell } from '@mui/material';

import getBorderStyleTableCell from '../../../../../helpers/getBorderStyleTableCell';

export interface StyledTableCellProps {
  position?: 'static' | 'relative' | 'sticky';
}

const StyledTableCell = styled(TableCell)<StyledTableCellProps>(({
  theme,
  position = 'static',
}) => {
  const border = getBorderStyleTableCell(theme.palette.common.white);

  return {
    position: position,
    maxWidth: '300px',
    fontSize: '11px',
    textAlign: 'left',
    verticalAlign: 'center',
    borderBottom: border,
    borderRight: border,
    wordBreak: 'break-all',

    '&  textarea + span': {
      // значение в ячейке
      opacity: 0,
    },
  };
});

export default StyledTableCell;
