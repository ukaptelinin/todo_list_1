import { FC } from 'react';
import { Button } from '@mui/material';
import useTodoListStore from '../../Hooks/useTodoListStore';

const ClearTodoListComletedButton: FC = () => {
    const todoListStore = useTodoListStore();
    const handleOnClick = (): void => {
        todoListStore.todoClearCompleted();
    };

    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={handleOnClick}
            sx={{ ml: 5 }}
        >
            Clear completed
        </Button>
    );
};

export default ClearTodoListComletedButton;
