import { styled } from '@mui/material/';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

import { keyStorageDataProducts } from '../../constants/constants';
import fileDataProducts from '../../data/dataProducts.json';
import { Data } from '../../data/types/dataProduct.types';
import useLocalStorageDataTable from '../../hooks/useLocalStorageDataTable';
import Preloader from '../Preloader/Preloader';
import ContainerTableProducts from './ContainerTableProducts/ContainerTableProducts';
import { DataProducts } from './types/dataProducts.types';
import { TableProductsProps } from './types/tableProductsProps.types';

const CommonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '1000px',
  position: 'relative',
  padding: '15px 5px 10px 15px',
  backgroundColor: theme.palette.common.white,

  '& #tableContainer::-webkit-scrollbar': {
    height: 0,
    width: 0,
  },
}));

export default function TableProducts({
  isButtonLoadPressed,
  setIsButtonLoadPressed,
}: TableProductsProps) {
  const [dataProducts, setDataProducts] = useState<DataProducts>(null);
  const [isLoading, setIsLoading] = useState(true);
  const storage = useLocalStorageDataTable();

  useEffect(() => {
    const hasDataProductsInStorage = storage.checkFor(keyStorageDataProducts);
    setIsLoading(true);

    if (hasDataProductsInStorage) {
      // есть ли данные в хранилище
      setDataProducts(storage.get(keyStorageDataProducts));
    }
  }, []);

  // инициализация табличных данных товаров
  useEffect(() => {
    const hasDataProductsInStorage = storage.checkFor(keyStorageDataProducts);

    if (isButtonLoadPressed) {
      // если кнопка "Загрузить данные" нажата
      setIsButtonLoadPressed(false);

      if (!hasDataProductsInStorage) {
        setDataProducts(fileDataProducts);
        storage.add(keyStorageDataProducts, fileDataProducts);
      }

      if (hasDataProductsInStorage) {
        setDataProducts(storage.get(keyStorageDataProducts));
      }
    }
  }, [isButtonLoadPressed]);

  useEffect(() => {
    if (isLoading) setIsLoading(false);
  }, [dataProducts]);

  return (
    <>
      <CommonBox>
        {isLoading ? (
          <Preloader />
        ) : !isLoading &&
          (dataProducts === null || dataProducts?.length === 0) ? (
          <p>Нет табличных данных</p>
        ) : (
          !isLoading &&
          dataProducts !== null &&
          dataProducts.length > 0 && (
            <ContainerTableProducts
              dataProducts={dataProducts}
              setDataProducts={setDataProducts}
            />
          )
        )}
      </CommonBox>
    </>
  );
}
