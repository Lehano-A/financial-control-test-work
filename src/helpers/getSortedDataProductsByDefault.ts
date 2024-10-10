import { DataProducts } from '../components/TableProducts/types/dataProducts.types';
import { Data } from '../dataProducts/types/dataProduct.types';
import compareValues from './compareValues';

function getSortedDataByDefault(dataProducts: DataProducts) {
  if (dataProducts) {
    return [...dataProducts].sort((a: Data, b: Data) => {
      return compareValues(a.id, b.id);
    });
  }
}

export default getSortedDataByDefault;
