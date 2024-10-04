import { styled, TableBody as MuiTableBody } from '@mui/material';
import React, { KeyboardEvent, useCallback, useState } from 'react';

import { keyStorageDataProducts } from '../../../../../constants/constants';
import { Data } from '../../../../../data/types/dataProduct.types';
import assignCellValue from '../../../../../helpers/assignCellValue';
import useLocalStorageDataTable from '../../../../../hooks/useLocalStorageDataTable';
import { defaultValueInputCell } from '../../ContainerTableProducts';
import TableCellCustom from '../TableCellCustom/TableCellCustom';
import TableRow from '../styled/StyledTableRow';
import InputCell from './InputCell/InputCell';
import { ParamsInputCell } from './InputCell/types/paramsInputCell.types';
import { TableBodyCustomProps } from './types/tableBodyCustomProps.types';

const TableBody = styled(MuiTableBody)(() => ({
  '& td': { color: 'black', fontWeight: 'bold' },
}));

const defaultParamsInputCell = {
  dataType: '',
  name: '',
  rowId: '',
  id: '',
  style: {},
};

function TableBodyCustom({
  dataProducts,
  selected,
  handleClick,
  setDataProducts,
  valueInputCell,
  setValueInputCell,
  isDraggingFakeScroll,
  wasDoubleClickByCell,
  setWasDoubleClickByCell,
}: TableBodyCustomProps) {
  const [paramsInputCell, setParamsInputCell] = useState<ParamsInputCell>(
    defaultParamsInputCell,
  );

  const storage = useLocalStorageDataTable();

  const resetStatesByDefault = useCallback(() => {
    setValueInputCell(defaultValueInputCell);
    setParamsInputCell(defaultParamsInputCell);
  }, []);

  // обработать нажатие "Enter"
  function handleOnKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault();
      setWasDoubleClickByCell(false);
      handleSaveNewInputValue();
    }
  }

  // обработать сохранение нового вводного значения
  function handleSaveNewInputValue() {
    const cellName = paramsInputCell.name as keyof Data;
    const rowId = paramsInputCell.rowId;
    const newValue =
      typeof valueInputCell.new === 'string'
        ? valueInputCell.new.trim()
        : valueInputCell.new;

    if (cellName && rowId && newValue) {
      const updatedData = [...dataProducts];
      const idChangingItem = updatedData.findIndex(
        (item: Data) => item.id.toString() === rowId,
      ); // находим id строки, в которой будем изменять значение

      assignCellValue(updatedData[idChangingItem], cellName, newValue);
      setDataProducts(updatedData);
      storage.update(keyStorageDataProducts, updatedData);
    }
  }

  // обработать даблклик
  function handleOnDoubleClick(e: React.MouseEvent) {
    const eventTarget = e.target as HTMLElement;
    const textContent = eventTarget.textContent as string;
    const dataType = eventTarget.dataset.dataType as string;
    const cellName = eventTarget.dataset.cellname as string;
    const rowId = eventTarget.dataset.rowid as string;
    const currentCellStyle = window.getComputedStyle(eventTarget);

    setWasDoubleClickByCell(true);
    setValueInputCell({ start: textContent, new: textContent });
    setParamsInputCell({
      dataType,
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

  return (
    <TableBody
      id='tableBodyProducts'
      onDoubleClick={handleOnDoubleClick}
      onKeyDown={handleOnKeyDown}
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
              .map((key, keyId) => {
                const cellId = `${key}${rowId}${keyId}`;
                const cellName = key as keyof Data;

                return (
                  <React.Fragment key={keyId}>
                    {/* если был даблклик + id текущей строки и id целевой ячейки совпадает с теми, что записались при даблклике на ячейку */}
                    {wasDoubleClickByCell &&
                    paramsInputCell.rowId === rowId &&
                    paramsInputCell.name === cellName ? (
                      <InputCell
                        autoFocus={true}
                        style={paramsInputCell.style}
                        setValueInputCell={setValueInputCell}
                        valueInputCell={valueInputCell}
                        isDraggingFakeScroll={isDraggingFakeScroll}
                        setWasDoubleClickByCell={setWasDoubleClickByCell}
                        paramsInputCell={paramsInputCell}
                        resetStatesByDefault={resetStatesByDefault}
                        dataType={
                          cellName === 'barcode' ||
                          cellName === 'product_quantity' ||
                          cellName === 'price'
                            ? 'number'
                            : 'string'
                        }
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
