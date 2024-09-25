import { styled } from '@mui/material/';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

import api from '../../api/api';
import Preloader from '../Preloader/Preloader';
import ContainerTableProducts from './ContainerTableProducts/ContainerTableProducts';
import { Data } from './types/data.types';

const CommonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  position: 'relative',
  padding: '15px 5px 10px 15px',
  backgroundColor: theme.palette.common.white,

  '& #tc::-webkit-scrollbar': {
    height: 0,
    width: 0,
  },
}));

export default function TableProducts() {
  const [dataProducts, setDataProducts] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .getProductData()
      .then((res) => setDataProducts(res.data))
      .finally(() => setIsLoading(false));
  }, []);

  function changeTableData(newData: Data[]) {
    setDataProducts(newData);
  }

  return (
    <>
      <CommonBox>
        {isLoading ? (
          <Preloader />
        ) : !isLoading && dataProducts.length === 0 ? (
          <p>Нет табличных данных</p>
        ) : (
          !isLoading &&
          dataProducts.length > 0 && (
            <ContainerTableProducts
              dataProducts={dataProducts}
              changeTableData={changeTableData}
            />
          )
        )}
      </CommonBox>
    </>
  );
}
