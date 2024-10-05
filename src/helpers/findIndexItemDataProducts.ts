import { Data } from '../data/types/dataProduct.types';

function findIndexItemDataProducts(data: any[], rowId: string | number) {
  return data.findIndex((item: Data) => item.id.toString() === rowId);
}

export default findIndexItemDataProducts;
