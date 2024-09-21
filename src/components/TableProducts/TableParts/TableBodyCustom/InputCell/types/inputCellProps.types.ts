import { Dispatch, SetStateAction } from 'react';

import { DataProduct } from '../../types/dataProduct.types';
import { ParamsInputCell } from './paramsInputCell.types';
import { SizeInputCell } from './sizeInputCell.types';
import { ValueInputCell } from './valueInputCell.types';

export interface InputCellProps {
  autoFocus: boolean;
  defaultValue: string;
  dataProducts: DataProduct[];
  valueInputCell: ValueInputCell;
  paramsInputCell: ParamsInputCell;
  sizeInputCell: SizeInputCell;
  resetStatesByDefault: () => void;
  style?: {
    [key: string]: string;
  };
  setValueInputCell: Dispatch<SetStateAction<{ start: string; new: string }>>;
  setDataProducts: Dispatch<any>;
  setWasDoubleClickByCell: Dispatch<boolean>;
}
