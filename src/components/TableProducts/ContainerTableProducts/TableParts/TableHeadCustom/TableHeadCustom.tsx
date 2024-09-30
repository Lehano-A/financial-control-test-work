import { Box, TableHead, TableSortLabel } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

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
    id: 'productBrand',
    label: 'Бренд',
  },
  {
    dataType: 'string',
    id: 'productName',
    label: 'Название товара',
  },

  {
    dataType: 'number',
    id: 'productQuantity',
    label: 'Кол-во товара',
  },
  {
    dataType: 'number',
    id: 'price',
    label: 'Цена',
  },
];

function TableHeadCustom(props: TableHeadCustomProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: string) => (event: React.MouseEvent) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead id='tableHeadProducts'>
      <TableRow>
        {/* <TableCell padding='checkbox'> */}
        {/* <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          /> */}
        {/* </TableCell> */}
        {headCells.map((headCell, id) => (
          <TableCell
            key={id}
            data-type={headCell.dataType}
            // align={headCell.numeric ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box
                  component='span'
                  sx={visuallyHidden}
                >
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default TableHeadCustom;

export { headCells };
