import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: { main: '#0A85C7', dark: '#0A85C7', light: '#A1E1F5' },
    secondary: { main: '#A1E1F5' },
   // tertiary: { main: '#004ECA' },
  //  neutral: { main: '#F7FBFF', light: '#F7FBFF', dark: '#02273B'},
    warning: { main: '#febb14' },
  //  alert: { main: '#F03737'},
    success: { main: '#3CC13B'},


  },
  typography: {
    fontFamily: 'Roboto',
    h1: { fontWeight: 600, fontSize: '20px', fontStyle: 'normal', color: '#0A85C7'},
    h2: { fontWeight: 500, fontSize: '18px', fontStyle: 'normal'  },
    h3: { fontWeight: 500, fontSize: '12px' },
    h6: { fontWeight: 500, fontSize: '20px', fontStyle: 'medium', color: '#02273C', letter:'0.15 px' },
    body1: { fontWeight: 400, fontSize: '16px',  fontStyle: 'regular', lineHeight: '20px', letterSpacing: '0.25px', color: '#02273C',  letter:'0.25 px' },
    body2: { fontWeight: 400, fontSize: '14px',  fontStyle: 'normal', lineHeight: '20px', letterSpacing: '0.4px', color: '#02273C'},
    button: {
      textTransform: 'none',
    },
  },
  shape: { borderRadius: 0 },
});

export default theme;
