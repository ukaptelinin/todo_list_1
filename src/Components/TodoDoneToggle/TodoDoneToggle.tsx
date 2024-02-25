import { useContext, FC } from 'react';
import style from './TodoDoneToggle.module.css';
import { TodosStateContext } from '../TodosStateContextProvider/context';

const TodoDoneToggle:FC<{ id: number, isDone: boolean }> = ({ id, isDone }) => {
    const { toggleDone } = useContext(TodosStateContext);
    const handleToggleDone = (): void => {
        toggleDone(id);
    };

    return (
        <input
            className={style.checked}
            onChange={handleToggleDone}
            type="checkbox"
            checked={isDone}
        />
    );
};

export default TodoDoneToggle;
