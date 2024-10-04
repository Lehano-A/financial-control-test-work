import { Dispatch, SetStateAction } from 'react';

import { Data } from '../../../../data/types/dataProduct.types';
import { DataProducts } from '../../types/dataProducts.types';

export interface ContainerTableProductsProps {
  dataProducts: Data[];
  setDataProducts: Dispatch<SetStateAction<DataProducts>>;
}
