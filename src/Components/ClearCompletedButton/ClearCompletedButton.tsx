import { FC } from 'react';
import { Button } from '@mui/material';
import useTodoListStore from '../../Hooks/useTodoListStore';

const ClearCompletedButton: FC = () => {
    const todoListStore = useTodoListStore();
    const onClick = (): void => {
        todoListStore.todoClearCompleted();
    };

    return (
        <Button
            variant="contained"
            size="large"
            color="error"
            onClick={onClick}
            sx={{ ml: 5 }}
        >
            Удалить выполненные
        </Button>
    );
};

export default ClearCompletedButton;
