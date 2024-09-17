import React from 'react';
import { styled, Button as MuiButton } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import buttonActionMixin from '../../../../mixins/buttonActionMixin';

const Button = styled(MuiButton)(({ theme }) => ({
  ...buttonActionMixin(),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: '10px 12px',
}));

function ButtonExport() {
  return (
    <Button>
      <UploadFileIcon />
      Экспорт
    </Button>
  );
}

export default ButtonExport;
