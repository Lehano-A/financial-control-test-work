import { styled } from '@mui/material';
import React, { useState } from 'react';

import { InputCellProps } from './types/inputCellProps.types';
import { StyledInputProps } from './types/styledInputProps.types';
import { ValueInputCell } from './types/valueInputCell.types';

const StyledTd = styled('td')(() => ({
  textAlign: 'left',
}));

const StyledInput = styled('input')<StyledInputProps>(
  ({ theme, style, sizeInputCell, isValidationError }) => ({
    display: 'table-cell',
    textAlign: 'left',
    width: `${sizeInputCell.width}px`,
    outline: 'none',
    border: 'none',
    color: theme.palette.accent.main,
    animation: isValidationError ? `changeBgColor 0.5s linear` : 'none',

    '@keyframes changeBgColor': {
      '0%': {
        backgroundColor: theme.palette.accent.main,
      },
      '100%': {
        backgroundColor: 'transparent',
      },
    },
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
  const [isValidationError, setIsValidationError] = useState(false);

  // обработать изменение поля ввода
  function handleOnChange(e: React.ChangeEvent<HTMLElement>) {
    const eventTarget = e.target as HTMLInputElement;
    const dataType = e.target.dataset.datatype;
    const newValue = eventTarget.value;

    if (dataType === 'number') {
      if (Number.isNaN(Number(newValue))) {
        if (!isValidationError) setIsValidationError(true);

        if (isValidationError) {
          setIsValidationError(false);
          setTimeout(() => {
            setIsValidationError(true);
          }, 0); // немедленно перезапускаем анимацию
        }
        return;
      }
    }

    setIsValidationError(false);
    setValueInputCell((prevState: ValueInputCell) => ({
      ...prevState,
      new: newValue,
    }));
  }

  // обработать потерю фокуса поля ввода
  function handleOnBlur() {
    setValueInputCell({ start: valueInputCell.start, new: valueInputCell.new });
    setIsValidationError(false);
    setWasDoubleClickByCell(false);
    resetStatesByDefault();
  }

  function handleAnimationEnd() {
    if (isValidationError) setIsValidationError(false);
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
        isValidationError={isValidationError}
        onAnimationEnd={handleAnimationEnd}
      />
    </StyledTd>
  );
}

export default InputCell;
