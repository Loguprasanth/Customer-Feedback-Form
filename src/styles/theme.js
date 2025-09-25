// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0891b2', // your brand color
    },
    secondary: {
      main: '#06b6d4', // optional lighter accent (from Tailwind cyan-400)
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
});

export default theme;
