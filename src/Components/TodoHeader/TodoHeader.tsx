import { FC, useContext } from 'react';
import { Typography } from '@mui/material';
import useTodoListStore from '../../Hooks/useTodoListStore';
import { ThemeContext } from '../../TodosThemeContextProvider/context';

const TodoHeader: FC = () => {
    const todoListStore = useTodoListStore();
    const { todoTheme } = useContext(ThemeContext);
    return (
        <header>
            <Typography
                variant="h3"
                align="center"
                sx={{ mb: 3, color: todoTheme.palette.info.light }}
            >
                {todoListStore.title}
            </Typography>
        </header>
    );
};

export default TodoHeader;
