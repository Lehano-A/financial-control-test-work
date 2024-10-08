import { TableBodyCustomProps } from '../../types/tableBodyCustomProps.types';
import { ValueInputCell } from './valueInputCell.types';

export interface InputCellProps {
  style?: {
    [key: string]: string;
  };
  dataType: string;
  valueInputCell: ValueInputCell;
  setValueInputCell: TableBodyCustomProps['setValueInputCell'];
  setWasDoubleClickByCell: TableBodyCustomProps['setWasDoubleClickByCell'];
  resetStatesByDefault: () => void;
}
