import axios, { AxiosResponse } from 'axios';

interface Api {
  baseUrl: string;
  getProductData: () => Promise<any>;
}
const api: Api = {
  baseUrl: 'http://localhost:3001',
  getProductData: function () {
    return axios
      .get(`${this.baseUrl}/data/products`)
      .then((res) => {
        return res;
      })
      .catch((err) => console.log('ERR', err));
  },
};

export default api;
