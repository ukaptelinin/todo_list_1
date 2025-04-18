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
    themeType: 'light',
    switchTheme: (type: TodoThemeType): void => {},
});
/* eslint-enable @typescript-eslint/no-unused-vars */

export type TodoThemeType = 'system' | 'light' | 'dark';
export type ToggleThemeType = 'light' | 'dark';
interface ITodosSwitchThemeContext {
    themeType: TodoThemeType;
    switchTheme: (type: TodoThemeType) => void;
}

const getThemeTypeFromStorage = (): TodoThemeType => {
    const storedTheme = localStorage.getItem(
        CURRENT_TYPE_THEME,
    ) as TodoThemeType | null;
    if (storedTheme) {
        return storedTheme;
    } else {
        return 'system';
    }
};

export const TodoSwitchThemeContextProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [themeType, setTodoTheme] = useState<TodoThemeType>(
        getThemeTypeFromStorage,
    );

    useEffect((): void => {
        localStorage.setItem('currentTypeTheme', themeType);
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

    const resolveTheme = (toggleValue: TodoThemeType): ToggleThemeType => {
        if (toggleValue !== 'system') return toggleValue;
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    };

    const currentTheme =
        resolveTheme(themeType) === 'dark' ? darkTheme : lightTheme;

    const [todoTheme, setTodoTheme] = useState<Theme>(currentTheme);
    useEffect(() => {
        const newTheme =
            resolveTheme(themeType) === 'dark' ? darkTheme : lightTheme;
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
