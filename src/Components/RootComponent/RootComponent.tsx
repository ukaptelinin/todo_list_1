import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { FC } from 'react';
import useTodosStore from '../../Hooks/useTodosStore';
import { darkTheme, lightTheme, systemDarkTheme } from '../Themes/Themes';
import TodosStateContext from '../TodosStateContext/TodosStateContext';
import App from '../../App';
import { observer } from 'mobx-react-lite';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';

const RootComponent: FC = () => {
    const todosStore = useTodosStore();

    const getPreferredTheme = () => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        } else {
            return 'light';
        }
    };

    const systemTheme =
        getPreferredTheme() === 'dark' ? systemDarkTheme : lightTheme;

    const theme =
        todosStore.currentTheme === 'SYSTEM'
            ? systemTheme
            : todosStore.currentTheme === 'DARK'
              ? darkTheme
              : lightTheme;

    return (
        <TodosStateContext.Provider value={todosStore}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </TodosStateContext.Provider>
    );
};

export default observer(RootComponent);
