import { Dispatch } from 'react';

import { Data } from '../../../../../../data/types/dataProduct.types';

export interface TableBodyCustomProps {
  dataProducts: Data[];
  selected: number[];
  handleClick: (event: React.MouseEvent, id: number) => void;
  setDataProducts: Dispatch<Data[]>;
}
