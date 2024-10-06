import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    primary: '#005CAF',
    textPrimary: '#524E5A',
    textSecondary: '#9B9DB0',
    background: '#F9F9F9',
    backgroundLight: '#FDFDFD',
    border: '#EBE8EE',
    white: '#FFFFFF',
    error: '#EC4B4B',
    zenn: '#3EA8FF',
    note: '#248F76',
  },
  font: {
    poppins: 'Poppins, sans-serif',
    notoSansJp: 'Noto Sans JP, sans-serif',
    inter: 'Inter, sans-serif',
  },
});
