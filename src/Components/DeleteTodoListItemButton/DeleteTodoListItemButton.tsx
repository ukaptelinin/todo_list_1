import { FC } from 'react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import useTodoListStore from '../../Hooks/useTodoListStore';

const DeleteTodoListItemButton: FC<{ id: number }> = ({ id }) => {
    const todoListStore = useTodoListStore();
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

export default DeleteTodoListItemButton;
