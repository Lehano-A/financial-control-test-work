import { Dispatch, SetStateAction } from 'react';

import { Data } from '../../../../../../data/types/dataProduct.types';
import { ValueInputCell } from '../InputCell/types/valueInputCell.types';

export interface TableBodyCustomProps {
  dataProducts: Data[];
  selected: number[];
  isDraggingFakeScroll: boolean;
  setDataProducts: Dispatch<Data[]>;
  wasDoubleClickByCell: boolean;
  setWasDoubleClickByCell: Dispatch<boolean>;
  valueInputCell: ValueInputCell;
  setValueInputCell: Dispatch<SetStateAction<ValueInputCell>>;
  handleClick: (event: React.MouseEvent, id: number) => void;
}
