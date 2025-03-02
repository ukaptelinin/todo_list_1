import { FC, useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import { ThemeContext } from '../../TodosThemeContextProvider/context';
import App from '../../App';
import { ThemeProvider } from '@mui/material/styles';

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
