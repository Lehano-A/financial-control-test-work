import { SortColumn } from '../components/TableProducts/ContainerTableProducts/TableParts/TableHeadCustom/types/sortColumn.types';
import { DataProducts } from '../components/TableProducts/types/dataProducts.types';
import { Data } from '../data/types/dataProduct.types';
import compareValues from './compareValues';

function sortColumn({
  columnId,
  columnType,
  order,
  setDataProducts,
}: SortColumn) {
  setDataProducts((data: DataProducts) => {
    if (data) {
      const sorted = [...data].sort((a: Data, b: Data) => {
        const valueA =
          columnType === 'string' ? a[columnId] : BigInt(a[columnId]);
        const valueB =
          columnType === 'string' ? b[columnId] : BigInt(b[columnId]);

        if (order === 'asc') {
          // сортируем начиная с мининимума
          return compareValues(valueA, valueB);
        } else if (order === 'desc') {
          // сортируем начиная с максимума
          return compareValues(valueB, valueA);
        }

        return 0;
      });

      return sorted;
    }

    return data;
  });
}

export default sortColumn;
