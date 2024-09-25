import { Table, TableContainer, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import FakeScroll from '../../FakeScroll/FakeScroll';
import { Data } from '../types/data.types';
import TableBodyCustom from './TableParts/TableBodyCustom/TableBodyCustom';
import TableHeadCustom from './TableParts/TableHeadCustom/TableHeadCustom';
import { Order } from './TableParts/TableHeadCustom/types/tableHeadCustomProps.types';

interface ContainerTableProductsProps {
  dataProducts: Data[];
  changeTableData: (newData: Data[]) => void;
}

function ContainerTableProducts({
  dataProducts,
  changeTableData,
}: ContainerTableProductsProps) {
  const theme = useTheme();

  const tableContainerRef = useRef<HTMLDivElement>(null);

  const [isDraggingFakeScroll, setIsDraggingFakeScroll] = useState(false);
  const [isDisplayedFakeScroll, setIsDisplayedFakeScroll] = useState(false);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    if (tableContainerRef) {
      setIsDisplayedFakeScroll(true);
    }
  }, [tableContainerRef]);

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

  return (
    <>
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
            dataProducts={dataProducts}
            changeTableData={changeTableData}
            handleClick={handleClick}
          />
        </Table>
      </TableContainer>
    </>
  );
}

export default ContainerTableProducts;
