import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Button as MuiButton, styled } from '@mui/material';

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
