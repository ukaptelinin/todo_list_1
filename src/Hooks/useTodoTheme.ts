import { useContext } from 'react';
import { ThemeContext } from '../TodosThemeContextProvider/context';
import { Theme } from '@mui/material/styles';

const useTodosTheme = (): Theme => {
    const { todoTheme } = useContext(ThemeContext);
    return todoTheme;
};
export default useTodosTheme;
