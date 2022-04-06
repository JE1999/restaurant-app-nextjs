import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const PRIMARY_COLOR = '#E5E5E5';
const SECONDARY_COLOR = '#FF7A00';

const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

if (typeof window !== 'undefined') {
  // @ts-ignore
  window.theme = theme;
}

export default theme;
