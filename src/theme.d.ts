import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    shades?: {
      [key: number]: string;
    };
  }

  interface Palette {
    primary: PaletteColor & {
      shades?: {
        [key: number]: string;
      };
    };
  }

  interface Theme {
    palette?: PaletteOptions;

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
