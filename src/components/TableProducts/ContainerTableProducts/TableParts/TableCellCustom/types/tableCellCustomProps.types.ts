import { StyledTableCellProps } from '../../styled/StyledTableCell';

export interface TableCellCustomProps {
  children: React.ReactNode;
  cellName: string;
  position?: StyledTableCellProps['position'];
  rowId?: string;
  needDisplayInputCell?: boolean;
  currentValue?: string | number;
}
