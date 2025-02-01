import {
    FC,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { darkTheme, lightTheme } from '../Components/Themes/Themes';
import { Theme } from '@mui/material';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const SwitchThemeContext = createContext<ITodosSwitchThemeContext>({
    themeType: { type: 'LIGHT', themeColorType: 'dark' },
    switchTheme: (type: TodoThemeType): void => {},
    toggleDarkTheme: (themeColorType: ThemeColorType): void => {},
});
/* eslint-enable @typescript-eslint/no-unused-vars */

export type TodoThemeType = 'SYSTEM' | 'LIGHT' | 'DARK';
export type ThemeColorType = 'dark' | 'light';
export type TodoThemeContextType = {
    type: TodoThemeType;
    themeColorType: ThemeColorType;
};

interface ITodosSwitchThemeContext {
    themeType: TodoThemeContextType;
    switchTheme: (type: TodoThemeType) => void;
    toggleDarkTheme: (themeColorType: ThemeColorType) => void;
}

const preferredTheme = ((): ThemeColorType => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    } else {
        return 'light';
    }
})();

const getThemeTypeFromStorage = (): TodoThemeContextType => {
    const storedTheme = localStorage.getItem('currentTypeTheme');
    if (storedTheme) {
        {
            return JSON.parse(storedTheme);
        }
    } else
        return {
            type: 'LIGHT',
            themeColorType: preferredTheme,
        };
};

export const TodoSwitchThemeContextProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [themeType, setTodoTheme] = useState<TodoThemeContextType>(
        getThemeTypeFromStorage,
    );

    useEffect((): void => {
        localStorage.setItem('currentTypeTheme', JSON.stringify(themeType));
    }, [themeType]);

    const switchTheme = (type: TodoThemeType): void => {
        setTodoTheme((currentType) => ({
            ...currentType,
            type,
        }));
    };

    const toggleDarkTheme = (themeColorType: ThemeColorType): void => {
        setTodoTheme((currentType) => ({
            ...currentType,
            themeColorType,
        }));
    };

    return (
        <SwitchThemeContext.Provider
            value={{
                themeType,
                switchTheme,
                toggleDarkTheme,
            }}
        >
            {children}
        </SwitchThemeContext.Provider>
    );
};

/* eslint-disable @typescript-eslint/no-unused-vars */
export const ThemeContext = createContext<ITodosThemeContext>({
    todoTheme: lightTheme,
    choiceTheme: (type: TodoThemeType): void => {},
});
/* eslint-enable @typescript-eslint/no-unused-vars */

interface ITodosThemeContext {
    todoTheme: Theme;
    choiceTheme: (type: TodoThemeType) => void;
}
const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const { themeType } = useContext(SwitchThemeContext);

    const systemTheme =
        themeType.themeColorType === 'dark' ? darkTheme : lightTheme;
    const regularTheme = themeType.type === 'DARK' ? darkTheme : lightTheme;

    const [todoTheme, setTodoTheme] = useState<Theme>(
        themeType.type === 'SYSTEM' ? systemTheme : regularTheme,
    );

    const choiceTheme = (type: TodoThemeType): void => {
        const regularTheme = type === 'DARK' ? darkTheme : lightTheme;
        const theme: Theme = type === 'SYSTEM' ? systemTheme : regularTheme;

        setTodoTheme(theme);
    };
    return (
        <ThemeContext.Provider
            value={{
                todoTheme,
                choiceTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const ChoiseThemeProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    return (
        <TodoSwitchThemeContextProvider>
            <ThemeContextProvider>{children}</ThemeContextProvider>
        </TodoSwitchThemeContextProvider>
    );
};
