import { Dispatch, SetStateAction } from 'react';

interface ValidateValue {
  isValidationError: boolean;
  setIsValidationError: Dispatch<SetStateAction<boolean>>;
}

// валидировать значение (при редактировании табличной ячейки)
function validateValue({
  isValidationError,
  setIsValidationError,
}: ValidateValue) {
  if (!isValidationError) {
    return setIsValidationError(true);
  }

  if (isValidationError) {
    setIsValidationError(false);
    setTimeout(() => {
      setIsValidationError(true);
    }, 0); // немедленно перезапускаем анимацию
    return;
  }
}

export default validateValue;
