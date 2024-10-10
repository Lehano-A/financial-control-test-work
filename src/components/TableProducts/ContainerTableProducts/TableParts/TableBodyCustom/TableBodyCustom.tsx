import { styled, TableBody as MuiTableBody } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';

import { keyStorageDataProducts } from '../../../../../constants/constants';
import { Data } from '../../../../../dataProducts/types/dataProduct.types';
import assignCellValue from '../../../../../helpers/assignCellValue';
import findIndexItemDataProducts from '../../../../../helpers/findIndexItemDataProducts';
import useLocalStorageDataTable from '../../../../../hooks/useLocalStorageDataTable';
import { defaultValueInputCell } from '../../ContainerTableProducts';
import TableRowCustom from '../TableRowCustom/TableRowCustom';
import { ParamsInputCell } from './InputCell/types/paramsInputCell.types';
import { TableBodyCustomProps } from './types/tableBodyCustomProps.types';

const TableBody = styled(MuiTableBody)(() => ({
  '& td': { color: 'black', fontWeight: 'bold' },
}));

const defaultParamsInputCell = {
  dataType: '',
  cellName: '',
  rowId: '',
  id: '',
  style: {},
};

const TableBodyCustom = React.memo(
  ({
    dataProducts,
    setDataProducts,
    valueInputCell,
    setValueInputCell,
    wasDoubleClickByCell,
    setWasDoubleClickByCell,
  }: TableBodyCustomProps) => {
    const [paramsInputCell, setParamsInputCell] = useState<ParamsInputCell>(
      defaultParamsInputCell,
    );

    const storage = useLocalStorageDataTable();

    // сохраняем значение при его редактировании
    useEffect(() => {
      handleSaveNewInputValue();
    }, [valueInputCell.new]);

    const resetStatesByDefault = useCallback(() => {
      setValueInputCell(defaultValueInputCell);
      setParamsInputCell(defaultParamsInputCell);
    }, []);

    // обработать сохранение нового вводного значения
    const handleSaveNewInputValue = useCallback(() => {
      const cellName = paramsInputCell.cellName as keyof Data;
      const rowId = paramsInputCell.rowId;
      const newValue =
        typeof valueInputCell.new === 'string'
          ? valueInputCell.new.trim()
          : valueInputCell.new;
      if (cellName && rowId && newValue) {
        updateDataProducts(rowId, cellName, newValue);
        updateItemDataProductsInStorage(rowId, cellName, newValue);
      }
    }, [valueInputCell.new]);

    // обновить данные товаров (обновление текущего состояния)
    const updateDataProducts = useCallback(
      (rowId: string, cellName: keyof Data, newValue: string | number) => {
        const updatedData = [...dataProducts];
        const idChangingItem = findIndexItemDataProducts(updatedData, rowId);

        assignCellValue(updatedData[idChangingItem], cellName, newValue);
        setDataProducts(updatedData);
      },
      [valueInputCell.new],
    );

    // обновить ЭЛЕМЕНТ в данных товаров в хранилище
    const updateItemDataProductsInStorage = useCallback(
      (rowId: string, cellName: keyof Data, newValue: string | number) => {
        const dataFromStorage = storage.get(keyStorageDataProducts);
        const idItemInStorage = findIndexItemDataProducts(
          dataFromStorage,
          rowId,
        ); // находим id строки из хранилища, в которой будем изменять значение (в хранилище данные всегда по дефолту)

        dataFromStorage[idItemInStorage][cellName] = newValue;
        storage.update(keyStorageDataProducts, dataFromStorage);
      },
      [valueInputCell.new],
    );

    // обработать даблклик
    const handleOnDoubleClick = useCallback((e: React.MouseEvent) => {
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
        cellName,
        rowId: rowId,
        style: {
          padding: currentCellStyle.padding,
          fontSize: currentCellStyle.fontSize,
          fontWeight: currentCellStyle.fontWeight,
          fontFamily: currentCellStyle.fontFamily,
          lineHeight: currentCellStyle.lineHeight,
        },
      });
    }, []);

    return (
      <TableBody
        id='tableBodyProducts'
        onDoubleClick={handleOnDoubleClick}
      >
        {dataProducts.map((row: Data) => {
          return (
            <TableRowCustom
              key={row.id}
              currentRow={row}
              paramsInputCell={paramsInputCell}
              valueInputCell={valueInputCell}
              setValueInputCell={setValueInputCell}
              wasDoubleClickByCell={wasDoubleClickByCell}
              setWasDoubleClickByCell={setWasDoubleClickByCell}
              resetStatesByDefault={resetStatesByDefault}
            />
          );
        })}
      </TableBody>
    );
  },
);

export default TableBodyCustom;
