import { TableHead, TableSortLabel } from '@mui/material';

import { Data } from '../../../../../data/types/dataProduct.types';
import sortColumn from '../../../../../helpers/sortColumn';
import TableCell from '../styled/StyledTableCell';
import TableRow from '../styled/StyledTableRow';
import { HeadCell } from './types/headCell.types';
import { TableHeadCustomProps } from './types/tableHeadCustomProps.types';

const headCells: readonly HeadCell[] = [
  {
    dataType: 'number',
    id: 'barcode',
    label: 'Баркод',
  },

  {
    dataType: 'string',
    id: 'product_brand',
    label: 'Бренд',
  },

  {
    dataType: 'string',
    id: 'product_name',
    label: 'Название товара',
  },

  {
    dataType: 'number',
    id: 'product_quantity',
    label: 'Кол-во товара',
  },

  {
    dataType: 'number',
    id: 'price',
    label: 'Цена',
  },
];

function TableHeadCustom({
  order,
  setOrder,
  setDataProducts,
}: TableHeadCustomProps) {
  // обработать сортировку
  function handleSort(e: React.MouseEvent) {
    const targetCell = e.currentTarget as HTMLElement;
    const parentElement = targetCell.parentElement;

    if (parentElement) {
      const columnId = parentElement.dataset.id as keyof Data;
      const columnType = parentElement.dataset.type;

      if (columnType) {
        sortColumn({ columnId, columnType, order, setDataProducts });
      }

      setOrder((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
    }
  }

  return (
    <TableHead id='tableHeadProducts'>
      <TableRow>
        {headCells.map((headCell, id) => {
          return (
            <TableCell
              key={headCell.id}
              data-id={headCell.id}
              data-type={headCell.dataType}
              position='sticky'
            >
              <TableSortLabel
                direction={order}
                onClick={handleSort}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}

export default TableHeadCustom;

export { headCells };
