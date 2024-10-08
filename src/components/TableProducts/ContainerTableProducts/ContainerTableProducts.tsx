import { Table, TableContainer, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

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

  const [order, setOrder] = useState<Order>('asc');
  const [wasDoubleClickByCell, setWasDoubleClickByCell] = useState(false);
  const [isDraggingFakeScroll, setIsDraggingFakeScroll] = useState(false);
  const [isDisplayedFakeScroll, setIsDisplayedFakeScroll] = useState(false);
  const [valueInputCell, setValueInputCell] = useState<ValueInputCell>(
    defaultValueInputCell,
  );

  useEffect(() => {
    if (tableContainerRef) {
      setIsDisplayedFakeScroll(true);
    }
  }, [tableContainerRef]);

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
            dataProducts={dataProducts}
            valueInputCell={valueInputCell}
            setDataProducts={setDataProducts}
            setValueInputCell={setValueInputCell}
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
