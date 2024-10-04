import { styled } from '@mui/material';
import React, { useRef, useState } from 'react';

import getBorderStyleTableCell from '../../../../../../helpers/getBorderStyleTableCell';
import validateValue from '../../../../../../helpers/validateValue';
import { InputCellProps } from './types/inputCellProps.types';
import { StyledInputProps } from './types/styledInputProps.types';
import { ValueInputCell } from './types/valueInputCell.types';

const StyledTd = styled('td')(({ theme }) => {
  const border = getBorderStyleTableCell(theme.palette.common.white);

  return {
    textAlign: 'left',
    borderRight: border,
    borderBottom: border,
  };
});

const StyledInput = styled('input')<StyledInputProps>(({
  theme,
  style,
  isValidationError,
}) => {
  return {
    textAlign: 'left',
    outline: 'none',
    border: 'none',
    color: theme.palette.accent.main,
    animation: isValidationError ? `changeBgColor 0.5s linear` : 'none',
    backgroundColor: 'transparent',

    '@keyframes changeBgColor': {
      '0%': {
        backgroundColor: theme.palette.accent.main,
      },
      '100%': {
        backgroundColor: 'transparent',
      },
    },
    ...style,
  };
});

function InputCell({
  autoFocus,
  style,
  setValueInputCell,
  valueInputCell,
  isDraggingFakeScroll,
  setWasDoubleClickByCell,
  resetStatesByDefault,
  dataType,
}: InputCellProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isValidationError, setIsValidationError] = useState(false);

  // обработать изменение поля ввода
  function handleOnChange(e: React.ChangeEvent<HTMLElement>) {
    const eventTarget = e.target as HTMLInputElement;
    const dataType = e.target.dataset.datatype;
    const newValue = eventTarget.value;

    if (dataType === 'number') {
      if (Number.isNaN(Number(newValue))) {
        return validateValue({ isValidationError, setIsValidationError });
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
    // если нет перетаскивания скролла
    if (!isDraggingFakeScroll) {
      setValueInputCell({
        start: valueInputCell.start,
        new: valueInputCell.new,
      });
      setIsValidationError(false);
      setWasDoubleClickByCell(false);
      resetStatesByDefault();
      return;
    }

    // если есть перетаскивание, тогда фокусируемся на инпуте
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  // обработать завершение анимации
  function handleAnimationEnd() {
    if (isValidationError) setIsValidationError(false);
  }

  return (
    <StyledTd>
      <StyledInput
        ref={inputRef}
        size={String(valueInputCell.new).length}
        autoFocus={autoFocus}
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
