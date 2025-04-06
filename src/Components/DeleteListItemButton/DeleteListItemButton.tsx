import { FC } from 'react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import useTodoListStore from '../../Hooks/useTodoListStore';

const DeleteListItemButton: FC<{ id: number }> = ({ id }) => {
    const todoListStore = useTodoListStore();
    const handleOnClick = (): void => {
        todoListStore.deleteTodo(id);
    };

    return (
        <IconButton onClick={handleOnClick} sx={{ padding: 0 }}>
            <Delete />
        </IconButton>
    );
};

export default DeleteListItemButton;
