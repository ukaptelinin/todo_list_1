import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import { darkTheme, lightTheme } from '../Components/Themes/Themes';
import { Theme } from '@mui/material';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const TodosThemeStateContext = createContext<ITodosThemeContext>({
    todoTheme: 'LIGHT',
    toggleTheme: (type: TodoThemeType): void => {},
    choiceTheme: (type: TodoThemeType): any => {},
});
/* eslint-enable @typescript-eslint/no-unused-vars */

export type TodoThemeType = 'SYSTEM' | 'LIGHT' | 'DARK';

interface ITodosThemeContext {
    todoTheme: TodoThemeType;
    toggleTheme: (type: TodoThemeType) => void;
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

    const toggleTheme = (theme: TodoThemeType): void => {
        setTodoTheme(theme);
    };

    const choiceTheme = (todoTheme: TodoThemeType): Theme => {
        console.log('Функция запущена!');
        const getPreferredTheme = (): string => {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            } else {
                return 'light';
            }
        };

        const systemTheme =
            getPreferredTheme() === 'dark' ? darkTheme : lightTheme;
        console.log(`Системная тема:${systemTheme}`);

        const theme =
            todoTheme === 'SYSTEM'
                ? systemTheme
                : todoTheme === 'DARK'
                  ? darkTheme
                  : lightTheme;
        return theme;
    };

    return (
        <TodosThemeStateContext.Provider
            value={{
                todoTheme,
                toggleTheme,
                choiceTheme,
            }}
        >
            {children}
        </TodosThemeStateContext.Provider>
    );
};

export default TodoThemeContextProvider;
