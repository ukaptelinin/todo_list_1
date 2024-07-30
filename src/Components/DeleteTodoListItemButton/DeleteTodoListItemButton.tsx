import { FC } from 'react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import useTodoListStore from '../../Hooks/useTodoListStore';

<<<<<<<< HEAD:src/Components/DeleteListItemButton/DeleteListItemButton.tsx
const DeleteListItemButton: FC<{ id: number }> = ({ id }) => {
========
const DeleteTodoListItemButton: FC<{ id: number }> = ({ id }) => {
>>>>>>>> 060b980d021bdf52d90c17cdf906b7472487949b:src/Components/DeleteTodoListItemButton/DeleteTodoListItemButton.tsx
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

<<<<<<<< HEAD:src/Components/DeleteListItemButton/DeleteListItemButton.tsx
export default DeleteListItemButton;
========
export default DeleteTodoListItemButton;
>>>>>>>> 060b980d021bdf52d90c17cdf906b7472487949b:src/Components/DeleteTodoListItemButton/DeleteTodoListItemButton.tsx
