import { FC } from 'react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import todoListStore from '../../Stores/store';

const TodoDeleteButton: FC<{ id:number }> = ({ id }) => {
    const handleOnClick = (): void => {
        todoListStore.deleteTodo(id);
    };

    return (

        <IconButton
            onClick={handleOnClick}
        >
            <Delete />
        </IconButton>
    );
};

export default TodoDeleteButton;
