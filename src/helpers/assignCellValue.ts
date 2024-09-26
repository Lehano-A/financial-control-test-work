import { Data } from '../components/TableProducts/types/data.types';

function assignCellValue<T extends keyof Data>(
  item: Data,
  key: T,
  value: string | number,
): void {
  if (typeof item[key] === 'number') {
    item[key] = Number(value) as any; // приведение к any для обхода строгой проверки
  } else {
    item[key] = value as any; // то же самое приведение для строк
  }
}

export default assignCellValue;
