import { Dispatch, SetStateAction } from 'react';

import { Data } from '../../../../../../data/types/dataProduct.types';
import { DataProducts } from '../../../../types/dataProducts.types';
import { ValueInputCell } from '../InputCell/types/valueInputCell.types';

export interface TableBodyCustomProps {
  selected: number[];
  dataProducts: Data[];
  isDraggingFakeScroll: boolean;
  wasDoubleClickByCell: boolean;
  valueInputCell: ValueInputCell;
  setWasDoubleClickByCell: Dispatch<boolean>;
  setDataProducts: Dispatch<SetStateAction<DataProducts>>;
  setValueInputCell: Dispatch<SetStateAction<ValueInputCell>>;
  handleClick: (event: React.MouseEvent, id: number) => void;
}
