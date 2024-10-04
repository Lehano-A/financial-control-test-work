import { Dispatch } from 'react';

import { Data } from '../../../../data/types/dataProduct.types';

export interface ContainerTableProductsProps {
  dataProducts: Data[];
  setDataProducts: Dispatch<Data[]>;
}
