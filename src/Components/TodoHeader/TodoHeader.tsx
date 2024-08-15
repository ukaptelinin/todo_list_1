import { FC } from 'react';
import { Typography } from '@mui/material';
import useTodoListStore from '../../Hooks/useTodoListStore';

const TodoHeader: FC = () => {
    const todoListStore = useTodoListStore();

    return (
        <header>
            <Typography variant="h3" align="center" sx={{ mb: 3, color: '#191991' }}>
                {todoListStore.title}
            </Typography>
        </header>
    );
};

export default TodoHeader;
