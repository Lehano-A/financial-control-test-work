import { styled } from '@mui/material';
import React from 'react';

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
  style,
  setValueInputCell,
  valueInputCell,
  sizeInputCell,
  setWasDoubleClickByCell,
  resetStatesByDefault,
  dataType,
}: InputCellProps) {
  // обработать изменение поля ввода
  function handleOnChange(e: React.ChangeEvent<HTMLElement>) {
    const eventTarget = e.target as HTMLInputElement;
    const dataType = e.target.dataset.datatype;
    const newValue = eventTarget.value;
    if (dataType === 'number') {
      if (Number.isNaN(Number(newValue))) {
        return;
      }
    }

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
        sizeInputCell={sizeInputCell}
        style={style}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        data-datatype={dataType}
        value={valueInputCell.new}
      />
    </StyledTd>
  );
}

export default InputCell;
