import { Dispatch, SetStateAction } from 'react';

import { Data } from '../../../../../types/data.types';
import { ParamsInputCell } from './paramsInputCell.types';
import { SizeInputCell } from './sizeInputCell.types';
import { ValueInputCell } from './valueInputCell.types';

export interface InputCellProps {
  autoFocus: boolean;
  defaultValue: string;
  dataProducts: Data[];
  valueInputCell: ValueInputCell;
  paramsInputCell: ParamsInputCell;
  sizeInputCell: SizeInputCell;
  resetStatesByDefault: () => void;
  style?: {
    [key: string]: string;
  };
  setValueInputCell: Dispatch<SetStateAction<{ start: string; new: string }>>;
  changeTableData: (newData: Data[]) => void;
  setWasDoubleClickByCell: Dispatch<boolean>;
}
