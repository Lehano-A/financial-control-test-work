import { Theme } from '@mui/material';

const widgetMixin = (theme: Theme) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.customVariables.borderRadiusMain,
  padding: '20px 10px 10px',
  color: theme.palette.common.white,
});

export { widgetMixin };
