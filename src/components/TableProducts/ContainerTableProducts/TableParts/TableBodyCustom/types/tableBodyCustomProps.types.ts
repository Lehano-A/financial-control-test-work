import { Data } from '../../../../types/data.types';

export interface TableBodyCustomProps {
  dataProducts: Data[];
  selected: number[];
  handleClick: (event: React.MouseEvent, id: number) => void;
  changeTableData: (newData: Data[]) => void;
}
