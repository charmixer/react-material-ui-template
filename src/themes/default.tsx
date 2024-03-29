import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      paper: '#191D43',
      default: '#0E0F2E',
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#2879FC',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#2879FC',
      main: '#2879FC',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
