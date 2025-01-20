import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import { darkTheme, lightTheme } from '../Components/Themes/Themes';
import { Theme } from '@mui/material';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const ThemeContext = createContext<ITodosThemeContext>({
    todoTheme: 'LIGHT',
    switchTheme: (type: TodoThemeType): void => {},
    choiceTheme: (type: TodoThemeType): any => {},
});
/* eslint-enable @typescript-eslint/no-unused-vars */

export type TodoThemeType = 'SYSTEM' | 'LIGHT' | 'DARK';

interface ITodosThemeContext {
    todoTheme: TodoThemeType;
    switchTheme: (type: TodoThemeType) => void;
    choiceTheme: (type: TodoThemeType) => Theme;
}

const getItemsFromStorage = (): TodoThemeType =>
    JSON.parse((localStorage.getItem('currentTheme') as string) || '');
const TodoThemeContextProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [todoTheme, setTodoTheme] =
        useState<TodoThemeType>(getItemsFromStorage);

    useEffect((): void => {
        localStorage.setItem('currentTheme', JSON.stringify(todoTheme));
    }, [todoTheme]);

    const switchTheme = (theme: TodoThemeType): void => {
        setTodoTheme(theme);
    };

    const choiceTheme = (todoTheme: TodoThemeType): Theme => {
        const preferredTheme = ((): string => {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            } else {
                return 'light';
            }
        })();

        let theme;

        switch (todoTheme) {
            case 'SYSTEM':
                theme = preferredTheme === 'dark' ? darkTheme : lightTheme;
                break;
            case 'DARK':
                theme = darkTheme;
                break;
            case 'LIGHT':
                theme = lightTheme;
        }

        return theme;
    };

    return (
        <ThemeContext.Provider
            value={{
                todoTheme,
                switchTheme,
                choiceTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default TodoThemeContextProvider;
