import React, { useMemo } from 'react';

import { Data } from '../../../../../dataProducts/types/dataProduct.types';
import InputCell from '../TableBodyCustom/InputCell/InputCell';
import TableCellCustom from '../TableCellCustom/TableCellCustom';
import TableRow from '../styled/StyledTableRow';
import { TableRowCustomProps } from './types/tableRowCustomProps.types';

function TableRowCustom({
  currentRow,
  paramsInputCell,
  valueInputCell,
  setValueInputCell,
  wasDoubleClickByCell,
  setWasDoubleClickByCell,
  resetStatesByDefault,
}: TableRowCustomProps) {
  const rowId = useMemo(() => currentRow.id.toString(), [currentRow.id]);
  return (
    <TableRow
      hover
      tabIndex={-1}
      key={currentRow.id}
    >
      {Object.keys(currentRow)
        .slice(1)
        .map((name) => {
          const cellName = name as keyof Data;
          /* если был даблклик + id текущей строки и id целевой ячейки совпадает с теми, что записались при даблклике на ячейку */
          const needDisplayInputCell =
            wasDoubleClickByCell &&
            paramsInputCell.rowId === rowId &&
            paramsInputCell.cellName === cellName;

          return (
            <React.Fragment key={`${currentRow.id + cellName}`}>
              {
                <TableCellCustom
                  rowId={rowId}
                  position='relative'
                  cellName={cellName}
                  needDisplayInputCell={needDisplayInputCell} // (для условия перерендера)
                  currentValue={currentRow[cellName]} // (для условия перерендера)
                >
                  {needDisplayInputCell && (
                    <InputCell
                      style={paramsInputCell.style}
                      valueInputCell={valueInputCell}
                      setValueInputCell={setValueInputCell}
                      setWasDoubleClickByCell={setWasDoubleClickByCell}
                      resetStatesByDefault={resetStatesByDefault}
                      dataType={
                        cellName === 'barcode' ||
                        cellName === 'product_quantity' ||
                        cellName === 'price'
                          ? 'number'
                          : 'string'
                      }
                    />
                  )}

                  <span>{currentRow[cellName]}</span>
                </TableCellCustom>
              }
            </React.Fragment>
          );
        })}
    </TableRow>
  );
}

export default TableRowCustom;
