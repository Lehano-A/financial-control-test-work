import { styled, useTheme } from '@mui/material/';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import * as React from 'react';

import FakeScroll from '../FakeScroll/FakeScroll';
import TableBodyCustom from './TableParts/TableBodyCustom/TableBodyCustom';
import TableHeadCustom from './TableParts/TableHeadCustom/TableHeadCustom';
import { Order } from './TableParts/TableHeadCustom/types/tableHeadCustomProps.types';

const CommonBox = styled(Box)(({ theme }) => ({
  maxWidth: '500px',
  position: 'relative',
  padding: '15px 5px 10px 15px',
  backgroundColor: theme.palette.common.white,

  '& #tc::-webkit-scrollbar': {
    height: 0,
    width: 0,
  },
}));

export default function TableProducts() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState<number[]>([]);

  const handleClick = (event: React.MouseEvent, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  const [isDraggingFakeScroll, setIsDraggingFakeScroll] = React.useState(false);

  const theme = useTheme();

  const [isDisplayedFakeScroll, setIsDisplayedFakeScroll] =
    React.useState(false);

  React.useEffect(() => {
    if (tableContainerRef) {
      setIsDisplayedFakeScroll(true);
    }
  }, [tableContainerRef]);

  return (
    <CommonBox>
      {isDisplayedFakeScroll && (
        <FakeScroll
          typeScroll='horizontal'
          mainBoxWithRealScrollRef={tableContainerRef}
          setIsDraggingFakeScroll={setIsDraggingFakeScroll}
          style={{
            thumb: {
              size: { height: '10px' },
              custom: {
                backgroundColor: theme.palette.secondary.main,
              },
            },
            track: {
              size: { height: '10px', width: '80%' },
              custom: {
                position: 'absolute',
                top: '10px',
                left: '15px',
                backgroundColor: theme.palette.bg.main,
              },
            },
          }}
        />
      )}

      {isDisplayedFakeScroll && (
        <FakeScroll
          typeScroll='vertical'
          mainBoxWithRealScrollRef={tableContainerRef}
          setIsDraggingFakeScroll={setIsDraggingFakeScroll}
          style={{
            thumb: {
              size: {
                width: '10px',
              },
              custom: {
                backgroundColor: theme.palette.secondary.main,
              },
            },
            track: {
              size: {
                height: '60%',
                width: '10px',
              },
              custom: {
                position: 'absolute',
                top: '70px',
                right: '5px',
                backgroundColor: theme.palette.common.white,
              },
            },
          }}
        />
      )}
      <TableContainer
        ref={tableContainerRef}
        id='tc'
        sx={{
          maxHeight: '400px',
          userSelect: isDraggingFakeScroll ? 'none' : 'auto',
        }}
        className='scroll-wrapper'
      >
        <Table
          id='tableProduct'
          aria-label='sticky table'
          stickyHeader
          sx={{ paddingTop: '5px' }}
        >
          <TableHeadCustom
            order={order}
            orderBy={orderBy}
            onRequestSort={() => {}}
          />

          <TableBodyCustom
            selected={selected}
            handleClick={handleClick}
          />
        </Table>
      </TableContainer>
    </CommonBox>
  );
}
