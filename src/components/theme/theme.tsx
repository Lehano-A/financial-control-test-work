import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const palette = {
  primary: { main: '#171d2d', light: '#292f46' },
  secondary: { main: '#297fff', light: '#eef5ff' },
  accent: { main: '#ff6b19' },
  bg: { main: '#eff1f3' },
  shadesGrey: {
    200: '#fafafa',
    300: '#f8f8fa',
    400: '#eff1f3',
    500: '#e7eae9',
  },
};

const theme = createTheme({
  palette,

  typography: {
    fontFamily: `"Roboto", sans-serif`,
  },

  customVariables: {
    borderRadiusMain: 20,
    borderRadiusSpan: 5,
  },

  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: '0 10px',
          height: '50px',
          borderRadius: '8px',
          letterSpacing: '-0.5px',
        },
      },
    },
  },
});

export default theme;
