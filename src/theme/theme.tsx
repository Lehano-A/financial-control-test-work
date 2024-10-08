import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { GlobalStyles } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const palette = {
  primary: {
    main: '#171d2d',
    shades: {
      300: '#c8cbe8',
      500: '#929dc0',
      600: '#686e8f',
      800: '#292f46',
    },
  },

  secondary: { main: '#297fff', light: '#eef5ff' },
  accent: { main: '#ff6b19', light: '#fff8f4' },
  bg: { main: '#eff1f3' },

  shades: {
    grey: {
      200: '#fafafa',
      300: '#f8f8fa',
      400: '#eff1f3',
      500: '#e7eae9',
      600: '#dddddd',
      700: '#c9c9c9',
      800: '#acacac',
    },
  },

  text: {
    primary: '#161620',
    secondary: '#585858',
  },
};

const customVariables = {
  borderRadiusMain: 20,
  borderRadiusSpan: 5,
};

const theme = createTheme({
  palette,

  typography: {
    fontFamily: `"Roboto", sans-serif`,
  },

  customVariables,

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
        root: {
          textTransform: 'none',
          borderRadius: customVariables.borderRadiusMain,
        },
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
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: theme.palette.shades.grey[400],

        '& > :nth-of-type(1n)': {
          marginTop: '15px',
        },
      },

      'div, section, button': {
        borderRadius: theme.customVariables.borderRadiusMain,
      },

      'h1, h2, dl, dd': {
        margin: 0,
      },
    })}
  />
);

export default theme;
export { globalStyles };
