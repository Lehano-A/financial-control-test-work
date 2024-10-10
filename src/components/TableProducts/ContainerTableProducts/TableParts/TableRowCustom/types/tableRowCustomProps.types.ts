import { Data } from '../../../../../../dataProducts/types/dataProduct.types';
import { ParamsInputCell } from '../../TableBodyCustom/InputCell/types/paramsInputCell.types';
import { TableBodyCustomProps } from '../../TableBodyCustom/types/tableBodyCustomProps.types';

export interface TableRowCustomProps {
  currentRow: Data;
  paramsInputCell: ParamsInputCell;
  valueInputCell: TableBodyCustomProps['valueInputCell'];
  setValueInputCell: TableBodyCustomProps['setValueInputCell'];
  wasDoubleClickByCell: TableBodyCustomProps['wasDoubleClickByCell'];
  setWasDoubleClickByCell: TableBodyCustomProps['setWasDoubleClickByCell'];
  resetStatesByDefault: () => void;
}
