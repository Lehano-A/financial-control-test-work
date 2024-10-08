import { styled } from '@mui/material';
import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';

import validateValue from '../../../../../../helpers/validateValue';
import { InputCellProps } from './types/inputCellProps.types';
import { StyledInputProps } from './types/styledInputProps.types';
import { ValueInputCell } from './types/valueInputCell.types';

const StyledInput = styled('textarea')<StyledInputProps>(({
  theme,
  style,
  isValidationError,
}) => {
  return {
    resize: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    maxWidth: '600px',
    textAlign: 'left',
    outline: 'none',
    border: 'none',
    color: theme.palette.accent.main,
    animation: isValidationError ? `changeBgColor 0.5s linear` : 'none',
    backgroundColor: theme.palette.accent.light,
    zIndex: 1,

    '@keyframes changeBgColor': {
      '0%': {
        backgroundColor: theme.palette.accent.main,
      },
      '100%': {
        backgroundColor: 'transparent',
      },
    },
    ...style, // стили получаемые от ячейки
  };
});

function InputCell({
  style,
  dataType,
  valueInputCell,
  setValueInputCell,
  setWasDoubleClickByCell,
  resetStatesByDefault,
}: InputCellProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [isValidationError, setIsValidationError] = useState(false);
  const [currentValue, setCurrentValue] = useState(valueInputCell.start);
  const [inputFinished, setInputFinished] = useState(false);

  useEffect(() => {
    if (inputFinished) {
      // если завершили ввод (через 'Enter')
      setWasDoubleClickByCell(false);
    }
  }, [inputFinished]);

  useEffect(() => {
    const textarea = inputRef.current;

    if (textarea && currentValue) {
      const lengthCurrentValue = String(currentValue).length;

      textarea.focus();
      textarea.setSelectionRange(lengthCurrentValue, lengthCurrentValue); // устанавливаем каретку в конец строки (без этого - устаналивается в самое начало строки)
    }
  }, []);

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
    setCurrentValue(newValue);
  }

  // обработать потерю фокуса поля ввода
  function handleOnBlur() {
    setIsValidationError(false);
    setWasDoubleClickByCell(false);
    resetStatesByDefault();
  }

  // обработать завершение анимации
  function handleAnimationEnd() {
    if (isValidationError) setIsValidationError(false);
  }

  // обработать нажатие "Enter"
  function handleOnKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();

      setInputFinished(true);
      setValueInputCell((prevState: ValueInputCell) => ({
        ...prevState,
        new: currentValue,
      }));
    }
  }

  return (
    <StyledInput
      spellCheck={false}
      ref={inputRef}
      style={style}
      value={currentValue}
      data-datatype={dataType}
      isValidationError={isValidationError}
      onBlur={handleOnBlur}
      onChange={handleOnChange}
      onKeyDown={handleOnKeyDown}
      onAnimationEnd={handleAnimationEnd}
    />
  );
}

export default InputCell;
