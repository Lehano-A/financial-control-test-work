import React from 'react';
import StyledTableCell from '../styled/StyledTableCell';
import { TableCellCustomProps } from './types/tableCellSutomProps.types';

const TableCellCustom: React.FC<TableCellCustomProps> = React.memo(
  ({ children, rowId, cellName }) => {
    return (
      <StyledTableCell
        id={rowId}
        data-rowid={rowId}
        data-cellname={cellName}
      >
        {children}
      </StyledTableCell>
    );
  },
);

export default TableCellCustom;
