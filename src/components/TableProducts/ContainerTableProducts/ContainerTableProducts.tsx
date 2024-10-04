import { Table, TableContainer, useTheme } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';

import FakeScroll from '../../FakeScroll/FakeScroll';
import { ValueInputCell } from './TableParts/TableBodyCustom/InputCell/types/valueInputCell.types';
import TableBodyCustom from './TableParts/TableBodyCustom/TableBodyCustom';
import TableFooterCustom from './TableParts/TableFooterCustom/TableFooterCustom';
import TableHeadCustom from './TableParts/TableHeadCustom/TableHeadCustom';
import { Order } from './TableParts/TableHeadCustom/types/tableHeadCustomProps.types';
import { ContainerTableProductsProps } from './types/containerTableProductsProps.types';

export const defaultValueInputCell = { start: '', new: '' };

function ContainerTableProducts({
  dataProducts,
  setDataProducts,
}: ContainerTableProductsProps) {
  const theme = useTheme();

  const tableContainerRef = useRef<HTMLDivElement>(null);

  const [valueInputCell, setValueInputCell] = useState<ValueInputCell>(
    defaultValueInputCell,
  );

  const [order, setOrder] = useState<Order>('asc');
  const [selected, setSelected] = useState<number[]>([]);
  const [wasDoubleClickByCell, setWasDoubleClickByCell] = useState(false);
  const [isDraggingFakeScroll, setIsDraggingFakeScroll] = useState(false);
  const [isDisplayedFakeScroll, setIsDisplayedFakeScroll] = useState(false);

  useEffect(() => {
    if (tableContainerRef) {
      setIsDisplayedFakeScroll(true);
    }
  }, [tableContainerRef]);

  const handleClick = useCallback(
    (event: React.MouseEvent, id: number) => {
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
    },
    [selected],
  );

  return (
    <>
      {isDisplayedFakeScroll && (
        <FakeScroll
          typeScroll='horizontal'
          forceUpdate={[wasDoubleClickByCell, valueInputCell.new]}
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
        id='tableContainer'
        sx={{
          maxHeight: '400px',
          userSelect: isDraggingFakeScroll ? 'none' : 'auto',
        }}
        className='scroll-wrapper'
      >
        <Table
          aria-label='sticky table'
          stickyHeader
        >
          <TableHeadCustom
            order={order}
            setOrder={setOrder}
            setDataProducts={setDataProducts}
          />

          <TableBodyCustom
            selected={selected}
            handleClick={handleClick}
            dataProducts={dataProducts}
            valueInputCell={valueInputCell}
            setDataProducts={setDataProducts}
            setValueInputCell={setValueInputCell}
            isDraggingFakeScroll={isDraggingFakeScroll}
            wasDoubleClickByCell={wasDoubleClickByCell}
            setWasDoubleClickByCell={setWasDoubleClickByCell}
          />

          <TableFooterCustom dataProducts={dataProducts} />
        </Table>
      </TableContainer>
    </>
  );
}

export default ContainerTableProducts;
