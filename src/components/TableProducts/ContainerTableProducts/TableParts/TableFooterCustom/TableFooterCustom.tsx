import { TableFooter as MuiTableFooter, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { Data } from '../../../../../data/types/dataProduct.types';
import TableCellCustom from '../TableCellCustom/TableCellCustom';
import StyledTableCell from '../styled/StyledTableCell';
import StyledTableRow from '../styled/StyledTableRow';
import { TableFooterCustomProps } from './types/tableFooterCustomProps.types';

const TableFooter = styled(MuiTableFooter)(() => ({
  position: 'sticky',
  bottom: 0,
  left: 0,
  width: '100%',
}));

const TableRow = styled(StyledTableRow)(() => ({
  width: '100%',
}));

const TotalTableCell = styled(StyledTableCell)(() => ({
  fontSize: '11px',
  paddingLeft: '16px',
  fontWeight: 800,
  backgroundColor: 'transparent',
}));

function TableFooterCustom({ dataProducts }: TableFooterCustomProps) {
  const [calcedSum, setCalcedSum] = useState<{
    price: string;
    product_quantity: string;
  } | null>(null);

  // когда меняются значения в данных, то осуществляем пересчёт
  useEffect(() => {
    sumNumColumn();
  }, [dataProducts]);

  // суммировать числовую колонку
  function sumNumColumn() {
    const sum: { price: string; product_quantity: string } =
      dataProducts.reduce(
        (accum, item) => {
          return {
            price: String(BigInt(accum.price) + BigInt(item.price)),
            product_quantity: String(
              BigInt(accum.product_quantity) + BigInt(item.product_quantity),
            ),
          };
        },
        { price: '0', product_quantity: '0' },
      );

    sum.price = String(sum.price);
    sum['product_quantity'] = String(sum['product_quantity']);

    setCalcedSum(sum);
  }

  return (
    <TableFooter id='tableFooterDataProducts'>
      <TableRow>
        <TotalTableCell
          as='th'
          variant='footer'
        >
          Итого:
        </TotalTableCell>
        {Object.keys(dataProducts[0])
          .slice(2)
          .map((key) => {
            let value;
            const cellName = key as keyof Data;

            if (
              calcedSum !== null &&
              (cellName === 'product_quantity' || cellName === 'price')
            ) {
              value = calcedSum[cellName];
            }

            return (
              <TableCellCustom
                key={key}
                cellName={cellName}
              >
                {value}
              </TableCellCustom>
            );
          })}
      </TableRow>
    </TableFooter>
  );
}

export default TableFooterCustom;
