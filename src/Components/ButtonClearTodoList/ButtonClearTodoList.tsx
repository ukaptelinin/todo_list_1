import { FC } from 'react';
import { Button } from '@mui/material';
import todoListStore from '../../Stores/store';

const ButtonClearTodoList: FC = () => {
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

export default ButtonClearTodoList;
