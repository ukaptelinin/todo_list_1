import createTheme from '@mui/material/styles/createTheme';

import { blueGrey, grey, indigo, red, teal } from '@mui/material/colors';

declare module '@mui/material/styles' {
    interface Theme {
        custom: {
            highPriority: React.CSSProperties;
            mediumPriority: React.CSSProperties;
            lowPriority: React.CSSProperties;
            nonePriority: React.CSSProperties;
            todosCard: React.CSSProperties;
        };
    }
    interface ThemeOptions {
        custom?: {
            highPriority?: React.CSSProperties;
            mediumPriority: React.CSSProperties;
            lowPriority: React.CSSProperties;
            nonePriority: React.CSSProperties;
            todosCard: React.CSSProperties;
        };
    }
}

const h3Color = indigo[500];
const highColor = red[500];
const mediumColor = teal[500];
const lowColor = indigo[500];
const noneLightColor = grey[900];
const noneDarktColor = grey[100];
const todosCardLightColor = blueGrey[200];
const todosCardDarkColor = blueGrey[800];
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                h3: {
                    color: h3Color,
                },
            },
        },
    },
    custom: {
        highPriority: {
            color: highColor,
        },
        mediumPriority: {
            color: mediumColor,
        },
        lowPriority: {
            color: lowColor,
        },
        nonePriority: {
            color: noneLightColor,
        },
        todosCard: {
            color: todosCardLightColor,
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                h3: {
                    color: h3Color,
                },
            },
        },
    },
    custom: {
        highPriority: {
            color: highColor,
        },
        mediumPriority: {
            color: mediumColor,
        },
        lowPriority: {
            color: lowColor,
        },
        nonePriority: {
            color: noneDarktColor,
        },
        todosCard: {
            color: todosCardDarkColor,
        },
    },
});
