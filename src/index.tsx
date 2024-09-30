import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';
import theme, { globalStyles } from './theme/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
