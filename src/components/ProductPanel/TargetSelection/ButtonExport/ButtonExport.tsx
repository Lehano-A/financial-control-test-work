import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Button as MuiButton, styled } from '@mui/material';
import { useRef } from 'react';

import { keyStorageDataProducts } from '../../../../constants/constants';
import useLocalStorageDataTable from '../../../../hooks/useLocalStorageDataTable';
import buttonActionMixin from '../../../../mixins/buttonActionMixin';

const Link = styled('a')(() => ({
  display: 'inline-block',
}));

const Button = styled(MuiButton)(({ theme }) => ({
  ...buttonActionMixin(),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: '10px 12px',
}));

function ButtonExport() {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const storage = useLocalStorageDataTable();

  function handleOnClick() {
    const dataProductsFormStorage = storage.get(keyStorageDataProducts);

    const fileData = JSON.stringify(dataProductsFormStorage);

    const blob = new Blob([fileData], { type: 'application/json' }); // создаём Blob из строчных данных продуктов
    const url = URL.createObjectURL(blob); // создаём временную ссылку

    if (linkRef.current) {
      linkRef.current.href = url;
    }
  }

  function handleOnMouseDown() {
    // очищаем временну ссылку
    if (linkRef.current) URL.revokeObjectURL(linkRef.current.href);
  }

  return (
    <Link
      ref={linkRef}
      download='dataProducts.json'
      onClick={handleOnClick}
      onMouseDown={handleOnMouseDown}
      href='#'
      target='_blank'
    >
      <Button>
        <UploadFileIcon />
        Экспорт
      </Button>
    </Link>
  );
}

export default ButtonExport;
