import { createTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const palette = {
  primary: {
    main: '#171d2d',
    shades: {
      300: '#c8cbe8',
      600: '#686e8f',
      800: '#292f46',
    },
  },

  secondary: { main: '#297fff', light: '#eef5ff' },
  accent: { main: '#ff6b19' },
  bg: { main: '#eff1f3' },

  shades: {
    grey: {
      200: '#fafafa',
      300: '#f8f8fa',
      400: '#eff1f3',
      500: '#e7eae9',
    },
  },

  text: {
    primary: '#000',
    secondary: '#585858',
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

    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none' },
      },
    },
  },
});

const globalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      html: {
        fontSize: '10px',
      },
      '#root': {
        display: 'flex',
        width: '100%',
        height: '100vh',
        backgroundColor: theme.palette.shades.grey[400],
      },

      'div, section, button': {
        borderRadius: theme.customVariables.borderRadiusMain,
      },

      h2: {
        margin: 0,
      },
      dd: {
        margin: 0,
      },
    })}
  />
);

export default theme;
export { globalStyles };
