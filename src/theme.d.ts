import '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Theme {
    customVariables: {
      borderRadiusMain: number;
      borderRadiusSpan: number;
    };
  }

  interface ThemeOptions {
    customVariables?: {
      borderRadiusMain?: number;
      borderRadiusSpan?: number;
    };
  }
}
