import { FC, useContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from '../../TodosThemeContextProvider/context';

import CssBaseline from '@mui/material/CssBaseline/CssBaseline';

import App from '../../App';

const RootComponent: FC = () => {
    const { todoTheme } = useContext(ThemeContext);

    return (
        <ThemeProvider theme={todoTheme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    );
};

export default RootComponent;
