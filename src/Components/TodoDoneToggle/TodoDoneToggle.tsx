import { FC } from 'react';
import Checkbox from '@mui/material/Checkbox';
import todoListStore from '../../Stores/store';

const TodoDoneToggle:FC<{ id: number, isDone: boolean }> = ({ id, isDone }) => {
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
