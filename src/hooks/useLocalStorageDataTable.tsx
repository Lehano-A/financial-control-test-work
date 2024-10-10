import { Data } from '../dataProducts/types/dataProduct.types';

function useLocalStorageDataTable() {
  return {
    get(key: string) {
      const data = localStorage.getItem(key);

      if (data) {
        return JSON.parse(data);
      }
    },

    add(key: string, data: Data[]) {
      localStorage.setItem(key, JSON.stringify(data));
    },

    checkFor(key: string) {
      return localStorage.getItem(key);
    },

    update(key: string, data: Data[]) {
      this.add(key, data);
    },
  };
}

export default useLocalStorageDataTable;
