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
import { CURRENT_TYPE_THEME } from '../constants';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const SwitchThemeContext = createContext<ITodosSwitchThemeContext>({
    themeType: 'LIGHT',
    switchTheme: (type: TodoThemeType): void => {},
});
/* eslint-enable @typescript-eslint/no-unused-vars */

export type TodoThemeType = 'SYSTEM' | 'LIGHT' | 'DARK' | undefined;

interface ITodosSwitchThemeContext {
    themeType: TodoThemeType;
    switchTheme: (type: TodoThemeType) => void;
}

const getThemeTypeFromStorage = (): TodoThemeType => {
    const storedTheme = localStorage.getItem(CURRENT_TYPE_THEME);
    if (storedTheme) {
        {
            try {
                return JSON.parse(storedTheme);
            } catch (error) {
                console.error('Error parsing theme from storage', error);
            }
        }
    } else return 'LIGHT';
};

export const TodoSwitchThemeContextProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [themeType, setTodoTheme] = useState<TodoThemeType>(
        getThemeTypeFromStorage,
    );

    useEffect((): void => {
        localStorage.setItem('currentTypeTheme', JSON.stringify(themeType));
    }, [themeType]);

    const switchTheme = (type: TodoThemeType): void => {
        setTodoTheme(type);
    };

    return (
        <SwitchThemeContext.Provider
            value={{
                themeType,
                switchTheme,
            }}
        >
            {children}
        </SwitchThemeContext.Provider>
    );
};

/* eslint-disable @typescript-eslint/no-unused-vars */
export const ThemeContext = createContext<ITodosThemeContext>({
    todoTheme: lightTheme,
});
/* eslint-enable @typescript-eslint/no-unused-vars */

interface ITodosThemeContext {
    todoTheme: Theme;
}
const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const { themeType } = useContext(SwitchThemeContext);

    const preferredTheme = (() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        } else {
            return 'light';
        }
    })();

    const systemTheme = preferredTheme === 'dark' ? darkTheme : lightTheme;
    const regularTheme = themeType === 'DARK' ? darkTheme : lightTheme;

    const [todoTheme, setTodoTheme] = useState<Theme>(
        themeType === 'SYSTEM' ? systemTheme : regularTheme,
    );
    useEffect(() => {
        const newTheme: Theme =
            themeType === 'SYSTEM' ? systemTheme : regularTheme;
        setTodoTheme(newTheme);
    }, [themeType]);

    return (
        <ThemeContext.Provider
            value={{
                todoTheme,
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
