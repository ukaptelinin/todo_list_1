import { useContext, FC } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { TodosStateContext } from '../TodosStateContextProvider/context';

const TodoDoneToggle:FC<{ id: number, isDone: boolean }> = ({ id, isDone }) => {
    const { toggleDone } = useContext(TodosStateContext);
    const handleToggleDone = (): void => {
        toggleDone(id);
    };

    return (
        <Checkbox
            onChange={handleToggleDone}
            checked={isDone}
        />
    );
};

export default TodoDoneToggle;
