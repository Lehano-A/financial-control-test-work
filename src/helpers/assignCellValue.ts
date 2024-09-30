import { Data } from '../data/types/dataProduct.types';

function assignCellValue<T extends keyof Data>(
  item: Data,
  key: T,
  value: string | number,
): void {
  item[key] = value as any;
}

export default assignCellValue;
