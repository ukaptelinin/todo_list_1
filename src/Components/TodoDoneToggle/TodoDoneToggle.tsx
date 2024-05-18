import { FC } from 'react';
import Checkbox from '@mui/material/Checkbox';
import useTodoListStore from '../../Hooks/useTodoListStore';

const TodoDoneToggle:FC<{ id: number, isDone: boolean }> = ({ id, isDone }) => {
    const todoListStore = useTodoListStore();
    const handleToggleDone = (): void => {
        todoListStore.toggleDone(id);
    };

    return (
        <Checkbox
            onChange={handleToggleDone}
            checked={isDone}
        />
    );
};

export default TodoDoneToggle;
