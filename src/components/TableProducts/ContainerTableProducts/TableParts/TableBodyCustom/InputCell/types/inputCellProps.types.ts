import { Dispatch, SetStateAction } from 'react';

import { ParamsInputCell } from './paramsInputCell.types';
import { ValueInputCell } from './valueInputCell.types';

export interface InputCellProps {
  style?: {
    [key: string]: string;
  };
  dataType: string;
  autoFocus: boolean;
  valueInputCell: ValueInputCell;
  paramsInputCell: ParamsInputCell;
  isDraggingFakeScroll: boolean;
  setValueInputCell: Dispatch<SetStateAction<ValueInputCell>>;
  setWasDoubleClickByCell: Dispatch<boolean>;
  resetStatesByDefault: () => void;
}
