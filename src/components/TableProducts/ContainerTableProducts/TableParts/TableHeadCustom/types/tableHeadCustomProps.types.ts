export type Order = 'asc' | 'desc';

export interface TableHeadCustomProps {
  onRequestSort: (event: React.MouseEvent, property: string) => void;
  order: Order;
  orderBy: string;
}
