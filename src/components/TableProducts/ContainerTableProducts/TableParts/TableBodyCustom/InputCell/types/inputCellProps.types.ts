import { Dispatch, SetStateAction } from 'react';

import { ParamsInputCell } from './paramsInputCell.types';
import { SizeInputCell } from './sizeInputCell.types';
import { ValueInputCell } from './valueInputCell.types';

export interface InputCellProps {
  autoFocus: boolean;
  // defaultValue: string;
  valueInputCell: ValueInputCell;
  paramsInputCell: ParamsInputCell;
  sizeInputCell: SizeInputCell;
  resetStatesByDefault: () => void;
  style?: {
    [key: string]: string;
  };
  setValueInputCell: Dispatch<SetStateAction<ValueInputCell>>;
  setWasDoubleClickByCell: Dispatch<boolean>;
  dataType: string;
}
