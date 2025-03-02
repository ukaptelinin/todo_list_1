import { FC } from 'react';
import { Typography } from '@mui/material';
import useTodoListStore from '../../Hooks/useTodoListStore';
import useTodosTheme from '../../Hooks/useTodoTheme';

const TodoHeader: FC = () => {
    const todoListStore = useTodoListStore();
    const todoTheme = useTodosTheme();
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
