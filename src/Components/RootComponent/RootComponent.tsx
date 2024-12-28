import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { FC, useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import TodoThemeContextProvider, {
    TodosThemeStateContext,
} from '../../TodosThemeContextProvider/context';
import App from '../../App';

const RootComponent: FC = () => {
    const { todoTheme, choiceTheme } = useContext(TodosThemeStateContext);
    const theme = choiceTheme(todoTheme);
    console.log(`Тип темы:${todoTheme}`);
    console.log(`Тема:${theme}`);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    );
};

export default RootComponent;
