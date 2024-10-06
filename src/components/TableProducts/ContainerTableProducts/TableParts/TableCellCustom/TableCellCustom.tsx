import React from 'react';

import StyledTableCell from '../styled/StyledTableCell';
import { TableCellCustomProps } from './types/tableCellCustomProps.types';

const TableCellCustom = React.memo(
  ({ children, rowId, cellName, position }: TableCellCustomProps) => {
    return (
      <StyledTableCell
        data-rowid={rowId}
        data-cellname={cellName}
        position={position}
      >
        {children}
      </StyledTableCell>
    );
  },
  (prevProps, nextProps) =>
    prevProps.needDisplayInputCell === nextProps.needDisplayInputCell &&
    prevProps.currentValue === nextProps.currentValue,
);

export default TableCellCustom;
