import { FC } from 'react';
import { Button } from '@mui/material';
import useTodoListStore from '../../Hooks/useTodoListStore';

<<<<<<<< HEAD:src/Components/ClearCompletedButton/ClearCompletedButton.tsx
const ClearCompletedButton: FC = () => {
========
const ClearTodoListComletedButton: FC = () => {
>>>>>>>> 060b980d021bdf52d90c17cdf906b7472487949b:src/Components/ClearTodoListComletedButton/ClearTodoListComletedButton.tsx
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

<<<<<<<< HEAD:src/Components/ClearCompletedButton/ClearCompletedButton.tsx
export default ClearCompletedButton;
========
export default ClearTodoListComletedButton;
>>>>>>>> 060b980d021bdf52d90c17cdf906b7472487949b:src/Components/ClearTodoListComletedButton/ClearTodoListComletedButton.tsx
