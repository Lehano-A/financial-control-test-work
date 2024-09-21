import { Box, TableHead, TableSortLabel } from '@mui/material';

import { visuallyHidden } from '@mui/utils';
import TableCell from '../styled/StyledTableCell';
import TableRow from '../styled/StyledTableRow';
import { HeadCell } from './types/headCell.types';
import { TableHeadCustomProps } from './types/tableHeadCustomProps.types';

function TableHeadCustom(props: TableHeadCustomProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: string) => (event: React.MouseEvent) => {
    onRequestSort(event, property);
  };

  const headCells: readonly HeadCell[] = [
    {
      id: 'barcode',
      numeric: false,
      disablePadding: false,
      label: 'Баркод',
    },
    {
      id: 'productBrand',
      numeric: true,
      disablePadding: false,
      label: 'Бренд',
    },
    {
      id: 'productName',
      numeric: true,
      disablePadding: false,
      label: 'Название товара',
    },

    {
      id: 'productQuantity',
      numeric: true,
      disablePadding: false,
      label: 'Кол-во товара',
    },
    {
      id: 'price',
      numeric: true,
      disablePadding: false,
      label: 'Цена',
    },
  ];

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
            // align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
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
