import StyledTableCell from '../styled/StyledTableCell';
import { TableCellCustomProps } from './types/tableCellSutomProps.types';

function TableCellCustom({ children, rowId, cellName }: TableCellCustomProps) {
  return (
    <StyledTableCell
      id={rowId}
      data-rowid={rowId}
      data-cellname={cellName}
    >
      {children}
    </StyledTableCell>
  );
}

export default TableCellCustom;
