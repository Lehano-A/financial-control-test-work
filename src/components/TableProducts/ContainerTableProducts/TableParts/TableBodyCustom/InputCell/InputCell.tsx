import { styled } from '@mui/material';
import React, { useEffect } from 'react';

import assignCellValue from '../../../../../../helpers/assignCellValue';
import { Data } from '../../../../types/data.types';
import { InputCellProps } from './types/inputCellProps.types';
import { StyledInputProps } from './types/styledInputProps.types';
import { ValueInputCell } from './types/valueInputCell.types';

const StyledTd = styled('td')(() => ({
  textAlign: 'left',
}));

const StyledInput = styled('input')<StyledInputProps>(
  ({ theme, style, sizeInputCell }) => ({
    display: 'table-cell',

    textAlign: 'left',
    width: `${sizeInputCell.width}px`,
    outline: 'none',
    border: 'none',
    color: theme.palette.accent.main,
    background: 'transparent',
    ...style,
  }),
);

function InputCell({
  autoFocus,
  dataProducts,
  defaultValue,
  style,
  setValueInputCell,
  valueInputCell,
  changeTableData,
  sizeInputCell,
  setWasDoubleClickByCell,
  paramsInputCell,
  resetStatesByDefault,
}: InputCellProps) {
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        setWasDoubleClickByCell(false);
        handleSaveNewInputValue();
      }
    });

    return () => {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          setWasDoubleClickByCell(false);
          handleSaveNewInputValue();
        }
      });
    };
  }, [paramsInputCell.name, valueInputCell.new]);

  // обработать сохранение нового вводного значения
  function handleSaveNewInputValue() {
    const cellName = paramsInputCell.name as keyof Data;
    const rowId = paramsInputCell.rowId;
    if (cellName && rowId) {
      const updatedData = [...dataProducts];
      const idChangingItem = updatedData.findIndex(
        (item: Data) => item.id.toString() === rowId,
      ); // находим id строки, в которой будет изменять значение

      assignCellValue(
        updatedData[idChangingItem],
        cellName,
        valueInputCell.new,
      );
      changeTableData(updatedData);
    }
  }

  // обработать изменение поля ввода
  function handleOnChange(e: React.ChangeEvent) {
    const eventTarget = e.target as HTMLInputElement;
    const newValue = eventTarget.value;
    setValueInputCell((prevState: ValueInputCell) => ({
      ...prevState,
      new: newValue,
    }));
  }

  // обработать потерю фокуса поля ввода
  function handleOnBlur() {
    setValueInputCell({ start: valueInputCell.start, new: valueInputCell.new });
    setWasDoubleClickByCell(false);
    resetStatesByDefault();
  }

  return (
    <StyledTd>
      <StyledInput
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        sizeInputCell={sizeInputCell}
        style={style}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />
    </StyledTd>
  );
}

export default InputCell;