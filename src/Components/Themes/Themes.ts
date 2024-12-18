import createTheme from '@mui/material/styles/createTheme';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

export const systemDarkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export const darkTheme = createTheme({
    palette: {
        background: {
            default: '#121212',
        },
    },
    components: {
        MuiList: {
            styleOverrides: {
                root: {
                    // Применение стилей к кнопке с классом KlassName
                    '&.DarkColor': {
                        backgroundColor: '#00BFFF',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    // Применение стилей к кнопке с классом KlassName
                    '&.DarkColor': {
                        backgroundColor: '#00BFFF',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    // Применение стилей к кнопке с классом KlassName
                    '&.DarkColor': {
                        backgroundColor: '#00BFFF',
                    },
                },
            },
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    // Применение стилей к кнопке с классом KlassName
                    '&.DarkColor': {
                        color: 'white',
                        backgroundColor: '#00BFFF',
                    },
                },
            },
        },

        MuiToggleButton: {
            styleOverrides: {
                root: {
                    // Применение стилей к кнопке с классом KlassName
                    '&.DarkColor': {
                        color: 'white',
                        backgroundColor: 'black',
                    },
                },
            },
        },
    },
});
