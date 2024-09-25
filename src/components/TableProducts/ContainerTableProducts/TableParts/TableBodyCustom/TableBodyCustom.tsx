import { styled, TableBody as MuiTableBody } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';

import { Data } from '../../../types/data.types';
import TableCellCustom from '../TableCellCustom/TableCellCustom';
import TableRow from '../styled/StyledTableRow';
import InputCell from './InputCell/InputCell';
import { ParamsInputCell } from './InputCell/types/paramsInputCell.types';
import { TableBodyCustomProps } from './types/tableBodyCustomProps.types';

const TableBody = styled(MuiTableBody)(() => ({
  '& td': { color: 'black', fontWeight: 'bold' },
}));

export interface DefaultParamsInputCell {
  name: '';
  rowId: '';
  id: '';
  style: {};
}
const defaultValueInputCell = { start: '', new: '' };
const defaultParamsInputCell: DefaultParamsInputCell = {
  name: '',
  rowId: '',
  id: '',
  style: {},
};

function TableBodyCustom({
  dataProducts,
  changeTableData,
  selected,
  handleClick,
}: TableBodyCustomProps) {
  const [valueInputCell, setValueInputCell] = useState(defaultValueInputCell);
  const [wasDoubleClickByCell, setWasDoubleClickByCell] = useState(false);
  const [sizeInputCell, setSizeInputCell] = useState({ width: 0 });

  const [paramsInputCell, setParamsInputCell] = useState<ParamsInputCell>(
    defaultParamsInputCell,
  );

  // обработать даблклик
  function handleOnDoubleClick(e: React.MouseEvent) {
    const eventTarget = e.target as HTMLElement;
    const textContent = eventTarget.textContent as string;
    const clientWidthElement = eventTarget.clientWidth;
    const cellName = eventTarget.dataset.cellname as string;
    const rowId = eventTarget.dataset.rowid as string;
    const currentCellStyle = window.getComputedStyle(eventTarget);

    setValueInputCell({ start: textContent, new: textContent });
    setSizeInputCell({
      width: clientWidthElement,
    });
    setParamsInputCell({
      name: cellName,
      rowId: rowId,
      style: {
        padding: currentCellStyle.padding,
        lineHeight: currentCellStyle.lineHeight,
        fontSize: currentCellStyle.fontSize,
        fontWeight: currentCellStyle.fontWeight,
      },
    });
  }

  useEffect(() => {
    if (sizeInputCell.width && paramsInputCell.rowId) {
      setWasDoubleClickByCell(true);
    }
  }, [sizeInputCell, paramsInputCell.rowId]);

  const resetStatesByDefault = useCallback(() => {
    setValueInputCell(defaultValueInputCell);
    setParamsInputCell(defaultParamsInputCell);
  }, []);

  return (
    <TableBody
      id='tableBodyProducts'
      onDoubleClick={handleOnDoubleClick}
    >
      {dataProducts.map((row: Data, id: number) => {
        const isItemSelected = selected.includes(row.id);
        const rowId = row.id.toString();

        return (
          <TableRow
            hover
            onClick={(event) => handleClick(event, row.id)}
            role='checkbox'
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={`aaa${id}`}
            selected={isItemSelected}
            sx={{ cursor: 'pointer' }}
          >
            {Object.keys(row)
              .slice(1)
              .map((key, id) => {
                const cellId = `${key}${rowId}${id}`;
                const cellName = key as keyof Data;
                return (
                  <React.Fragment key={id}>
                    {/* если был даблклик + id текущей строки и id целевой ячейки совпадает с теми, что записались при даблклике на ячейку */}
                    {wasDoubleClickByCell &&
                    paramsInputCell.rowId === rowId &&
                    paramsInputCell.name === cellName ? (
                      <InputCell
                        autoFocus={true}
                        defaultValue={valueInputCell.new}
                        style={paramsInputCell.style}
                        dataProducts={dataProducts}
                        setValueInputCell={setValueInputCell}
                        valueInputCell={valueInputCell}
                        changeTableData={changeTableData}
                        sizeInputCell={sizeInputCell}
                        setWasDoubleClickByCell={setWasDoubleClickByCell}
                        paramsInputCell={paramsInputCell}
                        resetStatesByDefault={resetStatesByDefault}
                      />
                    ) : (
                      <TableCellCustom
                        rowId={rowId}
                        cellId={cellId}
                        cellName={cellName}
                      >
                        {row[cellName]}
                      </TableCellCustom>
                    )}
                  </React.Fragment>
                );
              })}
          </TableRow>
        );
      })}
    </TableBody>
  );
}

export default TableBodyCustom;
