import createTheme from '@mui/material/styles/createTheme';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#f48fb1',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});
