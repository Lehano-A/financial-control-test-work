import { Dispatch, SetStateAction } from 'react';

import { DataProducts } from '../../../../types/dataProducts.types';
import { ContainerTableProductsProps } from '../../../types/containerTableProductsProps.types';
import { ValueInputCell } from '../InputCell/types/valueInputCell.types';

export interface TableBodyCustomProps {
  wasDoubleClickByCell: boolean;
  valueInputCell: ValueInputCell;
  setWasDoubleClickByCell: Dispatch<boolean>;
  dataProducts: ContainerTableProductsProps['dataProducts'];
  setDataProducts: Dispatch<SetStateAction<DataProducts>>;
  setValueInputCell: Dispatch<SetStateAction<ValueInputCell>>;
}
